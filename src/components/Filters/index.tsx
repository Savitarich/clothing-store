import styles from "./Filters.module.css";
import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    setFilterByGender,
    setFilterByType,
} from "../../redux/slices/filtersSlice";

const filterListByGender: { name: string; affiliation: string }[] = [
    { name: "Всем", affiliation: "" },
    { name: "Женщинам", affiliation: "woman" },
    { name: "Мужчинам", affiliation: "man" },
    { name: "Девочкам", affiliation: "girl" },
    { name: "Мальчикам", affiliation: "boy" },
];
const filterListByType: { name: string; whereType: string }[] = [
    { name: "Всё", whereType: "" },
    { name: "Верх", whereType: "top" },
    { name: "Низ", whereType: "bottom" },
    { name: "Обувь", whereType: "foot" },
];

export const Filters: React.FC = () => {
    const {
        filters,
        filterByGender,
        filterByType,
        active,
        filtersListByGender,
        filtersListByType,
    } = styles;

    const dispatch = useDispatch();

    const [showFiltersbyGender, setShowFiltersByGender] = useState(false);
    const [showFiltersbyType, setShowFiltersByType] = useState(false);
    const [filterByGenderId, setFilterByGenderId] = useState(0);
    const [filterByTypeId, setFilterByTypeId] = useState(0);

    const filterByGenderRef = useRef<HTMLDivElement>(
        document.createElement("div")
    );
    const filterByTypeRef = useRef<HTMLDivElement>(
        document.createElement("div")
    );

    const onClickFilterByGender = (index: number) => {
        setFilterByGenderId(index);
        dispatch(setFilterByGender(filterListByGender[index].affiliation));
        setShowFiltersByGender(false);
    };
    const onClickFilterByType = (index: number) => {
        setFilterByTypeId(index);
        dispatch(setFilterByType(filterListByType[index].whereType));
        setShowFiltersByType(false);
    };
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                filterByGenderRef.current &&
                !event.composedPath().includes(filterByGenderRef.current)
            ) {
                setShowFiltersByGender(false);
            }
            if (
                filterByTypeRef.current &&
                !event.composedPath().includes(filterByTypeRef.current)
            ) {
                setShowFiltersByType(false);
            }
        };
        document.body.addEventListener("click", handleClickOutside);

        return () => {
            document.body.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className={filters}>
            <div
                className={filterByGender}
                ref={filterByGenderRef}
            >
                <p
                    onClick={() => {
                        setShowFiltersByGender(!showFiltersbyGender);
                    }}
                >
                    {filterListByGender[filterByGenderId].name}
                </p>
                {showFiltersbyGender && (
                    <ul className={filtersListByGender}>
                        {filterListByGender.map((item, index) => (
                            <li
                                key={item.name}
                                className={
                                    index === filterByGenderId ? active : ""
                                }
                                onClick={() => onClickFilterByGender(index)}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div
                className={filterByType}
                ref={filterByTypeRef}
            >
                <p
                    onClick={() => {
                        setShowFiltersByType(!showFiltersbyType);
                    }}
                >
                    {filterListByType[filterByTypeId].name}
                </p>
                {showFiltersbyType && (
                    <ul className={filtersListByType}>
                        {filterListByType.map((item, index) => (
                            <li
                                key={item.name}
                                className={
                                    index === filterByTypeId ? active : ""
                                }
                                onClick={() => onClickFilterByType(index)}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};
