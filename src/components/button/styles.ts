import {StyleSheet} from 'react-native'
import { Colors } from '../colors'
export const styles = StyleSheet.create({
    container:{
        width:"100%",
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center",
        gap: 25,
        marginTop:10,
        marginBottom:10,
        padding:11,
        borderRadius:16,
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 5 },
        shadowOpacity: 3,
        shadowRadius: 3,
        elevation: 20,
    },
    background_sign:{        backgroundColor: Colors.gray_70,},
    background_exit:{        backgroundColor: Colors.exit,},
    icon:{
        color:Colors.white,
        fontSize:32,

    },
    title:{
        color:Colors.white,
    fontSize: 16},
    subcontainer:{
        flex:0,
        marginBottom:30,
        flexDirection:'row',

    },
    registrer:{
        backgroundColor: Colors['background-1'],
        borderRadius:6,
        paddingLeft:5,
        paddingRight:5,


    },
    info:{
        fontSize:12,
        color: Colors.gray,
        fontWeight:'bold',
        textAlign:'center',
    },
    infobutton:{
        fontSize:12,
        color: Colors.primary,
        textShadowColor:Colors.black,
        textShadowOffset:{width:1,height:1},
        textShadowRadius:2,
        fontWeight:'bold',
        textAlign:'center',
        padding:2,
    }
})