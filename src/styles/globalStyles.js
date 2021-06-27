import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#006666',
      },
    
      main: {
        flex: 9,
        justifyContent: 'center',
        width: '100%',
      },
    
      footer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#005555',
        width: '100%',
        height: 60,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
      },
      btnrow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 130,
        margin: 5,
        padding: 5,
      },
      iconv: {
        width: 145,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
      },
      mainslider: {
        justifyContent: 'center',
        margin: 5,
        marginTop: -5,
        padding: 5,
      },
      sliderv: {
        height: 110,
        backgroundColor: '#008888',
        borderRadius: 10,
      },
      heightage: {
        width: 190,
        height: 200,
        backgroundColor: '#008888',
        borderRadius: 10,
      },
      buttonv: {
        flexDirection: 'row',
        backgroundColor: '#008888',
        height: 80,
        justifyContent: 'space-between',
        borderRadius: 10,
      },
      buttonv2: {
        flexDirection: 'row',
        backgroundColor: '#008888',
        height: 65,
        justifyContent: 'space-around',
        borderRadius: 10,
      },
      txts: {
        height: 75,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#99ffff',
      },
      topview: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#006666',
      },
      resultPage: {
        width: 300,
        height: 350,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#005555',
      },
      footerR: {
        flex: 1,
        flexDirection: 'row',
        height: 70,
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'orange',
      },
      bmiTitr: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
      },
      bmino: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#99ffff',
      },
      txtHealth: {
        textAlign: 'justify',
      },
      medicalTitr: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#006666',
      },
      distance1: {
          height: 15,
      },
      distance2: {
          height: 30,
      }
})