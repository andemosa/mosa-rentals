export interface IReview {
    rating: number;
    comment: string;
    user: string;
  }

export interface ICar {
    brand: string;
    name: string;
    headline: string;
    tagline: string;
    description: string;
    transmission: "Manual" | "Automatic";
    capacity: number;
    gasoline: number;
    price: number;
    reviews?: IReview[];
    images?: string[];
    discount?: number;
    likes?: string[];
    _id: string,

}