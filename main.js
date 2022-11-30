var regimeTributario = 'Lucro Real';
var atividadeEconomica = 'Indústria';
var beneficioFiscal = 'Lei 6979 (Indústria)';
var licitacao = 'Não';

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
        regimeTributario = 1;
    }
    else if(regimeTributario == 'Lucro Real'){
        regimeTributario = 2;
    }
    else if (regimeTributario == 'Simples Nacional') {
        regimeTributario = 3;
    }
}

//Identificando o Atividade Econômica
function conferirAtividadeEconomica() {
    if(atividadeEconomica == 'Indústria'){
        atividadeEconomica = 1;
        return atvIndustria;
    }
    else if(atividadeEconomica == 'Comércio Varejista'){
        atividadeEconomica = 2;
        return 0;
    }
    else if (atividadeEconomica == 'Comércio Atacadista') {
        atividadeEconomica = 3;
       return 0;
    }
    else if (atividadeEconomica == 'Prestação de Serviços') {
        atividadeEconomica = 4;
       return 0;
    }
}

//Identificando o Regime Tributário
function conferirBeneficioFiscal() {
    if(beneficioFiscal == 'Rio Log'){
        beneficioFiscal = 1;
        return rioLog;
    }
    else if(beneficioFiscal == 'Cartilha da Moda'){
        beneficioFiscal = 2;
        return cartilhaModa;
    }
    else if (beneficioFiscal == 'Compete') {
        beneficioFiscal = 3;
        return compete;
    }
    else if (beneficioFiscal == 'Lei 6979 (Indústria)') {
        beneficioFiscal = 4;
        return leiInd;
    }
    else if (beneficioFiscal == 'Fármacos') {
        beneficioFiscal = 5;
        return farmacos;
    }
    else if (beneficioFiscal == 'Outros') {
        beneficioFiscal = 6;
        return outrosF;
    }
    else if (beneficioFiscal == 'Não Possuo') {
        beneficioFiscal = 6;
        return 0;
    }
}

//Identificando o Regime Tributário
function conferirLicitacao() {
    if(licitacao == 'Sim'){
        licitacao = 1;
        return licitacaoS;
    }
    else if(licitacao == 'Não'){
        licitacao = 2;
        return 0;
    }
}

//Chamando as funções
conferirRegimeTributario();
conferirAtividadeEconomica();
conferirBeneficioFiscal();
conferirLicitacao();

switch (regimeTributario) {
    case 1:
        return
        break;

    default:
        break;
}

console.log(conferirAtividadeEconomica() + conferirBeneficioFiscal() + conferirLicitacao());