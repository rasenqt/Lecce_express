export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ElementType;
}
