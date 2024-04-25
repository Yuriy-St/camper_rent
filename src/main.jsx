import '../node_modules/modern-normalize/modern-normalize.css';

import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Global } from '@emotion/react';
import globalStyles from './styles/globalStyles.js';
import App from './app/App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/camper_rent/">
        <Global styles={globalStyles} />
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
