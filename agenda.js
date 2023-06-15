const form = document.querySelector('#formularioAgenda')

const nome = []
const sobrenome = []
const telefone = []

let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionarLinhas()
    atualizarAgenda()

})


function adicionarLinhas(){
    const inputNome = document.querySelector('#nome')
    const inputSobrenome = document.querySelector('#sobrenome')
    const inputTel = document.querySelector('#tel')

    if(telefone.includes(inputTel.value)){
        alert('Número de telefone já consta na agenda!')
    }else{
        nome.push(inputNome.value)
        sobrenome.push(inputSobrenome.value)
        telefone.push(inputTel.value)

        let linha = '<tr>'
        linha += `<td> ${inputNome.value} </td>`
        linha += `<td> ${inputSobrenome.value} </td>`
        linha += `<td> ${inputTel.value} </td>`
        linha += '</tr>'

        linhas += linha
    }

    inputNome.value = ''
    inputSobrenome.value = ''
    inputTel.value = ''



}

function atualizarAgenda(){
    const agenda = document.querySelector('tbody')
    agenda.innerHTML = linhas


}
