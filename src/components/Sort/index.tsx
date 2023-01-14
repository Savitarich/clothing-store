import styles from "./Sort.module.css";
import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { setSortType } from "../../redux/slices/filtersSlice";
import { useEffect } from "react";

export const sortList = [
    {
        name: "рейтингу (по убыванию)",
        sortProperty: "grade&order=desc",
    },
    {
        name: "рейтингу (по возрастанию)",
        sortProperty: "grade&order=asc",
    },
    { name: "цене (по убыванию)", sortProperty: "newPrice&order=desc" },
    { name: "цене (по возрастанию)", sortProperty: "newPrice&order=asc" },
];

export const Sort: React.FC = () => {
    const { sort, sortInfo, sortPopup, sortPopupList, active } = styles;
    const sortRef = useRef<HTMLDivElement>(document.createElement("div"));

    const [showSortPopup, setShowSortPopup] = useState(false);
    const [sortTypeId, setSortTypeId] = useState(0);

    const dispatch = useDispatch();

    const onClickSortItem = (index: number) => {
        setSortTypeId(index);
        dispatch(setSortType(sortList[index].sortProperty));
        setShowSortPopup(false);
    };
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                sortRef.current &&
                !event.composedPath().includes(sortRef.current)
            ) {
                setShowSortPopup(false);
            }
        };
        document.body.addEventListener("click", handleClickOutside);

        return () => {
            document.body.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div
                className={sort}
                ref={sortRef}
            >
                <p className={sortInfo}>
                    Сортировать по:{" "}
                    <span onClick={() => setShowSortPopup(!showSortPopup)}>
                        {sortList[sortTypeId].name}
                    </span>
                </p>
                {showSortPopup && (
                    <div className={sortPopup}>
                        <ul className={sortPopupList}>
                            {sortList.map((item, index) => (
                                <li
                                    key={item.name}
                                    className={
                                        index === sortTypeId ? active : ""
                                    }
                                    onClick={() => {
                                        onClickSortItem(index);
                                    }}
                                >
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};
