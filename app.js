/**
 * Este script Node.js utiliza o Express.js para criar um servidor que fornece dados meteorológicos
 * utilizando a API do OpenWeatherMap. Ele expõe uma rota GET para consulta desses dados.
 * Requer o módulo 'express' para criar o servidor, 'axios' para fazer requisições HTTP,
 * 'path' para manipulação de caminhos de arquivos, 'cors' para lidar com política de mesma origem e
 * um arquivo de configuração 'config.json' contendo a chave de API do OpenWeatherMap.
 */
// Importação de módulos
const express = require("express"); // Importando o módulo express para criar o servidor
const axios = require("axios"); // Importando o módulo axios para fazer requisições HTTP
const path = require("path"); // Importando o módulo path para manipulação de caminhos de arquivos
const cors = require("cors"); // Importa o módulo cors para lidar com política de mesma origem
const config = require("./config.json"); // Importa o arquivo de configuração
const apikey = config.apikey; // Armazena a chave de API do OpenWeatherMap

// Cria uma instância do servidor Express
const app = express();
// Define o servidor para escutar na porta 3000
app.listen(3000);

// Aplica middleware para permitir requisições de origens diferentes
app.use(cors());
// Aplica middleware para fazer o parsing do corpo da requisição como JSON
app.use(express.json());
// Aplica middleware para servir arquivos estáticos na pasta 'public'
app.use(express.static(path.join(__dirname, "public")));

// Define uma rota GET '/climatempo/:cidade' para consultar dados meteorológicos
app.get("/climatempo/:cidade", async (req, res) => {
  const city = req.params.cidade;  // Obtém o parâmetro 'cidade' da URL

  try {
    // Faz uma requisição GET para a API do OpenWeatherMap para obter os dados meteorológicos da cidade
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&appid=${apikey}&units=metric`
    );

    // Se a resposta da requisição for bem-sucedida (código de status 200)
    if (response.status === 200) {
      // Extrai informações relevantes da resposta e formata-as
      const clima = response.data.weather[0].description;
      const climaFormatado = clima.charAt(0).toUpperCase() + clima.slice(1);
      const icon = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`;
      const flag = `https://flagsapi.com/${response.data.sys.country}/flat/64.png`;

      // Cria um objeto com os dados meteorológicos formatados
      const watherData = {
        Temperatura: response.data.main.temp_min,
        Umidade: response.data.main.humidity,
        VelocidadeDoVento: response.data.wind.speed,
        Clima: climaFormatado,
        Icone: icon,
        Flag: flag,
      };

      // Envia os dados meteorológicos como resposta da requisição
      res.send(watherData);
    } else {
      // Se a resposta da requisição não for bem-sucedida, envia uma mensagem de erro com o código de status correspondente
      res
        .status(response.status)
        .send({ erro: "Erro ao obter dados metereológicos" });
    }
  } catch (error) {
    // Se ocorrer um erro durante a requisição, envia uma mensagem de erro com o código de status 500 e o erro detalhado
    res.status(500).send({ erro: "Erro ao obter dados metereológicos", error });
  }
});
