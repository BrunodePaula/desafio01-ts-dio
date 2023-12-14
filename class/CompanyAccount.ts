import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (getLoanValue: number): void => {
    if(this.validateStatus()){
      this.setBalance(this.balance + getLoanValue)
    }
    console.log(`Voce pegou um empréstimo de ${getLoanValue}`)
  }
}
