# WeatherWise - Consulta de Clima

Este projeto consiste em uma aplicação web para consultar o clima de uma cidade. Os usuários podem inserir o nome da cidade desejada e receber informações meteorológicas relevantes.

## Estrutura do Projeto

O projeto é composto por um arquivo HTML, um arquivo CSS e um arquivo JavaScript.

- **HTML (index.html)**: Contém a estrutura da página da web, incluindo o cabeçalho, formulário de consulta de cidade e seção para exibição dos resultados do clima.

- **CSS (style.css)**: Arquivo de folha de estilos responsável pela aparência e formatação da página da web.

- **JavaScript (app.js)**: Arquivo responsável por manipular a interatividade da página, como enviar solicitações para obter os dados do clima e exibir os resultados na página.
   Este script utiliza o Express.js para criar um servidor que fornece dados meteorológicos utilizando a API do OpenWeatherMap. Ele expõe uma rota GET para consulta desses dados.
   Requer o módulo 'express' para criar o servidor, 'axios' para fazer requisições HTTP, 'path' para manipulação de caminhos de arquivos, 'cors' para lidar com política de mesma origem e
   um arquivo de configuração 'config.json' contendo a chave de API do OpenWeatherMap.

- **Funcionalidades**
Consulta de Clima: Os usuários podem inserir o nome da cidade em um formulário e clicar no botão "Consultar" para obter informações sobre o clima atual da cidade.
Exibição dos Resultados do Clima: Os resultados da consulta de clima são exibidos na página, incluindo temperatura, umidade, velocidade do vento e ícone representativo do clima.

![image](https://github.com/carolteixeir4/API_clima_tempo/assets/146020001/fb98e05d-1ca3-4c51-9982-49da49484525)
