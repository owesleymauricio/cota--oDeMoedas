function mostrarResultado(){
    //obtendo a moeda selecionada
    var moedaSelecionada = document.getElementById("moeda").value;

    // Fazendo uma requisição HTTP para a API do ExchangeRate-API
    fetch("https://v6.exchangerate-api.com/v6/b24f21e0369b69e87dd90225/latest/BRL")
        .then(response => response.json())
        .then(data => {
             // Acessando a taxa de conversão da moeda selecionada nos dados retornados pela API
            var cotacao = data.conversion_rates[moedaSelecionada];
            var resultado = "A cotação de 1 Real (BRL) para " + moedaSelecionada + " é: " + cotacao;
            //exibindo os resultados
            document.getElementById("resultado").textContent = resultado;
        })
        .catch(error => {
            console.log(error);
        });
}

