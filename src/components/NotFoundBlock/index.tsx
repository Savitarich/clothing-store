import React from "react";
import styles from "./NotFoundBlock.module.css";

export const NotFoundBlock: React.FC = () => {
    const { root, description } = styles;
    return (
        <div className={root}>
            <h2>
                <span>😕</span>
                <br />
                Ничего не найдено{" "}
            </h2>
            <p className={description}>
                К сожалению данная станица отсувствует
            </p>
        </div>
    );
};
