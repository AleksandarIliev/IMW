import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import { Item } from "./Item";
import styles from "./Products.module.css"

export const Products = () => {
    const dictionary = useContext(LanguageContext);
    const productsObj = dictionary.dictionary.contentProducts; 

    return (
        <div>
            <ul className={styles.product}> {productsObj.map(x => <li className={styles.liStyle} key={x.id}><Item {...x}/></li>)}</ul>
        </div>
    )
}