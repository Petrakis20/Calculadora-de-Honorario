const atvIndustriaLPLR = 1818;
const atvIndustriaSN = 606;

//Benefícios Fiscais
import { rioLog, cartilhaModa, compete, leiInd, farmacos, outrosF, licitacaoSimples, licitacaoL , industriaPR } from "../JS/faixas/beneficiosF.js"

//Faixas de Faturamento 1 - 14 LP/LR
import { fa1LPLR, fa2LPLR, fa3LPLR, fa4LPLR, fa5LPLR, fa6LPLR, fa7LPLR, fa8LPLR, fa9LPLR, fa10LPLR, fa11LPLR ,fa12LPLR, fa13LPLR, fa14LPLR } from "../JS/faixas/faixaLPLR.js";

//Faixa de Funcionário 1 - 14 LP/LR
import { ff1LPLR, ff2LPLR, ff3LPLR, ff4LPLR, ff5LPLR, ff6LPLR, ff7LPLR, ff8LPLR, ff9LPLR, ff10LPLR, ff11LPLR, ff12LPLR, ff13LPLR, ff14LPLR } from "../JS/faixas/faixaLPLR.js";

//Faixa de Notas Fiscais 1 - 14 LP/LR + SIEG
import { fn1LPLR, fn2LPLR, fn3LPLR, fn4LPLR, fn5LPLR, fn6LPLR, fn7LPLR, fn8LPLR, fn9LPLR, fn10LPLR, fn11LPLR, fn12LPLR, fn13LPLR, fn14LPLR } from "../JS/faixas/faixaLPLR.js";

//Faixa de Docs 1 - 14 LP/LR
import { fd1LPLR, fd2LPLR, fd3LPLR, fd4LPLR, fd5LPLR, fd6LPLR, fd7LPLR, fd8LPLR, fd9LPLR, fd10LPLR, fd11LPLR, fd12LPLR, fd13LPLR, fd14LPLR } from "../JS/faixas/faixaLPLR.js";

//-------------------------------- Fim das constantes Lucro Presumido / Lucro Real ------------------------------//


//-------------------------------- Constantes Simples Nacional --------------------------------------------------------------//
//-------------------------------- Início Comércio --------------------------------------------------------------//
//Faixa de Faturamento Comércio SN
import { fc1SN, fc2SN, fc3SN, fc4SN, fc5SN, fc6SN, fc7SN, fc8SN } from "../JS/faixas/faixaSNCom.js";

//Faixa de Funcionário Comércio SN
import { ffc1SN, ffc2SN, ffc3SN, ffc4SN, ffc5SN, ffc6SN, ffc7SN, ffc8SN } from "../JS/faixas/faixaSNCom.js";
    
//Faixa de Notas Fiscais Comércio SN
import { fnc1SN, fnc2SN, fnc3SN, fnc4SN, fnc5SN, fnc6SN, fnc7SN, fnc8SN } from "../JS/faixas/faixaSNCom.js";

// Faixa de Documentos Comércio SN;
import { fdc1SN, fdc2SN, fdc3SN, fdc4SN, fdc5SN, fdc6SN, fdc7SN, fdc8SN } from "../JS/faixas/faixaSNCom.js";

//-------------------------------- Fim Comércio --------------------------------------------------------------//
//-------------------------------- Início Serviços --------------------------------------------------------------//

//Faixa de Faturamento Serviços SN
import { ffs1SN, ffs2SN, ffs3SN, ffs4SN, ffs5SN, ffs6SN, ffs7SN, ffs8SN } from "../JS/faixas/faixaSNS.js";

//Faixa de Funcionário Serviços SN
import { fcs1SN, fcs2SN, fcs3SN, fcs4SN, fcs5SN, fcs6SN, fcs7SN, fcs8SN } from "../JS/faixas/faixaSNS.js";

//Faixa de Notas Fiscais Serviços SN
import { fns1SN, fns2SN, fns3SN, fns4SN, fns5SN, fns6SN, fns7SN, fns8SN } from "../JS/faixas/faixaSNS.js";

//Faixa de Docs Serviços SN
import { fds1SN, fds2SN, fds3SN, fds4SN, fds5SN, fds6SN, fds7SN, fds8SN } from "../JS/faixas/faixaSNS.js";



//-------------------------------- Fim Serviços --------------------------------------------------------------//



//-------------------------------- Fim das constantes Simples Nacional ------------------------------//




//Validação do form

function escreverRegimeTributario(regimeTributario) {
    switch (regimeTributario) {
        case 1:
            regimeTributario = "Lucro Presumido"
            break;
        case 2:
            regimeTributario = "Lucro Real"     
            break;
        case 3:
            regimeTributario = "Simples Nacional"
            break;
    }
    let resultadoRegime = document.getElementById("resultadoRegime")
    resultadoRegime.innerHTML = regimeTributario;
}
function escreverAtividadeEconomica(atividadeEconomica, regimeTributario) {
    if(regimeTributario != 3) {
        switch (atividadeEconomica) {
            case 1:
                atividadeEconomica = "Indústria" + "  -   " + atvIndustriaLPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 2:
                atividadeEconomica = "Comércio Varejista";
                break;
            case 3:
                atividadeEconomica = "Comércio Atacadista";
                break;
            case 4:
                atividadeEconomica = "Prestação de Serviços";
                break;
        }
    }else if (regimeTributario == 3) {
        switch (atividadeEconomica) {
            case 1:
                atividadeEconomica = "Indústria" + "  -   " + "R$" + atvIndustriaSN + ",00";
                break;
            case 2:
                atividadeEconomica = "Comércio Varejista";
                break;
            case 3:
                atividadeEconomica = "Comércio Atacadista";
                break;
            case 4:
                atividadeEconomica = "Prestação de Serviços";
                break;
        }
    }

    let resultadoAtv = document.getElementById("resultadoAtv")
    resultadoAtv.innerHTML = atividadeEconomica;
}

function escreverBeneficioFiscal(regimeTributario, beneficioFiscal) {
    if (regimeTributario != 3) {
        switch (beneficioFiscal) {
            case 1:
                beneficioFiscal = "RioLog" + "  -  " + rioLog.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 2:
                beneficioFiscal = "Cartilha da Moda" + "  -  " + cartilhaModa.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 3:
                beneficioFiscal = "Compete" + "  -  " + compete.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 4:
                beneficioFiscal = "Lei 6979(Indústria)" + "  -  " + leiInd.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 5:
                beneficioFiscal = "Fármacos" + "  -  " + farmacos.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 6:
                beneficioFiscal = "Outros" + "  -  " + outrosF.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 7:
                beneficioFiscal = "Não Possui" 
                break;
        }
    }else {
        beneficioFiscal = "Não possui"
    }

    let resultadoBeneficio = document.getElementById("resultadoBeneficio")
    resultadoBeneficio.innerHTML = beneficioFiscal;
}

function escreverLicitacao(licitacao, regimeTributario) {
    if(regimeTributario != 3){
        switch (licitacao) {
            case 1:
                licitacao = "Sim" + "  -  " + "R$" + licitacaoL + ",00"
                break;
            case 2:
                licitacao = "Não"
                break;
        }
    }
    else if(regimeTributario == 3) {
        switch (licitacao) {
            case 1:
                licitacao = "Sim" + "  -  " + "R$" + licitacaoSimples + ",00"
                break;
            case 2:
                licitacao = "Não"
                break;
        }
    }
    let resultadoLicitacao = document.getElementById("resultadoLicitacao")
    resultadoLicitacao.innerHTML = licitacao;
}




let total = 0;
function calcularLPLR(atividadeEconomica, beneficioFiscal, licitacao, faixaFaturamentoAnual, faixaFuncionarios, faixaNotas, faixaDocumentos) {    
    switch (atividadeEconomica) {
        case 1:
            total += atvIndustriaLPLR;
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
            total += 0
            break;
    }

    switch (licitacao) {
        case 1:
            total += licitacaoL
            break;
        case 2:
            total += 0;
            break;
    }

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
    return total;
}

function calcularSimplesIndustria(licitacao, faixaFaturamentoAnual, faixaFuncionarios, faixaNotas, faixaDocumentos) {
    total += atvIndustriaSN
    console.log(licitacao)
    switch (licitacao) {
        case 1:
            total += licitacaoSimples
            break;
        case 2:
            total += 0;
            break;
    }
    switch (faixaFaturamentoAnual) {
        case 1:
            total += fc1SN
            break;
        case 2:
            total += fc2SN
            break;
        case 3:
            total += fc3SN
            break;
        case 4:
            total += fc4SN
            break;
        case 5:
            total += fc5SN
            break;
        case 6:
            total += fc6SN
            break;
        case 7:
            total += fc7SN
            break;
        case 8:
            total += fc8SN
            break;
    }
    switch (faixaFuncionarios) {
        case 1:
            total += ffc1SN
            break;
        case 2:
            total += ffc2SN
            break;
        case 3:
            total += ffc3SN
            break;
        case 4:
            total += ffc4SN
            break;
        case 5:
            total += ffc5SN
            break;
        case 6:
            total += ffc6SN
            break;
        case 7:
            total += ffc7SN
            break;
        case 8:
            total += ffc8SN
            break;
    }
    switch (faixaNotas) {
        case 1:
            total += fnc1SN
            break;
        case 2:
            total += fnc2SN
            break;
        case 3:
            total += fnc3SN
            break;
        case 4:
            total += fnc4SN
            break;
        case 5:
            total += fnc5SN
            break;
        case 6:
            total += fnc6SN
            break;
        case 7:
            total += fnc7SN
            break;
        case 8:
            total += fnc8SN
            break;
    }
    switch (faixaDocumentos) {
        case 1:
            total += fdc1SN
            break;
        case 2:
            total += fdc2SN
            break;
        case 3:
            total += fdc3SN
            break;
        case 4:
            total += fdc4SN
            break;
        case 5:
            total += fdc5SN
            break;
        case 6:
            total += fdc6SN
            break;
        case 7:
            total += fdc7SN
            break;
        case 8:
            total += fdc8SN
            break;
    }
    console.log(total)
    return total;

}    

function calcularSimplesComercio(licitacao, faixaFaturamentoAnual, faixaFuncionarios, faixaNotas, faixaDocumentos) {
    switch (licitacao) {
        case 1:
            total += licitacaoSimples
            break;
        case 2:
            total += 0;
            break;
    }
    switch (faixaFaturamentoAnual) {
        case 1:
            total += fc1SN
            break;
        case 2:
            total += fc2SN
            break;
        case 3:
            total += fc3SN
            break;
        case 4:
            total += fc4SN
            break;
        case 5:
            total += fc5SN
            break;
        case 6:
            total += fc6SN
            break;
        case 7:
            total += fc7SN
            break;
        case 8:
            total += fc8SN
            break;
    }
    switch (faixaFuncionarios) {
        case 1:
            total += ffc1SN
            break;
        case 2:
            total += ffc2SN
            break;
        case 3:
            total += ffc3SN
            break;
        case 4:
            total += ffc4SN
            break;
        case 5:
            total += ffc5SN
            break;
        case 6:
            total += ffc6SN
            break;
        case 7:
            total += ffc7SN
            break;
        case 8:
            total += ffc8SN
            break;
    }
    switch (faixaNotas) {
        case 1:
            total += fnc1SN
            break;
        case 2:
            total += fnc2SN
            break;
        case 3:
            total += fnc3SN
            break;
        case 4:
            total += fnc4SN
            break;
        case 5:
            total += fnc5SN
            break;
        case 6:
            total += fnc6SN
            break;
        case 7:
            total += fnc7SN
            break;
        case 8:
            total += fnc8SN
            break;
    }
    switch (faixaDocumentos) {
        case 1:
            total += fdc1SN
            break;
        case 2:
            total += fdc2SN
            break;
        case 3:
            total += fdc3SN
            break;
        case 4:
            total += fdc4SN
            break;
        case 5:
            total += fdc5SN
            break;
        case 6:
            total += fdc6SN
            break;
        case 7:
            total += fdc7SN
            break;
        case 8:
            total += fdc8SN
            break;
    }
     return total;
}

function calcularSimplesServico(licitacao, faixaFaturamentoAnual, faixaFuncionarios, faixaNotas, faixaDocumentos) {
    switch (licitacao) {
        case 1:
            total += licitacaoSimples
            break;
        case 2:
            total += 0;
            break;
    }
    switch (faixaFaturamentoAnual) {
        case 1:
            total += ffs1SN
            break;
        case 2:
            total += ffs2SN
            break;
        case 3:
            total += ffs3SN
            break;
        case 4:
            total += ffs4SN
            break;
        case 5:
            total += ffs5SN
            break;
        case 6:
            total += ffs6SN
            break;
        case 7:
            total += ffs7SN
            break;
        case 8:
            total += ffs8SN
            break;
    }
    switch (faixaFuncionarios) {
        case 1:
            total += fcs1SN
            break;
        case 2:
            total += fcs2SN
            break;
        case 3:
            total += fcs3SN
            break;
        case 4:
            total += fcs4SN
            break;
        case 5:
            total += fcs5SN
            break;
        case 6:
            total += fcs6SN
            break;
        case 7:
            total += fcs7SN
            break;
        case 8:
            total += fcs8SN
            break;
    }
    switch (faixaNotas) {
        case 1:
            total += fns1SN
            break;
        case 2:
            total += fns2SN
            break;
        case 3:
            total += fns3SN
            break;
        case 4:
            total += fns4SN
            break;
        case 5:
            total += fns5SN
            break;
        case 6:
            total += fns6SN
            break;
        case 7:
            total += fns7SN
            break;
        case 8:
            total += fns8SN
            break;
    }
    switch (faixaDocumentos) {
        case 1:
            total += fds1SN
            break;
        case 2:
            total += fds2SN
            break;
        case 3:
            total += fds3SN
            break;
        case 4:
            total += fds4SN
            break;
        case 5:
            total += fds5SN
            break;
        case 6:
            total += fds6SN
            break;
        case 7:
            total += fds7SN
            break;
        case 8:
            total += fds8SN
            break;
    }
    return total;
}

document.getElementById("limpar").addEventListener("click", zerar)
function zerar() {  
    console.log("oi")
    regimeTributario.value = "" 
    atividadeEconomica.value = "" 
    beneficioFiscal.value = ""
    licitacaoS.checked = false
    licitacaoN.checked = false
    document.getElementById("faturamentoAnual").value = ""
    document.getElementById("faixaFuncionarios").value = ""
    document.getElementById("faixaNotas").value = ""
    document.getElementById("faixaDocumentos").value = ""
    document.getElementById("resultado").innerHTML = ""
}

// function escreverRegimeTributario(regimeTributario) {
//     switch (regimeTributario) {
//         case 1:
//             regimeTributario = "Lucro Presumido"
//             break;
//         case 2:
//             regimeTributario = "Lucro Real"     
//             break;
//         case 3:
//             regimeTributario = "Simples Nacional"
//             break;
//     }

//     let resultadoRegime = $("#resultadoRegime")
//     resultadoRegime.text(regimeTributario)
// }

// function conferirAtividadeEconomica(atividadeEconomica, regimeTributario) {
//     if(regimeTributario != 3) {
//         switch (atividadeEconomica) {
//             case 1:
//                 atividadeEconomica = "Indústria" + "  -   " + "R$" + atvIndustriaLPLR + ",00";
//                 break;
//             case 2:
//                 atividadeEconomica = "Comércio Varejista";
//                 break;
//             case 3:
//                 atividadeEconomica = "Comércio Atacadista";
//                 break;
//             case 4:
//                 atividadeEconomica = "Prestação de Serviços";
//                 break;
//         }
//     }else if (regimeTributario == 3) {
//         switch (atividadeEconomica) {
//             case 1:
//                 atividadeEconomica = "Indústria" + "  -   " + "R$" + atvIndustriaSN + ",00";
//                 break;
//             case 2:
//                 atividadeEconomica = "Comércio Varejista";
//                 break;
//             case 3:
//                 atividadeEconomica = "Comércio Atacadista";
//                 break;
//             case 4:
//                 atividadeEconomica = "Prestação de Serviços";
//                 break;
//         }
//     }

//     let resultadoAtv = document.getElementById("resultadoAtv")
//     resultadoAtv.innerHTML = atividadeEconomica;
// }

// // function escreverBeneficioFiscal() {
// //     if
// // }

// function escreverLicitacao(licitacao, regimeTributario) {
//     if(regimeTributario != 3){
//         switch (licitacao) {
//             case 1:
//                 licitacao = "Sim" + "  -  " + "R$" + licitacaoL + ",00"
//                 break;
//             case 2:
//                 licitacao = "Não"
//                 break;
//         }
//     }
//     else if(regimeTributario == 3) {
//         switch (licitacao) {
//             case 1:
//                 licitacao = "Sim" + "  -  " + "R$" + licitacaoSimples + ",00"
//                 break;
//             case 2:
//                 licitacao = "Não"
//                 break;
//         }
//     }
//     let resultadoLicitacao = document.getElementById("resultadoLicitacao")
//     resultadoLicitacao.innerHTML = licitacao;
// }

// function escreverFaturamentoAnual(faixaFaturamentoAnual, regimeTributario) {
//     if(regimeTributario != 3){
//         switch (faixaFaturamentoAnual) {
//             case 1:
//                 faixaFaturamentoAnual = "R$" + fa1LPLR
//                 break;
//             case 2:
//                 faixaFaturamentoAnual = "R$" + fa2LPLR
//                 break;
//             case 3:
//                 faixaFaturamentoAnual = "R$" + fa3LPLR
//                 break;
//             case 4:
//                 faixaFaturamentoAnual = "R$" + fa4LPLR
//                 break;
//             case 5:
//                 faixaFaturamentoAnual = "R$" + fa5LPLR
//                 break;
//             case 6:
//                 faixaFaturamentoAnual = "R$" + fa6LPLR
//                 break;
//             case 7:
//                 faixaFaturamentoAnual = "R$" + fa7LPLR
//                 break;
//             case 8:
//                 faixaFaturamentoAnual = "R$" + fa8LPLR
//                 break;
//             case 9:
//                 faixaFaturamentoAnual = "R$" + fa9LPLR
//                 break;
//             case 10:
//                 faixaFaturamentoAnual = "R$" + fa10LPLR
//                 break;
//             case 11:
//                 faixaFaturamentoAnual = "R$" + fa11LPLR
//                 break;
//             case 12:
//                 faixaFaturamentoAnual = "R$" + fa12LPLR
//                 break;
//             case 13:
//                 faixaFaturamentoAnual = "R$" + fa13LPLR
//                 break;
//             case 14:
//                 faixaFaturamentoAnual = "R$" + fa14LPLR
//                 break;
//         }
//     }
//     else if(regimeTributario == 3) {

//     }
//     let resultadoFA = document.getElementById("resultadoFA")
//     resultadoFA.innerHTML = faixaFaturamentoAnual;
// }

// function escreverFuncionarios(faixaFuncionarios ,regimeTributario) {


    
//     let resultadoFF = document.getElementById("resultadoFF")
//     resultadoFF.innerHTML = faixaFuncionarios;
// }


document.getElementById("validar").addEventListener("click", () => {
    let licitacao
    let regimeTributario        = document.getElementById("regimeTributario");
    let atividadeEconomica      = document.getElementById("atividadeEconomica");
    let beneficioFiscal         = document.getElementById("beneficioFiscal");
    let licitacaoS              = document.getElementById("licitacaoS")
    let licitacaoN              = document.getElementById("licitacaoN")
    let faixaFaturamentoAnual   = document.getElementById("faturamentoAnual");
    let faixaFuncionarios       = document.getElementById("faixaFuncionarios");
    let faixaNotas              = document.getElementById("faixaNotas");
    let faixaDocumentos         = document.getElementById("faixaDocumentos");
    
    if(parseInt(regimeTributario.value) < 1 || parseInt(regimeTributario.value) > 3 || regimeTributario.value == ""){
        alert("Regime Tributário Inválido")
        regimeTributario.value = ""
    }
    else if(parseInt(atividadeEconomica.value) < 1 || parseInt(atividadeEconomica.value) > 4 || atividadeEconomica.value == "") {
        alert("Atividade Econômica Inválida")
        atividadeEconomica.value = ""
        return false
    }
    else if(parseInt(beneficioFiscal.value) < 1 || parseInt(beneficioFiscal.value) > 7){
        alert("Benefício Fiscal Inválido")
        beneficioFiscal.value = ""
        return false
    }
    else if(licitacaoS.checked == false && licitacaoN.checked == false){
        alert("Verificar se Possui Licitação")
        return false
    }

    if(parseInt(regimeTributario.value) == 3){
        if(parseInt(beneficioFiscal.value) >= 1 && parseInt(beneficioFiscal.value) <= 7) {
            alert("Não é possível usar Benefício fiscal")
            beneficioFiscal.value = ""
            return false
        }
       else if(parseInt(faixaFaturamentoAnual.value) < 1 || parseInt(faixaFaturamentoAnual.value) > 8){
            alert("Faixa de Faturamento Inválida para Simples Nacional")
            faixaFaturamentoAnual.value = ""
            return false
        }
       else if(parseInt(faixaFuncionarios.value) < 1 || parseInt(faixaFuncionarios.value) > 8){
            alert("Faixa de Funcionários Inválida para Simples Nacional")
            faixaFuncionarios.value = ""
            return false
        }
        else if(parseInt(faixaNotas.value) < 1 || parseInt(faixaNotas.value) > 8){
            alert("Faixa de Notas Inválida para Simples Nacional")
            faixaNotas.value = ""
            return false
        }
        else if(parseInt(faixaDocumentos.value) < 1 || parseInt(faixaDocumentos.value) > 8) {
            alert("Faixa de Documentos Inválida para Simples Nacional")
            faixaDocumentos.value = ""
            return false
        }
    }
    else if(parseInt(regimeTributario.value) == 1 || parseInt(regimeTributario.value) == 2){
        if(parseInt(faixaFaturamentoAnual.value) < 1 || parseInt(faixaFaturamentoAnual.value) > 14) {
            alert("Faixa de Faturamento Inválida para Lucro Real / Lucro Presumido")
            faixaFaturamentoAnual.value = ""
            return false
        }
        else if(parseInt(faixaFuncionarios.value) < 1 || parseInt(faixaFuncionarios.value) > 14){
            alert("Faixa de Funcionários Inválida para Lucro Real / Lucro Presumido")
            faixaFuncionarios.value = ""
            return false
        }
        else if(parseInt(faixaNotas.value) < 1 || parseInt(faixaNotas.value) > 14){
            alert("Faixa de Notas Inválida para Lucro Real / Lucro Presumido")
            faixaNotas.value = ""
            return false
        }
        else if(parseInt(faixaDocumentos.value) < 1 || parseInt(faixaDocumentos.value) > 14) {
            alert("Faixa de Documentos Inválida para Lucro Real / Lucro Presumido")
            faixaDocumentos.value = ""
            return false
        }
    }

    if(licitacaoS.checked == true) {
        licitacao = 1
    }else if(licitacaoN.checked == true) {
        licitacao = 2
    }
        
    if(parseInt(regimeTributario.value) != 3) {
        console.log(calcularLPLR(parseInt(atividadeEconomica.value), parseInt(beneficioFiscal.value), licitacao, parseInt(faixaFaturamentoAnual.value), parseInt(faixaFuncionarios.value), parseInt(faixaNotas.value), parseInt(faixaDocumentos.value)))
    }
    else{
        if(parseInt(atividadeEconomica.value) == 1){
            console.log(calcularSimplesIndustria(licitacao, parseInt(faixaFaturamentoAnual.value), parseInt(faixaFuncionarios.value), parseInt(faixaNotas.value), parseInt(faixaDocumentos.value)))
        }else if (parseInt(atividadeEconomica.value) == 2 || parseInt(atividadeEconomica.value) == 3) {
            console.log(calcularSimplesComercio(licitacao, parseInt(faixaFaturamentoAnual.value), parseInt(faixaFuncionarios.value), parseInt(faixaNotas.value), parseInt(faixaDocumentos.value)))
        }else if(parseInt(atividadeEconomica.value) == 4) {
            console.log(calcularSimplesServico(licitacao, parseInt(faixaFaturamentoAnual.value), parseInt(faixaFuncionarios.value), parseInt(faixaNotas.value), parseInt(faixaDocumentos.value)))
        }
    }

    

    let totalFinal = document.getElementById("resultado")

    totalFinal.innerHTML = total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    
    escreverRegimeTributario(parseInt(regimeTributario.value))
    escreverAtividadeEconomica(parseInt(atividadeEconomica.value), parseInt(regimeTributario.value))
    escreverLicitacao(licitacao, parseInt(regimeTributario.value))
    escreverBeneficioFiscal(parseInt(regimeTributario.value), parseInt(beneficioFiscal.value))
    // escreverFaturamentoAnual(parseInt(faixaFaturamentoAnual.value), parseInt(regimeTributario.value), parseInt(atividadeEconomica.value))
    // escreverFuncionarios(parseInt(faixaFuncionarios.value), parseInt(regimeTributario.value), parseInt(atividadeEconomica.value))
    // // escreverNotas(faixaNotas, parseInt(regimeTributario.value))
    // // escreverDoc(faixaDocumentos, parseInt(regimeTributario.value))


    // let tudo = document.querySelector("#tudo")
    // tudo.classList.remove("hide")
    console.log(total)
   
    total = 0
})






// zerar(regimeTributario, atividadeEconomica, beneficioFiscal, faixaFaturamentoAnual, faixaFuncionarios, faixaNotas, faixaDocumentos)




 // escreverRegimeTributario(regimeTributario);
    // console.log(escreverAtividadeEconomica(atividadeEconomica, regimeTributario));
    // escreverBeneficioFiscal();
    // escreverLicitacao();

//Identificando o Regime Tributário


//Identificando o Atividade Econômica
// function escreverAtividadeEconomica(atividadeEconomica, regimeTributario) {
//     switch (atividadeEconomica) {
//         case 1:
//             atividadeEconomica = "Indústria";
//             return atividadeEconomica;
//         case 2:
//             atividadeEconomica = "Comércio Varejista";
//             return atividadeEconomica;
//         case 3:
//             atividadeEconomica = "Comércio Atacadista";
//             return atividadeEconomica;
//         case 4:
//             atividadeEconomica = "Prestação de Serviços";
//             return atividadeEconomica;
//     }
// }

// //Identificando o Benefício Fiscal
// function escreverBeneficioFiscal() {
//     switch (beneficioFiscal) {
//         case 1:
//             beneficioFiscal = "Rio Log";
//             return beneficioFiscal;
//         case 2:
//             beneficioFiscal = "Cartilha da Moda";
//             return beneficioFiscal;
//         case 3:
//             beneficioFiscal = "Compete";
//             return beneficioFiscal;
//         case 4:
//             beneficioFiscal = "Lei 6979(Indústria)";
//             return beneficioFiscal;
//     }
// }

//Identificando o Regime Tributário
// function escreverLicitacao() {
//     // if(licitacao == 'Sim' || licitacao == 'sim'){
//     //     licitacao = 1;
//     // }
//     //if(licitacao == 'Não' || licitacao == 'não' || licitacao == 'nao' || licitacao == 'Nao'){
//     //     licitacao = 0;
//     // }   
// }

//Chamando as funções
// conferirRegimeTributario(regimeTributario);
// console.log(conferirAtividadeEconomica(atividadeEconomica, regimeTributario));
// conferirBeneficioFiscal();
// conferirLicitacao();






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



const lua = document.querySelector('#lua')
const sol = document.querySelector('#sol')

const $html = document.querySelector('html')

function esconderLua(){
    lua.classList.add('hide')
}

function esconderSol(){
    sol.classList.add('hide')
}

lua.addEventListener('click', function(){
    $html.classList.toggle('darkmode')
    sol.classList.remove('hide')
    esconderLua()
})

sol.addEventListener('click', function(){
    $html.classList.toggle('darkmode')
    lua.classList.remove('hide')
    esconderSol()
})