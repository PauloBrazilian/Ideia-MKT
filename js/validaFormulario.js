// PEGA OS ELEMENTOS HTML
const FORM = document.getElementById('form');
// const BTN_ENVIAR = document.getElementById('btnEnviar');
const INPUT_NOME = document.getElementById('name');
const INPUT_EMAIL = document.getElementById('email');
const INPUT_TEL = document.getElementById('telefone');
const INPUT_ASSUNTO = document.getElementById('assunto');
const TEXT_AREA_MESSAGE = document.getElementById('message');

// ADICIONA EVENTO AO BOTÃO ENVIAR PARA VERIFICAR SE OS CAMPOS OBRIGATÓRIOS FORAM PREENCHIDOS
// TRIM() REMOVE O ESPAÇO EM BRANCO ANTES E DEPOIS DO TEXTO NO INPUT
FORM.addEventListener('submit', (evento) => {
    evento.preventDefault();
    verificaInputs();
});

function verificaInputs() {
    const NOME_VALUE = INPUT_NOME.value;
    const EMAIL_VALUE = INPUT_EMAIL.value.trim();
    const TELEFONE_VALUE = INPUT_TEL.value.trim();
    const ASSUNTO_VALUE = INPUT_ASSUNTO.value;
    const MENSAGEM_VALUE = TEXT_AREA_MESSAGE.value;

    // FAZ A VERIFICAÇÃO DOS INPUTs
    // MOSTRA O ERRO
    // ADICIONA A CLASSE NA DIV REFERENTE AO INPUT
    if (NOME_VALUE === '') {
        validarErro(INPUT_NOME, 'É necessário preencher seu nome!');
    }
    if (EMAIL_VALUE === '') {
        validarErro(INPUT_EMAIL, 'É necessário preencher seu e-mail!');
    }
    if (TELEFONE_VALUE === '') {
        validarErro(INPUT_TEL, 'É necessário preencher seu telefone para contato!');
    }
    if (ASSUNTO_VALUE === '') {
        validarErro(INPUT_ASSUNTO, 'É necessário preencher o campo com o assunto a ser tratado!');
    }
    if (MENSAGEM_VALUE === '') {
        validarErro(TEXT_AREA_MESSAGE, 'Por gentileza, preencha o campo de texto.');
    }
};

// REATRIBUI O NOME DA CLASSE À DIV PAI DOS INPUTS E REESCREVE A MENSAGEM DE ERRO NO SMALL
function validarErro(input, message) {
    const formControl = input.parentElement;
    const insereMensagem = formControl.querySelector('small');

    formControl.className = 'formControl error';
    insereMensagem.innerText = message;
};