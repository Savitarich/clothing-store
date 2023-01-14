import styles from "./CatalogList.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setProductItem } from "../../redux/slices/productSlice";
import { RootState } from "../../redux/store";

import { CatalogItem } from "../CatalogItem";
import { SkeletonCards } from "../SkeletonCards";

type TProductItem = {
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

export const CatalogList: React.FC = () => {
    const { CatalogListRow } = styles;

    const dispatch = useDispatch();

    const productItem = useSelector(
        (state: RootState) => state.product.productItem
    );
    const filterByGender = useSelector(
        (state: RootState) => state.filter.filterByGender
    );
    const filterByType = useSelector(
        (state: RootState) => state.filter.filterByType
    );
    const sortType = useSelector((state: RootState) => state.filter.sortType);
    const searchValue = useSelector(
        (state: RootState) => state.filter.searchValue
    );

    const [productLoaded, setProductLoaded] = useState<boolean>(false);

    useEffect(() => {
        setProductLoaded(false);
        const search: string = searchValue ? `search=${searchValue}` : "";
        axios
            .get(
                `https://6393666511ed187986b4cb75.mockapi.io/items?sortBy=${sortType}&${search}`
            )
            .then((res) => {
                let subProductItem: TProductItem = res.data.slice(0);
                filterByGender &&
                    (subProductItem = subProductItem.filter(
                        (item) => item.affiliation === filterByGender
                    ));
                filterByType &&
                    (subProductItem = subProductItem.filter(
                        (item) => item.whereType === filterByType
                    ));
                dispatch(setProductItem(subProductItem));
                setProductLoaded(true);
            });
    }, [filterByGender, filterByType, sortType, searchValue]);

    return (
        <div className={CatalogListRow}>
            {!productLoaded
                ? [...new Array(8)].map((_, index) => (
                      <SkeletonCards key={index}></SkeletonCards>
                  ))
                : productItem.map((item) => (
                      <CatalogItem
                          key={item.id}
                          {...item}
                      ></CatalogItem>
                  ))}
        </div>
    );
};
