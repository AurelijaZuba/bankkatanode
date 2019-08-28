import {BankAccount} from "../bankAccount";
import {MockConsole} from "../mockConsole";
import {TransactionsRepository} from "../transactionsRepository";

jest.mock("../mockConsole");
jest.mock("../transactionsRepository");

describe("Bank Account", () => {
    it("should deposit a sum of 100", () => {
        let consoleMock = new MockConsole();
        const bankAccount = new BankAccount(consoleMock);
        let amount = 100;
        bankAccount.deposit(amount);

        let transactions = new TransactionsRepository();
        expect(transactions.deposit).toBeCalledWith(amount);
    });
}
)