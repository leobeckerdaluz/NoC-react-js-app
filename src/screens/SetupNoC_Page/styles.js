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
    input:{
        flex: 1,
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
    }
});