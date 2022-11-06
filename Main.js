const form = document.getElementById('form');
const form1 = document.getElementById('form1');
const formVerNome = document.getElementById('formVerNome');
const formGerarId = document.getElementById('formGerarId')
const formIdade = document.getElementById('formIdade')
const formMedia = document.getElementById('formMedia')
const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');
const inputIdade = document.getElementById('idade');
const inputProfissao = document.getElementById('profissao');
const inputTelefone = document.getElementById('telefone');
const inputPesquisa = document.getElementById('nome1');

const vetor = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const dataAtual = new Date()
    vetor.push(
        {
            nome: inputNome.value,
            email: inputEmail.value,
            idade: inputIdade.value,
            profissao: inputProfissao.value,
            telefone: inputTelefone.value,
            dataDePreenchimento: dataAtual.toLocaleDateString()
        }
    );
    alert(JSON.stringify(vetor));
})
form1.addEventListener('submit', (event) => {
    event.preventDefault();
    alert(JSON.stringify(pesquisa(inputPesquisa.value)))
})
formVerNome.addEventListener('submit', (event) => {
    event.preventDefault();
    alert(nomes())
})
formGerarId.addEventListener('submit', (event) => {
    event.preventDefault();
    geraId()
    alert(JSON.stringify(vetor))
})
formIdade.addEventListener('submit', (event) => {
    event.preventDefault();
    alert(JSON.stringify(idade()))
})
formMedia.addEventListener('submit', (event) => {
    event.preventDefault();
    alert(JSON.stringify(media()))
})

function pesquisa(name) {
    return vetor.filter(pessoa => pessoa.nome === name);
}

function nomes() {
    return vetor.map(pessoa => pessoa.nome.split(' ')[0]);
}

function geraId() {
    let id = 0;
    vetor.forEach(pessoa => { pessoa.id = id, id++ });
}

function idade() {
    return vetor.filter(pessoa => pessoa.idade >= 18);
}

function media() {
    let soma = 0;
    let tamanho = 0;
    vetor.forEach(pessoa => {
        soma = soma + parseInt(pessoa.idade)
    })
    return soma / vetor.length;
}