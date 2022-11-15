const  axios = require('axios')



export const balance= async (token:string):Promise<object | any> => {

    try{
        return await axios.get('https://api.oneappgo.com/v1/balance', {
            headers:{
                'Authorization':token,

            }
        })
    }catch (e:any){
        console.log(e)
        return e.message


    }


}