export class MyService {
  public id = Math.random();
  private items: string[] = [];

  public addItem(item: string) {
    this.items.push(item);
  }

  public getAllItems() { return this.items; }
}
