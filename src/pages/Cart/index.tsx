import styles from "./Cart.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import { CartEmpty } from "../../components/CartEmpty";
import { CartList } from "../../components/CartList";

export const Cart: React.FC = () => {
    const { root, nav } = styles;
    const navigate = useNavigate();
    const items = useSelector((state: RootState) => state.cart.items);
    return (
        <div className={root}>
            <div className={nav}>
                <div className='container'>
                    <button onClick={() => navigate(-1)}>НАЗАД</button>
                </div>
            </div>
            {items.length ? <CartList></CartList> : <CartEmpty></CartEmpty>}
        </div>
    );
};
