<br>
<div style="margin:0 auto!important;text-align: center">
<img style="width:200px; height: 100px" src="https://new.1app.online/img/1appnewlogo.8e95dfd0.png">
</div>

# 1APP NodeJS Library


Learn how to integrate our APIs to build a web or mobile integration to accept payments, make payment of Bills and as well custom integration for your application and businesses.
On this page, we'll go over some  payment services we offer to give you a quick overview of what is obtainable with 1app.
<br><br>
<b style='font-size:16px'>Payment Collection</b>
<p>
If you're a business owner, here are a few ways we make it possible for you to collect payments from customers all over the world:
Direct Bank Account Payments (Nigeria) - Customers can pay you directly from their bank accounts.
</p>
<b style='font-size:16px'>Tokenized Payments</b>
<p>This is a feature that allows you to save a customer object on your platform so your users don't have to enter their card information repeatedly.
</p>
<b style='font-size:16px'>Transfers</b>
<p>With 1app, you can make transfers to over 6+ African countries. This is a growing list that currently includes the US and Europe. We offer this feature via the dashboard and also via API for financial service providers, merchants, marketplaces etc.
</p>
<b style='font-size:16px'>Bill Payments with 1app:</b>
<p>You can aggregate bill services such as airtime and data purchases and DSTV subscriptions. You get a commission for each sale and you can view your reports on a dashboard.
</p>

 <hr>
 
## Install

This  application can be cloned directly or run the command

```sh
 $  npm i oneapp-node
```


Import library
 ```js
  const {OneApp} = require('oneapp-node')
 ```
 <span style='font-size:16px'>Instantiate the library and pass your secret key and public key</span>
<p>
For testing purposes, Use our test API Keys and for production, use our live API KEYS.
You can get your PUBLIC_KEY and SECRET_KEY from the 1APP dashboard.
<br>
Click <a href="https://1app.online">here</a> to access your API Keys .
Toggle on <b>test mode</b> to get TEST API KEYS and Toggle on to <b>live mode</b> to get LIVE API KEYS
</p>
 
 ```js
   const oneapp = new OneApp({secretKey:'secret_key', publicKey:'public_key'})
  ```
 ## List of available  API methods samples

 ### ```Get account balance```
   ```js
      const oneapp = new OneApp({secretKey:'1apptest_sk_********', publicKey:'1apptest_pb_********'})
      oneapp.getBalance()
      .then(response=> console.log(response))
      .catch(e=>console.log(e))
   ```

### ```Send Money```
 ```js
   const oneapp = new OneApp({secretKey:'secret_key', publicKey:'public_key'})

    //Expected payload for sendmoney
       oneapp.sendMoney({
           amount: string | number,
           bankcode: string,
           bankname: string,
           reference: string,
           accountno: string | number,
           acctname: string,
           narration: any,
           currency: string
       })
          .then(response=>console.log(response))
          .catch(e=>console.log(e))

    // sample code
        oneapp.sendMoney({
            amount: 10000,
            bankcode: '000013',
            bankname: 'GT BANK',
            reference: 'shudgyutg876542',
            accountno: '0245000000',
            acctname: 'Olajide Olajide',
            narration: 'Transer to client',
            currency: 'NGN'
        })
        .then(response=>console.log(response))
        .catch(e=>console.log(e))
    

    
 ```

### ```Data Plans```
 ```js
    const oneapp = new OneApp({secretKey:'secret_key', publicKey:'public_key'})

    //Expected payload for data plans
    oneapp.DataPlans(provider:string).then(response=>console.log(response)).catch(e=>console.log(e))
    
    //sample code
    const provider = 'MTN' || 'AIRTEL' || 'GLO' || '9MOBILE' //use any of these providers
    oneapp.DataPlans(provider).then(response=>console.log(response)).catch(e=>console.log(e))
 ```

### ```Purchase Data Bundle```
 ```js
     const oneapp = new OneApp({secretKey:'secret_key', publicKey:'public_key'})
    
    //Expected payload for data bundle purchase
      oneapp.purchaseData({
          datacode: string,
          network_id: string,
          phoneno: string,
          reference: string
      })
          .then(response=>console.log(response))
        .catch(e=>console.log(response))
    
    //sample code
    oneapp.purchaseData({
        datacode: '1000',
        network_id: '2',
        phoneno: '07012345678',
        reference: 'DJIEJ2MEUE2EN34'
    }).then(response=>console.log(response))
 ```
 
### ```Purchase Airtime```
 ```js
     const oneapp = new OneApp({secretKey:'secret_key', publicKey:'public_key'})

    //Expected payload for airtime purchase
      oneapp.purchaseAirtime({
        phoneno: string,
        network_id: string,
        reference: string,
        amount: number | string,
    }).then(response=>console.log(response))

    //sample code
    // Network ID - MTN = 2,  GLO = 1, AIRTEL = 3, 9MOBILE = 4
    oneapp.purchaseAirtime({
        'phoneno': '07012345678',
        'network_id': '2',
        'reference': 'O4I3U8SRNYOIYT',
        'amount': '200'
    }).then(response=>console.log(response))
 ```

### ```Verify Electricity```
 ```js
     const oneapp = new OneApp({secretKey:'secret_key', publicKey:'public_key'})
    
    //Expected payload to verify electricity meter
    oneapp.electricityVerifier(meterno:string|number, provider:string)
    .then(response=>console.log(response))
    .catch(e=>console.log(e))
    
    //sample code
    oneapp.electricityVerifier('015900062628','IBADAN')
        .then(response=>console.log(response))
        .catch(e=>console.log(e))
 ```
 
### ```Buy Electricity```
 ```js
  const oneapp = new OneApp({secretKey:'secret_key', publicKey:'public_key'})

    //Expected payload to purchase electricity unit
    oneapp.purchaseElectricity({
        meterno: string | number,
        metername: string,
        provider: string,
        amount: string | number,
        vendtype: string
    }).then(response=>console.log(response)).catch(e=>console.log(e))
    
    //sample code
    oneapp.purchaseElectricity({
        'meterno': '62320094725',
        'metername': 'BRAHIM MARY OPE',
        'provider': 'IBADAN',
        'amount': '1000',
        'vendtype': 'PREPAID'
    }).then(response=>console.log(response))
 ```
 
### ```Get Cable Tv List```
 ```js
     const oneapp = new OneApp({secretKey:'secret_key', publicKey:'public_key'})
    
    //Expected payload to get cable tv list
    oneapp.CableTVPlans(provider:string)
    .then(response=>console.log(response))
    .catch(e=>console.log(e))
K;
    //sample code
    const provider = 'DSTV' || 'GOTV' || 'STARTIMES' //supported Cable Tv providers
    oneapp.CableTVPlans('DSTV')
        .then(response=>console.log(response))
        .catch(e=>console.log(e))
 ```
 
### ```Verify IUC```
 ```js
    const oneapp = new OneApp({secretKey:'secret_key', publicKey:'public_key'})
    
    //Expected payload to get verify IUC 
    oneapp.verifyCable(provider:string, iuc:string|number)
    .then(response=>console.log(response))
    .catch(e=>console.log(e))
    
    //sample code
    const provider = 'DSTV' || 'GOTV' || 'STARTIMES'  //supported Cable Tv providers
    oneapp.verifyCable('DSTV','7028914928')
        .then(response=>console.log(response))
        .catch(e=>console.log(e))

 ```
 
### ```Purchase Cable TV```
 ```js
   const oneapp = new OneApp({secretKey:'secret_key', publicKey:'public_key'})

    //Expected payload to purchase cable tv
    oneapp.purchaseCableTV({
       tvno: string | number,
       tv: string,
       custname: string,
       custno: string|number,
       amount: string|number,
       reference: string
    }).then(response=>console.log(response))

    //sample code
    oneapp.purchaseCableTV({
        tvno: '7528393100',
        tv: 'GOTV', //providers listed above
        custname: 'IBRAHIM MARY OPE',
        custno: '376946518',
        amount: '100',
        reference: 'OI8UYTEFYDTYTG7'
    }).then(response=>console.log(response))
 ```
 
 ### ```Bank List```
 ```js
     const oneapp = new OneApp({secretKey:'secret_key', publicKey:'public_key'})

    oneapp.BankList().then(response=>console.log(response)).catch(e=>console.log(e))
 ```
 



## Web link
 Link to 1app full documentation with sample data: [`1app Documentation`](https://docs.1app.online/)

 

