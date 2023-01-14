import styles from "./CartItem.module.css";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    incrementCount,
    decrementCount,
    removeItems,
} from "../../redux/slices/cartSlice";

type TCartItems = {
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
};

type TCartItemProps = {
    id: number;
    choicedSize: number;
    count: number;
    allItems: TCartItems;
};

export const CartItem: React.FC<TCartItemProps> = ({
    id,
    choicedSize,
    count,
    allItems,
}) => {
    const {
        wrap,
        info,
        decidedSize,
        countItems,
        icon,
        totalCost,
        textInfo,
        iconClear,
    } = styles;
    const dispatch = useDispatch();

    const [itemCart, setItemCart] = useState<TCartItem>();

    const onClickPlus = () => {
        dispatch(
            incrementCount({
                id,
                size: choicedSize,
            })
        );
    };
    const onClickMinus = () => {
        if (count > 1) {
            dispatch(
                decrementCount({
                    id,
                    size: choicedSize,
                })
            );
        } else {
            dispatch(removeItems({ id, size: choicedSize }));
        }
    };

    const onClickRemove = () => {
        dispatch(removeItems({ id, size: choicedSize }));
    };

    useEffect(() => {
        if (allItems) {
            allItems.forEach((elem) => {
                if (elem.id === id) {
                    setItemCart(elem);
                }
            });
        }
    }, [allItems, id]);

    return (
        <>
            {itemCart && itemCart.id && (
                <div className={wrap}>
                    <div className={info}>
                        <img
                            src={itemCart.imgUrl[0]}
                            alt={itemCart.imgUrl[0]}
                        />
                        <div className={textInfo}>
                            <h3>{itemCart.name}</h3>
                            <p className={decidedSize}>
                                {itemCart.size[choicedSize]}
                            </p>
                        </div>
                    </div>
                    <div className={countItems}>
                        <svg
                            onClick={onClickMinus}
                            className={icon}
                            id='Layer_1'
                            version='1.1'
                            viewBox='0 0 512 512'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <g>
                                <g>
                                    <g>
                                        <path d='M256,48C141.1,48,48,141.1,48,256s93.1,208,208,208c114.9,0,208-93.1,208-208S370.9,48,256,48z M256,446.7     c-105.1,0-190.7-85.5-190.7-190.7c0-105.1,85.5-190.7,190.7-190.7c105.1,0,190.7,85.5,190.7,190.7     C446.7,361.1,361.1,446.7,256,446.7z' />
                                    </g>
                                </g>
                                <rect
                                    height='17'
                                    width='256'
                                    x='128'
                                    y='248'
                                />
                            </g>
                        </svg>
                        <span>{count}</span>
                        <svg
                            onClick={onClickPlus}
                            className={icon}
                            id='Layer_1'
                            version='1.1'
                            viewBox='0 0 512 512'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <g>
                                <g>
                                    <g>
                                        <path d='M256,48C141.1,48,48,141.1,48,256s93.1,208,208,208c114.9,0,208-93.1,208-208S370.9,48,256,48z M256,446.7     c-105.1,0-190.7-85.5-190.7-190.7S150.9,65.3,256,65.3S446.7,150.9,446.7,256S361.1,446.7,256,446.7z' />
                                    </g>
                                </g>
                                <g>
                                    <polygon points='264.1,128 247.3,128 247.3,247.9 128,247.9 128,264.7 247.3,264.7 247.3,384 264.1,384 264.1,264.7 384,264.7     384,247.9 264.1,247.9   ' />
                                </g>
                            </g>
                        </svg>
                    </div>
                    <p className={totalCost}>{count * itemCart.newPrice}</p>
                    <svg
                        onClick={onClickRemove}
                        className={iconClear}
                        width='60px'
                        id='Layer_1'
                        version='1.1'
                        viewBox='0 0 128 128'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <g>
                            <g>
                                <path d='M84.815,43.399c-0.781-0.782-2.047-0.782-2.828,0L64.032,61.356L46.077,43.399c-0.781-0.782-2.047-0.782-2.828,0    c-0.781,0.781-0.781,2.047,0,2.828l17.955,17.957L43.249,82.141c-0.781,0.78-0.781,2.047,0,2.828    c0.391,0.39,0.902,0.585,1.414,0.585s1.023-0.195,1.414-0.585l17.955-17.956l17.955,17.956c0.391,0.39,0.902,0.585,1.414,0.585    s1.023-0.195,1.414-0.585c0.781-0.781,0.781-2.048,0-2.828L66.86,64.184l17.955-17.957C85.597,45.447,85.597,44.18,84.815,43.399z     M64.032,14.054c-27.642,0-50.129,22.487-50.129,50.127c0.002,27.643,22.491,50.131,50.133,50.131    c27.639,0,50.125-22.489,50.125-50.131C114.161,36.541,91.674,14.054,64.032,14.054z M64.036,110.313h-0.002    c-25.435,0-46.129-20.695-46.131-46.131c0-25.435,20.693-46.127,46.129-46.127s46.129,20.693,46.129,46.127    C110.161,89.617,89.47,110.313,64.036,110.313z' />
                            </g>
                        </g>
                    </svg>
                </div>
            )}
        </>
    );
};
