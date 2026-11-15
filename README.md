# Consulta de CEPs

## Sobre o projeto

Este projeto consiste em uma aplicação web para consulta de Códigos de Endereçamento Postal (CEPs), utilizando a API ViaCEP para buscar e apresentar informações de endereço de forma rápida e simples.

O usuário pode informar um CEP com ou sem hífen, e o sistema retorna automaticamente os dados correspondentes.

## Funcionalidades

- Consulta de CEPs utilizando a API ViaCEP.
- Aceita CEP com ou sem hífen.
- Validação da quantidade de dígitos informados.
- Identificação de CEPs inválidos.
- Identificação de CEPs não encontrados.
- Exibição automática das informações do endereço.
- Tratamento de erros durante a consulta.

## Informações retornadas

Após uma consulta válida, o sistema apresenta:

- CEP;
- Logradouro;
- Bairro;
- Cidade;
- UF (Estado);
- Código do IBGE.

## Tecnologias utilizadas

- **HTML5:** estruturação da página.
- **CSS3:** estilização e organização dos elementos visuais.
- **JavaScript:** validação dos dados, processamento das consultas e manipulação da página.
- **API ViaCEP:** serviço externo utilizado para consultar os dados dos CEPs.

## Como executar o projeto

1. Faça o download ou clone o repositório.
2. Abra a pasta do projeto no Visual Studio Code.
3. Abra o arquivo HTML principal.
4. Execute a página utilizando o navegador ou a extensão Live Server.
5. Digite um CEP válido no campo de pesquisa.
6. Pressione Enter para realizar a consulta.

**Observação:** é necessário ter conexão com a internet para acessar a API ViaCEP.

## API utilizada

O projeto utiliza a API pública ViaCEP.

Documentação: https://viacep.com.br/

Exemplo de consulta:

https://viacep.com.br/ws/12328070/json/

## Validação do CEP

O sistema aceita dois formatos de entrada:

- Com hífen: `12328-070`
- Sem hífen: `12328070`

A consulta somente é realizada quando o CEP apresenta exatamente 8 dígitos numéricos.

## Objetivo

Desenvolver uma aplicação web que permita realizar consultas de CEP de maneira intuitiva, aplicando conhecimentos de desenvolvimento front-end, manipulação do DOM, validação de formulários, consumo de APIs e tratamento de erros.
