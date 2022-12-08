const atvIndustria = 1818.00;
const rioLog       = 2424.00;
const cartilhaModa = 1818.00;
const compete      = 2424.00;
const leiInd       = 2424.00;
const farmacos     = 1818.00;
const outrosF      = 1818.00;
const licitacaoS   = 1818.00;
const industriaPR  = 1818.00;

const f1LPPR  =  1083.33
const f2LPPR  =  3250.00
const f3LPPR  =  6500.00
const f4LPPR  =  10833.33
const f5LPPR  =  16250.00
const f6LPPR  =  21666.67
const f7LPPR  =  27083.33
const f8LPPR  =  32500.00
const f9LPPR  =  54166.67
const f10LPPR =  108333.33
const f11LPPR =  162500.00
const f12LPPR =  216666.67
const f13LPPR =  325000.00
const f14LPPR =  433333.33



var total = 0;

function calcular(regimeTributario, beneficioFiscal, faixaFaturamentoAnual, faixaFuncionarios, faixaNotas, faixaDocumentos) {


    regimeTributario = 1;
    atividadeEconomica = 1;
    beneficioFiscal = 2;
    faixaFaturamentoAnual = 2;

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
                total += f1LPPR
                break;
            case 2:
                total += f2LPPR
                break;
            case 3:
                total += f3LPPR
                break;
            case 4:
                total += f4LPPR
                break;
            case 5:
                total += f5LPPR
                break;
            case 6:
                total += f6LPPR
                break;
            case 7:
                total += f7LPPR
                break;
            case 8:
                total += f8LPPR
                break;
            case 9:
                total += f9LPPR
                break;
            case 10:
                total += f10LPPR
                break;
            case 11:
                total += f11LPPR
                break;
            case 12:
                total += f12LPPR
                break;
            case 13:
                total += f13LPPR
                break;
            case 14:
                total += f14LPPR
                break;
        }
       
    }
    
    // total = atividadeEconomica + beneficioFiscal + "licitacao" + faturamentoAnual + notasFiscais + docs
    return total
}

console.log(calcular())


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


