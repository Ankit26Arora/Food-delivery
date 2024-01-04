import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

export default Style = StyleSheet.create({
  heading:{
    alignItems:'center',


  },
  Text:{
    fontSize:25,
    color:'#FA4A0C',
    fontWeight:'bold',
    marginTop:10,
  },
  items:{
    height:100,
    width:'80%',
    backgroundColor:"white",
    borderRadius:30,
    marginTop:20,
    flexDirection:'row',
    alignItems:'center'

  },
  removefav:{
    height:100,
    width:'80%'
  },  productImage:{
    height:70,
    width:70,
    borderRadius:50,
    marginLeft:20
  },
  item:{
    fontSize:25,
    color:'black',
    margin:20
  },
  button:{
    backgroundColor:'red',
    width:50,
    height:50,
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
    marginTop:45,
    marginLeft:40
    
    
  }
});
