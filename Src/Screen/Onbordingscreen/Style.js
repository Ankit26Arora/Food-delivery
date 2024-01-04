import { StyleSheet, Dimensions } from 'react-native'
const { width } = Dimensions.get("window");
const {height}=Dimensions.get("window");
export default style= StyleSheet.create({
   
   container:{
  flex:1,
  backgroundColor:'#FF4B3A',
  height,
  width
   },
 round:{
    height:73,
    width:73,
    backgroundColor:'#FFFFFF',
    borderRadius:50,
    marginTop:40,
    marginLeft:49,
    alignItems:'center',
    justifyContent:'center'

 },
 text:{
    color:'#FFFFFF',
    fontSize:65,
    marginLeft:51,
    marginTop:30,
    
 }
}
)