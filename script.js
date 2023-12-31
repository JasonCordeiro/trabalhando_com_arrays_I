//  Escreva uma função que recebe um valor do tipo string e com no mínimo 5 caracteres. Insira o valor recebido em um array e retorne o array gerado.

function stringToArray () {
    let arr = [];
        if (stringToArray.length >= 5) {
            arr.push(str);
        }
        return arr;
}

//console.log(stringToArray())


//  Escreva uma função que recebe um valor do tipo number. Use o valor recebido para acessar uma posição do seguinte array:
//  let arr = ["Hermanoteu", "Olonéia", "Migalatéia", "Godart"]⁠
//  Caso a posição exista, retorne o nome que se encontra nela. ⁠Caso não seja acessado nenhuma posição com o valor recebido, ⁠alerte: "Valor não encontrado".

function valorNaoEncontrado(num) {
    let arr = ["Hermanoteu", "Olonéia", "Migalatéia", "Godart"];
    if (num >= 0 && num < arr.length) {
        return arr[num];
    }
    return "Valor não encontrado";
}

//console.log(valorNaoEncontrado())


//  Crie um array de números, contendo os valores de 1 a 10. Crie uma função que recebe um número inteiro.
//  Acesse a posição do array de números usando o valor recebido. Teste se o valor contido na posição é par ou ímpar.
//  Caso seja par retorne: "O valor encontrado nesta posição é par",
//  Caso seja ímpar retorne: "O valor encontrado nesta posição é ímpar".

function verifiqueParImpar (num) {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    if(numeros[num] % 2 ===0) {
        return "O valor encontrado nessa posição é Par!";
    }
    return "O valor encontrado nessa posição é Ímpar!"
}

//console.log(verifiqueParImpar())


//  Dado o array de nomes:
//  let nomes = ["Pedro", "Rafael", "José"]⁠
//  Crie uma função que recebe a lista de nomes como parâmetro. A função deve verificar qual dos nomes da lista tem a maior quantidade de caracteres e retornar o nome.
//  Teste cada posição usando estrutura de repetição, a menos que a lista tenha apenas um valor inserido.
//  Use este formato: "O nome x é o maior da lista";

let nome = ["Pedro", "Rafael", "José"]

function nomeParametro(nome) {
    if(nome.length === 1) {
        return nome[0];
    }
    let parametro = nome[0];

    for(let panda = 1; panda < nome.length; panda++) {
        if(nome[panda].length > parametro.length) {
            parametro = nome[panda];
        }
    }
    return "O nome" + parametro + "é o maior da Lista!";
}

//console.log(nomeParametro(nome))

//  Dado o array de números como exemplo:
//  ⁠numeros = [1,4,6,9,11,8]
//  Escreva uma função que recebe a lista de números como parâmetro. A função deve realizar a soma dos valores das duas últimas posições da lista e armazenar o valor da soma em uma variável.
//  Use a variável para testar se o valor da soma é um múltiplo de 2.
//  Se sim, retorne: "A soma é um múltiplo de 2".
//  Caso contrário: "A soma não é um múltiplo de 2"

let numero = [1,4,6,9,11,8];

function somaMultiDois (numero) {
    let primNumero = numero[numero.length -1];
    let segunNumero = numero[numero.length -2];

    let soma = primNumero + segunNumero;
    if(soma % 2 === 0) {
        return "A soma é um multiplo de 2!"
    }
    return "A soma não é um multiplo de 2!";
}

//console.log(somaMultiDois(numero))

//  Dado o array de nomes como exemplo:
//  let nomes = ["Pedro", "Rafael", "José", "Carla", "Maria", "Josef", "Raquel"]⁠
//  Escreva uma função que recebe como parâmetros a lista de nomes, um nome (string) e um valor inteiro (number) para representar a posição.
//  Acesse a lista na posição que corresponde ao valor inteiro recebido e armazene o valor contido na posição em uma variável.
//  Teste se o nome recebido pela função como parâmetro é o mesmo que o armazenado na variável.
//  Lembre-se de normalizar os dados antes de testar.
//  Caso os valores sejam iguais, retorne: "Acertei".
//  Caso não sejam, retorne: "Não é quem eu pensava"

let nomes = ["Pedro", "Rafael", "José", "Carla", "Maria", "Josef", "Raquel"];

function verificaPosicaoNome (nomes, nome, posicao) {
    let recebeNome = nome.toLowerCase();
    let nome = nomes[posicao].toLowerCase();

    if(recebeNome === nomes) {
        return "Acertei!"
        }
    return "Não é quem eu pensava!"
}

//console.log(verificaPosicaoNome(nomes, "rafael", 1))

//  Dado dois arrays numéricos como exemplo.
//  ⁠let numeros = [1,2,3,4,5,6,10,7]
//  let outrosNumeros = [5,7,9,4,2,3,9]
//  Escreva uma função que recebe as duas listas de números como parâmetro. A função deve conseguir identificar qual dos dois arrays é o maior.
//  Após identificar o maior array, retorne o último elemento do array.
//  Use este formato: "A maior lista é a lista cujo último número é: x"

let numeros = [1,2,3,4,5,6,10,7];
let outrosNumeros = [5,7,9,4,2,3,9];

function maiorArray( arr1, arr2) {

    let maiorArrayUm = arr1[arr1.length -1];
    let maiorArrayDois = arr2[arr2.length -2];

    if (arr1.length > arr2.length){
        return "A maior lista é a lista cujo o ultimo número é: " + maiorArrayUm;
    }
    return "A maior lista é a lista cujo o ultimo número é: " + maiorArrayDois;
}

console.log(maiorArray(numeros, outrosNumeros))