import styles from "./Item.module.css";
import { useNavigate } from "react-router-dom";

export const Item = ({ id, name, type, description, imageUrl, alt }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.item}>
            <div className={styles.column}>
                <div className={styles.card}>
                    <img src={imageUrl} alt="Jane" className={styles.image} />
                    <div className={styles.container}>
                        <h2>{name}</h2>
                        <p>{description}</p>
                        <p>{type}</p>
                        <p><button className={styles.button} onClick={() => navigate("/contact")}>Contact</button></p>
                    </div>
                </div>
            </div>
        </div>
    )
}