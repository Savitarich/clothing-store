import styles from "./ProductPage.module.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { addItems } from "../../redux/slices/cartSlice";
import { RootState } from "../../redux/store";

import { PictureSlider } from "../../components/PictureSlider";
import { SkeletonPageProduct } from "../../components/SkeletonPageProduct";

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
    characteristics: any;
};

export const ProductPage: React.FC = () => {
    const {
        root,
        nav,
        content,
        sliderWrap,
        info,
        oldCost,
        newCost,
        costBlock,
        sizeBlock,
        description,
        btnToBasket,
    } = styles;
    const characteristicsTable: string[] = [
        "Принадлежность",
        "Состав",
        "Сезонность",
        "Цвет",
        "Страна производитель",
    ];
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const productId = useSelector(
        (state: RootState) => state.product.productId
    );
    const [productInfo, setProductInfo] = useState<TCartItem>();
    const [productLoaded, setProductLoaded] = useState(false);
    const [sizeActive, setSizeActive] = useState(0);

    useEffect(() => {
        setProductLoaded(false);
        axios
            .get(
                `https://6393666511ed187986b4cb75.mockapi.io/items?id=${productId}`
            )
            .then((res) => {
                setProductInfo(res.data[0]);
                setProductLoaded(true);
            });
    }, [productId]);

    const addToCart = () => {
        const item = {
            id: productId,
            size: sizeActive,
        };
        dispatch(addItems(item));
    };
    if (!productInfo) {
        return <>Loading</>;
    }

    return (
        <>
            <div className={root}>
                <div className={nav}>
                    <div className='container'>
                        <button onClick={() => navigate(-1)}>НАЗАД</button>
                    </div>
                </div>
                {!productLoaded ? (
                    <SkeletonPageProduct></SkeletonPageProduct>
                ) : (
                    <div className='container'>
                        <div className={content}>
                            <div className={sliderWrap}>
                                {productInfo && (
                                    <PictureSlider
                                        imgUrl={productInfo.imgUrl}
                                    ></PictureSlider>
                                )}
                            </div>
                            <div className={info}>
                                <h2>{productInfo.name}</h2>
                                <div className={costBlock}>
                                    <p className={newCost}>
                                        {productInfo.newPrice} UAH
                                    </p>
                                    <p className={oldCost}>
                                        {productInfo.oldPrice} UAH
                                    </p>
                                </div>
                                <div className={sizeBlock}>
                                    <h4>Размеры:</h4>
                                    <ul>
                                        {productInfo.size.map((item, index) => (
                                            <li
                                                className={
                                                    index === sizeActive
                                                        ? "active"
                                                        : ""
                                                }
                                                key={item}
                                                onClick={() =>
                                                    setSizeActive(index)
                                                }
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <p className={description}>
                                    {productInfo.description}
                                </p>
                                <button
                                    className={btnToBasket}
                                    onClick={addToCart}
                                >
                                    В КОРЗИНУ
                                </button>
                                <table>
                                    <tbody>
                                        {Object.keys(
                                            productInfo.characteristics
                                        ).map((item, index) => (
                                            <tr key={item}>
                                                <td>
                                                    {
                                                        characteristicsTable[
                                                            index
                                                        ]
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        productInfo
                                                            .characteristics[
                                                            item
                                                        ]
                                                    }
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};
