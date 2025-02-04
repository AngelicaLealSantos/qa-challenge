//Parte 1: Automação de UI com Playwright

import { test, expect } from '@playwright/test';

test('Login no sistema', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    
    // Login correto para o teste
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');
    await page.waitForSelector('#react-burger-menu-btn');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('.title')).toHaveText('Products');
   
    // Fase do logout para o teste
    await page.click('#react-burger-menu-btn');
    await page.waitForSelector('#logout_sidebar_link'); 
    await page.click('#logout_sidebar_link');

    // Login incorreto para o teste
    await page.fill('[data-test="username"]', 'usuario_incorreto');
    await page.fill('[data-test="password"]', 'senha_incorreta');
    await page.click('[data-test="login-button"]');
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface');
});

test('2.Adicionar e remover produtos do carrinho', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    
    // Login
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    // Adicionar produtos
    await page.waitForSelector('#add-to-cart-sauce-labs-backpack');
    await page.waitForSelector('#add-to-cart-sauce-labs-bike-light');
    await page.waitForSelector('#add-to-cart-sauce-labs-bolt-t-shirt');
    
    // Adiciona os produtos
    await page.click('#add-to-cart-sauce-labs-backpack');
    await page.click('#add-to-cart-sauce-labs-bike-light');
    await page.click('#add-to-cart-sauce-labs-bolt-t-shirt');
    
    // Remover produtos
    await page.click('#remove-sauce-labs-backpack');
    await page.click('#remove-sauce-labs-bike-light');

    // Validar produtos restantes
    const itemNames = await page.locator('.inventory_item_name').allTextContents();
    expect(itemNames).toContain('Sauce Labs Bolt T-Shirt');

    // Validar contador do carrinho
    const cartBadge = page.locator('.shopping_cart_badge');
    await expect(cartBadge).toHaveText('1');
});

test('Simulação de erro na finalização da compra', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    // Login
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    // Adicionar um produto ao carrinho
    await page.click('#add-to-cart-sauce-labs-backpack');
    await page.click('.shopping_cart_link');
    await page.click('#checkout');

    // Tentar continuar sem preencher os dados obrigatórios
    await page.click('#continue');
    await expect(page.locator('[data-test="error"]')).toBeVisible();// Verifica se a mensagem de erro é visível
});