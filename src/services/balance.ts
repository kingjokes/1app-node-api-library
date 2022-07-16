const  axios = require('axios')



export const balance= async (token:string):Promise<object | any> => {

    try{
        return await axios.get('https://api.1app.online/v1/balance', {
            headers:{
                'Authorization':token,

            }
        })
    }catch (e:any){
        console.log(e)
        return e.message


    }


}