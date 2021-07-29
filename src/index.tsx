import React from 'react';
import ReactDOM from 'react-dom';
import '@shopify/polaris/dist/styles.css';
import {AppProvider} from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';

import {Wishlist} from './components/wishlist';

function WrappedApp() {
  return (
    <AppProvider i18n={enTranslations}>
      <Wishlist />
    </AppProvider>
  );
}

ReactDOM.render(<WrappedApp />, document.getElementById('root'));

