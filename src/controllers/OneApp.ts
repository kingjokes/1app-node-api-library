
import {Header} from "../interfaces/header";
import {balance} from "../services/balance";
import {
    processPayment,
    getDataPlans,
    processDataPurchase,
    processAirtime,
    verifyElectricity,
    processElectricity, getCable, findIUC, processCable, getBankList
} from "../services/bills";
import {SendmoneyPayload} from "../interfaces/sendmoney-payload";
import {DatapurchasePayload} from "../interfaces/datapurchase-payload";
import {AirtimepurchasePayload} from "../interfaces/airtimepurchase-payload";
import {ElectricityPayload} from "../interfaces/electricity-payload";
import {CabletvPayload} from "../interfaces/cabletv-payload";


export  class OneApp {

    private readonly token:Header
    private readonly publicToken:string
    private readonly secretToken:string



    constructor(token:Header) {
        this.token=token
        this.publicToken = `Bearer ${this.token.publicKey}`
        this.secretToken = `Bearer ${this.token.secretKey}`
        console.log(this.token)
    }

    public getTokens(){
        return this.token
    }

    public async getBalance(){

        return await  balance(this.secretToken)
            .then(response=>response.data)
    }

    public async sendMoney(payload:SendmoneyPayload){
        return await processPayment(payload,this.secretToken)
            .then(response=>response.data)
    }

    public async DataPlans(provider:string){

        return await  getDataPlans(provider,this.publicToken)
            .then(response=>response.data)
    }

    public async purchaseData(payload:DatapurchasePayload){
        return await processDataPurchase(payload,this.secretToken)
            .then(response=>response.data)
    }

    public async purchaseAirtime(payload:AirtimepurchasePayload){
        return await processAirtime(payload,this.secretToken)
            .then(response=>response.data)
    }

    public async electricityVerifier(meterno:string|number, provider:string){
        return await  verifyElectricity(meterno,provider,this.publicToken)
            .then(response=>response.data)
    }

    public async purchaseElectricity(payload:ElectricityPayload){
        return await processElectricity(payload,this.secretToken)
            .then(response=>response.data)
    }

    public async CableTVPlans(provider:string){

        return await  getCable(provider,this.publicToken)
            .then(response=>response.data)
    }

    public async verifyCable(provider:string, iuc:string|number){

        return await  findIUC(provider,iuc,this.publicToken)
            .then(response=>response.data)
    }

    public async purchaseCableTV(payload:CabletvPayload){
        return await processCable(payload,this.secretToken)
            .then(response=>response.data)
    }

    public async BankList(){

        return await  getBankList(this.publicToken)
            .then(response=>response.data)
    }

}

export const testing = () => 'I am working'