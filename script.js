let n1 = window.document.getElementById('nota1')
let n2 = window.document.getElementById('nota2')
let n3 = window.document.getElementById('nota3')
let n4 = window.document.getElementById('nota4')
let n5 = window.document.getElementById('nota5')

let submit = ''

let res = window.document.getElementById('res')


function clicar1() {
    n1.style.background = 'hsl(25, 97%, 53%)'
    n2.style.background = ''
    n3.style.background = ''
    n4.style.background = ''
    n5.style.background = ''

    submit = '1'

}

function clicar2() {
    n1.style.background = ''
    n2.style.background = 'hsl(25, 97%, 53%)'
    n3.style.background = ''
    n4.style.background = ''
    n5.style.background = ''

    submit = '2'
}

function clicar3() {
    n1.style.background = ''
    n2.style.background = ''
    n3.style.background = 'hsl(25, 97%, 53%)'
    n4.style.background = ''
    n5.style.background = ''

    submit = '3'
}

function clicar4() {
    n1.style.background = ''
    n2.style.background = ''
    n3.style.background = ''
    n4.style.background = 'hsl(25, 97%, 53%)'
    n5.style.background = ''

    submit = '4'
}

function clicar5() {
    n1.style.background = ''
    n2.style.background = ''
    n3.style.background = ''
    n4.style.background = ''
    n5.style.background = 'hsl(25, 97%, 53%)'

    submit = '5'
}

function enviar() {
    if (submit === '' || submit == null || submit === undefined) {
        window.alert('Escolha alguma das opções antes de prosseguir!')
    } else {
        window.location.replace('obrigado.html')
        window.localStorage.setItem('submit', `${submit}`)
        
    }


}

submit = window.localStorage.getItem('submit')

res.innerHTML = `Você selecionou ${submit} de 5`
window.localStorage.clear() // Limpar o cache/cookies do navegador

function voltar() {
    window.location.replace('index.html')
}