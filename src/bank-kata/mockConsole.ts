export class MockConsole {
    public println(statementLine: string) {
        throw new Error("Unsupported");
    }
}
