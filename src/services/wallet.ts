
const axios = require('axios')
import {CreateFormData} from "../hooks/CreateFormData";
import {baseUrl} from "../interfaces/constants";
import {WalletPayload} from "../interfaces/wallet-payload";


export const createUserWallet= async (payload:WalletPayload, token:string):Promise<object | any> =>{
    try{
        return await axios.post(`${baseUrl}business/createwallet`,
            CreateFormData(payload),
            {
                headers:{
                    'Authorization':token
                }
            })
    }catch (e:any){
        console.log(e.message)
        return e.message
    }
}