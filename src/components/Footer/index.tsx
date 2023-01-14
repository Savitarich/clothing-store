import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
    const { footer } = styles;

    return (
        <footer className={footer}>
            <p>
                <Link to={"/"}>FASHION</Link>
            </p>
        </footer>
    );
};
