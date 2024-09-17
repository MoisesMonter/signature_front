import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Web_Sub_Bar_Data_Titles_Text_2 } from "../organisms/management/Web_Body";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Platform } from "react-native";

interface PasswordFieldProps {
  senha?: string; 
}

export const PasswordField: React.FC<PasswordFieldProps> = ({ senha }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleToggleVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };


  const isPasswordProvided = senha && senha.length > 0;

  return (
    <>
      {isPasswordProvided ? (
        
        <TouchableOpacity onPress={handleToggleVisibility} style={{justfyContent:'center',flexDirection:'row'}}>
          {Platform.OS == 'web'? 
              <Web_Sub_Bar_Data_Titles_Text_2>
        {isPasswordProvided ? (isPasswordVisible ? senha : "••••••••") : "N/A"} </Web_Sub_Bar_Data_Titles_Text_2>:<></>
        }
                  {Platform.OS != 'web'? 
              <Web_Sub_Bar_Data_Titles_Text_2 style={{marginTop:2}}>
        {isPasswordProvided ? (isPasswordVisible ? senha : "") : "N/A"} </Web_Sub_Bar_Data_Titles_Text_2>:<></>
        }
       
          {Platform.OS == 'web'? 
          <> <FontAwesome 
            name={isPasswordVisible ? "eye" : "eye-slash"}
            size={"3vh" }
            color={isPasswordVisible ? "darkslategray" : "black"}
            style={{ marginLeft: "1vh" }}
          /></>  : <></>
        }
          {Platform.OS != 'web' && isPasswordProvided ==true?
          <><FontAwesome 
          name={isPasswordVisible ? "" : "eye-slash"}
          size={20}
          color={isPasswordVisible ? "darkslategray" : "black"}
    
        /></> :<></>
        }
        </TouchableOpacity>
      ) : ( <Web_Sub_Bar_Data_Titles_Text_2 style={{marginTop:2}}>
        {isPasswordProvided ? (isPasswordVisible ? senha : "") : "N/A"} </Web_Sub_Bar_Data_Titles_Text_2>)}
    </>
  );
};
