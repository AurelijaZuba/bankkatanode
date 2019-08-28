import {TransactionsRepository} from "../transactionsRepository";

describe("TransactionsRepository", () => {
    it("should add a new deposit transaction to the list of transactions", () => {
        const transactionsRepository = new TransactionsRepository();
        // @ts-ignore
        const addMethodSpy = jest.spyOn(transactionsRepository, "addDeposit");

        const depositObject = {
            sum: 100,
            date: "2019-08-28",
        };

        expect(addMethodSpy).toBeCalledWith(depositObject);
    });
});
