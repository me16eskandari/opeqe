import "./carousel.scss";

import React, { useEffect, useState } from "react";

export const Carousel: React.FC<{ title: string }> = (props) => {

    const [translate, setTranslate] = useState(0);
    const [maxTranslate, setMaxTranslate] = useState(0);


    // set max slide page on children length change
    useEffect(() => {
        //@ts-ignore
        let max = Math.floor(props.children.length % 3);

        //@ts-ignore
        // add one if needed
        if (max * 3 < props.children.length) max++;

        //one extra needed
        max++;

        setMaxTranslate(-1 * max * 100);

    }, [props.children])

    // wrap every slide item
    const modifyChildren = (child: React.ReactNode) => {

        return (
            <div className="carousel-item">
                {
                    //@ts-ignore
                    React.cloneElement(child)
                }
            </div>
        )
    }

    // carouse left or right by setting carousel items translate
    const carouse = (coeff: number) => {
        const addon = coeff * 100;
        const newTranslate = translate + addon;
        if (newTranslate <= 0 && newTranslate >= maxTranslate)
            setTranslate(newTranslate);
    }

    return (
        <div className="carousel">
            <div className="carousel-control">
                <h1>{props.title}</h1>
                <div>
                    <button className={translate === 0 ? "disabled" : ""} onClick={() => carouse(1)}>&larr;</button>
                    <button className={translate === maxTranslate ? "disabled" : ""} onClick={() => carouse(-1)}>&rarr;</button>
                </div>
            </div>
            <div className="carousel-items" style={{ transform: `translateX(${translate}%) translateX(0px)` }}>
                {React.Children.map(props.children, child => modifyChildren(child))}
            </div>
        </div>
    );
}
