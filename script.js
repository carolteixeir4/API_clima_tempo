document
  .getElementById("formClima")
  .addEventListener("submit", function (event) {
 // Impede o comportamento padrão do formulário de ser enviado
    event.preventDefault();

      // Obtém o valor inserido no campo de entrada com o id "cityInput"
    const city = document.getElementById("cityInput").value;
      // Formata o nome da cidade para capitalizar a primeira letra
    const cidadeFormatada = city.charAt(0).toUpperCase() + city.slice(1);

      // Faz uma requisição para o servidor local usando o nome da cidade
    fetch(`http://localhost:3000/climatempo/${city}`)
      .then((response) => response.json()) // Converte a resposta para JSON
      .then((data) => {
        const tempoResult = document.getElementById("climaResult");

       // Define o estilo de exibição do resultado do clima como "block" para torná-lo visível
        document.getElementById("climaResult").style.display = "block";

        // Verifica se os dados de temperatura foram recebidos com sucesso
        if (data.Temperatura) {
          // Atualiza o conteúdo do elemento "climaResult" com os dados recebidos
          tempoResult.innerHTML = `
            
          <div class="clima-city-name">
          <i class="ph-fill ph-map-pin" id="pin_map"></i>
          <p id="cityResult">${cidadeFormatada}</p>
          <img src="${data.Flag}" class="flag-city">
        </div>
        <div class="clima-city-temp">
          <i class="ph ph-thermometer-simple"></i>
          <p id="tempResult">${data.Temperatura}ºC</p>
        </div>
        <div class="clima-city-icon">
          <p id="climaDescriptionResult">${data.Clima}</p>
          <img src="${data.Icone}">
        </div>
        <div class="clima-city-bot">
          <div class="clima-city-umidade">
            <i class="ph ph-drop"></i>
            <p id="umidadeResult">${data.Umidade}%</p>
          </div>
          <p class="espacamento">|</p>
          <div class="clima-city-vento">
            <i class="ph ph-wind"></i>
            <p id="ventoResult">${data.VelocidadeDoVento} m/s</p>
          </div>
          </div>
        
            `;
        } else {
        // Se houver um erro ao obter os dados meteorológicos, exibe uma mensagem de erro
          tempoResult.innerHTML = "Erro ao obter dados metereológicos!";
        }
      });
  });
