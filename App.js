/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
 // para llamar una imgen uri para una imagen de la nube
//  para llamar de un directorio local es require

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import Loading from './src/sections/components/loading';
import AppLayout from './src/app';
type Props = {};
export default class App extends Component<Props> {
  
  render() {
    return (
      <Provider
        store={store}
      > 
        <PersistGate
          loading={<Loading />}
          persistor={persistor}
        >
        <AppLayout />
        </PersistGate>
      </Provider>
    );
  }
}
