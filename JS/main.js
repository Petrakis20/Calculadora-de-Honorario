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





let total = 0;

//FUNÇÕES PARA ESCREVER O RESULTADO NA TELA
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
                atividadeEconomica =  atvIndustriaLPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -   " +"Indústria";
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
                atividadeEconomica = atvIndustriaSN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})  + "  -   " +"Indústria";
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
            case 0:
                beneficioFiscal = "Não Possui" 
                break;
            case 1:
                beneficioFiscal = rioLog.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "RioLog";
                break;
            case 2:
                beneficioFiscal = cartilhaModa.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Cartilha da Moda";
                break;
            case 3:
                beneficioFiscal = compete.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Compete";
                break;
            case 4:
                beneficioFiscal = leiInd.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Lei 6979(Indústria)";
                break;
            case 5:
                beneficioFiscal = farmacos.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Fármacos";
                break;
            case 6:
                beneficioFiscal = outrosF.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " +  "Outros";
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
                licitacao = licitacaoL.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Sim";
                break;
            case 2:
                licitacao = "Não"
                break;
        }
    }
    else if(regimeTributario == 3) {
        switch (licitacao) {
            case 1:
                licitacao = licitacaoSimples.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Sim";
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
                faixaFaturamentoAnual =fa1LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " +  "Faixa 1";
                break;
            case 2:
                faixaFaturamentoAnual =fa2LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " +  "Faixa 2";
                break;
            case 3:
                faixaFaturamentoAnual =fa3LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " +  "Faixa 3";
                break;
            case 4:
                faixaFaturamentoAnual =fa4LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " +  "Faixa 4";
                break;
            case 5:
                faixaFaturamentoAnual =fa5LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " +  "Faixa 5";
                break;
            case 6:
                faixaFaturamentoAnual =fa6LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " +  "Faixa 6";
                break;
            case 7:
                faixaFaturamentoAnual =fa7LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " +  "Faixa 7";
                break;
            case 8:
                faixaFaturamentoAnual =fa8LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " +  "Faixa 8";
                break;
            case 9:
                faixaFaturamentoAnual =fa9LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " +  "Faixa 9";
                break;
            case 10:
                faixaFaturamentoAnual =fa10LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " +  "Faixa 10";
                break;
            case 11:
                faixaFaturamentoAnual =fa11LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " +  "Faixa 11";
                break;
            case 12:
                faixaFaturamentoAnual =fa12LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " +  "Faixa 12";
                break;
            case 13:
                faixaFaturamentoAnual =fa13LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " +  "Faixa 13";
                break;
            case 14:
                faixaFaturamentoAnual =fa14LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " +  "Faixa 14";
                break;
        }
    }
    else if(regimeTributario == 3){
        if(atividadeEconomica == 1){
            switch (faixaFaturamentoAnual) {
                case 1:
                    faixaFaturamentoAnual = fc1SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})+ "  -  "  + "Faixa 1" ;
                    break;
                case 2:
                    faixaFaturamentoAnual = fc2SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})+ "  -  " + "Faixa 2" ;
                    break;
                case 3:
                    faixaFaturamentoAnual = fc3SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})+ "  -  " + "Faixa 3" ;
                    break;
                case 4:
                    faixaFaturamentoAnual = fc4SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})+ "  -  " + "Faixa 4" ;
                    break;
                case 5:
                    faixaFaturamentoAnual = fc5SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})+ "  -  " + "Faixa 5" ;
                    break;
                case 6:
                    faixaFaturamentoAnual = fc6SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})+ "  -  " + "Faixa 6" ;
                    break;
                case 7:
                    faixaFaturamentoAnual = fc7SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})+ "  -  " + "Faixa 7" ;
                    break;
                case 8:
                    faixaFaturamentoAnual = fc8SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})+ "  -  " + "Faixa 8" ;
                    break;
            }
        }
        else if(atividadeEconomica == 2 || atividadeEconomica == 3) {
            switch (faixaFaturamentoAnual) {
                case 1:
                   faixaFaturamentoAnual =fc1SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " +  "Faixa 1";
                    break;
                case 2:
                   faixaFaturamentoAnual =fc2SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " +  "Faixa 2";
                    break;
                case 3:
                   faixaFaturamentoAnual =fc3SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " +  "Faixa 3";
                    break;
                case 4:
                   faixaFaturamentoAnual =fc4SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " +  "Faixa 4";
                    break;
                case 5:
                   faixaFaturamentoAnual =fc5SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " +  "Faixa 5";
                    break;
                case 6:
                   faixaFaturamentoAnual =fc6SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " +  "Faixa 6";
                    break;
                case 7:
                   faixaFaturamentoAnual =fc7SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " +  "Faixa 7";
                    break;
                case 8:
                   faixaFaturamentoAnual =fc8SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " +  "Faixa 8";
                    break;
            }
        }
        else if(atividadeEconomica == 4) {
            switch (faixaFaturamentoAnual) {
                case 1:
                    faixaFaturamentoAnual =ffs1SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})  + "  -  " + "Faixa 1";
                    break;
                case 2:
                    faixaFaturamentoAnual = ffs2SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})  + "  -  " + "Faixa 2";
                    break;
                case 3:
                    faixaFaturamentoAnual = ffs3SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})  + "  -  " + "Faixa 3";
                    break;
                case 4:
                    faixaFaturamentoAnual = ffs4SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})  + "  -  " + "Faixa 4";
                    break;
                case 5:
                    faixaFaturamentoAnual = ffs5SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})  + "  -  " + "Faixa 5";
                    break;
                case 6:
                    faixaFaturamentoAnual = ffs6SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})  + "  -  " + "Faixa 6";
                    break;
                case 7:
                    faixaFaturamentoAnual = ffs7SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})  + "  -  " + "Faixa 7";
                    break;
                case 8:
                    faixaFaturamentoAnual = ffs8SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})  + "  -  " + "Faixa 8";
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
                faixaFuncionarios =ff1LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})   + "  -  " + "Faixa 1";
                break;
            case 2:
                faixaFuncionarios =ff2LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})   + "  -  " + "Faixa 2";
                break;
            case 3:
                faixaFuncionarios =ff3LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})   + "  -  " + "Faixa 3";
                break;
            case 4:
                faixaFuncionarios =ff4LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})   + "  -  " + "Faixa 4";
                break;
            case 5:
                faixaFuncionarios =ff5LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})   + "  -  " + "Faixa 5";
                break;
            case 6:
                faixaFuncionarios =ff6LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})   + "  -  " + "Faixa 6";
                break;
            case 7:
                faixaFuncionarios =ff7LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})   + "  -  " + "Faixa 7";
                break;
            case 8:
                faixaFuncionarios =ff8LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})   + "  -  " + "Faixa 8";
                break;
            case 9:
                faixaFuncionarios =ff9LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})   + "  -  " + "Faixa 9";
                break;
            case 10:
                faixaFuncionarios =ff10LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})   + "  -  " + "Faixa 10";
                break;
            case 11:
                faixaFuncionarios =ff11LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})   + "  -  " + "Faixa 11";
                break;
            case 12:
                faixaFuncionarios =ff12LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})   + "  -  " + "Faixa 12";
                break;
            case 13:
                faixaFuncionarios =ff13LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})   + "  -  " + "Faixa 13";
                break;
            case 14:
                faixaFuncionarios =ff14LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})   + "  -  " + "Faixa 14";
                break;
        }
    }
    else if(regimeTributario == 3){
        if(atividadeEconomica == 1 || atividadeEconomica == 2 || atividadeEconomica == 3){
            switch (faixaFuncionarios) {
                case 1:
                    faixaFuncionarios = ffc1SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + " -  " + "Faixa 1" ;
                    break;
                case 2:
                    faixaFuncionarios = ffc2SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 2";
                    break;
                case 3:
                    faixaFuncionarios = ffc3SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " +  "Faixa 3";
                    break;
                case 4:
                    faixaFuncionarios =ffc4SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " +  "Faixa 4";
                    break;
                case 5:
                    faixaFuncionarios =ffc5SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " +  "Faixa 5";
                    break;
                case 6:
                    faixaFuncionarios =ffc6SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " +  "Faixa 6";
                    break;
                case 7:
                    faixaFuncionarios =ffc7SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " +  "Faixa 7";
                    break;
                case 8:
                    faixaFuncionarios =ffc8SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " +  "Faixa 8";
                    break;
            }
        }
        else if(atividadeEconomica == 4) {
            switch (faixaFuncionarios) {
                case 1:
                    faixaFuncionarios =ffs1SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " +  "Faixa 1";
                    break;
                case 2:
                    faixaFuncionarios = ffs2SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " +  "Faixa 2";
                    break;
                case 3:
                    faixaFuncionarios = ffs3SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " +  "Faixa 3";
                    break;
                case 4:
                    faixaFuncionarios = ffs4SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " +  "Faixa 4";
                    break;
                case 5:
                    faixaFuncionarios = ffs5SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " +  "Faixa 5";
                    break;
                case 6:
                    faixaFuncionarios = ffs6SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " +  "Faixa 6";
                    break;
                case 7:
                    faixaFuncionarios = ffs7SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " +  "Faixa 7";
                    break;
                case 8:
                    faixaFuncionarios = ffs8SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " +  "Faixa 8";
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
                faixaNotas =  fn1LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 1";
                break;
            case 2:
                faixaNotas =  fn2LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 2";
                break;
            case 3:
                faixaNotas =  fn3LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 3";
                break;
            case 4:
                faixaNotas =  fn4LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 4";
                break;
            case 5:
                faixaNotas =  fn5LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 5";
                break;
            case 6:
                faixaNotas =  fn6LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 6";
                break;
            case 7:
                faixaNotas =  fn7LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 7";
                break;
            case 8:
                faixaNotas =  fn8LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 8";
                break;
            case 9:
                faixaNotas =  fn9LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 9";
                break;
            case 10:
                faixaNotas =  fn10LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 10";
                break;
            case 11:
                faixaNotas =  fn11LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 11";
                break;
            case 12:
                faixaNotas =  fn12LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 12";
                break;
            case 13:
                faixaNotas =  fn13LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 13";
                break;
            case 14:
                faixaNotas =  fn14LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 14";
                break;
        }
    }
    else if(regimeTributario == 3){
        if(atividadeEconomica == 1 || atividadeEconomica == 2 || atividadeEconomica == 3 ){
            switch (faixaNotas) {
                case 1:
                    faixaNotas = fnc1SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 1";
                    break;
                case 2:
                    faixaNotas = fnc2SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 2";
                    break;
                case 3:
                    faixaNotas = fnc3SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 3";
                    break;
                case 4:
                    faixaNotas = fnc4SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 4";
                    break;
                case 5:
                    faixaNotas = fnc5SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 5";
                    break;
                case 6:
                    faixaNotas = fnc6SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 6";
                    break;
                case 7:
                    faixaNotas = fnc7SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 7";
                    break;
                case 8:
                    faixaNotas = fnc8SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 8";
                    break;
            }
        }
        else if(atividadeEconomica == 4){
            switch (faixaNotas) {
                case 1:
                    faixaNotas = fns1SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 1";
                    break;
                case 2:
                    faixaNotas = fns2SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 2";
                    break;
                case 3:
                    faixaNotas = fns3SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 3";
                    break;
                case 4:
                    faixaNotas = fns4SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 4";
                    break;
                case 5:
                    faixaNotas = fns5SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 5";
                    break;
                case 6:
                    faixaNotas = fns6SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 6";
                    break;
                case 7:
                    faixaNotas = fns7SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 7";
                    break;
                case 8:
                    faixaNotas = fns8SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 8";
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
                faixaDocumentos =  fd1LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})+ "  -  " + "Faixa 1";
                break;
            case 2:
                faixaDocumentos =  fd2LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})+ "  -  " + "Faixa 2";
                break;
            case 3:
                faixaDocumentos =  fd3LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})+ "  -  " + "Faixa 3";
                break;
            case 4:
                faixaDocumentos =  fd4LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})+ "  -  " + "Faixa 4";
                break;
            case 5:
                faixaDocumentos =  fd5LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})+ "  -  " + "Faixa 5";
                break;
            case 6:
                faixaDocumentos =  fd6LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})+ "  -  " + "Faixa 6";
                break;
            case 7:
                faixaDocumentos =  fd7LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})+ "  -  " + "Faixa 7";
                break;
            case 8:
                faixaDocumentos =  fd8LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})+ "  -  " + "Faixa 8";
                break;
            case 9:
                faixaDocumentos =  fd9LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})+ "  -  " + "Faixa 9" ;
                break;
            case 10:
                faixaDocumentos =  fd10LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})+ "  -  " + "Faixa 10" ;
                break;
            case 11:
                faixaDocumentos = fd11LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})+ "  -  " + "Faixa 11";
                break;
            case 12:
                faixaDocumentos =  fd12LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})+ "  -  " + "Faixa 12";  
                break;
            case 13:
                faixaDocumentos =  fd13LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})+ "  -  " + "Faixa 13";  
                break;
            case 14:
                faixaDocumentos =  fd14LPLR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})+ "  -  " + "Faixa 14";  
                break;
        }
    }
    else if(regimeTributario == 3){
        if(atividadeEconomica == 1 || atividadeEconomica == 2 || atividadeEconomica == 3){
            switch (faixaDocumentos) {
                case 1:
                    faixaDocumentos =  fdc1SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 1";
                    break;
                case 2:
                    faixaDocumentos =  fdc2SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 2";
                    break;
                case 3:
                    faixaDocumentos =  fdc3SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 3";
                    break;
                case 4:
                    faixaDocumentos =  fdc4SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 4";
                    break;
                case 5:
                    faixaDocumentos =  fdc5SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 5";
                    break;
                case 6:
                    faixaDocumentos =  fdc6SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 6";
                    break;
                case 7:
                    faixaDocumentos =  fdc7SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 7";
                    break;
                case 8:
                    faixaDocumentos =  fdc8SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 8";
                    break;
            }
        }
        else if(atividadeEconomica == 4){
            switch (faixaDocumentos) {
                case 1:
                    faixaDocumentos =  fds1SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 1";
                    break;
                case 2:
                    faixaDocumentos =  fds2SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 2";
                    break;
                case 3:
                    faixaDocumentos =  fds3SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 3";
                    break;
                case 4:
                    faixaDocumentos =  fds4SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 4";
                    break;
                case 5:
                    faixaDocumentos =  fds5SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 5";
                    break;
                case 6:
                    faixaDocumentos =  fds6SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 6";
                    break;
                case 7:
                    faixaDocumentos =  fds7SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 7";
                    break;
                case 8:
                    faixaDocumentos =  fds8SN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "  -  " + "Faixa 8";
                    break;
            }
        }
    }
    let resultadoDoc= document.getElementById("resultadoDDM")
    resultadoDoc.innerHTML = faixaDocumentos;
}
//---------------------------------------------------------//

//FUNÇÕES DE CÁLCULO
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
//---------------------------------------------------------//
//FUNÇÃO PARA ZERAR A CALCULADORA
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
//---------------------------------------------------------//

//VALIDAÇÃO DO FORMULÁRIO

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

    
    if(parseInt(atividadeEconomica.value) < 1 || parseInt(atividadeEconomica.value) > 4 || atividadeEconomica.value == "") {
        alert("Atividade Econômica Inválida")
        atividadeEconomica.value = ""
        return false
    }
    else if(parseInt(regimeTributario.value) < 1 || parseInt(regimeTributario.value) > 3 || regimeTributario.value == ""){
        alert("Regime Tributário Inválido")
        regimeTributario.value = ""
        return false
    }
    else if(parseInt(beneficioFiscal.value) < 0 || parseInt(beneficioFiscal.value) > 6 || beneficioFiscal.value == ""){
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

    if(desconto.value > 10) {
        alert("Desconto Indisponível")
        desconto.value = ""
        total = 0
        return false
    }

    if(desconto.value == "" || desconto.value == 0){
        let markup = (0.35 * total)
        let totalFinal = document.getElementById("resultado")
        total = total + markup;
        totalFinal.innerHTML = total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    }
    else if(desconto.value > 0 || desconto.value <= 10) {
        desconto = parseInt(desconto.value)
        let markup = (0.35 * total)
        total = total + markup;
        let descontoValor = total * (desconto/100)
        let totalDescontado = total - descontoValor
        let resultadoDesconto = document.getElementById("resultado")
        resultadoDesconto.innerHTML = `${total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} - ${descontoValor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} = ${totalDescontado.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
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
//---------------------------------------------------------//


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