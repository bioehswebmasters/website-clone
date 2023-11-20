import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import getImagesFromFolder from './GetImages';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EventsCarousel.css'; // Add this import

const EventsCarousel = ({ eventFolder }) => {
    const images = getImagesFromFolder(eventFolder);

    return (
        <Carousel className="custom-carousel">
            {images.map((image, index) => (
                <Carousel.Item key={index}>
                    <div className="custom-image-container">
                        <img
                            src={require(`../../Images/Events/Fall2023/October2023/${eventFolder}/${image}`)}
                            alt={`Slide ${index + 1}`}
                            className="custom-image"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>Slide {index + 1}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default EventsCarousel;
