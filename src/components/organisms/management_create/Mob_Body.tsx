import styled from 'styled-components/native';
import { Colors, Pages_Colors, Flags_Colors } from "../../../components/colors";



export const Mob_Body = styled.View`
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    width: 100%;
    height: 100%;

    `;

export const Mob_Container = styled.ScrollView`
    flex:1;
    flex-direction: column;

    width: auto;
    min-width: 100px;
    max-width: 100%;
    height: auto;
    min-height: 200px;
    max-height: 100%;
    /* padding-top: 15px; */
    /* background-color: black; */
`;

export const Mob_View_Title = styled.View`
    flex:1;
    justify-content: center;
    align-items: center;
`;

export const Mob_Title = styled.Text`

    font-size: 32px;
    font-family:Arial;
    min-width: stretch;
    color: ${Colors.title};
    text-align: center;
`;

export const Mob_Sub_Title = styled.Text`
    font-size: 20px;
    font-family:Arial;
    min-width: stretch;
    color: ${Colors.title};
    text-align: center;
`;

export const Mob_Life_Time = styled.View`

  flex:1;
  flex-wrap: nowrap;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  width: auto;
  min-width: 90%;
  height:auto;
  min-height: 7px;
  margin-bottom: 15px;


  
`;

export const Mob_Life_Time_Box = styled.View<{$Position:number}>`
  z-index: 1;
  margin-right: -5.5px;
  width: 13.5px;
  height: 13.5px;
  border-radius: 6.75px;
  background-color: ${(props:any)=>{
    if(props.$Position === 0) return Colors.background;
    else return Colors.gray;
  }};
`
export const Mob_Life_Time_Line = styled.View<{$Position:number}>`
  z-index: 0;
  margin-right: -5.5px;
  width:auto;
  min-width: 40%;
  height: 8.3px;
  background-color:${(props:any)=>{
    if(props.$Position === 0) return Colors.background;
    else return Colors.gray;
  }};
`
export const Mob_Sub_Container = styled.View`
    flex:1;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: nowrap;
    align-items: center;
    height: auto;
    min-height: 400px;
    max-height: 100%;
    width: 100%;

    /* background-color: red; */

`;

export const Mob_List_Data_Inputs = styled.View`
flex:1;
flex-direction: column;
justify-content: flex-start;
flex-wrap: nowrap;
width: auto;
max-width: 100%;
min-width: 100%;
height: auto;
max-height: 100%;
min-height: 550px;
/* background-color: blue; */

`

export const Mob_List_Input_Title = styled.Text`
font-size: ${(1080 * 0.025)}px;
font-weight: 400;
color: ${Colors.title}
`
export const Mob_List_Input_Anotation = styled.Text`
font-size: ${(1080 * 0.002)}px;
word-break: break-all;
font-weight: 400;
color: ${Colors.title}
`



export const Mob_Sub_Bar_Data_image = styled.Image`
  flex:1;
  position: absolute;
  align-self: center;
  width: auto;
  height: auto;
  min-width: 400px;
  max-width: 550px;
  min-height: 200px;
  max-height: 250px;
  margin-top: 340px;
  align-items: center;
`
export const Mob_List_Input_ToggleContainer = styled.TouchableOpacity<{$isActive: boolean}>`
  width: 70px;
  height: 35px;
  border-radius: 15px;
  background-color: ${(props:any) => (props.$isActive ? Colors.background : '#ccc')};
  justify-content: ${(props:any) => (props.$isActive ? 'flex-end' : 'flex-start')};
  padding: 3px;
  align-items: center;
  flex-direction: row;
`;

export const Mob_List_Input_ToggleCircle = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: white;
`;



export const Mob_List_Input_TextInput = styled.TextInput<{$Widths:string ; $Heights:string}>`
border-radius: 0.7px;
background-color: ${Colors.New_White};
width: ${(props:any)=>{ return props.$Widths+'px'}};
height:auto;
text-align:start;
padding: 2%;

min-height:${(props:any)=>{ 
  if(props.$Heightws != '') return props.$Heights+'px'
    else return '18px'}} ;
max-height: '5px';
font-size: ${(1080 * 0.0145)}px;
padding-left: 15px;
font-weight: 400;
color:${Colors.gray};
outline-color: ${Colors.primary};
`


export const Mob_List_Input_View = styled.View`
flex:1;
/* justify-content: flex-start; */
padding-left: 5px;
/* padding-top: 2vh; */
width: 100%;
height: 100%;
margin-left: 10px;
/* gap:0.4px; */
/* background-color: white; */

`
export const Mob_List_Input_View_Internal = styled.View`
flex:1;
flex-direction: row;
height: auto;
min-height: 10px;
max-height:50px;

`



//Mob



export const Mob_Sub_Bar_Data_Titles_View = styled.View`
 flex:1;
 display: flex;
 flex-direction: row;
 justify-content: space-evenly;
 align-items: center;
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
 width: auto;
 min-width: 100px;
 max-width: 100%;
 /* margin:1px; */
 height: auto;
 min-height: 30px;
 max-height: 40px;

`;

export const Mob_Sub_Bar_Data_Titles_Text = styled.Text`
font-size: 10px;
font-weight: 700;
`;

export const Mob_Sub_Bar_Data_Titles_Text_2 = styled.Text`
font-size: 10px;
color: ${Colors.black};
font-weight: 500;
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

export const Mob_Sub_Bar_Data_Data_View = styled.View<{ $state: number; }> `
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
    if (props.$state == 0) return Flags_Colors.gray;
    if (props.$state == 1) return Flags_Colors.green;
    if (props.$state == 2) return Pages_Colors.Gerenciamento_Gray;
    else return Flags_Colors.red;
  } };
 border: 0.1px gray;
`;
