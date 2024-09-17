import styled from 'styled-components/native';
import { Colors, Pages_Colors, Flags_Colors } from "../../colors";

export const Mob_Body = styled.View`
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    width: 100%;
    height: 100%;
    background-color: aliceblue;
    `;

export const Mob_Container = styled.ScrollView`
    flex:1;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const Mob_View_Title = styled.View`
    flex:1;
    justify-content: stretch;
    align-items: center;
`;

export const Mob_Title = styled.Text`
    font-size: 32px;
    font-family:Arial;
    min-width: stretch;
    color: ${Colors.title};
    text-align: center;
`;
export const Mob_Lupa_View = styled.View`
  flex-direction: row;
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

export const Mob_Sub_Container = styled.View`
    flex:1;
    flex-direction: column;
    justify-content: center;
    flex-wrap: nowrap;
    align-items: center;
    height: 100%;
    width: 100%;
    gap:10px;
`;

export const Mob_Signature_Div_Info = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 95%;
    height: 170px;
    padding: 15px 0px 15px 0px;
    margin: 0px 3px 0px 3px;
    border-radius: 7px;
    border: 0.5px solid ${Colors.gray_70};
`;

export const Mob_Signature_Div_All_Data = styled.View`
flex:0;
flex-wrap: nowrap;
flex-direction: row;
justify-content: start;
padding: 0px;
width: auto;
min-width: 100%;
height: auto;
min-height: 100%;
padding-top: -15px;
`;

export const Mob_Signature_Div_Image = styled.View`
    flex:1;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    width: 110px;
    min-width: 110px;
    max-width: 110px;
    min-height: 100%;
    height: 60px;
    border-radius: 7px 0px 0px 0px;
    margin-left: 130px;
    background-color: ${Pages_Colors.icon_pastel_image_20};
`;

export const Mob_Signature_Div_Data = styled.View`
flex:1;
flex-wrap: nowrap;
flex-direction: column;
width: auto;
min-width: 100%;
height: auto;
min-height: 10%;
max-height: 30px;
margin: 15px 5px 5px 15px;
`;

export const Mob_Signature_Div_Data_List = styled.View`
flex:0;
flex-wrap: nowrap;
flex-direction: row;
justify-content: start;
padding: 0px;
width: auto;
min-width: 100%;
height: auto;
min-height: 100%;
margin-top: -10px;
padding-top: 5px;
`;

export const Mob_Signature_Div_Data_Title = styled.Text`
text-align: center;
font-size:  15px;
font-weight: bold;
font-family: Arial;
`;

export const Mob_Signature_Div_Data_Text = styled.Text`
text-align: center;
font-size:  14px;
font-family: Arial;
`;

export const Mob_Signature_Flag = styled.TouchableOpacity<{ $flag: number; }> `
flex:1;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: auto;
min-height: 30px;
max-height: 40px;
background-color: ${(props) => {
    if (props.$flag === 0) return Flags_Colors.yellow;
    if (props.$flag === 1) return Flags_Colors.green;
    if (props.$flag === 2) return Flags_Colors.gray;
    if (props.$flag === 3) return Flags_Colors.red;
    return Flags_Colors.yellow;
  }};
border-radius: 0px 0px 7px 7px;
`;

export const Mob_Icon_Image_Perfil = styled.Image`
    width: auto;
    max-width: 60px;
    min-width: 60px;
    height: auto;
    min-height: 60px;
    max-height: 60px;
    border-radius: 35px; 
`;

export const Mob_Signature_Flag_Title = styled.Text`
color : ${Colors.white};
text-align: center;
font-size:20px;
`;
