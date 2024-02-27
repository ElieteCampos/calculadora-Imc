/*
    calculo IMC

    RESULTADO DO CALCULO   |  RESULTADO PARA USUARIO
    Abaixo de 17           |   Muito abaixo do peso
    Entre 17 e 18,49       |   Abaixo do peso
    Entre 18,50 e 24,99    |   Peso normal
    Entre 25 e 29,99       |   Acima do peso
    Entre 30 e 34,99       |   Obesidade I
    Entre 35 e  39,99      |   Obesidade II

    OBS: Se você pratica alguma atividade fisica, musculaçao e etc o ideal é fazer a Bioimpedância
    com uma nutricionista funcional, pois com esse exame vai lhe dar a taxa exata quanto voce tem de massa magra
    (musculo) e quanto você tem de massa magra ( gordura), e ver se esta com peso ideal. Neste caso o IMC não é indicado
    pois dará um resultado falso.
*/

const peso = 50;
const altura = 1.55;
const imc = Number((peso / (altura * altura)).toFixed(2));

console.log (typeof imc);

switch (true) {
    case imc < 17:
        console.log("muito abaixo do peso");
        break;

        case imc >= 17 && imc <= 18.49:
        console.log("abaixo do peso");
        break;

        case imc >= 18.5 && imc <= 24.99:
        console.log("Peso normal");
        break;

        case imc >= 25 && imc <= 29.99:
        console.log("acima do peso");
        break;

        case imc >= 30 && imc <= 34.99:
        console.log("Obesidade I");
        break;

        case imc >= 35 && imc <= 39.99:
        console.log("Obesidade II");
        break;
        
    default:
        break;
}