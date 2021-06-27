import React, {useContext} from 'react';
import {Text} from 'react-native';
import {Button, Overlay} from 'react-native-elements';
import {BmiContext} from './../../context/bmiContext';

const OverlayInfo = () => {
  const context = useContext(BmiContext);
  return (
    // ====== Overlay Page Information BMI Application ======
    <Overlay
      isVisible={context.visibleH}
      onPress={context.toggleOverlay}
      overlayStyle={{
        width: 300,
        height: 370,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#99ffff',
      }}>
      <Text>Information!</Text>
      <Text>
        BMI is a useful measurement for most people over 20 years. It is an
        estimate and should be considered as a rough guide only as it does not
        take into account age, gender, ethnicity, or body composition.
      </Text>
      <Button
        title="Ok"
        titleStyle={{fontSize: 14, fontWeight: 'bold'}}
        buttonStyle={{backgroundColor: 'orange', width: 280}}
        onPress={context.toggleOverlayH}
      />
    </Overlay>
  );
};
export default OverlayInfo;
