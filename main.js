var regimeTributario = 1;
var atividadeEconomica = 1;
var beneficioFiscal = 1;
var licitacao = 1;

var atvIndustria = 1818.00;
var rioLog = 2424.00;
var cartilhaModa = 1818.00;
var compete = 2424.00;
var leiInd = 2424.00;
var farmacos = 1818.00;
var outrosF = 1818.00;
var licitacaoS = 1818.00;

var total;

//Identificando o Regime Tributário
function conferirRegimeTributario(regimeTributario) {
    switch (regimeTributario) {
        case 1:
            regimeTributario = "Lucro Presumido"
            return regimeTributario
        case 2:
            regimeTributario = "Lucro Real"     
            return regimeTributario;
        case 3:
            regimeTributario = "Simples Nacional"
            return regimeTributario;
    }
}

//Identificando o Atividade Econômica
function conferirAtividadeEconomica(atividadeEconomica, regimeTributario) {
    switch (atividadeEconomica) {
        case 1:
            atividadeEconomica = "Indústria";
            return atividadeEconomica;
        case 2:
            atividadeEconomica = "Comércio Varejista";
            return atividadeEconomica;
        case 3:
            atividadeEconomica = "Comércio Atacadista";
            return atividadeEconomica;
        case 4:
            atividadeEconomica = "Prestação de Serviços";
            return atividadeEconomica;
    }
}

//Identificando o Benefício Fiscal
function conferirBeneficioFiscal() {
    switch (beneficioFiscal) {
        case 1:
            beneficioFiscal = "Rio Log";
            return beneficioFiscal;
        case 2:
            beneficioFiscal = "Cartilha da Moda";
            return beneficioFiscal;
        case 3:
            beneficioFiscal = "Compete";
            return beneficioFiscal;
        case 4:
            beneficioFiscal = "Lei 6979(Indústria)";
            return beneficioFiscal;
    }
}

//Identificando o Regime Tributário
function conferirLicitacao() {
    // if(licitacao == 'Sim' || licitacao == 'sim'){
    //     licitacao = 1;
    // }
    // else if(licitacao == 'Não' || licitacao == 'não' || licitacao == 'nao' || licitacao == 'Nao'){
    //     licitacao = 0;
    // }   
}

//Chamando as funções
conferirRegimeTributario(regimeTributario);
console.log(conferirAtividadeEconomica(atividadeEconomica, regimeTributario));
conferirBeneficioFiscal();
conferirLicitacao();
