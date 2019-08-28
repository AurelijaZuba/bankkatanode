import {IAccountService} from "./IAccountService";
import {MockConsole} from "./mockConsole";
import {TransactionsRepository} from "./transactionsRepository";

export class BankAccount implements IAccountService {
    constructor(console: MockConsole, transactions: TransactionsRepository) {

    }

    public deposit(sum: number) {
        throw new Error("Unsupported");
    }

    public withdraw(sum: number) {
        throw new Error("Unsupported");
    }

    public printStatement() {
        throw new Error("Unsupported");
    }
}
