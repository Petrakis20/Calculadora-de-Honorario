const atvIndustriaLPLR = 1818.00;

//Benefícios Fiscais
const rioLog       = 2424.00;
const cartilhaModa = 1818.00;
const compete      = 2424.00;
const leiInd       = 2424.00;
const farmacos     = 1818.00;
const outrosF      = 1818.00;
const licitacaoS   = 1818.00;
const industriaPR  = 1818.00;

//Faixas de Faturamento 1 - 14 LP/LR
const fa1LPLR  =  1083.33;
const fa2LPLR  =  3250.00;
const fa3LPLR  =  6500.00;
const fa4LPLR  =  10833.33;
const fa5LPLR  =  16250.00;
const fa6LPLR  =  21666.67;
const fa7LPLR  =  27083.33;
const fa8LPLR  =  32500.00;
const fa9LPLR  =  54166.67;
const fa10LPLR =  108333.33;
const fa11LPLR =  162500.00;
const fa12LPLR =  216666.67;
const fa13LPLR =  325000.00;
const fa14LPLR =  433333.33;

//Faixa de Funcionário 1 - 14 LP/LR
const ff1LPLR = 200;
const ff2LPLR = 1000;
const ff3LPLR = 1600;
const ff4LPLR = 3000;
const ff5LPLR = 4000;
const ff6LPLR = 6000;
const ff7LPLR = 8000;
const ff8LPLR = 10000;
const ff9LPLR = 12000;
const ff10LPLR = 14000;
const ff11LPLR = 16000;
const ff12LPLR = 18000;
const ff13LPLR = 20000;
const ff14LPLR = 100000;

//Faixa de Notas Fiscais 1 - 14 LP/LR + SIEG
const fn1LPLR = 200 + 50;
const fn2LPLR = 250 + 30;
const fn3LPLR = 300 + 45;
const fn4LPLR = 350 + 60;
const fn5LPLR = 400 + 75;
const fn6LPLR = 500 + 150;
const fn7LPLR = 750 + 225;
const fn8LPLR = 1000 + 300;
const fn9LPLR = 1500 + 450;
const fn10LPLR = 2000 + 600;
const fn11LPLR = 2500 + 750;
const fn12LPLR = 5000 + 1500;
const fn13LPLR = 10000 + 3000;
const fn14LPLR = 25000 + 7500;

//Faixa de Docs 1 - 14 LP/LR
const fd1LPLR = 200;
const fd2LPLR = 250;
const fd3LPLR = 300;
const fd4LPLR = 350;
const fd5LPLR = 400;
const fd6LPLR = 500;
const fd7LPLR = 750;
const fd8LPLR = 1000;
const fd9LPLR = 1500;
const fd10LPLR =2000;
const fd11LPLR =2500;
const fd12LPLR = 5000;
const fd13LPLR = 10000;
const fd14LPLR = 25000;


//-------------------------------- Fim das constantes ------------------------------//

var total = 0;

regimeTributario = 2;
atividadeEconomica = 1;
beneficioFiscal = 1;
faixaFaturamentoAnual = 14;
faixaFuncionarios = 14;
faixaNotas = 14;
faixaDocumentos = 14;

function calcular(regimeTributario, atividadeEconomica, beneficioFiscal, faixaFaturamentoAnual, faixaFuncionarios, faixaNotas, faixaDocumentos) {

    if(regimeTributario != 3) {
        switch (atividadeEconomica) {
            case 1:
                total += industriaPR;
                    break;
            case 2:
                total += 0;
                break;
            case 3:
                total += 0;
                break;
            case 4:
                total += 0;
                break;
        }

        switch(beneficioFiscal) {
            case 1:
                total += rioLog;
                break; 
            case 2:
                total += cartilhaModa
                break;
            case 3:
                total += compete
                break;
            case 4:
                total += leiInd
                break;
            case 5:
                total += farmacos
                break;
            case 6:
                total += outrosF
                break;
            case 7:
                total += outrosF
                break;
        }

        // switch (licitacao) {
        //     case 1:
        //         total += licitacaoS
        //         break;
        //     case 2:
        //         total += 0;
        //         break;
        // }

        switch (faixaFaturamentoAnual) {
            case 1:
                total += fa1LPLR
                break;
            case 2:
                total += fa2LPLR
                break;
            case 3:
                total += fa3LPLR
                break;
            case 4:
                total += fa4LPLR
                break;
            case 5:
                total += fa5LPLR
                break;
            case 6:
                total += fa6LPLR
                break;
            case 7:
                total += fa7LPLR
                break;
            case 8:
                total += fa8LPLR
                break;
            case 9:
                total += fa9LPLR
                break;
            case 10:
                total += fa10LPLR
                break;
            case 11:
                total += fa11LPLR
                break;
            case 12:
                total += fa12LPLR
                break;
            case 13:
                total += fa13LPLR
                break;
            case 14:
                total += fa14LPLR
                break;
        }
       
        switch (faixaFuncionarios) {
            case 1:
                total += ff1LPLR
                break;
            case 2:
                total += ff2LPLR
                break;
            case 3:
                total += ff3LPLR
                break;
            case 4:
                total += ff4LPLR
                break;
            case 5:
                total += ff5LPLR
                break;
            case 6:
                total += ff6LPLR
                break;
            case 7:
                total += ff7LPLR
                break;
            case 8:
                total += ff8LPLR
                break;
            case 9:
                total += ff9LPLR
                break;
            case 10:
                total += ff10LPLR
                break;
            case 11:
                total += ff11LPLR
                break;
            case 12:
                total += ff12LPLR
                break;
            case 13:
                total += ff13LPLR
                break;
            case 14:
                total += ff14LPLR
                break;
        }
        
        switch (faixaNotas) {
            case 1:
                total += fn1LPLR
                break;
            case 2:
                total += fn2LPLR
                break;
            case 3:
                total += fn3LPLR
                break;
            case 4:
                total += fn4LPLR
                break;
            case 5:
                total += fn5LPLR
                break;
            case 6:
                total += fn6LPLR
                break;
            case 7:
                total += fn7LPLR
                break;
            case 8:
                total += fn8LPLR
                break;
            case 9:
                total += fn9LPLR
                break;
            case 10:
                total += fn10LPLR
                break;
            case 11:
                total += fn11LPLR
                break;
            case 12:
                total += fn12LPLR
                break;
            case 13:
                total += fn13LPLR
                break;
            case 14:
                total += fn14LPLR
                break;
        }

        switch (faixaDocumentos) {
            case 1:
                total += fd1LPLR
                break;
            case 2:
                total += fd2LPLR
                break;
            case 3:
                total += fd3LPLR
                break;
            case 4:
                total += fd4LPLR
                break;
            case 5:
                total += fd5LPLR
                break;
            case 6:
                total += fd6LPLR
                break;
            case 7:
                total += fd7LPLR
                break;
            case 8:
                total += fd8LPLR
                break;
            case 9:
                total += fd9LPLR
                break;
            case 10:
                total += fd10LPLR
                break;
            case 11:
                total += fd11LPLR
                break;
            case 12:
                total += fd12LPLR
                break;
            case 13:
                total += fd13LPLR
                break;
            case 14:
                total += fd14LPLR
                break;
        }

    }
    else if(regimeTributario == 3) {
        if (atividadeEconomica == 2 || atividadeEconomica == 3) {
            swit
        }
    }
       
    

    return total
}

console.log(Math.round(calcular(regimeTributario, atividadeEconomica, beneficioFiscal, faixaFaturamentoAnual, faixaFuncionarios, faixaNotas, faixaDocumentos)))
















/*//Identificando o Regime Tributário
function escreverRegimeTributario(regimeTributario) {
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
function escreverAtividadeEconomica(atividadeEconomica, regimeTributario) {
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
function escreverBeneficioFiscal() {
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
function escreverLicitacao() {
    // if(licitacao == 'Sim' || licitacao == 'sim'){
    //     licitacao = 1;
    // }
    // else if(licitacao == 'Não' || licitacao == 'não' || licitacao == 'nao' || licitacao == 'Nao'){
    //     licitacao = 0;
    // }   
}

//Chamando as funções
// conferirRegimeTributario(regimeTributario);
// console.log(conferirAtividadeEconomica(atividadeEconomica, regimeTributario));
// conferirBeneficioFiscal();
// conferirLicitacao();
*/

// document.getElementById("validar").addEventListener("click", validar)

// function validar() {
//     var regimeTributario   = document.getElementById("regimeTributario");
//     var atividadeEconomica = document.getElementById("atividadeEconomica");
//     var beneficioFiscal    = document.getElementById("beneficioFiscal");
//     var licitacaoS         = document.getElementById("licitacaoS");
//     var licitacaoN         = document.getElementById("licitacaoN");
//     var faixaFaturamentoAnual   = document.getElementById("faturamentoAnual");
//     var faixaFuncionarios  = document.getElementById("faixaFuncionarios");
//     var faixaNotas         = document.getElementById("faixaNotas");
//     var faixaDocumentos    = document.getElementById("faixaDocumentos");
    
//     if(regimeTributario.value < 1 || regimeTributario.value > 3){
//         alert("Regime Tributário Inválido");
//         regimeTributario.value = "";
//     }
//     else if(atividadeEconomica.value < 1 || atividadeEconomica.value > 4){
//         alert("Atividade Econômica Inválida");
//         atividadeEconomica.value = ""
//     }
//     else if(beneficioFiscal.value < 1 || beneficioFiscal.value > 7){
//         alert("Benefício Fiscal Inválido")
//         beneficioFiscal.value = ""
//     }
//     else if(licitacaoS.checked == false && licitacaoN.checked == false){
//         alert("Verificar se Possui Licitação");
//     }
//     else if(regimeTributario.value == 3){
//         if(faixaFaturamentoAnual .value < 1 || faixaFaturamentoAnual .value > 8){
//             alert("Faixa de Faturamento Inválida para Simples Nacional");
//             faixaFaturamentoAnual .value = "";
//         }
//         else if(faixaFuncionarios.value < 1 || faixaFuncionarios.value > 8){
//             alert("Faixa de Funcionários Inválida para Simples Nacional")
//             faixaFuncionarios.value = "";
//         }
//         else if(faixaNotas.value < 1 || faixaNotas.value > 8){
//             alert("Faixa de Notas Inválida para Simples Nacional")
//             faixaNotas.value = "";
//         }
//         else if(faixaDocumentos.value < 1 || faixaDocumentos.value > 8) {
//             alert("Faixa de Documentos Inválida para Simples Nacional")
//             faixaDocumentos.value = "";
//         }
//     }
//     else if(regimeTributario.value != 3){
//         if(faixaFaturamentoAnual .value < 1 || faixaFaturamentoAnual .value > 14) {
//             alert("Faixa de Faturamento Inválida para Lucro Real / Lucro Presumido");
//             faixaFaturamentoAnual .value = "";
//         }
//         else if(faixaFuncionarios.value < 1 || faixaFuncionarios.value > 14){
//             alert("Faixa de Funcionários Inválida para Lucro Real / Lucro Presumido")
//             faixaFuncionarios.value = "";
//         }
//         else if(faixaNotas.value < 1 || faixaNotas.value > 14){
//             alert("Faixa de Notas Inválida para Lucro Real / Lucro Presumido")
//             faixaNotas.value = "";
//         }
//         else if(faixaDocumentos.value < 1 || faixaDocumentos.value > 14) {
//             alert("Faixa de Documentos Inválida para Lucro Real / Lucro Presumido")
//             faixaDocumentos.value = "";
//         }
//     }
//     else {
//         regimeTributario.value = "";
//         atividadeEconomica.value = ""
//         beneficioFiscal.value = ""
//         faixaFaturamentoAnual .value = "";
//         faixaFuncionarios.value = "";
//         faixaNotas.value = "";
//         faixaDocumentos.value = "";
//     }






    // escreverRegimeTributario(regimeTributario);
    // console.log(escreverAtividadeEconomica(atividadeEconomica, regimeTributario));
    // escreverBeneficioFiscal();
    // escreverLicitacao();
// }
    // console.log(regimeTributario.value)




/*var atvIndustria = 1818.00;
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
conferirLicitacao();*/


