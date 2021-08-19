const estados = document.querySelector("#estados");
let arrayEstados = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato rosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];
let arraySiglasEstados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RO', 'RS', 'RR', 'SC', 'SE', 'SP', 'TO'];

function criandoSelectEstados (arrayEstados, arraySiglasEstados) {
    for (let index = 0; index < arrayEstados.length; index += 1) {
        let estadoAtual = document.createElement("option");
        estadoAtual.innerText = arrayEstados[index];
        estadoAtual.value = arraySiglasEstados[index];
        estados.appendChild(estadoAtual);
    }
}
criandoSelectEstados(arrayEstados, arraySiglasEstados);