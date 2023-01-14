import styles from "./CatalogItem.module.css";
import "../../styles/App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProductId } from "../../redux/slices/productSlice";
import { addItems } from "../../redux/slices/cartSlice";

type TCatalogItem = {
    id: number;
    imgUrl: string[];
    oldPrice: number;
    newPrice: number;
    name: string;
    size: string[];
};

export const CatalogItem: React.FC<TCatalogItem> = ({
    id,
    imgUrl,
    oldPrice,
    newPrice,
    name,
    size,
}) => {
    const { box, mainInfo, oldCost, newCost, nameItem, sizesList, costs } =
        styles;
    const dispatch = useDispatch();
    const openProductPage = () => {
        dispatch(setProductId(id));
        localStorage.setItem("productId", JSON.stringify(id));
    };

    const [sizeActive, setSizeActive] = useState<number>(0);

    const addToCart = () => {
        const item = {
            id,
            size: sizeActive,
        };
        dispatch(addItems(item));
    };
    return (
        <div className={box}>
            <Link
                to={`/product`}
                onMouseDown={() => openProductPage()}
            >
                <img
                    src={imgUrl[0]}
                    alt={imgUrl[0]}
                />
            </Link>

            <div className={mainInfo}>
                <div className={costs}>
                    <p className={oldCost}>{oldPrice} UAH</p>
                    <p className={newCost}>{newPrice} UAH</p>
                </div>
                <button onClick={addToCart}>В КОРЗИНУ</button>
            </div>
            <p className={nameItem}>{name}</p>
            <ul className={sizesList}>
                {size.map((item, index) => (
                    <li
                        className={index === sizeActive ? "active" : ""}
                        key={item + "_" + index}
                        onClick={() => setSizeActive(index)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};
