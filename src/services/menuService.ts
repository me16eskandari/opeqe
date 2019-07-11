import { MenuItem } from "../models";
import menu from "./menu.json";

export class MenuService {    
    static getMenu = (): MenuItem[] => {
        return menu;
    }
}