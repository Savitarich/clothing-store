import styles from "./CartList.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "../../redux/slices/cartSlice";
import { RootState } from "../../redux/store";

import { CartItem } from "../CartItem";

type TCartItem = {
    id: number;
    grade: number;
    affiliation: string;
    name: string;
    type: string;
    whereType: string;
    description: string;
    imgUrl: string[];
    oldPrice: number;
    newPrice: number;
    size: string[];
    characteristics: {
        affiliation: string;
        compound: string;
        seasonality: string;
        color: string;
        countryOfOrigin: string;
    };
}[];

export const CartList: React.FC = () => {
    const { wrap, container, cartTop, cartItemsList } = styles;
    const dispatch = useDispatch();
    const itemsInfo = useSelector((state: RootState) => state.cart.items);

    const [allItems, setAllItems] = useState<TCartItem>([]);

    const onClickClear = () => {
        if (window.confirm("Вы действительно хотите удалить ВСЕ товары?"))
            dispatch(clearItems());
    };

    useEffect(() => {
        axios
            .get(`https://6393666511ed187986b4cb75.mockapi.io/items`)
            .then((res) => {
                setAllItems(res.data);
            });
    }, []);

    return (
        <div className={wrap}>
            <div className={container}>
                <div className={cartTop}>
                    <h3>
                        <img
                            src='images/Cart/cart-icon.svg'
                            alt='cart-icon'
                        />
                        <span>Корзина</span>
                    </h3>
                    <p>
                        <svg
                            viewBox='0 0 512 512'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <title />
                            <g
                                data-name='1'
                                id='_1'
                            >
                                <path d='M356.65,450H171.47a41,41,0,0,1-40.9-40.9V120.66a15,15,0,0,1,15-15h237a15,15,0,0,1,15,15V409.1A41,41,0,0,1,356.65,450ZM160.57,135.66V409.1a10.91,10.91,0,0,0,10.9,10.9H356.65a10.91,10.91,0,0,0,10.91-10.9V135.66Z' />
                                <path d='M327.06,135.66h-126a15,15,0,0,1-15-15V93.4A44.79,44.79,0,0,1,230.8,48.67h66.52A44.79,44.79,0,0,1,342.06,93.4v27.26A15,15,0,0,1,327.06,135.66Zm-111-30h96V93.4a14.75,14.75,0,0,0-14.74-14.73H230.8A14.75,14.75,0,0,0,216.07,93.4Z' />
                                <path d='M264.06,392.58a15,15,0,0,1-15-15V178.09a15,15,0,1,1,30,0V377.58A15,15,0,0,1,264.06,392.58Z' />
                                <path d='M209.9,392.58a15,15,0,0,1-15-15V178.09a15,15,0,0,1,30,0V377.58A15,15,0,0,1,209.9,392.58Z' />
                                <path d='M318.23,392.58a15,15,0,0,1-15-15V178.09a15,15,0,0,1,30,0V377.58A15,15,0,0,1,318.23,392.58Z' />
                                <path d='M405.81,135.66H122.32a15,15,0,0,1,0-30H405.81a15,15,0,0,1,0,30Z' />
                            </g>
                        </svg>
                        <span onClick={onClickClear}>Очистить корзину</span>
                    </p>
                </div>
                <div className={cartItemsList}>
                    {itemsInfo.map((item) => (
                        <CartItem
                            key={item.id + "_" + item.size}
                            id={item.id}
                            count={item.count}
                            choicedSize={item.size}
                            allItems={allItems}
                        ></CartItem>
                    ))}
                </div>
            </div>
        </div>
    );
};
