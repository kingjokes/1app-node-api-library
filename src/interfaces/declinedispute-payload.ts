export interface DeclinedisputePayload{
    sesscode:string | number,
    userid:string | number,
    businessid:string | number,
    disputeid:string | number,
    txref:string,
    name:string,
    email:string,
    phone:string,
    claim:string,
    descres:string,
    receipt:File,
}