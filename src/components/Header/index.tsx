import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const Header: React.FC = () => {
    const { headerRow, logo, menuRow, basket } = styles;

    const items = useSelector((state: RootState) => state.cart.items);

    const totalCount = items.reduce((sum, item) => sum + item.count, 0);

    return (
        <>
            <header>
                <div className='container'>
                    <div className={headerRow}>
                        <Link
                            to={"/"}
                            className={logo}
                        >
                            <img
                                src='images/header/logo.svg'
                                alt='images/header/logo.svg'
                            />
                            <p>FASHION</p>
                        </Link>

                        <div className={menuRow}>
                            <Link to={"/cart"}>
                                <div className={basket}>
                                    <img
                                        src='images/header/basket.svg'
                                        alt='images/header/basket.svg'
                                        width={"100%"}
                                        height={"100%"}
                                    />
                                    <span>{totalCount}</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};
