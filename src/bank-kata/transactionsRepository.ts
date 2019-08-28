class Deposit {
}

export class TransactionsRepository {
    public deposit(sum: number) {
        throw new Error("Unsupported");
    }

    private addDeposit(deposit: Deposit) {
        throw new Error("Unsupported");
    }
}
