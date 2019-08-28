import {BankAccount} from "../bankAccount";
import {MockConsole} from "../mockConsole";
import {TransactionsRepository} from "../transactionsRepository";

jest.mock("../mockConsole");
jest.mock("../transactionsRepository");

describe("Bank Account", () => {
    it("should deposit a sum of 100", () => {
        const consoleMock = new MockConsole();
        const transactions = new TransactionsRepository();
        const bankAccount = new BankAccount(consoleMock, transactions);
        const amount = 100;

        bankAccount.deposit(amount);
        expect(transactions.deposit).toBeCalledWith(amount);
    });
});
