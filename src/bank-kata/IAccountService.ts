export interface IAccountService {
    deposit(sum: number): void;

    withdraw(sum: number): void;

    printStatement(): void;
}
