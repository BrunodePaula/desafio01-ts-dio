import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { UserAccount } from './class/UserAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
const companyAccount: CompanyAccount = new CompanyAccount('DIO 1', 20)
const userAccount: UserAccount = new UserAccount('DIO 2', 20)

peopleAccount.deposit(200)
peopleAccount.withdraw(150)

companyAccount.deposit(200)
companyAccount.getLoan(200)

companyAccount.deposit(200)

userAccount.deposit(200)