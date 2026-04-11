const botao = document.getElementsByTagName('button')[0]
const menu = document.getElementsByTagName('nav')[0]

function abreMenu() {
    
    menu.style.zIndex = '0'
    menu.style.opacity = '100'

    botao.removeEventListener('click', abreMenu)
    botao.addEventListener('click', fechaMenu)
}

function fechaMenu() {
    menu.style.zIndex = '-1'
    menu.style.opacity = '0'

    botao.removeEventListener('click', fechaMenu)
    botao.addEventListener('click', abreMenu)
}

botao.addEventListener('click', abreMenu)