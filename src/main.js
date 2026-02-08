import './styles/main.scss';
import clayImg from './images/featured/clay.jpg';
import spaceImage1 from './images/body-images/space-image1.jpg';
import spaceImage2 from './images/body-images/space-image2.jpg';
import { setupCounter } from './counter.js';

document.querySelector('#project1-img').src = spaceImage1; 
document.querySelector('#project2-img').src = spaceImage2; 
document.querySelector('.clay-image').src = clayImg;

setupCounter(document.querySelector('#counter'))

