import styled from "styled-components/native";
import { Colors, Pages_Colors, Header_Colors, Flags_Colors } from "../../colors";

export const Mob_Body = styled.View`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-end;
  width: auto;
  height: auto;

  background-color: ${Colors.white};
`;

export const Mob_Container = styled.ScrollView`
  flex: 1;
  flex-wrap: nowrap;
  width: auto;
  max-width: 100%;
  height:auto;

`;

export const Mob_Sub_Container = styled.View`
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: start;
  justify-content: flex-start;
  width: auto;
  height: auto;
  min-width: 100%;
`;

export const Mob_View_Title = styled.View`
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
  width: auto;
  height: auto;
  max-height: 50px;
  margin: 50px 50px 100px 50px;

`;

export const Mob_Title = styled.Text`
  width: 100%;
  font-size: 24px;
  font-family: Arial;
  text-align: center;
  color: ${Colors.title};
  margin-top: 10px;
  padding: 10px 30px;
  border-radius: 5px;
`;


export const Mob_Lupa_TextInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  padding: 5px;
`;

export const Mob_Bar_Info = styled.View`
  display: flex;
  flex-direction: column;
  height: auto;
  width: auto;
  max-width: 700px;
  min-width: 42%;
  max-height: 400px;
  min-height: 535px;
  padding-bottom: 50px;
  margin: 0px 0px 10px 20px;
  border-radius: 5px;
`;

export const Mob_Bar_Info_Advanced = styled.View`
  display: flex;
  flex-direction: column;
  height: auto;
  width: auto;
  min-width: 42%;
  max-width: 700px;
  max-height: 400px;
  min-height: 20%;
  padding-bottom: 50px;
  margin: 0px 0px 10px 20px;
  border-radius: 5px;
`;

export const Mob_Sub_Bar_Info = styled.View`
  flex: 1;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction: column;
  align-items: stretch;
  height: auto;
  max-height: 100%;
  min-height: 400px;
`;

export const Mob_Flag_Sub_Title = styled.View`
  flex: 1;
  width: auto;
  height: auto;
  max-width: 100%;
  min-width: 100%;
  max-height: 60px;
  min-height: 40px;
  padding-left: 10px;
  background-color: ${Pages_Colors.flag_Color};
  justify-content: center;
  align-items: flex-start;
  border-radius: 5px 5px 5px 0px;
`;

export const Mob_Sub_Title = styled.Text`
  font-size: 23px;
  font-family: Arial;
  color: ${Colors.white};
`;

export const Mob_Container_Photo = styled.Image`
  align-self: center;
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const Mob_Signature_Flag = styled.TouchableOpacity<{ $flag: number }>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: 20px;
  max-height: 30px;
  background-color: ${(props: any) => {
    if (props.$flag === 0) return Flags_Colors.yellow;
    if (props.$flag === 1) return Flags_Colors.green;
    if (props.$flag === 2) return Flags_Colors.red;
    if (props.$flag === 3) return Flags_Colors.gray;
    return "transparent";
  }};
  border-radius: 0px 0px 7px 7px;
`;

export const Mob_Signature_Flag_Title = styled.Text`
  font-size: 14px;
  color: ${Colors.white};
  text-align: center;
`;

export const Mob_Children_Column = styled.View`
  flex: 1;
  justify-content: start;
  align-items: center;


  width: 100%;
  height: auto;

  min-height: 630px;
  max-height: 520px;
`;
export const Mob_Children_Input_View_Info = styled.View`
  flex: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: 190px;
  /* background-color: red; */
  padding-top: 10px;

`;
export const Mob_Children_Input_View = styled.View`
  flex: 1;
  justify-content: center;
  flex-direction: column;
  align-items: start;
margin-top: 5px;
`;
export const Mob_Children_Input_View_Save = styled.View`
  flex: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: auto;
  min-height: 90px;


`;
export const Mob_Children_Input_Label = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

export const Mob_Children_Input = styled.TextInput`
  width: 300px;
  height: 50px;
  border-radius: 7px;
  background-color: ${Colors.gray_30};
  padding-left: 10px;

  color: black;
`;

export const Mob_Children_Button_Exit_View = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

`;

export const Mob_Children_Button_Delete_View = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 520px;
  height: auto;
  gap: 10px;
  border-radius: 10px;
`;

export const Mob_Children_Button = styled.TouchableOpacity<{$type: string}>`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: auto;
  min-width: 70px;
  max-width: 70px;
  height: auto;
  margin-top: 10px;
  min-height: 40px;
    max-height: 40px;
  border-radius: 7px;
  background-color: ${(props: any) => {
    if (props.$type === "exit") return Flags_Colors.red;
    if (props.$type === "save") return Flags_Colors.green;
    return Colors.black;
  }};
`;

export const Mob_Children_Data_Image_Signature = styled.Image`
  align-items: center;
  width: 275px;
  height: 100px;
  border-radius: 9px;
  margin: 3px;
  background-color: ${Colors.gray_30};
  resize-mode: contain;
`;