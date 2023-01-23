
import ImageSlider from './ImageSlider';
import image1 from '../../assets/images/aboutus.jpeg'
import image2 from '../../assets/images/example5.png'
import image3 from '../../assets/images/paneless1.jpeg'
import image4 from '../../assets/images/paneless2.jpeg'
import image5 from '../../assets/images/paneless3.jpeg'
import {GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import './index.scss'
import { faMapLocationDot} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const slides = [
    {image: image1 },
    {image: image2 },
    {image: image3 },
    {image: image4 },
    {image: image5 },
];
const containerStyles = {
    width: '100%',
    height: '80vh',
    margin:'auto',
    paddingBottom:'25px',

   
};

const Home = () => {
    const { isLoaded } = useLoadScript({googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

if (!isLoaded) return <div>Loading...</div>

function Map() {
    return <GoogleMap zoom={10} center={{lat: 40.3769, lng: -111.7958}} mapContainerClassName='map-container'>
        <Marker position={{ lat:40.3769, lng: -111.7958}} />
    </GoogleMap>
}
return (
   <div>
        <br />
        <br />
      
        <div style={containerStyles}>
        <ImageSlider slides={slides} />
        
        </div>
        <div className="map-section">
           
        <Map /> 
        <h2 className="h2">Our Service Areas</h2>
        <br />
        <section className="service-area">
           
            <div className="area-1">  <ul className="no-bullets">
                <li><FontAwesomeIcon icon={faMapLocationDot} color="#0074B7"/> &nbsp;American Fork</li>
                <li><FontAwesomeIcon icon={faMapLocationDot} color="#0074B7"/> &nbsp;Lehi</li>
                <li><FontAwesomeIcon icon={faMapLocationDot} color="#0074B7"/> &nbsp;Highland</li>
                <li><FontAwesomeIcon icon={faMapLocationDot} color="#0074B7"/> &nbsp;Alpine</li>
                <li><FontAwesomeIcon icon={faMapLocationDot} color="#0074B7"/> &nbsp;Orem</li>
                <li><FontAwesomeIcon icon={faMapLocationDot} color="#0074B7"/> &nbsp;Provo</li>
            </ul></div>
           <div className="area-2">
           <ul className="no-bullets">
                <li><FontAwesomeIcon icon={faMapLocationDot} color="#0074B7"/> &nbsp;Sandy</li>
                <li><FontAwesomeIcon icon={faMapLocationDot} color="#0074B7"/> &nbsp;Bluffdale</li>
                <li><FontAwesomeIcon icon={faMapLocationDot} color="#0074B7"/> &nbsp;Pleasant Grove</li>
                <li><FontAwesomeIcon icon={faMapLocationDot} color="#0074B7"/> &nbsp;South Jordan</li>
                <li><FontAwesomeIcon icon={faMapLocationDot} color="#0074B7"/> &nbsp;Riverton</li>
                <li><FontAwesomeIcon icon={faMapLocationDot} color="#0074B7"/> &nbsp;Salt Lake</li>
            </ul>

           </div>
        </section>
        </div>
       
    </div>

)
}
export default Home