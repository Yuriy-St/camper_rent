import '../node_modules/modern-normalize/modern-normalize.css';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Global } from '@emotion/react';
import globalStyles from './styles/globalStyles.js';
import App from './app/App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/camper_rent/">
    <Global styles={globalStyles} />
    <App />
  </BrowserRouter>
);
