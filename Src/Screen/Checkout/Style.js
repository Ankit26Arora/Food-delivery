import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');
export default style = StyleSheet.create({
  Checkout: {
    margin: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: 'black',
    fontSize: 18,
    marginLeft: 90,
  },
  Payment: {
    color: 'black',
    fontSize: 34,
    marginLeft: 28,
    marginTop: 20,
  },
  container: {
    height: 170,
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 10,
    marginLeft: 30,
    marginTop:20
  },
  name:{
    color:'black',
    fontSize:20,
    margin:5
  },
  street:{
    color:'black',
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor:'gray',
    margin:5
  },
  delivery:{
    color:'black',
    width:'80%',
    marginLeft:'10%',
    fontSize:20,
    marginTop:'5%'
  },
  containers: {
    backgroundColor: 'white',
    width: '80%',
    marginLeft: 30,
    marginTop:10,
    borderRadius:20,
    marginTop:'5%',
    
  },
  modal:{
    height:'45%',
    width:'80%',
    backgroundColor:'white',
    marginTop:'65%',
    marginLeft:'8.5%',
    borderRadius:30,

  }
});
