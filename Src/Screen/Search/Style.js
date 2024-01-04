import { StyleSheet, Dimensions } from 'react-native'
const { width } = Dimensions.get("window");
const {height}=Dimensions.get("window");
export default style= StyleSheet.create({
   container:{
    backgroundColor:'#F9F9F9',
    borderRadius:40,
marginTop:15  ,
height
   },
  item:{
    flex:1,
  marginTop:80,
    fontSize:20,
    color:'black',
    textAlign:'center'

  },
  text:{
    color:'black',
    fontSize:28,
    paddingTop:20,
    fontWeight:'bold'

  },
  image:{
    position:'absolute',
    borderRadius:50,
    height:100,
    width:100,
    marginTop:-40
    
  },
  show:{
    backgroundColor:'#F9F9F9',
    width:150,
    height:200,
    alignItems:'center',
    borderRadius:30,
    elevation: 30, 
    borderRadius:20,
  },
  price:{
    color:'#FA4A0C',
    marginTop:'auto',
    fontSize:30,
    marginBottom:20
  }

 
}
)