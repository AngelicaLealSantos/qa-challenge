/*
------------------------------------------------------------------
Teste: QA Developer
Nome: Angélica Leal Santos
Data de entrega: 03/02/2025
------------------------------------------------------------------
*/

//Parte 2: Testes de API com Playwright

import { test, expect } from '@playwright/test';

test('Deve retornar a lista de usuários', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users?page=2');
    expect(response.status()).toBe(200);// Valida se o status da resposta é 200
    
    const responseBody = await response.json();
    expect(responseBody.data).toBeDefined();
    expect(Array.isArray(responseBody.data)).toBe(true);
    
    responseBody.data.forEach((user: any) => {
        expect(user).toHaveProperty('id');
        expect(user).toHaveProperty('first_name');
        expect(user).toHaveProperty('last_name');
        expect(user).toHaveProperty('email');
    });
});