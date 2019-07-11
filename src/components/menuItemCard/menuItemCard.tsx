import "./menuItemCard.scss";

import React from "react";

import { MenuItem } from "../../models";

export const MenuItemCard: React.FC<MenuItem> = (props) => {
    return (
        <div className="menu-item">
            <figure className="image">
                <div>
                    <img src={props.image} alt={props.title} />
                </div>
            </figure>
            <h1 className="title">{props.title}</h1>
            <ul className="info">
                <li>{props.cuisineType.title}</li>
                <li>{props.menuType.title}</li>
                <li>{props.mealType.title}</li>
                <li>{props.courseType.title}</li>
            </ul>
            <ul className="price">
                <li>{props.delivery} min</li>
                <li><span className={"star" + (props.rate >= 4 ? " gold" : "")}>&#9733;</span> {props.rate}</li>
                <li>${props.fee}</li>
            </ul>
        </div>
    );
}
