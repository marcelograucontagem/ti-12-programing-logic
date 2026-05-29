
const escreva = (texto)=> {
    const body = document.querySelector('body')
    body.innerHTML += texto + '<br/>'
}

let total
let valorProduto = 30
let totalSocios = 64
let lucroIndividual 

total = valorProduto *26
lucroIndividual =  total/totalSocios * 0.3


escreva( 'R$ ' + lucroIndividual)

