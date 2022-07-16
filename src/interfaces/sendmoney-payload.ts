
export interface SendmoneyPayload{
    amount: string | number,
    bankcode: string,
    bankname: string,
    reference: string,
    accountno: string | number,
    narration: any,
    currency: string
}