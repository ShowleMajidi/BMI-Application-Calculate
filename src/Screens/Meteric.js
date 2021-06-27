import React, {useContext} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Button, Icon, Slider} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {BmiContext} from '../../context/bmiContext';
import {styles} from '../styles/globalStyles';

const Meteric = props => {
  const context = useContext(BmiContext);

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View style={styles.main}>
          <ScrollView
            contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
            {/* ====== sexHandler button ====== */}
            <View style={styles.btnrow}>
              <TouchableOpacity
                onPress={() => context.sexHandler(true)}
                style={[
                  styles.iconv,
                  {backgroundColor: context.man ? 'orange' : '#004444'},
                ]}>
                <Icon
                  name="male"
                  type="font-awesome-5"
                  size={70}
                  color={context.man ? '#006666' : '#99ffff'}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => context.sexHandler(false)}
                style={[
                  styles.iconv,
                  {backgroundColor: context.man ? '#004444' : 'orange'},
                ]}>
                <Icon
                  name="female"
                  type="font-awesome-5"
                  size={70}
                  color={context.man ? '#99ffff' : '#006666'}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.distance1} />

            {/* ====== Weight value ====== */}

            <View style={styles.mainslider}>
              <View style={styles.sliderv}>
                <Slider
                  value={context.weight}
                  onValueChange={value => context.weightSetter(value)}
                  maximumValue={100}
                  minimumValue={40}
                  maximumTrackTintColor="#99ffff"
                  minimumTrackTintColor="#005555"
                  thumbStyle={{
                    height: 20,
                    width: 10,
                    backgroundColor: '#003333',
                  }}
                  step={1}
                  style={{
                    height: 60,
                    marginHorizontal: 20,
                  }}
                />
                <View style={styles.buttonv}>
                  <Button
                    title=""
                    type="clear"
                    buttonStyle={{width: 75, height: 75}}
                    icon={
                      <Icon
                        name="minuscircleo"
                        type="antdesign"
                        size={25}
                        color="#99ffff"
                      />
                    }
                    onPress={() => {
                      if (context.weight > 40) {
                        context.weightSetter((context.weight * 10 - 2) / 10);
                      }
                    }}
                  />
                  <Text style={styles.txts}>
                    Weight (kg) : {context.weight}
                  </Text>
                  <Button
                    title=""
                    type="clear"
                    buttonStyle={{width: 75, height: 75}}
                    icon={
                      <Icon
                        name="pluscircleo"
                        type="antdesign"
                        size={25}
                        color="#99ffff"
                      />
                    }
                    onPress={() => {
                      if (context.weight < 100) {
                        context.weightSetter((context.weight * 10 + 2) / 10);
                      }
                    }}
                  />
                </View>
              </View>
            </View>

            <View style={styles.distance2} />

            {/* ====== Height Value ====== */}

            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <View style={styles.heightage}>
                <View>
                  <Text style={styles.txts}>
                    Height (cm) : {context.height}
                  </Text>
                </View>
                <View style={styles.buttonv2}>
                  <Button
                    title=""
                    type="clear"
                    buttonStyle={{width: 75, height: 75}}
                    icon={
                      <Icon
                        name="minuscircleo"
                        type="antdesign"
                        size={45}
                        color="#99ffff"
                      />
                    }
                    onPress={() => {
                      if (context.height > 150) {
                        context.heightSetter((context.height * 10 - 5) / 10);
                      }
                    }}
                  />

                  <Button
                    title=""
                    type="clear"
                    buttonStyle={{width: 75, height: 75}}
                    icon={
                      <Icon
                        name="pluscircleo"
                        type="antdesign"
                        size={45}
                        color="#99ffff"
                      />
                    }
                    onPress={() => {
                      if (context.height < 200) {
                        context.heightSetter((context.height * 10 + 5) / 10);
                      }
                    }}
                  />
                </View>
              </View>

              {/* ====== Age Value ====== */}

              <View style={styles.heightage}>
                <View>
                  <Text style={styles.txts}>Age : {context.age}</Text>
                </View>
                <View style={styles.buttonv2}>
                  <Button
                    title=""
                    type="clear"
                    buttonStyle={{width: 75, height: 75}}
                    icon={
                      <Icon
                        name="minuscircleo"
                        type="antdesign"
                        size={45}
                        color="#99ffff"
                      />
                    }
                    onPress={() => {
                      if (context.age > 20) {
                        context.ageHandler(context.age - 1);
                      }
                    }}
                  />

                  <Button
                    title=""
                    type="clear"
                    buttonStyle={{width: 75, height: 75}}
                    icon={
                      <Icon
                        name="pluscircleo"
                        type="antdesign"
                        size={45}
                        color="#99ffff"
                      />
                    }
                    onPress={() => {
                      if (context.age < 90) {
                        context.ageHandler(context.age + 1);
                      }
                    }}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        
        {/* ====== Footer ====== */}

        <View style={styles.footer}>
          <Button
            buttonStyle={{width: 300, height: 58, backgroundColor: '#005555'}}
            icon={
              <Icon
                name="calculator"
                type="font-awesome"
                size={15}
                color="white"
              />
            }
            title=" CALCULATE"
            titleStyle={{fontSize: 24, fontWeight: 'bold'}}
            onPress={() => {
              props.navigation.navigate('Result');
              context.calculate();
            }}
          />
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default Meteric;
