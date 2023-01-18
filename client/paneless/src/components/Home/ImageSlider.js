import { useState } from "react";
import './image.scss'

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderStyles = {
    height: '100%',
    position: 'relative',
    };

    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex].image})`,

    };
    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '32px',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1,
        cursor: "pointer",
        fontSize:"80px",

    };
    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '32px',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1,
        cursor: "pointer",
        fontSize:"80px",

    };

const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
    setCurrentIndex(newIndex);
};
const goToNext = () => {
    const isLastSlide = currentIndex === slides.length -1
    const newIndex = isLastSlide ? 0 : currentIndex +1;
    setCurrentIndex(newIndex);
};
const dotsContainerStyles = {
    display: 'flex',
    justifyContent: 'center',

}
const dotStyles = {
    margin: '0 3px',
    cursor: "pointer",
    fontSize: '100px',
};
const goToSlide = slideIndex => {
    setCurrentIndex(slideIndex);
}


    return (
        <>
       
    <div style={sliderStyles}>
        
        <div style={leftArrowStyles} onClick={goToPrevious}>&#8592;</div>
        <div style={rightArrowStyles} onClick={goToNext}>&rarr;</div>
        <div className="logoBox"></div>
        <div className="textBox">
            <p><b>Making your window cleaning experience as "PANELESS" as possible.</b></p>
            <div className="btn-alignment">
                <button className='quotebtn'>Request Quote</button>
                <button className='contactbtn'>Contact Us</button>
            </div>
           
        </div>
        <div style={slideStyles}></div>
       
        <div style={dotsContainerStyles}>
            {slides.map((slide,slideIndex) => (
                <div key={slideIndex} style={dotStyles} onClick={() => goToSlide(slideIndex)}>&#183;</div>
            ))}
        </div>
    </div>
    </>
    )

}
export default ImageSlider;