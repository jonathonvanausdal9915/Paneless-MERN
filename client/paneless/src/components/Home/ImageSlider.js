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
        
        color: 'white',
        zIndex: 1,
        cursor: "pointer",
        fontSize:"50px",
        fontWeight:"700",

    };
    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '32px',
      
        color: 'white',
        zIndex: 1,
        cursor: "pointer",
        fontSize:"50px",
        fontWeight:"700",

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
    color:'#1b2430',
   
};
const goToSlide = slideIndex => {
    setCurrentIndex(slideIndex);
}


    return (
        <>
       
    <div style={sliderStyles}>
        <div className="logo-animate"></div>
        
        <div style={leftArrowStyles} onClick={goToPrevious}>&#8592;</div>
        <div style={rightArrowStyles} onClick={goToNext}>&rarr;</div>
        <div className="logoBox"></div>
        <div className="textBox">
        
            <p><b>Making your window cleaning experience as "PANELESS" as possible.</b></p>

            <br />
           
            <div className="btn-alignment">
                <button className='quotebtn'>Request Quote</button>
                <button className='contactbtn'>Contact Us</button>
            </div>
            <br />
            <br />
            <div style={dotsContainerStyles}>
            {slides.map((slide,slideIndex) => (
                <div key={slideIndex} style={dotStyles} onClick={() => goToSlide(slideIndex)}>&#183;</div>
            ))}
        </div>
           
        </div>
        
        <div style={slideStyles}></div>
       
       
        
    </div>
  
    </>
    )

}
export default ImageSlider;