import { registerRootComponent } from 'expo';
import React from 'react';
import AppNavigation from './navigations/AppNavigation';

const App = () => {
  return (
    <AppNavigation/>
  );
}

export default App;

registerRootComponent(App);