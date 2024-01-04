import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

export default Style = StyleSheet.create({
  back: {
    height: 24,
    width: 24,position:'absolute',
  },
  header: {
    marginTop: 40,
    marginLeft:40,
    marginRight:40,
    marginBottom:10,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  name: {
    fontSize: 28,
    color: 'black',
    height: 52,
    fontWeight: 'bold'
  },
  price: {
    color: '#C33F15',
    fontSize: 25,
    fontWeight: 'bold'
  },
  des: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold'
  },
  description: {
    color: 'black',
    fontSize: 15,
    marginTop: 5
  },
  shadowStyle: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  dese: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 10
  },
  swiperContainer: {
    height: 300,
    width: '100%',
  },
  swiper: {
    // height: '100%',
    // width: '100%',
    // borderRadius: 150
  },
  slide: {
    elevation: 10,
    shadowColor:'red',
    shadowOffset: {width: 20, height: 4},
    shadowOpacity: 20,
    shadowRadius: 30,
    alignItems:'center'
  },
  image: {
    width: 241,
    height: 241,
    borderRadius: 150,
  },
});
