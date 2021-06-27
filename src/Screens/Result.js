import React, {useContext} from 'react';
import {Text, View, Share} from 'react-native';
import {Button, Icon,Overlay} from 'react-native-elements';
import {BmiContext} from './../../context/bmiContext';
// import Rate, {AndroidMarket} from 'react-native-rate';
import {styles} from '../styles/globalStyles';

const Result = () => {
  const context = useContext(BmiContext);
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topview}>
        <View style={styles.resultPage}>
          <Text style={styles.bmiTitr}>BMI</Text>
          <Text style={styles.bmino}>{context.bmi}</Text>
          <View>
            {/* ====== Calculate Result ====== */}
            <Text>{context.textBmiHandler()}</Text>
          </View>
        </View>
      </View>
      <View style={styles.footerR}>
        
        {/* ====== Medical Icon ====== */}
        <Icon
          name="comment-medical"
          type="font-awesome-5"
          color="#006666"
          size={40}
          onPress={context.toggleOverlayR}
        />

        {/* ====== Share Icon ====== */}
        <Icon
          name="share-alt-square"
          type="font-awesome-5"
          color="#006666"
          size={40}
          onPress={onShare}
        />
      </View>

      {/* ====== Overlay Page Medical Info ====== */}
      <View>
        <Overlay
          isVisible={context.visibleR}
          onPress={context.toggleOverlayR}
          overlayStyle={{
            width: 300,
            height: 370,
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#99ffff',
          }}>
          <Text style={styles.medicalTitr}>Medical Info!</Text>
          <Text style={styles.txtHealth}>{context.textHealthHandler()}</Text>
          <Button
            title="Ok"
            titleStyle={{fontSize: 14, fontWeight: 'bold'}}
            buttonStyle={{backgroundColor: 'orange', width: 280}}
            onPress={context.toggleOverlayR}
          />
        </Overlay>
      </View>
    </View>
  );
};

export default Result;

