import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styled from '@emotion/styled';
import backgroundImage from '../assets/whitebackground/shutterstock_1420333637.jpg';

const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 1em;
`;

const Homepage = () => {
  return (
    <div className="flex flex-wrap justify-center bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <motion.div 
        className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white"
        whileHover={{ scale: 1.05 }}
      >
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2">Welcome to Our Store!</div>
          <p className="text-gray-700 text-base">Explore our collection of products and find the perfect one for you.</p>
          <Button>Start Shopping Now!</Button>
        </div>
        <Carousel autoPlay infiniteLoop>
          <div>
            <img src={require('../assets/whitebackground/shutterstock_1420333637.jpg')} alt="Product 1" />
            <p className="legend">Product 1</p>
          </div>
          <div>
            <img src={require('../assets/whitebackground/shutterstock_1420333637.jpg')} alt="Product 2" />
            <p className="legend">Product 2</p>
          </div>
          <div>
            <img src={require('../assets/whitebackground/shutterstock_1420333637.jpg')} alt="Product 3" />
            <p className="legend">Product 3</p>
          </div>
        </Carousel>
      </motion.div>
    </div>
  );
};

export default Homepage;
