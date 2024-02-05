import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import { Item } from "./Item"

export const Products = () => {
    const dictionary = useContext(LanguageContext);
    const productsObj = dictionary.dictionary.contentProducts; 

    return (
        <div>
            <ul className="product"> {productsObj.map(x => <li className="liStyle" key={x.id}><Item {...x}/></li>)}</ul>
        </div>
    )
}