let estadoProcesso = "espera";

switch (estadoProcesso){
    case "aprovada":
        console.log("Parabéns, você foi aprovada(o)!");
        break;
    
    case "lista":
        console.log("Você está na nossa lista de espera.");
        break;
    
    case "reprovada":
        console.log("Você foi reprovado(a).")
        break;

    default:
        console.log("Não se aplica.");
}