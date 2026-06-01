const leia = ()=> {
    const terminal = document.querySelector('#terminal')
    let valor = terminal.value
    terminal.value = ""
    return valor
}
const escreva = (texto) => {
    const visor = document.querySelector('.visor')
    visor.innerHTML += texto + '<br/>'
}
window.addEventListener('keydown', (event)=> {
     if(event.code === 'Enter'){
        escreva(leia())
     }
})


