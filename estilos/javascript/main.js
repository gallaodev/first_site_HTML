var nome = null
var result = null
var result = window.confirm("Voce quer entrar ?") //Botao ok e nao ok
 window.alert(`Voce escolheu ${result}`)
var nome = window.prompt("Qual o seu nome?") //Botao para pegar o nome
if ( nome === 'gallao'){ 
    window.alert('Voce tem permissao, e voce esta entrando no meu site, ' + nome + '!') //Cria uma mensagem em um box na tela
    var num1 = Number.parseInt(window.prompt('Vamos somar numeros, aperte um numero'))
    var num2 = Number(window.prompt('Aperte outro numero'))
    var s = num1 + num2
    window.alert(`A soma dos numeros ${num1} e ${num2} é: ${s} e seu nome tem ${nome.length} letras ${nome. toUpperCase()} `)
}
else { window.alert("Voce nao tem permissao!")
       window.location.href = ("http://pudim.com.br/")
}