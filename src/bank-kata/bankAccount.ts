import {IAccountService} from "./IAccountService";
import {MockConsole} from "./mockConsole";
import {throws} from "assert";

export class BankAccount implements IAccountService {
    constructor(console: MockConsole) {

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
