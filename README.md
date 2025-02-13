# Desafio QA - Niuco

Este projeto contém testes automatizados de interface do usuário e API para o desafio QA da Niuco.

## Tecnologias Utilizadas

* Playwright
* TypeScript
* GitHub Actions

## Como Executar os Testes

1. Clone este repositório: git clone https://github.com/AngelicaLealSantos/qa-challenge.git
2. Instale as dependências: `npm install`
3. Execute os testes de UI: `npm run test:ui`
4. Execute os testes de API: `npm run test:api`

## Relatórios de Testes

Os relatórios HTML dos testes serão gerados na pasta `html-report`.

* Resumo do Desafio de QA Challenge 

-> O projeto niuco foi criado, o diretório qa-challenge foi clonado do GitHub, e as dependências foram instaladas.
-> O Playwright e o TypeScript foram instalados 

-> Via CMD
git clone https://github.com/niuco/qa-challenge.git 
cd qa-challenge

node --version
npm --version

npm install -g playwright
npx playwright test
npm install -g typescript

-> Via terminal do VSCODE
npm install
npm run test:ui
npm run test:api
npx playwright show-report


-> Criação de Arquivos:
Os arquivos de teste (reqres.spec.ts e swaglabs.spec.ts), configuração do Playwright (playwright.config.ts), configuração do TypeScript (tsconfig.json), 
definição de pacotes (package.json) e o arquivo de CI (ci.yml) foram criados.

-> Execução de Testes: Os testes foram executados via terminal com os comandos 
npm install, 
npm run test:ui e 
npm run test:api.

-> Testes de UI: Os testes de interface do usuário foram implementados para o site Saucedemo, cobrindo login, adição/remoção de produtos 
e simulação de erro na finalização da compra.

-> Testes de API: Os testes de API foram implementados para a API ReqRes, validando a lista de usuários.


-> site do e-commerce 

https://www.saucedemo.com/
Usuário :standard_user
Senha :secret_sauce

-> API pública de simulação 
https://reqres.in/


* Finalizando o resumo:
-> Parte 1: Automação de UI com Playwright
Os seletores utilizados foram utilizados [data-test]
Os cenários de teste cobrem os fluxos principais e os cenários adicionais, conforme solicitado.
O tratamento de erros está presente, verificando mensagens de erro e elementos visíveis.
A configuração para execução paralela está presente no arquivo [playwright.config.ts]

* Melhorias observadas:
Criar funções ou classes para ações repetidas, como login, para melhorar a organização e a manutenção do código.
Adicionar asserções mais específicas, como verificar o nome dos produtos adicionados ao carrinho, para aumentar a cobertura dos testes.

-> Parte 2: Testes de API com Playwright
Os testes validam os dados dos usuários, como [id, first_name, last_name e email]
O código verifica o status da resposta da API (200).

* Melhorias observadas:

É possível implementar os testes para criar e atualizar usuários.
Implementar testes para simular falhas na API, como exclusão de usuário inexistente e simulação de falha de rede.
Validar o formato do email utilizando uma expressão regular para garantir a integridade dos dados.
Adicionar testes para validar se os tempos de resposta da API estão dentro de limites aceitáveis.

* Melhorias Técnicas
A geração de relatórios HTML foi configurado no arquivo [playwright.config.ts]
A execução paralela está configurada para rodar múltiplos workers localmente e 1 worker no CI.
O arquivo [ci.yml] foi criado para configurar o pipeline de CI/CD no GitHub Actions.

## Desenvolvedora
Angélica Leal Santos
