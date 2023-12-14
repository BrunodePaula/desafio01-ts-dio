import { DioAccount } from "./DioAccount"

export class UserAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (depositValue : number): void => {
    console.log(depositValue)
    if(this.validateStatus()){
      this.setBalance(depositValue + 10)
      console.log(`Voce depositou: ${depositValue}`)
    }
  }
}
