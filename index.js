//Função para saber o saldo total do jogador
function calcSaldo(vitoria, derrota){
    return vitoria-derrota
};

//Dados do jogador
let rankeado = calcSaldo(101, 50)
let nivelRanking = ""

//Analisa o saldo total e atribui o jogador ao nível correspondente
if(rankeado <= 0){
    nivelRanking = "Não Classificado"
} else if(rankeado > 0 & rankeado <= 10){
    nivelRanking = "Ferro"
} else if(rankeado > 10 & rankeado <= 20){
    nivelRanking = "Bronze"
} else if(rankeado > 20 & rankeado <= 50){
    nivelRanking = "Prata"
} else if(rankeado > 50 & rankeado <= 80){
    nivelRanking = "Ouro"
} else if(rankeado > 80 & rankeado <= 90){
    nivelRanking = "Diamnte"
} else if(rankeado > 90 & rankeado <= 100){
    nivelRanking = "Lendário"
} else if(rankeado > 100){
    nivelRanking = "Imortal"
};

//Mensagem de saída
console.log(`O Herói tem salde de ${rankeado} e está no nível de ${nivelRanking}`);