import {VerifyTransPayload} from "../interfaces/verifyTrans-payload";

const axios = require('axios')
import {CreateFormData} from "../hooks/CreateFormData";
import {baseUrl} from "../interfaces/constants";
import {InitializeTransPayload} from "../interfaces/initializeTrans-payload";
import {AcceptdisputePayload} from "../interfaces/acceptdispute-payload";
import {DeclinedisputePayload} from "../interfaces/declinedispute-payload";

export const initializeTransaction= async(payload:InitializeTransPayload, token:string):Promise<object | any>  =>{
    try{
        return await axios.post(`${baseUrl}business/initiatetrans`,
            CreateFormData(payload),
            {
                headers: {
                    'Authorization': token,
                    'content-type':'multipart/form-data'

                }
            })
    }catch (e:any){
        console.log(e)
        return e.message


    }


}

export const verifyTrans= async(payload:VerifyTransPayload, token:string):Promise<object | any>  =>{
    try{
        return await axios.post(`${baseUrl}business/verifytrans`,
            CreateFormData(payload),
            {
                headers: {
                    'Authorization': token,
                    'content-type':'multipart/form-data'

                }
            })
    }catch (e:any){
        console.log(e)
        return e.message


    }


}

export const getTransactions= async (token:string):Promise<object | any> =>{
    try{
        return await axios.get(`${baseUrl}business/transactions`,
            {
                headers:{
                    'Authorization':token
                }
            })
    }catch (e:any){

        return e.message
    }
}

export const fetchTrans= async(payload:VerifyTransPayload, token:string):Promise<object | any>  =>{
    try{
        return await axios.get(`${baseUrl}business/fetchtrans?reference=${payload.reference}`,
            {
                headers: {
                    'Authorization': token,

                }
            })
    }catch (e:any){
        console.log(e)
        return e.message


    }


}


export const getCustomers= async (token:string):Promise<object | any> =>{
    try{
        return await axios.get(`${baseUrl}business/customers`,
            {
                headers:{
                    'Authorization':token
                }
            })
    }catch (e:any){

        return e.message
    }
}

export const getPayouts= async (token:string):Promise<object | any> =>{
    try{
        return await axios.get(`${baseUrl}business/payouts`,
            {
                headers:{
                    'Authorization':token
                }
            })
    }catch (e:any){

        return e.message
    }
}

export const getSettlementDetails= async (payload:VerifyTransPayload, token:string):Promise<object | any> =>{
    try{
        return await axios.get(`${baseUrl}business/payout-transactions?payoutref=${payload.reference}`,
            {
                headers:{
                    'Authorization':token
                }
            })
    }catch (e:any){

        return e.message
    }
}

export const getDisputes= async (token:string):Promise<object | any> =>{
    try{
        return await axios.get(`${baseUrl}business/disputes`,
            {
                headers:{
                    'Authorization':token
                }
            })
    }catch (e:any){

        return e.message
    }
}

export const acceptDispute= async(payload:AcceptdisputePayload, token:string):Promise<object | any>  =>{
    try{
        return await axios.post(`${baseUrl}business/accept-dispute`,
            CreateFormData(payload),
            {
                headers: {
                    'Authorization': token,
                    'content-type':'multipart/form-data'

                }
            })
    }catch (e:any){
        console.log(e)
        return e.message


    }


}

export const declineDispute= async(payload:DeclinedisputePayload, token:string):Promise<object | any>  =>{
    try{
        return await axios.post(`${baseUrl}business/decline-dispute`,
            CreateFormData(payload),
            {
                headers: {
                    'Authorization': token,
                    'content-type':'multipart/form-data'

                }
            })
    }catch (e:any){
        console.log(e)
        return e.message


    }


}



