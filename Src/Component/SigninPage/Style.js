import { StyleSheet, Dimensions } from 'react-native'
const { width } = Dimensions.get("window");
const {height}=Dimensions.get("window");
export default style= StyleSheet.create({
    container:{
        height:300,
        width:'80%',
        margin:10,
        marginLeft:35,
        
    
    },
    email:{
        fontSize:15,
        marginTop:10
    }
 
}
)