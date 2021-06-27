import React, {useEffect} from 'react';
import RNBootSplash from "react-native-bootsplash";
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { BmiProvider} from './context/bmiContext';
import Navigations from './src/Screens/navigations';
const App = () => {
  useEffect(()=> {
    //? Splash Hide
    RNBootSplash.hide({ fade: true});
  },[])
  return (
    <SafeAreaProvider>
      <BmiProvider>
        <Navigations/>
      </BmiProvider>
    </SafeAreaProvider>
  )
 
};

export default App;


