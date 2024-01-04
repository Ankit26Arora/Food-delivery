import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');
export default style = StyleSheet.create({
  text: {
    fontSize: 34,
    marginLeft: 50,
    lineHeight: 40,
    width: 170,
    marginTop: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  Textinput: {
    width: 300,
    height: 60,
    fontSize: 17,
    
  },
  Scrollablemenu: {
    flexDirection: 'row',
    fontSize: 20,
    height: 30,
  },
  menu: {
    fontSize: 17,
    marginLeft: 70,
  },
  underline:{
    backgroundColor:'#FA4A0C',
    height:3,
    width:70,
    marginLeft:50,
    marginTop:10,
  },
  image: {
    borderRadius: 70,
    height: 150,
    width: 150,
    position:'absolute',
  },
  specify: {
    height: 300,
    width: 190,
    margin: 40,
    textAlign: 'center',
    marginTop:5
    
  },
  description: {
    height: 240,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:40,

  },
  name: {
    color: 'black',
    fontSize: 20,
    marginTop:100,
    fontWeight:'bold'
  },
  price: {
    color: '#FA4A0C',
    fontSize: 30,
    paddingTop:30,
    fontWeight:'bold'
 },
});
