import styles from "./Home.module.css";

import { Filters } from "../../components/Filters";
import { Search } from "../../components/Search";
import { Sort } from "../../components/Sort";
import { CatalogList } from "../../components/CatalogList";

export const Home: React.FC = () => {
    const { catalog, settings, settingsRow } = styles;

    return (
        <>
            <div className={settings}>
                <div className='container'>
                    <div className={settingsRow}>
                        <Filters></Filters>
                        <Search></Search>
                        <Sort></Sort>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className={catalog}>
                    <CatalogList></CatalogList>
                </div>
            </div>
        </>
    );
};
