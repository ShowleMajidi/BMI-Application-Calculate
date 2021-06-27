import React,{useContext} from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Icon} from 'react-native-elements';
import Result from './Result';
import Meteric from './Meteric';
import Imperal from './Imperal';
import OverlayInfo from './overlay';
import { BmiContext } from './../../context/bmiContext';

const Navigations = () => {
    const Stack = createStackNavigator();
    const Tab = createMaterialTopTabNavigator();
    const context = useContext(BmiContext);
    function appTabs() {
        return (

          // ====== Navigat Meteric - Imperal ======
          <Tab.Navigator
            initialRouteName="Meteric"
            tabBarOptions={{
              activeTintColor: 'orange',
              inactiveTintColor: '#006666',
              labelStyle: {
                textAlign: 'center',
                fontSize: 15,
                fontWeight: 'bold',
                style: {backgroundColor: '#99ffff'},
              },
              indicatorStyle: {
                backgroundColor: '#006666',
                borderBottomColor: 'Orange',
                borderBottomWidth: 1,
              },
            }}>
            <Tab.Screen
              name="Meteric"
              component={Meteric}
              options={{title: 'cm/kg'}}
              
            />
            <Tab.Screen
              name="Imperal"
              component={Imperal}
              options={{title: 'inch/pound'}}
            />
          </Tab.Navigator>
        );
      }
      
      return (
        
          // ====== Navigation Home ======
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{
              headerTintColor: '#99ffff',
              headerTitleAlign: 'center',
              headerStyle: {backgroundColor: '#005555'},
              headerTitleStyle: {fontSize: 20},
            }}>
              <Stack.Screen
                name="Home"
                children={appTabs}
                options={{
                  title: 'BMI Calculator',
                  
                  // ====== Icon Information ======
                  headerRight: () => (
                    <Icon
                      name="info"
                      type="AntDesign"
                      color="white"
                      size={40}
                      onPress={() => context.toggleOverlayH()}
                    />
                  ),
                  headerRightContainerStyle: {
                    marginRight: 10,
                  },
                }}
              />
              <Stack.Screen
                name="Result"
                component={Result}
                options={{
                  title: 'Result',
                  headerTintColor: '#006666',
                  headerTitleAlign: 'center',
                  headerStyle: {backgroundColor: 'orange'},
                  headerTitleStyle: {fontSize: 20, fontWeight: 'bold'},
                }}
              />
            </Stack.Navigator>
            
          <OverlayInfo/>
          </NavigationContainer>
    
   
      );
}

export default Navigations
