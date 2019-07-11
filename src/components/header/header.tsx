import "./header.scss";

import React, { useEffect, useState } from "react";

export const Header: React.FC = (props) => {

    const [userQuery, setUserQuery] = useState<string>("");
    const [headerClass, setHeaderClass] = useState<string>("header");
    const [overLayerClass, setOverLayerClass] = useState<string>("over-layer");

    const listenToScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        // add shadow to header if window scrolled
        setHeaderClass(winScroll > 0 ? "fixed" : "");

        // show header search input, if scroll passed banner search
        setOverLayerClass(winScroll > 270 ? "over-layer hidden" : "over-layer");
    };

    useEffect(() => {

        // listen to scroll event
        window.addEventListener('scroll', listenToScroll);
        listenToScroll();
        return () => {

            //release event listener on component will unmount
            window.removeEventListener('scroll', listenToScroll);
        };
    });

    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserQuery(event.target.value);
    }

    return (
        <>
            <header className={headerClass}>
                <div className="header">
                    <a href="/">
                        <img alt="Uber Eats" src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/f8f0721f871b3704cce92eb96bc6e504.svg" className="logo" />
                    </a>
                    <div className="fs"></div>
                    <div className="search">
                        <div className="wrapper">
                            <div className="search-container">
                                <div className="svg-container">
                                    <div className="svg">
                                        <svg width="24px" height="24px" fill="none" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="m12.0001 2.83398c2 0 4.0833.75 5.5833 2.33334 3.0833 3.08333 3.0833 8.16668 0 11.16668l-5.5833 5.6667-5.58335-5.5834c-3.08334-3.0833-3.08334-8.16665 0-11.24998 1.5-1.58334 3.58335-2.33334 5.58335-2.33334zm0 15.66672 3.8333-3.8334c2.0833-2.1666 2.0833-5.58332 0-7.74998-1-1-2.4167-1.58334-3.8333-1.58334-1.4167 0-2.83335.58334-3.83335 1.58334-2.08334 2.16666-2.08334 5.58338 0 7.74998zm1.6666-7.75c0 .9204-.7462 1.6666-1.6666 1.6666-.9205 0-1.6667-.7462-1.6667-1.6666 0-.92052.7462-1.66672 1.6667-1.66672.9204 0 1.6666.7462 1.6666 1.66672z"
                                                fillRule="evenodd" clipRule="evenodd" fill="#1F1F1F"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="f1"></div>
                                <input type="text" name="userQuery" value={userQuery} placeholder="Enter delivery address" className="input" onChange={changeValue} />
                                <div className="f2"></div>
                            </div>
                        </div>
                        <div className={overLayerClass} />
                    </div>
                    <div className="bs"></div>
                    <a href="/" className="sign-in">Sign In</a>
                </div>
            </header>
            <div className="banner">
                <div className="logos">
                    <img alt="l" src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/1d9f9a07dcd20d121331391f114fa785.svg" className="left" />
                    <img alt="r" src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/cb2cab72bcb1d2a09ebe90f83f585bf9.svg" className="right" />
                </div>
                <div className="search-div">
                    <h1 className="slung">Restaurants you love, delivered to you</h1>
                    <form className="form">
                        <div className="wrapper">
                            <div className="search-container">
                                <div className="svg-container">
                                    <div className="svg">
                                        <svg width="24px" height="24px" fill="none" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="m12.0001 2.83398c2 0 4.0833.75 5.5833 2.33334 3.0833 3.08333 3.0833 8.16668 0 11.16668l-5.5833 5.6667-5.58335-5.5834c-3.08334-3.0833-3.08334-8.16665 0-11.24998 1.5-1.58334 3.58335-2.33334 5.58335-2.33334zm0 15.66672 3.8333-3.8334c2.0833-2.1666 2.0833-5.58332 0-7.74998-1-1-2.4167-1.58334-3.8333-1.58334-1.4167 0-2.83335.58334-3.83335 1.58334-2.08334 2.16666-2.08334 5.58338 0 7.74998zm1.6666-7.75c0 .9204-.7462 1.6666-1.6666 1.6666-.9205 0-1.6667-.7462-1.6667-1.6666 0-.92052.7462-1.66672 1.6667-1.66672.9204 0 1.6666.7462 1.6666 1.66672z"
                                                fillRule="evenodd" clipRule="evenodd" fill="#1F1F1F"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="f1"></div>
                                <input type="text" name="userQuery" value={userQuery} placeholder="Enter delivery address" className="input" onChange={changeValue} />
                                <div className="f2"></div>
                            </div>
                        </div>
                        <div className="f3"></div>
                        <button type="submit" className="submit">Find Food</button>
                    </form>
                </div>
            </div>
        </>
    );
}
