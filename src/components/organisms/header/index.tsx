import React, { useState } from "react";
import { Platform, View } from 'react-native';
import styled from "styled-components/native";
import { useWindowDimensions, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header_Img from '../../../../assets/header/Home.png';
import Assinaturas_Img from '../../../../assets/header/Assinaturas.png';
import Transparencia_Img from '../../../../assets/header/Transparencia.png';
import Gerencie_listas_Img from '../../../../assets/header/gerencie_listas.png';
import Exit from '../../../../assets/header/Exit.png';
import Hamburguer from '../../../../assets/header/Hamburguer.png';
import Set_Down_Img from '../../../../assets/header/Set_down.png';

import {
    Head as Web_Head,
    Container as Web_Container,
    Images as Web_Images,
    Sub_Container as Web_Sub_Container,
    Icon_Images as Web_Icon_Images,
    Button as Web_Button
} from "./web_css";
import {
    Head as Mob_Head,
    Container as Mob_Container,
    Icon_Images as Mob_Icon_Images,
    Button as Mob_Button,
    Modal,
    Modal_Container,
    Images as Mob_Images
} from "./mobile_css";
import { saveToken } from "../../../storage/storeToken";

interface HeaderProps {
    image: { uri: string }; 
    onButtonClick: (value: number) => void; 
}

export function Header({ image, onButtonClick }: HeaderProps) {
    const navigation = useNavigation(); // Hook para navegação
    const [modalVisible, setModalVisible] = useState(false);
    const [tooltipVisible, setTooltipVisible] = useState(0);
    const [actualyPosition, setActualyPosition] = useState(1);
    const { width, height } = useWindowDimensions();
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    const handleBlur = (value: number) => {
        setTooltipVisible(value);
        setTimeout(() => {
            setTooltipVisible(0);
        }, 4000);
    };

    const handleButtonPress = async (position: number, route: string) => {
 
          setActualyPosition(position);
          onButtonClick(position); 
    
       
      };
      
    return (
        <>
            {Platform.OS === 'web' || Platform.OS === 'macos' ?
                <Web_Head $width={width}>
                    <Web_Container>
                        <Web_Button onPress={() => handleButtonPress(4, "User")}>
                            <Web_Images source={image} $width={width} $height={height} />
                        </Web_Button>
                        <Web_Sub_Container $width={width}>
                            <Web_Button onPress={() => handleButtonPress(0, "Home")}>
                                <Web_Icon_Images $widths={width} $height={height} source={Header_Img} />
                            </Web_Button>
                            <Web_Button onPress={() => handleButtonPress(1, "Signatures")}>
                                <Web_Icon_Images $widths={width} $height={height} source={Assinaturas_Img} />
                            </Web_Button>
                            <Web_Button onPress={() => handleButtonPress(2, "Transparence")}>
                                <Web_Icon_Images $widths={width} $height={height} source={Transparencia_Img} />
                            </Web_Button>
                            <Web_Button onPress={() => handleButtonPress(3, "Management")}>
                                <Web_Icon_Images $widths={width} $height={height} source={Gerencie_listas_Img} />
                            </Web_Button>
                        </Web_Sub_Container>
                        <Web_Button onPress={() => handleButtonPress(5, "Exit")}>
                            <Web_Icon_Images $widths={width} $height={height} source={Exit} />
                        </Web_Button>
                    </Web_Container>
                </Web_Head>
                :
                <Mob_Head style={{
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 5 },
                    shadowOpacity: 0.9,
                    shadowRadius: 2, elevation: 15
                }}>
                    <Mob_Container>
                        <Mob_Button onPress={() => setModalVisible(!modalVisible)}>
                            <Mob_Icon_Images source={Hamburguer} />
                        </Mob_Button>

                        <Modal
                            animationType="none"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => setModalVisible(false)}
                        >
                            <Mob_Button onPress={() => setModalVisible(!modalVisible)}>
                                <Mob_Icon_Images style={{
                                    width: '28px',
                                    height: '20px',
                                    marginTop: '20px',
                                    marginBottom: '20px',
                                    marginLeft: '20px',
                                }} />
                            </Mob_Button>

                            <Modal_Container>
                                <Mob_Button onLongPress={() => handleBlur(0)} onPress={() => handleButtonPress(0, "Home")} delayLongPress={300}>
                                    <Mob_Icon_Images source={Header_Img} />
                                </Mob_Button>
                                <Mob_Button onLongPress={() => handleBlur(1)} onPress={() => handleButtonPress(1, "Signatures")} delayLongPress={300}>
                                    <Mob_Icon_Images source={Assinaturas_Img} />
                                </Mob_Button>
                                <Mob_Button onLongPress={() => handleBlur(2)} onPress={() => handleButtonPress(2, "Transparence")} delayLongPress={300}>
                                    <Mob_Icon_Images source={Transparencia_Img} />
                                </Mob_Button>
                                <Mob_Button onLongPress={() => handleBlur(3)} onPress={() => handleButtonPress(3, "Management")} delayLongPress={300}>
                                    <Mob_Icon_Images source={Gerencie_listas_Img} />
                                </Mob_Button>

                                {tooltipVisible !== 0 && (
                                    <Tooltip>
                                        <TooltipText>
                                            {tooltipVisible === 3 ? 'Gerencie Listas' :
                                                tooltipVisible === 2 ? 'Transparência' :
                                                    tooltipVisible === 1 ? 'Suas Assinaturas' :
                                                        tooltipVisible === 0 ? 'Home' : 'Home'}
                                        </TooltipText>
                                    </Tooltip>
                                )}
                            </Modal_Container>
                        </Modal>
                        {actualyPosition === 0 ? <Mob_Icon_Images source={Header_Img} style={{ opacity: 0.5 }} /> :
                            actualyPosition === 1 ? <Mob_Icon_Images source={Assinaturas_Img} style={{ opacity: 0.5 }} /> :
                                actualyPosition === 2 ? <Mob_Icon_Images source={Transparencia_Img} style={{ opacity: 0.5 }} /> :
                                    actualyPosition === 3 ? <Mob_Icon_Images source={Gerencie_listas_Img} style={{ opacity: 0.5 }} /> :
                                        <Mob_Icon_Images source={Header_Img} style={{ opacity: 0.5 }} />}
                        <Mob_Button onPress={() => handleButtonPress(4, "Management")} delayLongPress={300}>
                            <Mob_Images source={image} />
                        </Mob_Button>
                    </Mob_Container>
                </Mob_Head>
            }
        </>
    );
}

const Tooltip = styled.View`
  position: absolute;
  bottom: 60px; /* Ajuste baseado na posição do botão */
  width: 170px;
  margin-left: -225px;
  margin-bottom: -100px;
  border-radius: 5px;
`;

const TooltipText = styled.Text`
  color: #fff;
  font-size: 20px;
  text-align: center;
`;
