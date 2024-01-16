import { HousingType } from './housing-type.enum.js';
import { User } from './user.type.js';
import { CityType } from './city-type.enum.js';
import { ScoreType } from './score-type.enum.js';
import { AmenityType } from './amenity-type.enum.js';
import { Location } from './location.type.js';

export type Offer = {
  name: string;
  description: string;
  publishDate: string;
  city: CityType;
  previewImage: string;
  images: string[];
  isPremium: boolean;
  isFavorite: boolean;
  rating: ScoreType;
  type: HousingType;
  roomsCount: number;
  maxGuests: number;
  price: string;
  amenities: AmenityType[];
  host: User;
  commentsCount: number;
  location: Location;
};

