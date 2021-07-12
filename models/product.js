export default class Product {
  constructor(
    id,
    ownerId,
    title,
    imageUrl,
    description,
    price
  ) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.ownerId = ownerId;
    this.description = description;
    this.price = price;
  }

}