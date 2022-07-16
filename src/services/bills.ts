
import {SendmoneyPayload} from "../interfaces/sendmoney-payload";
const  axios = require('axios')
import {DatapurchasePayload} from "../interfaces/datapurchase-payload";
import {CreateFormData} from "../hooks/CreateFormData";
import {AirtimepurchasePayload} from "../interfaces/airtimepurchase-payload";
import {ElectricityPayload} from "../interfaces/electricity-payload";
import {CabletvPayload} from "../interfaces/cabletv-payload";


export const processPayment = async (details:SendmoneyPayload,token:string):Promise<object | any> =>{

    try{

        return await axios.post('https://api.1app.online/v1/sendmoney',
            CreateFormData(details),
            {
            headers:{
                'Authorization':token,
                'content-type':'multipart/form-data'
            }
        })
    }catch (e:any){
        console.log(e.message)
        return e.message
    }

}

export const processDataPurchase = async (details:DatapurchasePayload,token:string):Promise<object | any> => {

    try {

        return await axios.post('https://api.1app.online/v1/databundle',
            CreateFormData(details),
            {
                headers: {
                    'Authorization': token,
                    'content-type':'multipart/form-data'
                }
            })
    } catch (e: any) {
        console.log(e.message)
        return e.message
    }

}

export const processAirtime = async (details:AirtimepurchasePayload, token:string):Promise<object | any> => {

    try {

        return await axios.post('https://api.1app.online/v1/airtime',
            CreateFormData(details),
            {
                headers: {
                    'Authorization': token,
                    'content-type':'multipart/form-data'
                }
            })
    } catch (e: any) {
        console.log(e.message)
        return e.message
    }

}

export const processElectricity = async (details:ElectricityPayload, token:string):Promise<object | any> => {

    try {

        return await axios.post('https://api.1app.online/v1/electricity',
            CreateFormData(details),
            {
                headers: {
                    'Authorization': token,
                    'content-type':'multipart/form-data'
                }
            })
    } catch (e: any) {
        console.log(e.message)
        return e.message
    }

}

export const processCable = async (details:CabletvPayload, token:string):Promise<object | any> => {

    try {

        return await axios.post('https://api.1app.online/v1/cabletv',
            CreateFormData(details),
            {
                headers: {
                    'Authorization': token,
                    'content-type':'multipart/form-data'
                }
            })
    } catch (e: any) {
        console.log(e.message)
        return e.message
    }

}

export const getDataPlans= async (provider:string ,token:string):Promise<object | any> =>{
    try{
        return await axios.get(`https://api.1app.online/v1/getdataplans?provider=${provider}`,
            {
                headers:{
                    'Authorization':token
                }
            })
    }catch (e:any){

        return e.message
    }
}

export const getBankList= async (token:string):Promise<object | any> =>{
    try{
        return await axios.get(`https://api.1app.online/v1/listbanks`,
            {
                headers:{
                    'Authorization':token
                }
            })
    }catch (e:any){

        return e.message
    }
}

export const getCable= async (provider:string ,token:string):Promise<object | any> =>{
    try{
        return await axios.get(`https://api.1app.online/v1/listcabletv?tv=${provider}`,
            {
                headers:{
                    'Authorization':token
                }
            })
    }catch (e:any){

        return e.message
    }
}

export const findIUC= async (provider:string,iuc:string| number,token:string):Promise<object | any> =>{
    try{
        return await axios.get(`https://api.1app.online/v1/verifycable?type=${provider}&iuc=${iuc}`,
            {
                headers:{
                    'Authorization':token
                }
            })
    }catch (e:any){

        return e.message
    }
}

export const verifyElectricity= async (meterno:string|number ,provider:string, token:string):Promise<object | any> =>{
    try{
        return await axios.get(`https://api.1app.online/v1/verifyelect?meterno=${meterno}&provider=${provider}`,
            {
                headers:{
                    'Authorization':token
                }
            })
    }catch (e:any){

        return e.message
    }
}



