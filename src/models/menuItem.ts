import { Special } from "./special";
import { MenuItemType } from "./type";

export class MenuItem {
    id: string;
    title: string;
    subTitle: string;
    description: string;
    ingredients: string;
    minimumCalorie: number;
    maximumCalorie: number;
    preparation: number;
    delivery: number;
    image: string;
    gallery: string;
    price: number;
    fee: number;
    rate: number;
    isAcceptingDelivery: boolean;
    isAcceptingPickup: boolean;
    isFavorite: boolean;
    isCatering: boolean;
    isAvailable: boolean;
    cuisineType: MenuItemType
    mealType: MenuItemType;
    menuType: MenuItemType;
    courseType: MenuItemType;
    special: Special;
}