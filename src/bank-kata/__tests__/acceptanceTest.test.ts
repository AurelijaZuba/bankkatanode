import {BankAccount} from "../bankAccount";
import {MockConsole} from "../mockConsole";

jest.mock("../mockConsole");

describe("Bank Kata", () => {
    it("should display account statement", () => {
        const consoleMock = new MockConsole();
        const bankAccount = new BankAccount(consoleMock);

        bankAccount.deposit(1000);
        bankAccount.deposit(2000);
        bankAccount.withdraw(500);

        bankAccount.printStatement();

        expect(consoleMock.println).toBeCalledWith("Date    ||  Amount  ||  Balance");
        expect(consoleMock.println).toBeCalledWith("14/01/2012  ||  -500    ||  2500");
        expect(consoleMock.println).toBeCalledWith("13/01/2012  ||  2000    ||  3000");
        expect(consoleMock.println).toBeCalledWith("10/01/2012  ||  1000    ||  1000");
    });
});
