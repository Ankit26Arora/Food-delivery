import { StyleSheet, Dimensions } from 'react-native'
const { width } = Dimensions.get("window");
const {height}=Dimensions.get("window");
export default style= StyleSheet.create({
   
  container:{
    width,
height: 350,
top: -15,
borderRadius: 50,
backgroundColor:'#FFFFFF',
justifyContent:'center',
  },
  image:{
    height:130,
    width:162,
    marginTop:113,
    marginLeft:106
  },
  text:{
    fontSize:18,
    marginLeft:90
    
    
  },
  text1:{
    fontSize:18,
    marginRight:90
    
    
  },
  loginPage:{
    borderBottomWidth:3,
    borderColor:'#C33F15',
    width:100,
    marginLeft:60


  },
  loginPage1:{
    borderBottomWidth:3,
    borderColor:'#C33F15',
    width:100,
marginRight:70

  },
  border:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:10
  }

 
}
)