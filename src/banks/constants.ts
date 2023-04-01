export type BankAccountTypes = 'transaction' | 'savings'
export const BankAccountTypeList: BankAccountType[] = [
    {name: 'Transaction', type: 'transaction'},
    {name: 'Savings', type: 'savings'}
]
export type BankAccountType = {
    name: string,
    type: BankAccountTypes,
}
