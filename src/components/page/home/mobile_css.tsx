import React from 'react';
import styled from 'styled-components/native';
import { Colors, Home_Colors,Header_Colors, Pages_Colors } from '../../colors';

export const Body = styled.View`
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    width: 100%;
    height: 100%;
    background-color: aliceblue;

    `

export const Container = styled.ScrollView`
    flex:1;
    flex-direction: column;
    width: 100%;
    height: 100%;
    /* background-color: crimson; */
    /* gap:50; */
`


export const Sub_Container = styled.View`

    width: 100%;
    /* height: 100%; */
    min-height: 400px;
    /* background-color: ${Pages_Colors.sub_container}; */
    gap:15
`

//Text

export const Title = styled.Text`
    padding: 5px 0px 5px 0px;
    font-size: 30;
    font-weight: 700;
    text-align: center;
    font-family:Arial;
    min-width: stretch;
    color: ${Colors.title};
    /* background-color: ${Colors.primary};   */
`
export const Sub_Title = styled.Text`
    margin-top: 50;
    padding-left: 10;
    font-size: 20;
    font-weight: 700;
    font-family:bold;
    min-width: stretch;

    color: ${Colors.white};
    background-color: ${Header_Colors.background};  
`


//Balon
export const Ballon_List_info = styled.View`
    flex: 1;
    /* background-color: red; */
    flex-direction: column;
    justify-content:space-between;
        /* background-color: ${Pages_Colors.icon_back_gray}; */
    /* border:solid #C0C0C09D 0.005vh; */
    /* margin: 1vh 2vh 1vh  1vh; */
    margin: 2%;
    width: auto;
    min-width: 30px;
    max-width: 78px;

    height: 10vh;
    /* gap:1vh; */

    `

export const Ballon_Row_List_Info = styled.View`
    flex:1;
    flex-direction: row;
    justify-content: flex-start;
    align-items: start;
    width: auto;
    min-width:330px;
    height: auto;
    min-height: 100%;
    background-color: ${Pages_Colors.sub_container};
   border-radius: 7px;
    ` 


    export const Ballon_Button_info = styled.TouchableOpacity`
justify-content: center;
    align-items: center;
    width: auto;
    min-width: 70px;
    height: auto;
    padding: 3px;
    max-height: 78px;
       border-radius: 7px 0px 0px 7px;
    /* background-color: ${Colors.black}; */
`

export const Back_To_Image = styled.Image`
    justify-content: center;
    align-items: center;
    width: auto;
    max-width: 0px;
    min-width: 70px;
    height: auto;
    min-height: 70px;
    max-height: 70px;
    /* margin: 0.3vh; */

`
export const Back_To_Perfil = styled.Image`
    justify-content: center;
    align-items: center;
    width: auto;
    border-radius: 35px;
    max-width: 0px;
    min-width: 70px;
    height: auto;
    min-height: 70px;
    max-height: 70px;
    /* margin: 0.3vh; */

`
export const Data_col_info = styled.View`
    flex:1;
    flex-direction: column;
    justify-content: flex-start;
    /* align-items: center; */
`
export const Data_List_Col_Info = styled.View`
    flex: 1;
    flex-direction: row;
`

export const Ballon_Data_Title = styled.Text`
    font-size: 18px;
    font-family: Arial;
    font-weight: bold;
`
export const Ballon_Data_Text = styled.Text`
    font-size: 17px;
    font-family: Arial;
    /* font-weight: bold; */
`