// interfaces/index.ts

export interface Listing {
  id: string;
  title: string;
  location: string;
  pricePerNight: number;
  imageUrl: string;
  type: string;
}

export interface CardProps {
  listing: Listing;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}
