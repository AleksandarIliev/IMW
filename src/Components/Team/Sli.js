import "./Sli.css";
// import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { LanguageContext } from "../Context/LanguageContext";
// import ImageGallery from "react-image-gallery";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

export const Sli = () => {
    // const { dictionary } = useContext(LanguageContext);
    // const [index, setIndex] = useState(1);

    // useEffect(() => {
    //     const lastIndex = dictionary.contentTeam.length - 1;
    //     if (index < 0) {
    //         setIndex(lastIndex);
    //     } else if (index > lastIndex) {
    //         setIndex(0);
    //     }
    // }, [index, dictionary.contentTeam[0].certificates])

    // function plusSlide(n) {
    //     showSlide(setIndex += n)
    // }

    // function currentSlide(n) {
    //     showSlide(setIndex = n)
    // }

    // function showSlide(n) {
    //     const lastIndex = dictionary.contentTeam.length - 1
    //     if (n > lastIndex) {
    //         setIndex = 1;
    //     }
    //     if (n < 1) {
    //         setIndex = lastIndex;
    //     }
    // }

    const [index, setIndex] = useState(1);
    const { dictionary } = useContext(LanguageContext);
    const autoScroll = true;
    let sliderInterval;
    let timeInterval = 9000;

    function auto() {
        sliderInterval = setInterval(next, timeInterval);
    }
    useEffect(() => {
        if (autoScroll) {
            auto();
        }
        return () => clearInterval(sliderInterval);
    }, [index])

    const next = () => {
        if (index === dictionary.contentTeam[0].certificates.length - 1) {
            setIndex(1)
        } else {
            setIndex(index + 1)
        }
    }

    const prev = () => {
        if (index === 0) {
            setIndex(dictionary.contentTeam[0].certificates.length - 1)
        } else {
            setIndex(index - 1)
        }
    }

    const Thumb = ({ arr, image, index }) => {
        return (
            <div className="thumb">{
                arr.map((imgSrc, i) => {
                    return <img key={i} alt="" height="70" width="70" src={imgSrc} onClick={() => image(i)} className={index === i ? "active" : ""} style={{ margin: "2px" }} />
                })
            }</div>
        )
    }

return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='wrapper'>
                        <img src={dictionary.contentTeam[0].certificates[index].image} alt="" style={{ height: '280px', width: '100%', position: 'relative' }} />
                        <button onClick={prev} className="leftBtn"><FaArrowLeft /></button>
                        <button onClick={next} className="nextBtn"><FaArrowRight /></button>
                        <Thumb arr={dictionary.contentTeam[0].certificates} image={setIndex} index={index} /><br />
                    </div>
                </div>
            </div>
        </>
    )
    // console.log(dictionary.contentTeam[0].certificates);

    // return (
        // <div>
        //     {/* <!-- Container for the image gallery-- > */}
        //     <div className="container">

        //         {/* <!-- Full-width images with number text --> */}
        //         <div className="mySlides">
        //             {dictionary.contentTeam[0].certificates.map((slide, slideIndex) => {
        //                 const { id, image, description } = slide;
        //                 let position = "nextSlide";
        //                 if (slideIndex === index) {
        //                     position = "activeSlide";
        //                 }
        //                 if (
        //                     slideIndex === index - 1 ||
        //                     (index === 0 && slideIndex === dictionary.contentTeam.length - 1)
        //                 ) {
        //                     position = "lastSlide";
        //                 }
        //                 return (
        //                     <>
        //                         <div className="numbertext">{id} / {slide.length - 1}</div>
        //                         <img className="img" src={image} alt={description} />
        //                     </>
        //                 )
        //             })}
        //         </div>

        //         {/* <!-- Next and previous buttons --> */}
        //         <Link className="prev" onClick={() => setIndex(index - 1)}>&#10094;</Link>
        //         <Link className="next" onClick={() => setIndex(index + 1)}>&#10095;</Link>

        //         {/* <!-- Image text --> */}
        //         <div className="caption-container">
        //             <p id="caption"></p>
        //         </div>

        //         {/* <!-- Thumbnail images --> */}
        //         <div className="row">
        //             <div className="column">
        //                 <img className="demo cursor" src="img_woods.jpg" onClick="currentSlide(1)" alt="The Woods" />
        //             </div>
        //         </div>
        //     </div>
        // </div>

        // <div className="app">
        //     <header>
        //         <div className="header-wrapper">
        //             <h1>{dictionary.contentTeam[0].description}</h1>
        //         </div>
        //     </header>
        //     <div key={index}>
        //     {dictionary.contentTeam[0].certificates.map((content, contentIndex) => {
        //         const { id, image, description } = content;

        //         <div className="image-gallery-wrapper" key={id}>
        //             <ImageGallery items={image} autoPlay={true} showThumbnails={true} />
        //             <spam>{description}</spam>
        //         </div>
        //     })}
        //     </div>
        // </div>

        // <div>

        // </div>
    // )
}