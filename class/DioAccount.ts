export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (depositValue : number): void => {
    if(this.validateStatus()){
      this.setBalance(depositValue)
      console.log(`Voce depositou: ${depositValue}`)
    }
  }

  withdraw = (withdrawValue:number): void => {
    if(this.validateStatus() && this.balance > withdrawValue){
      this.setBalance(this.balance - withdrawValue)
    }
    console.log(`Voce sacou: ${withdrawValue}`)
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  setBalance = (balance: number): void => {
    this.balance = balance
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

}
