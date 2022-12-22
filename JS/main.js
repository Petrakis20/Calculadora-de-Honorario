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

let total = 0;
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
    }
    else if (regimeTributario == 3) {
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
    }
    else {
        beneficioFiscal = "Não possui"
    }

    let resultadoBeneficio = document.getElementById("resultadoBeneficio")
    resultadoBeneficio.innerHTML = beneficioFiscal;
}

function escreverLicitacao(licitacao, regimeTributario) {
    if(regimeTributario != 3){
        switch (licitacao) {
            case 1:
                licitacao = "Sim" + "  -  " + licitacaoL.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 2:
                licitacao = "Não"
                break;
        }
    }
    else if(regimeTributario == 3) {
        switch (licitacao) {
            case 1:
                licitacao = "Sim" + "  -  " + licitacaoSimples.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 2:
                licitacao = "Não"
                break;
        }
    }
    let resultadoLicitacao = document.getElementById("resultadoLicitacao")
    resultadoLicitacao.innerHTML = licitacao;
}

function escreverFaturamentoAnual(faixaFaturamentoAnual, regimeTributario, atividadeEconomica) {
    if(regimeTributario != 3){
        switch (faixaFaturamentoAnual) {
            case 1:
                faixaFaturamentoAnual = "Faixa 1" + "  -  " + fa1LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 2:
                faixaFaturamentoAnual = "Faixa 2" + "  -  " + fa2LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 3:
                faixaFaturamentoAnual = "Faixa 3" + "  -  " + fa3LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 4:
                faixaFaturamentoAnual = "Faixa 4" + "  -  " + fa4LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 5:
                faixaFaturamentoAnual = "Faixa 5" + "  -  " + fa5LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 6:
                faixaFaturamentoAnual = "Faixa 6" + "  -  " + fa6LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 7:
                faixaFaturamentoAnual = "Faixa 7" + "  -  " + fa7LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 8:
                faixaFaturamentoAnual = "Faixa 8" + "  -  " + fa8LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 9:
                faixaFaturamentoAnual = "Faixa 9" + "  -  " + fa9LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 10:
                faixaFaturamentoAnual = "Faixa 10" + "  -  " + fa10LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 11:
                faixaFaturamentoAnual = "Faixa 11" + "  -  " + fa11LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 12:
                faixaFaturamentoAnual = "Faixa 12" + "  -  " + fa12LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 13:
                faixaFaturamentoAnual = "Faixa 13" + "  -  " + fa13LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 14:
                faixaFaturamentoAnual = "Faixa 14" + "  -  " + fa14LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
        }
    }
    else if(regimeTributario == 3){
        if(atividadeEconomica == 1){
            switch (faixaFaturamentoAnual) {
                case 1:
                    faixaFaturamentoAnual = "Faixa 1"+ "  -  " + fc1SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 2:
                    faixaFaturamentoAnual = "Faixa 2" + "  -  "+ fc2SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 3:
                    faixaFaturamentoAnual = "Faixa 3" + "  -  " + fc3SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 4:
                    faixaFaturamentoAnual = "Faixa 4" + "  -  " + fc4SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 5:
                    faixaFaturamentoAnual = "Faixa 5" + "  -  " + fc5SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 6:
                    faixaFaturamentoAnual = "Faixa 6" + "  -  " + fc6SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 7:
                    faixaFaturamentoAnual = "Faixa 7" + "  -  " + fc7SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 8:
                    faixaFaturamentoAnual = "Faixa 8" + "  -  "+ fc8SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
            }
        }
        else if(atividadeEconomica == 2 || atividadeEconomica == 3) {
            switch (faixaFaturamentoAnual) {
                case 1:
                   faixaFaturamentoAnual = "Faixa 1" + "  -  " + fc1SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 2:
                   faixaFaturamentoAnual = "Faixa 2" + "  -  " + fc2SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 3:
                   faixaFaturamentoAnual = "Faixa 3" + "  -  " + fc3SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 4:
                   faixaFaturamentoAnual = "Faixa 4" + "  -  " + fc4SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 5:
                   faixaFaturamentoAnual = "Faixa 5" + "  -  " + fc5SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 6:
                   faixaFaturamentoAnual = "Faixa 6" + "  -  " + fc6SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 7:
                   faixaFaturamentoAnual = "Faixa 7" + "  -  " + fc7SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 8:
                   faixaFaturamentoAnual = "Faixa 8" + "  -  " + fc8SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
            }
        }
        else if(atividadeEconomica == 4) {
            switch (faixaFaturamentoAnual) {
                case 1:
                    faixaFaturamentoAnual = "Faixa 1" + "  -  " + ffs1SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 2:
                    faixaFaturamentoAnual = "Faixa 2" + "  -  " +  ffs2SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 3:
                    faixaFaturamentoAnual = "Faixa 3" + "  -  " +  ffs3SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 4:
                    faixaFaturamentoAnual = "Faixa 4" + "  -  " +  ffs4SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 5:
                    faixaFaturamentoAnual = "Faixa 5" + "  -  " +  ffs5SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 6:
                    faixaFaturamentoAnual = "Faixa 6" + "  -  " +  ffs6SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 7:
                    faixaFaturamentoAnual = "Faixa 7" + "  -  " +  ffs7SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 8:
                    faixaFaturamentoAnual = "Faixa 8" + "  -  " +  ffs8SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
            }
        }
    }

    let resultadoFaturamento = document.getElementById("resultadoFA")
    resultadoFaturamento.innerHTML = faixaFaturamentoAnual;
}

function escreverFuncionarios(faixaFuncionarios, regimeTributario, atividadeEconomica) {
    if(regimeTributario != 3) {
        switch (faixaFuncionarios) {
            case 1:
                faixaFuncionarios =  "Faixa 1" + "  -  " + ff1LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 2:
                faixaFuncionarios =  "Faixa 2" + "  -  " + ff2LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 3:
                faixaFuncionarios =  "Faixa 3" + "  -  " + ff3LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 4:
                faixaFuncionarios =  "Faixa 4" + "  -  " + ff4LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 5:
                faixaFuncionarios =  "Faixa 5" + "  -  " + ff5LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 6:
                faixaFuncionarios =  "Faixa 6" + "  -  " + ff6LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 7:
                faixaFuncionarios =  "Faixa 7" + "  -  " + ff7LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 8:
                faixaFuncionarios =  "Faixa 8" + "  -  " + ff8LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 9:
                faixaFuncionarios =  "Faixa 9" + "  -  " + ff9LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 10:
                faixaFuncionarios =  "Faixa 10" + "  -  " + ff10LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 11:
                faixaFuncionarios =  "Faixa 11" + "  -  " + ff11LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 12:
                faixaFuncionarios =  "Faixa 12" + "  -  " + ff12LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 13:
                faixaFuncionarios =  "Faixa 13" + "  -  " + ff13LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 14:
                faixaFuncionarios =  "Faixa 14" + "  -  " + ff14LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
        }
    }
    else if(regimeTributario == 3){
        if(atividadeEconomica == 1 || atividadeEconomica == 2 || atividadeEconomica == 3){
            switch (faixaFuncionarios) {
                case 1:
                    faixaFuncionarios = "Faixa 1"+ "  -  " + ffc1SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 2:
                    faixaFuncionarios = "Faixa 2" + "  -  "+ ffc2SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 3:
                    faixaFuncionarios = "Faixa 3" + "  -  " + ffc3SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 4:
                    faixaFuncionarios = "Faixa 4" + "  -  " + ffc4SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 5:
                    faixaFuncionarios = "Faixa 5" + "  -  " + ffc5SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 6:
                    faixaFuncionarios = "Faixa 6" + "  -  " + ffc6SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 7:
                    faixaFuncionarios = "Faixa 7" + "  -  " + ffc7SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 8:
                    faixaFuncionarios = "Faixa 8" + "  -  "+ ffc8SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
            }
        }
        else if(atividadeEconomica == 4) {
            switch (faixaFuncionarios) {
                case 1:
                    faixaFuncionarios = "Faixa 1" + "  -  " + ffs1SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 2:
                    faixaFuncionarios = "Faixa 2" + "  -  " +  ffs2SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 3:
                    faixaFuncionarios = "Faixa 3" + "  -  " +  ffs3SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 4:
                    faixaFuncionarios = "Faixa 4" + "  -  " +  ffs4SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 5:
                    faixaFuncionarios = "Faixa 5" + "  -  " +  ffs5SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 6:
                    faixaFuncionarios = "Faixa 6" + "  -  " +  ffs6SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 7:
                    faixaFuncionarios = "Faixa 7" + "  -  " +  ffs7SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 8:
                    faixaFuncionarios = "Faixa 8" + "  -  " +  ffs8SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
            }
        }
    }

    let resultadoFunc= document.getElementById("resultadoFF")
    resultadoFunc.innerHTML = faixaFuncionarios;
}

function escreverNotas(faixaNotas, regimeTributario, atividadeEconomica) {
    if(regimeTributario == 1 || regimeTributario == 2) {
        switch (faixaNotas) {
            case 1:
                faixaNotas = "Faixa 1" + "  -  " +  fn1LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 2:
                faixaNotas = "Faixa 2" + "  -  " +  fn2LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 3:
                faixaNotas = "Faixa 3" + "  -  " +  fn3LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 4:
                faixaNotas = "Faixa 4" + "  -  " +  fn4LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 5:
                faixaNotas = "Faixa 5" + "  -  " +  fn5LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 6:
                faixaNotas = "Faixa 6" + "  -  " +  fn6LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 7:
                faixaNotas = "Faixa 7" + "  -  " +  fn7LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 8:
                faixaNotas = "Faixa 8" + "  -  " +  fn8LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 9:
                faixaNotas = "Faixa 9" + "  -  " +  fn9LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 10:
                faixaNotas = "Faixa 10" + "  -  " +  fn10LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 11:
                faixaNotas = "Faixa 11" + "  -  " +  fn11LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 12:
                faixaNotas = "Faixa 12" + "  -  " +  fn12LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 13:
                faixaNotas = "Faixa 13" + "  -  " +  fn13LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 14:
                faixaNotas = "Faixa 14" + "  -  " +  fn14LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
        }
    }
    else if(regimeTributario == 3){
        if(atividadeEconomica == 1 || atividadeEconomica == 2 || atividadeEconomica == 3 ){
            switch (faixaNotas) {
                case 1:
                    faixaNotas = "Faixa 1" + "  -  " + fnc1SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 2:
                    faixaNotas = "Faixa 2" + "  -  " + fnc2SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 3:
                    faixaNotas = "Faixa 3" + "  -  " + fnc3SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 4:
                    faixaNotas = "Faixa 4" + "  -  " + fnc4SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 5:
                    faixaNotas = "Faixa 5" + "  -  " + fnc5SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 6:
                    faixaNotas = "Faixa 6" + "  -  " + fnc6SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 7:
                    faixaNotas = "Faixa 7" + "  -  " + fnc7SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 8:
                    faixaNotas = "Faixa 8" + "  -  " + fnc8SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
            }
        }
        else if(atividadeEconomica == 4){
            switch (faixaNotas) {
                case 1:
                    faixaNotas = "Faixa 1" + "  -  " + fns1SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 2:
                    faixaNotas = "Faixa 2" + "  -  " + fns2SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 3:
                    faixaNotas = "Faixa 3" + "  -  " + fns3SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 4:
                    faixaNotas = "Faixa 4" + "  -  " + fns4SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 5:
                    faixaNotas = "Faixa 5" + "  -  " + fns5SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 6:
                    faixaNotas = "Faixa 6" + "  -  " + fns6SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 7:
                    faixaNotas = "Faixa 7" + "  -  " + fns7SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 8:
                    faixaNotas = "Faixa 8" + "  -  " + fns8SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
            }
        }
    }

    let resultadoNotas= document.getElementById("resultadoNFM")
    resultadoNotas.innerHTML = faixaNotas;
}

function escreverDoc(faixaDocumentos, regimeTributario, atividadeEconomica) {
    if(regimeTributario == 1 || regimeTributario == 2) {
        switch (faixaDocumentos) {
            case 1:
                faixaDocumentos = "Faixa 1" + "  -  " +  fd1LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 2:
                faixaDocumentos = "Faixa 2" + "  -  " +  fd2LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 3:
                faixaDocumentos = "Faixa 3" + "  -  " +  fd3LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 4:
                faixaDocumentos = "Faixa 4" + "  -  " +  fd4LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 5:
                faixaDocumentos = "Faixa 5" + "  -  " +  fd5LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 6:
                faixaDocumentos = "Faixa 6" + "  -  " +  fd6LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 7:
                faixaDocumentos = "Faixa 7" + "  -  " +  fd7LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 8:
                faixaDocumentos = "Faixa 8" + "  -  " +  fd8LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 9:
                faixaDocumentos = "Faixa 9" + "  -  " +  fd9LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 10:
                faixaDocumentos = "Faixa 10" + "  -  " +  fd10LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 11:
                faixaDocumentos = "Faixa 11" + "  -  " +  fd11LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 12:
                faixaDocumentos = "Faixa 12" + "  -  " +  fd12LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 13:
                faixaDocumentos = "Faixa 13" + "  -  " +  fd13LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
            case 14:
                faixaDocumentos = "Faixa 14" + "  -  " +  fd14LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                break;
        }
    }
    else if(regimeTributario == 3){
        if(atividadeEconomica == 1 || atividadeEconomica == 2 || atividadeEconomica == 3){
            switch (faixaDocumentos) {
                case 1:
                    faixaDocumentos = "Faixa 1" + "  -  " +  fdc1SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 2:
                    faixaDocumentos = "Faixa 2" + "  -  " +  fdc2SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 3:
                    faixaDocumentos = "Faixa 3" + "  -  " +  fdc3SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 4:
                    faixaDocumentos = "Faixa 4" + "  -  " +  fdc4SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 5:
                    faixaDocumentos = "Faixa 5" + "  -  " +  fdc5SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 6:
                    faixaDocumentos = "Faixa 6" + "  -  " +  fdc6SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 7:
                    faixaDocumentos = "Faixa 7" + "  -  " +  fdc7SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 8:
                    faixaDocumentos = "Faixa 8" + "  -  " +  fdc8SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
            }
        }
        else if(atividadeEconomica == 4){
            switch (faixaDocumentos) {
                case 1:
                    faixaDocumentos = "Faixa 1" + "  -  " +  fds1SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 2:
                    faixaDocumentos = "Faixa 2" + "  -  " +  fds2SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 3:
                    faixaDocumentos = "Faixa 3" + "  -  " +  fds3SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 4:
                    faixaDocumentos = "Faixa 4" + "  -  " +  fds4SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 5:
                    faixaDocumentos = "Faixa 5" + "  -  " +  fds5SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 6:
                    faixaDocumentos = "Faixa 6" + "  -  " +  fds6SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 7:
                    faixaDocumentos = "Faixa 7" + "  -  " +  fds7SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
                case 8:
                    faixaDocumentos = "Faixa 8" + "  -  " +  fds8SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    break;
            }
        }
    }
    let resultadoDoc= document.getElementById("resultadoDDM")
    resultadoDoc.innerHTML = faixaDocumentos;
}

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
    regimeTributario.value = "" 
    atividadeEconomica.value = "" 
    beneficioFiscal.value = ""
    desconto.value = ""
    licitacaoS.checked = false
    licitacaoN.checked = false
    document.getElementById("faturamentoAnual").value = ""
    document.getElementById("faixaFuncionarios").value = ""
    document.getElementById("faixaNotas").value = ""
    document.getElementById("faixaDocumentos").value = ""
    document.getElementById("resultado").innerHTML = ""

    let resultadoRegime = document.getElementById("resultadoRegime")
    resultadoRegime.innerHTML = "";

    let resultadoAtv = document.getElementById("resultadoAtv")
    resultadoAtv.innerHTML = "";

    let resultadoLicitacao = document.getElementById("resultadoLicitacao")
    resultadoLicitacao.innerHTML = "";

    let resultadoBeneficio = document.getElementById("resultadoBeneficio")
    resultadoBeneficio.innerHTML = "";

    let resultadoFaturamento = document.getElementById("resultadoFA")
    resultadoFaturamento.innerHTML = "";

    let resultadoFunc= document.getElementById("resultadoFF")
    resultadoFunc.innerHTML = "";

    let resultadoNotas= document.getElementById("resultadoNFM")
    resultadoNotas.innerHTML = "";

    let resultadoDoc= document.getElementById("resultadoDDM")
    resultadoDoc.innerHTML = "";

}



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
    let desconto                = document.getElementById("desconto");

    
    if(parseInt(regimeTributario.value) < 1 || parseInt(regimeTributario.value) > 3 || regimeTributario.value == ""){
        alert("Regime Tributário Inválido")
        regimeTributario.value = ""
        return false
    }
    else if(parseInt(atividadeEconomica.value) < 1 || parseInt(atividadeEconomica.value) > 4 || atividadeEconomica.value == "") {
        alert("Atividade Econômica Inválida")
        atividadeEconomica.value = ""
        return false
    }
    else if(parseInt(beneficioFiscal.value) < 1 || parseInt(beneficioFiscal.value) > 7 || beneficioFiscal.value == ""){
        alert("Benefício Fiscal Inválido")
        beneficioFiscal.value = ""
        return false
    }
    else if(licitacaoS.checked == false && licitacaoN.checked == false){
        alert("Verificar se Possui Licitação")
        return false
    }

    if(parseInt(regimeTributario.value) == 3){
        if(parseInt(beneficioFiscal.value) >= 1 && parseInt(beneficioFiscal.value) <= 6) {
            alert("Não é possível usar Benefício fiscal")
            beneficioFiscal.value = ""
            return false
        }
       else if(parseInt(faixaFaturamentoAnual.value) < 1 || parseInt(faixaFaturamentoAnual.value) > 8 || faixaFaturamentoAnual.value == ""){
            alert("Faixa de Faturamento Inválida para Simples Nacional")
            faixaFaturamentoAnual.value = ""
            return false
        }
       else if(parseInt(faixaFuncionarios.value) < 1 || parseInt(faixaFuncionarios.value) > 8 || faixaFuncionarios.value == ""){
            alert("Faixa de Funcionários Inválida para Simples Nacional")
            faixaFuncionarios.value = ""
            return false
        }
        else if(parseInt(faixaNotas.value) < 1 || parseInt(faixaNotas.value) > 8 || faixaNotas.value == ""){
            alert("Faixa de Notas Inválida para Simples Nacional")
            faixaNotas.value = ""
            return false
        }
        else if(parseInt(faixaDocumentos.value) < 1 || parseInt(faixaDocumentos.value) > 8 || faixaDocumentos.value == "") {
            alert("Faixa de Documentos Inválida para Simples Nacional")
            faixaDocumentos.value = ""
            return false
        }
    }
    else if(parseInt(regimeTributario.value) == 1 || parseInt(regimeTributario.value) == 2){
        if(parseInt(faixaFaturamentoAnual.value) < 1 || parseInt(faixaFaturamentoAnual.value) > 14 || faixaFaturamentoAnual.value == "") {
            alert("Faixa de Faturamento Inválida para Lucro Real / Lucro Presumido")
            faixaFaturamentoAnual.value = ""
            return false
        }
        else if(parseInt(faixaFuncionarios.value) < 1 || parseInt(faixaFuncionarios.value) > 14 || faixaFuncionarios.value == ""){
            alert("Faixa de Funcionários Inválida para Lucro Real / Lucro Presumido")
            faixaFuncionarios.value = ""
            return false
        }
        else if(parseInt(faixaNotas.value) < 1 || parseInt(faixaNotas.value) > 14 || faixaNotas.value == ""){
            alert("Faixa de Notas Inválida para Lucro Real / Lucro Presumido")
            faixaNotas.value = ""
            return false
        }
        else if(parseInt(faixaDocumentos.value) < 1 || parseInt(faixaDocumentos.value) > 14 || faixaDocumentos.value == "") {
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

    console.log(total)

    if(desconto.value > 20) {
        alert("Desconto Indisponível")
        desconto.value = ""
        total = 0
        return false
    }

    if(desconto.value == "" || desconto.value == 0){
        let totalFinal = document.getElementById("resultado")
        totalFinal.innerHTML = total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    }else if(desconto.value > 0 || desconto.value <= 20) {
        desconto = parseInt(desconto.value)
        let descontoValor = total * (desconto/100)
        let totalDescontado = total - descontoValor
        let resultadoDesconto = document.getElementById("resultado")
        resultadoDesconto.innerHTML = `${totalDescontado.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} = ${total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} - ${descontoValor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} `
    }

    escreverRegimeTributario(parseInt(regimeTributario.value))
    escreverAtividadeEconomica(parseInt(atividadeEconomica.value), parseInt(regimeTributario.value))
    escreverLicitacao(licitacao, parseInt(regimeTributario.value))
    escreverBeneficioFiscal(parseInt(regimeTributario.value), parseInt(beneficioFiscal.value))
    escreverFaturamentoAnual(parseInt(faixaFaturamentoAnual.value), parseInt(regimeTributario.value), parseInt(atividadeEconomica.value))
    escreverFuncionarios(parseInt(faixaFuncionarios.value), parseInt(regimeTributario.value), parseInt(atividadeEconomica.value))
    escreverNotas(parseInt(faixaNotas.value), parseInt(regimeTributario.value), parseInt(atividadeEconomica.value))
    escreverDoc(parseInt(faixaDocumentos.value), parseInt(regimeTributario.value), parseInt(atividadeEconomica.value))

    total = 0
})

//DARK MODE
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
