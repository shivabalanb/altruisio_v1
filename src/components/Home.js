import React,{useState} from 'react'
import hero from './hero.png'
import ex1 from './ex1.jpg'
import {Carousel} from 'react-bootstrap'

function Home() {
    const [index, setIndex] = useState(0);


  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <div className="text-center justify-content-center">
            <h2 className="display-4 m-5">Home</h2>
            <div className="m-auto w-25">
            <Carousel activeIndex={index} onSelect={handleSelect}  indicators={false} controls={true} nextLabel={''} prevLabel={''}>
                <Carousel.Item >
                    <img
                    className="d-block w-100"
                    src={ex1}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={hero}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={ex1}
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Home
