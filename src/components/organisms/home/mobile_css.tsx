import React from 'react';
import styled from 'styled-components/native';
import { Colors, Header_Colors, Home_Colors, Pages_Colors } from '../../../components/colors';

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
    color: ${Colors.title};
    /* background-color: ${Colors.primary};   */
`
export const Mob_Ballon_Ballon = styled.View`
flex:1;
flex-direction: column;
width: 100%;

`
export const Mob_Text_ballon= styled.Text`
    /* margin-top: 50; */
    width: 100%;
    font-size: 18;
    font-weight: 700;
    font-family:bold;
    color: ${Colors.white}; 
    padding-right: 25;
    `
export const Sub_Title = styled.Text`
    /* margin-top: 50; */
    padding-left: 10;
    font-size: 15;
    font-weight: 700;
    font-family:bold;
    color: ${Colors.white};
    background-color: ${Header_Colors.background};  
`
export const Mob_Balon_View_Home = styled.View`
flex:1;
flex-wrap: wrap;
justify-content: center;
background-color: ${Pages_Colors.sub_sub_container};
width: auto;
height: auto;
height: 530px;
min-width: 420px;
max-width: 300px;
margin: 1px 1px 2px 2px;

gap:1px;
`


export const Mob_Sub_Title = styled.Text`
    font-size:  ${(1080* 0.002)}px;
    
    font-family:bold;
    font-family: Arial;
    /* min-width: stretch; */
    color: ${Colors.white};

`
export const Mob_Flag_Sub_Title = styled.View`
    flex:1;
    /* flex-wrap: wrap; */
    width:auto;
    min-height: 30px;
    max-width:55px;
    height: auto;
    min-height: 5px;
    max-height: 5px;
    padding-left: 1px;
    background-color: ${Pages_Colors.flag_Color};
    justify-content: center;
    align-items: start;
    /* margin: 0px; */
    border-radius: 0.5px 0.5px 0.5px 0px;
`
export const Mob_Ballon_List_info_Home = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content:space-between;
    flex-wrap: wrap;

    margin: 1px 4px 1px  1px;
    width: auto;
    min-width: 100%;
    max-width: 178px;
    padding: 0px 10px 5px 10px;
    height: 10px;
    gap:7px;

    `

export const Web_Ballon_List_info_Home = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content:space-between;
    flex-wrap: wrap;

    margin: 1vh 2vh 1vh  1vh;
    width: auto;
    min-width: 30vh;
    max-width: 78vh;

    height: 10vh;
    gap:1vh;

    `
//Balon
export const Ballon_List_info = styled.View`
    flex: 1;
    /* background-color: red; */
    flex-direction: column;
    justify-content:flex-start;
        /* background-color: ${Pages_Colors.icon_back_gray}; */
    /* border:solid #C0C0C09D 0.005vh; */
    /* margin: 1vh 2vh 1vh  1vh; */
    margin: 2%;
    width: auto;
    min-width: 30px;
    max-width: 78px;
    height: auto;
    min-height: 70px;
    max-height: 80px;
    /* height: 10vh; */
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
    /* border-radius: 35px; */
    max-width: 0px;
    min-width: 70px;
    height: auto;
    min-height: 70px;
    max-height: 70px;
    /* margin: 0.3vh; */

`
export const Back_To_Perfil_User = styled.Image`
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


export const Mob_Lupa_View = styled.View`
  flex-direction: row;
  align-self: center;
  align-items: center;
  width: 85%;
  padding: 10px;
  margin: 10px 0;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 5px;
  background-color: ${Colors.white_70};

`;

export const Mob_Lupa_TextInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
`;