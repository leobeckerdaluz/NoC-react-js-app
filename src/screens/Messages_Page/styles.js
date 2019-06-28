import {StyleSheet} from 'react-native'

export default styles = StyleSheet.create({
    container: {
        // backgroundColor: 'black',
        paddingRight:10,
        paddingLeft:10,
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center"
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 2,
        padding: 10
        // paddingTop: 20,
        // fontSize:11,
        // marginBottom: 100,
    },
    text: {
        // flexDirection: 'row',
        // marginBottom: 2,
        // padding: 10
        flexDirection: 'row',
        flex:0.3,
        height: 20
    },
    input:{
        flex: 0.7,
        borderRadius: 5,
        borderWidth: 0.2,
        height:40,
        borderColor: '#7a42f4',
        paddingLeft:5,
        paddingRight:5
        // margin: 15,
        // height: 30,
        // borderColor: '#7a42f4',
        // borderRadius: 5,
        // borderWidth: 1
    },
    list: {
        paddingVertical: 5,
        margin: 3,
        flexDirection: "row",
        backgroundColor: "white",
        justifyContent: "flex-start",
        alignItems: "center",
        zIndex: -1
      },
});