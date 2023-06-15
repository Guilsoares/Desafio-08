//Data e Hora
let data = new Date()
let dia_m = data.getDate()
let dia_s = data.getDay()
let mes = data.getMonth()
const weekname = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
const monthName = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
let dia_semana = weekname[dia_s]
let mesAtual = monthName[mes]

// Busca de Elementos No HTML
let horas = document.querySelector('#hora')
let day = document.querySelector('#dia-m')
let nomeDia = document.querySelector('#dia-s')
let nomeMes = document.querySelector('#mes')

//Testes
console.log(mes)


// Rodando no HTML
day.innerHTML = dia_m
nomeDia.innerHTML = dia_semana
nomeMes.innerHTML = mesAtual