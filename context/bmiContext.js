import React, {createContext, useState} from 'react';
import {Text} from 'react-native';

export const BmiContext = createContext();
export const BmiProvider = props => {
  const [height, setHeight] = useState(176);
  const [weight, setWeight] = useState(70);
  const [age, setAge] = useState(50);
  const [man, setMan] = useState(true);
  const [bmi, setBmi] = useState();
  const [textBmi, setTextBmi] = useState();
  const [heightImp, setHeightImp] = useState(69);
  const [weightImp, setWeightImp] = useState(155);
  const [textHealth, setTextHealth] = useState();
  const [visibleH, setVisibleH] = useState(false);
  const [visibleR, setVisibleR] = useState(false);
  function toggleOverlayH() {
    setVisibleH(!visibleH);
  }
  const toggleOverlayR = () => {
    setVisibleR(!visibleR);
  };

  const sexHandler = boolean => {
    setMan(boolean);
  };
  const heightSetter = value => {
    setHeight(value);
  };
  const weightSetter = value => {
    setWeight(value);
  };
  const ageHandler = value => {
    setAge(value);
  };
  const heightImpSetter = value => {
    setHeightImp(value);
  };
  const weightImpSetter = value => {
    setWeightImp(value);
  };

  const textBmiHandler = () => {
    setTextBmi();
    if (bmi < 18.5) {
      return (
        <Text style={{fontSize: 20, fontWeight: 'bold', color: ' blue'}}>
          Low weight
        </Text>
      );
    }
    if (bmi >= 18.5 && bmi <= 25) {
      return (
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#66ff99'}}>
          Healthy weight
        </Text>
      );
    }
    if (bmi > 25 && bmi < 30) {
      return (
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'yellow'}}>
          Pre-Obesity
        </Text>
      );
    }
    if (bmi >= 30 && bmi < 35) {
      return (
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'orange'}}>
          Obesity Class I
        </Text>
      );
    }
    if (bmi >= 35 && bmi < 40) {
      return (
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'red'}}>
          Obesity Class II
        </Text>
      );
    }
    if (bmi >= 40) {
      return (
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'red'}}>
          Obesity Class III
        </Text>
      );
    }
  };

  const textHealthHandler = () => {
    setTextHealth();
    if (bmi < 18.5) {
      return (
        <Text style={{fontSize: 14, fontWeight: '400', color: '#006666'}}>
          A BMI of less than 18.5 indicates that you are underweight, so you may
          need to put on some weight. You are recommended to ask your doctor or
          a dietitian for advice.
        </Text>
      );
    }
    if (bmi >= 18.5 && bmi <= 25) {
      return (
        <Text style={{fontSize: 14, fontWeight: '400', color: '#006666'}}>
          Your BMI indicates that you are at a healthy weight for your height.
          By maintaining a healthy weight, you lower your risk of developing
          serious health problems.
        </Text>
      );
    }
    if (bmi > 25 && bmi < 30) {
      return (
        <Text style={{fontSize: 14, fontWeight: '400', color: '#006666'}}>
          A BMI of 25 - 29.9 indicates that you are slightly overweight. In our
          looks-obsessed society, lots of people think that being overweight is
          an appearance issue. But being overweight is actually a medical
          concern because it can seriously affect a person's health.
        </Text>
      );
    }
    if (bmi >= 30 && bmi < 35) {
      return (
        <Text style={{fontSize: 14, fontWeight: '400', color: '#006666'}}>
          when people keep up a pattern of eating more calories than they burn,
          more and more fat builds up in their bodies. You may be advised to
          lose some weight for health reasons.
        </Text>
      );
    }
    if (bmi >= 35 && bmi < 40) {
      return (
        <Text style={{fontSize: 14, fontWeight: '400', color: '#006666'}}>
          A BMI of over 30 indicates that you are heavily overweight. your
          health may be at risk if you do not lose weight. You are recommended
          to talk your doctor or a dietitian for advice.
        </Text>
      );
    }
    if (bmi >= 40) {
      return (
        <Text style={{fontSize: 14, fontWeight: '400', color: '#006666'}}>
          Obesity tends to run in families. Some people have a genetic tendency
          to gain weight more easily than others. Although genes strongly
          influence body type and size, the environment also plays a role. You
          are recommended to talk your doctor or a dietitian for advice. your
          health may be at risk if you do not lose weight.
        </Text>
      );
    }
  };

  const calculate = () => {
    let h = (height / 100) * (height / 100);
    let w = weight;
    let bmi = Math.round(w / h);
    setBmi(bmi);
  };
  const calculateImp = () => {
    let hImp = heightImp * heightImp;
    let wImp = weightImp;
    let bmi = Math.round((wImp * 703) / hImp);
    setBmi(bmi);
  };
  // console.log(setBmi);
  // alert(bmi);

  const visibleSetter = boolean => {
    setVisible(boolean);
  };

  return (
    <BmiContext.Provider
      value={{
        height,
        weight,
        age,
        man,
        bmi,
        visibleH,
        visibleR,
        textBmi,
        heightImp,
        weightImp,
        textHealth,

        sexHandler,
        heightSetter,
        weightSetter,
        ageHandler,
        calculate,
        toggleOverlayH,
        toggleOverlayR,
        visibleSetter,
        textBmiHandler,
        heightImpSetter,
        weightImpSetter,
        calculateImp,
        textHealthHandler,
      }}>
      {props.children}
    </BmiContext.Provider>
  );
};


