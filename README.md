# 1app-node-api-library
1app API node library developed using typescript

 <hr>
 
## Install

This is application can cloned directly or run the command

```sh
$ git clone https://github.com/obounce/1app-node-api-library.git
```

When Cloning is done, use the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm install 
```
this is to install all dependencies.
<br>

Import library

 ```sh
 $ const {OneApp} = require('oneapp-node')
 
 ```
 Instantiate the library and pass your secret key and public key
 
 ```sh
  $  const oneapp = new OneApp({secretKey:'secret key', publicKey:'public key'})
  ```
 ## List of available  API methods samples
 
  * Get account balance
   ```js
    $  oneapp.getBalance()
      .then(response=> console.log(response))
      .catch(e=>console.log(e))
   ```
   
 * Send Money
 ```js
  $ oneapp.sendMoney({
      amount: string | number,
      bankcode: string,
      bankname: string,
      reference: string,
      accountno: string | number,
      narration: any,
      currency: string
      })
      .then(response=>console.log(response))
      .catch(e=>console.log(e))
 ```
 
  * Data Plans
 ```js
  $ oneapp.DataPlans(provider:string).then(response=>console.log(response)).catch(e=>console.log(e))
 ```
 
 * Purchase Data Bundle
 ```js
  $ oneapp.purchaseData({
     datacode: string,
    network_id: string ,
    phoneno: string ,
    reference: string
    }).then(response=>console.log(response))
    .catch(e=>console.log(response)
 ```
 
* Purchase Airtime
 ```js
      oneapp.purchaseAirtime({
        phoneno: string
        network_id: string,
        reference: string,
        amount: number | string,
    }).then(response=>console.log(response))
 ```
 
 * Verify Electricity
 ```js
    oneapp.electricityVerifier(meterno:string|number, provider:string).then(response=>console.log(response)).catch(e=>console.log(e))
 ```
 
 * Buy Electricity
 ```js
    oneapp.purchaseElectricity({
     phoneno: string
     network_id: string,
     reference: string,
     amount: number | string,
    }).then(response=>console.log(response))
 ```
 
  * Get Cable Tv List
 ```js
    oneapp.CableTVPlans(provider:string).then(response=>console.log(response)).catch(e=>console.log(e))
 ```
 
  * Verify IUC
 ```js
    oneapp.verifyCable(provider:string, iuc:string|number).then(response=>console.log(response)).catch(e=>console.log(e))
 ```
 
   * Purchase Cable TV
 ```js
    oneapp.purchaseCableTV({
       tvno: string | number,
       tv: string,
       custname: string,
       custno: string|number,
       amount: string|number,
       reference: string
    }).then(response=>console.log(response))
 ```
 
  * Get the list of all the Banks in Nigeria
 ```js
    oneapp.BankList().then(response=>console.log(response)).catch(e=>console.log(e))
 ```
 



## Web link
 Link to 1app full documentation with sample data: [`1app Documentation`](https://docs.1app.online/)

 

