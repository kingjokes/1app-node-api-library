export interface AcceptdisputePayload {
    sesscode: string | number,
    userid: string | number,
    businessid: string |number,
    disputeid: number,
    transref: string,
    customername: string,
    customeremail: string,
    customerphone: string,
    dclaim: string,
    torefund: string,

}