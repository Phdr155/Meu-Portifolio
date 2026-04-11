const botao = document.getElementsByTagName('button')[0]
const menu = document.getElementsByTagName('nav')[0]
const botaoLight = document.getElementById('light')

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
botaoLight.addEventListener('click', () => {
    if (botaoLight.checked == true) {
        document.documentElement.style.setProperty('--cor-fundo', '#0e1014')
        document.documentElement.style.setProperty('--cor-fundoMenu', '#808080f1')
        document.documentElement.style.setProperty('--cor-fonte', '#fff')
    } else {
        document.documentElement.style.setProperty('--cor-fundo', '#fff')
        document.documentElement.style.setProperty('--cor-fundo', '#d3d3d3ea')
        document.documentElement.style.setProperty('--cor-fonte', '#0e1014')
    }
})