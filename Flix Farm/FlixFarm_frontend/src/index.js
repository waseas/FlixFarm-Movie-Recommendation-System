import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faPhone, faLocationArrow, faPhoneAlt, faMapMarker, faMapMarked } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faPhoneAlt, faMapMarked);
// This line cased an error -> Module not found

ReactDOM.render(<App />, document.getElementById('root'));
