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
    if (props.$flag === 2) return Flags_Colors.red;
    if (props.$flag === 3) return Flags_Colors.gray;
    return Flags_Colors.yellow;
  }};
border-radius: 0px 0px 7px 7px;
`;

export const Mob_Signature_Flag_Title = styled.Text`
color : ${Colors.white};
text-align: center;
font-size:20px;
`;
//Mob



export const Mob_Sub_Bar_Data_Titles_View = styled.View`
 flex:1;
 display: flex;
 flex-direction: row;
 justify-content: space-evenly;
 align-items: center;
 /* align-self: center; */
 width: auto;
 min-width: 100%;
 max-width: 99%;
 height: auto;
 min-height: 30px;
 max-height: 40px;
 background-color: ${Colors.New_White};
 margin: 1px 0px 1px 0px;
 border-radius: 7px 7px 0px 0px;
`;
export const Mob_Sub_Bar_Data_Titles_Children = styled.View`
 flex:1;
 display: flex;
 flex-wrap: nowrap;
 flex-direction: row;
 justify-content: center;
 align-items: center;
 align-self: center;
 width: auto;
 min-width: 100px;
 max-width: 100%;
 /* margin:1px; */
 height: auto;
 min-height: 30px;
 max-height: 50px;



`;

export const Mob_Sub_Bar_Data_Titles_Text = styled.Text`
font-size: 10px;
font-weight: 700;
`;

export const Mob_Sub_Bar_Data_Titles_Text_2 = styled.Text`
font-size: 9px;
color: ${Colors.black};
font-weight: 900;
word-break: break-all;


`;
export const Mob_List_Items = styled.View`
    flex:1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    width: auto;
    height: auto;
    min-width: 100%;
    max-width: 500px;
    min-height: 30px;
    max-height: 30px;

`;
export const Mob_Data_List_Info = styled.View`
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: nowrap;
    width: auto;
    min-width: 100%;
    max-width: 30px;
    height: auto;
    min-height: 170px;
    max-width: 450px;
    background-color: ${Colors.white};
    /* border-radius: 1vh; */
    /* border: solid darkgray; */

`;
export const Mob_Data_List_Info_Data = styled.View`
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    justify-content: center;

    flex-wrap: nowrap;
    width: auto;
    min-width: 100%;
    max-width: 300px;
    height: auto;
    min-height: 2px;
    max-height: 30px;
    background-color: ${Pages_Colors.flag_Color};
    /* margin-bottom: 0.1vh; */
`;

export const Mob_Sub_Bar_Data_Data_View = styled.View<{ $index: number; }> `
 flex:1;
 display: flex;
 flex-direction: row;
 justify-content: space-evenly;
 align-items: center;
 width: auto;
 min-width: 100%;
 max-width: 30px;
 height: auto;
 min-height: 38.5px;
 max-height: 35px;
 background-color: ${(props: any) => {
    if (props.$index % 2 == 0) return Pages_Colors.flag_Color_2;
    else return Pages_Colors.flag_Color;
  } };
 border: 0.1px gray;
`;
