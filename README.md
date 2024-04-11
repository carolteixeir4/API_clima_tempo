# WeatherWise - Consulta de Clima

Este projeto consiste em uma aplicação web para consultar o clima de uma cidade. Os usuários podem inserir o nome da cidade desejada e receber informações meteorológicas relevantes.

## Estrutura do Projeto

O projeto é composto por um arquivo HTML, um arquivo CSS e um arquivo JavaScript.

- **HTML (index.html)**: Contém a estrutura da página da web, incluindo o cabeçalho, formulário de consulta de cidade e seção para exibição dos resultados do clima.

- **CSS (style.css)**: Arquivo de folha de estilos responsável pela aparência e formatação da página da web. Reseta o padrão e as definições globais, o código inclui um reset padrão para remover o espaçamento e margens padrão dos elementos HTML; Define o modelo de caixa como "border-box" para facilitar o dimensionamento dos elementos; Especifica uma fonte padrão para todo o documento. Além disso, define os estilos do video de fundo, corpo da página, barra de navegação, seção principal (campo de entrada), resultado do clima, responsividade.

- **JavaScript (app.js)**: Arquivo responsável por manipular a interatividade da página, como enviar solicitações para obter os dados do clima e exibir os resultados na página.
   Este script utiliza o Express.js para criar um servidor que fornece dados meteorológicos utilizando a API do OpenWeatherMap. Ele expõe uma rota GET para consulta desses dados.
   Requer o módulo 'express' para criar o servidor, 'axios' para fazer requisições HTTP, 'path' para manipulação de caminhos de arquivos, 'cors' para lidar com política de mesma origem e
   um arquivo de configuração 'config.json' contendo a chave de API do OpenWeatherMap.
             **(script,js)**: O script é responsável por lidar com o envio do formulário de pesquisa de cidade. Quando o formulário é enviado, o script captura o valor inserido no campo de entrada, faz uma requisição para o servidor local com esse valor e, em seguida, atualiza a página com os dados meteorológicos recebidos.
Se houver um erro durante o processo de requisição ou se os dados não forem recebidos corretamente, uma mensagem de erro é exibida
      - O script depende da presença de uma API local que forneça dados meteorológicos com base no nome da cidade fornecido na requisição.
      - Certifique-se de que o servidor local esteja em execução e acessível pelo endereço especificado no script.

- **Funcionalidades**
Consulta de Clima: Os usuários podem inserir o nome da cidade em um formulário e clicar no botão "Consultar" para obter informações sobre o clima atual da cidade.
Exibição dos Resultados do Clima: Os resultados da consulta de clima são exibidos na página, incluindo temperatura, umidade, velocidade do vento e ícone representativo do clima.

![image](https://github.com/carolteixeir4/API_clima_tempo/assets/146020001/fb98e05d-1ca3-4c51-9982-49da49484525)
