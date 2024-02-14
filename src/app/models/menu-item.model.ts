export class MenuItem{
  quantity: number = 1;
  constructor(public id: number, public name: string, public description: string,
              public price: number, public imageUrl: string, public category: string){
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
    this.category = category;
  }

}
