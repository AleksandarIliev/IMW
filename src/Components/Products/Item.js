import styles from "./Item.module.css"

export const Item = ({ id, name, type, description, imageUrl, alt }) => {
    
    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{type}</div>
            <div>{description}</div>
            <img className={styles.image} src={imageUrl} alt={alt}/>
        </div>
    )
}