import { StyleSheet, Dimensions } from 'react-native'
const { width } = Dimensions.get("window");
const {height}=Dimensions.get("window");
export default style= StyleSheet.create({
   
  container:{
    margin:20,
    flexDirection:'row'
  },
  cart:{
    fontSize:18,
    textAlign:'center',
    marginLeft:120,
    color:'#000000',
    marginTop:7,

  },
  Swipeitem:{
    resizeMode:'center',
    width:250,
    marginLeft:40

  },
  cartproducts:{
    height:102,
    width:315,
    backgroundColor:"white",
    borderRadius:20,
    marginLeft:20,
    marginTop:13,
    flexDirection:'row',
    alignItems:'center'
  },
  productImage:{
    height:70,
    width:70,
    borderRadius:50,
    marginLeft:20
  },
  ProductName:{
    color:'black',
    fontSize:20,
    marginLeft:20,
    fontWeight:'bold'
  },
  productPrice:{
    color:'#FA4A0C',
    marginLeft:20,
    fontSize:25,
    fontWeight:'bold'
  },
  Right:{
    height:102,
    width:315,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-end',
marginLeft:10,
marginTop:10    

  },
  Like:{
    backgroundColor:'#DF2C2C',
    height:45,
    width:45,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50,
    marginLeft:15
  },
  Add:{
    backgroundColor:'#FA4A0C',
    height:35,
    borderRadius:30,
    width:90,
   marginLeft:110 ,
   flexDirection:'row',
   alignItems:'center',
   justifyContent:'space-between'
  },
  touch:{
    width:'32%',
    justifyContent:'center',
    alignItems:'center'
  }
 
}
)