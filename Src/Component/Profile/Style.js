import { StyleSheet, Dimensions } from 'react-native'
const { width } = Dimensions.get("window");
const {height}=Dimensions.get("window");
export default style= StyleSheet.create({
    container:{
        width:'100%',
    },
    Text:{
        color:'black',
        fontSize:41,
        marginLeft:'3%',
        marginTop:'2%'
    },
    personal:{
        color:'black',
        fontSize:18
    },
    name:{
        color:'black',
        fontSize:18,
        
    },
    address:{
        color:'gray',
        fontSize:14,
        borderBottomWidth:1,
        borderColor:'gray',
        width:'80%'
    }
    
 
}
)