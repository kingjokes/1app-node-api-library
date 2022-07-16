const FormData = require('form-data')


export const CreateFormData = (payload:any):any =>{

    let formData = new FormData()
   for(const item in payload){
       formData.append(item, payload[item])
   }

    return formData
}