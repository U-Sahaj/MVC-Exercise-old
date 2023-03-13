export class Transaction {
    private description: string;
    private date: Date;
    private amount: number;
  
    constructor(description: string, date: Date, amount: number) {
      this.description = description;
      this.date = date;
      this.amount = amount;
    }
  
    getDescription(): string {
      return this.description;
    }
  
    getDate(): Date {
      return this.date;
    }
  
    getAmount(): number {
      return this.amount;
    }
}
  