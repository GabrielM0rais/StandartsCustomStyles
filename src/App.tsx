import React from 'react';
import {View} from 'react-native';
import {ThemeProvider} from './theme/Provider';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <View />
    </ThemeProvider>
  );
};

export default App;
