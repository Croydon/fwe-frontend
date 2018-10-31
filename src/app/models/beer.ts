export class Beer {
  _id?: string;
  name: string;
  price: number;
  description?: string;
  tasteRating: number;
  alcPercent: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
