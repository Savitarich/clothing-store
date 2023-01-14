import styles from "./CartEmpty.module.css";

export const CartEmpty: React.FC = () => {
    const { cartEmpty } = styles;
    return (
        <div className='container'>
            <div className={cartEmpty}>
                <h2>Корзина пустая 😕</h2>
                <p>
                    Вероятней всего, вы ещё не выбрали товар.
                    <br />
                    Для того, чтобы сделать заказ, перейдите в каталог.
                </p>
                <img
                    src='images/Cart/empty-cart.png'
                    alt='images/Cart/empty-cart.png'
                />
            </div>
        </div>
    );
};
