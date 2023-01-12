import './index.scss';
import ImageSlider from './ImageSlider';
import image1 from '../../assets/images/aboutus.jpeg'
import image2 from '../../assets/images/example.jpeg'
import image3 from '../../assets/images/paneless1.jpeg'
import image4 from '../../assets/images/paneless2.jpeg'
import image5 from '../../assets/images/paneless3.jpeg'
import { faHome } from '@fortawesome/free-solid-svg-icons'
const slides = [
    {image: image1 },
    {image: image2 },
    {image: image3 },
    {image: image4 },
    {image: image5 },
];
const containerStyles = {
    width: '650px',
    height: '364px',
    margin: '0 auto',
};
const Home = () => {
return (
   <div>
        <br />
        <br />
        <div style={containerStyles}>
        <ImageSlider slides={slides} />
        </div>
    </div>

)
}
export default Home