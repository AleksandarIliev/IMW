export const Slide = ({ id, image, description, active }) => {
    return (
        <div className={`slide ${active ? "active" : ""}`}>
            <img src={image} alt={description}/>
            <span>{description}</span>
        </div>
    )
}