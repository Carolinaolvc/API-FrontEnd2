function DadosContato() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value
    let mensagem = document.getElementById("mensagem").value;

    let dados = {nome: nome, email: email, mensagem: mensagem};

    console.log(dados)

    inserirMensagem(dados)
        alert('Mensagem enviada com sucesso! :) ')
    
    document.getElementById('form-contato').reset();

}