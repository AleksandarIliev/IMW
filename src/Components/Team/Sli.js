import "./Sli.css";
import { Link } from "react-router-dom";

export const Sli = () => {
    return (
        <>
            {/* <!-- Container for the image gallery-- > */}
            <div className="container">

                {/* <!-- Full-width images with number text --> */}
                <div className="mySlides">
                    <div className="numbertext">1 / 6</div>
                    <img className="img" src="img_woods_wide.jpg" alt="some_text"/>
                </div>


                {/* <!-- Next and previous buttons --> */}
                <Link className="prev" onClick="plusSlides(-1)">&#10094;</Link>
                <Link className="next" onClick="plusSlides(1)">&#10095;</Link>

                {/* <!-- Image text --> */}
                <div className="caption-container">
                    <p id="caption"></p>
                </div>

                {/* <!-- Thumbnail images --> */}
                <div className="row">
                    <div className="column">
                        <img className="demo cursor" src="img_woods.jpg" onClick="currentSlide(1)" alt="The Woods" />
                    </div>
                </div>
            </div>
        </>
    )
}