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



    return (
    <div style={sliderStyles}>
        <div style={leftArrowStyles} onClick={goToPrevious}>&#8592;</div>
        <div style={rightArrowStyles} onClick={goToNext}>&rarr;</div>
        <div className='logoBox'></div>
        <div style={slideStyles}></div>
        <div className="logo-animate"></div>
        <div className="logo-animatee"></div>
        <div className='textBox'>
            <p>See the World Through Clean Windows</p>
        </div>
    </div>
    )
}
export default ImageSlider;