import {IAccountService} from "./IAccountService";
import {MockConsole} from "./mockConsole";
import {TransactionsRepository} from "./transactionsRepository";

export class BankAccount implements IAccountService {
    private transactions: TransactionsRepository;
    constructor(console: MockConsole, transactions: TransactionsRepository) {
        this.transactions = transactions;
    }

    public deposit(sum: number) {
        this.transactions.deposit(sum);
    }

    public withdraw(sum: number) {
        throw new Error("Unsupported");
    }

    public printStatement() {
        throw new Error("Unsupported");
    }
}
