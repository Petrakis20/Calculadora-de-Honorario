var regimeTributario = 'Simples Nacional';
var atividadeEconomica = 'Comércio Varejista';
var beneficioFiscal = 'Não Possuo';
var licitacao = 'Sim';

const atvIndustria = 1818.00;
const rioLog = 2424.00;
const cartilhaModa = 1818.00;
const compete = 2424.00;
const leiInd = 2424.00;
const farmacos = 1818.00;
const outrosF = 1818.00;
const licitacaoS = 1818.00;

//Identificando o Regime Tributário
function conferirRegimeTributario() {
    if(regimeTributario == 'Lucro Presumido'){
        regimeTributario = 'Lucro Presumido';
    }
    else if(regimeTributario == 'Lucro Real'){
        regimeTributario = 'Lucro Real';
    }
    else if (regimeTributario == 'Simples Nacional') {
        regimeTributario = 'Simples Nacional';
    }
}

//Identificando o Atividade Econômica
function conferirAtividadeEconomica() {
    if(atividadeEconomica == 'Indústria'){
        atividadeEconomica = atvIndustria;
        return atividadeEconomica;
    }
    else if(atividadeEconomica == 'Comércio Varejista'){
        atividadeEconomica = 0;
        return atividadeEconomica;
    }
    else if (atividadeEconomica == 'Comércio Atacadista') {
        atividadeEconomica = 0;
       return atividadeEconomica;
    }
    else if (atividadeEconomica == 'Prestação de Serviços') {
        atividadeEconomica = 0;
       return atividadeEconomica;
    }
}

//Identificando o Benefício Fiscal
function conferirBeneficioFiscal() {
    if(beneficioFiscal == 'Rio Log'){
        beneficioFiscal = rioLog;
        return beneficioFiscal;
    }
    else if(beneficioFiscal == 'Cartilha da Moda'){
        beneficioFiscal = cartilhaModa;
        return beneficioFiscal;
    }
    else if (beneficioFiscal == 'Compete') {
        beneficioFiscal = compete;
        return beneficioFiscal;
    }
    else if (beneficioFiscal == 'Lei 6979 (Indústria)') {
        beneficioFiscal = leiInd;
        return beneficioFiscal;
    }
    else if (beneficioFiscal == 'Fármacos') {
        beneficioFiscal = farmacos;
        return beneficioFiscal;
    }
    else if (beneficioFiscal == 'Outros') {
        beneficioFiscal = outrosF;
        return beneficioFiscal;
    }
    else if (beneficioFiscal == 'Não Possuo') {
        beneficioFiscal = 0;
        return beneficioFiscal;
    }
}

//Identificando o Regime Tributário
function conferirLicitacao() {
    if(licitacao == 'Sim'){
        licitacao = licitacaoS;
        return licitacao;
    }
    else if(licitacao == 'Não'){
        licitacao = 0;
        return licitacao;
    }
}

//Chamando as funções
conferirRegimeTributario();
conferirAtividadeEconomica();
conferirBeneficioFiscal();
conferirLicitacao();

// document.getElementById("captar").addEventListener("click", () => {
//     var faturamento = document.getElementById("faturamento").value;
//     console.log(faturamento)
// })

console.log(beneficioFiscal + atividadeEconomica + licitacao);



