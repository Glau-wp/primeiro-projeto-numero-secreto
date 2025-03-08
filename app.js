alert ('Boas Vindas ao Jogo do Número Secreto!');
let numeroMaximo = 5000;
let numeroSecreto = parseInt (Math.random() * numeroMaximo +1 );
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto o chute não for igual ao numero secreto
while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    if (chute == numeroSecreto) {
        //para! não continua
        break;
    } else {
        if (chute > numeroSecreto) {
            alert (`o número secreto é menor que ${chute}`);
        } else {
            alert(`o número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;      
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' //operador ternario
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);


//if (tentativas > 1) {
//alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`); //{tentativas} é em numero
//} else {
  //  alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`); //{tentativas} é em numero


//}
