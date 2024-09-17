import React, { useState } from 'react';
import { Platform, View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Colors, Pages_Colors } from '../colors';

const WebDateInput = (props: any) => (
  <input
    type="date"
    value={props.value}
    onChange={props.onChange}
    min={props.min} 
    style={{
      padding: '1vh',
      border: '0.2vh solid #ccc',
      borderRadius: '0.7vh',
      width: '20vh',
      fontSize: '2.1vh',
    }}
  />
);


const DateInputContainer = styled.View<{ align: 'row' | 'column' }>`
  padding:   ${Platform.select({
    web: '0vh', 
    default: `${1080 * 0.010}px`,
  })};
  border: 1px solid #ccc;
  border-radius:  ${Platform.select({
    web: '0.5vh', 
    default: `${1080 * 0.035}px`,
  })};
  width:   ${Platform.select({
    web: '9.1vh', 
    default: `${1080 * 0.185}px`,
  })};
  height: auto;
  min-height:  ${Platform.select({
    web: '4.1vh', 
    default: `${1080 * 0.039}px`,
  })};

  flex-direction: ${(props:any) => (props.align == 'row' ? 'row' : 'column')};
  align-items: center;
  justify-content: center;
  outline-color: ${Colors.primary};
`;

const StyledButton = styled.TouchableOpacity`
  background-color: ${Pages_Colors.flag_Color};
  justify-content: center;
  padding: ${1080 * 0.0015}%;
  margin: ${1080 * 0.001}% 0% 1% 0%;
  width:  ${Platform.select({
    web: '10.1vh', 
    default: `${1080 * 0.085}px`,
  })};
  height: auto;
  min-height:  ${Platform.select({
    web: '4.1vh', 
    default: `${1080 * 0.035}px`,
  })};
  border-radius:${Platform.select({
    web: '0.8vh', 
    default: `${1080 * 0.005}px`,
  })};
  align-items: center;
  outline-color: ${Colors.primary};
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: ${Platform.select({
    web: '2.1vh', 
    default: `${1080 * 0.013}px`,
  })};

`;
const View_Base = styled.View<{$direction:string }>`

flex:0;
align-items: center;
flex-wrap: nowrap;
  height: auto;
  min-height:  ${Platform.select({
    web: '4.1vh', 
    default: `${1080 * 0.035}px`,
  })};

flex-direction: ${(props:any)=>{
  if (props.$direction == 'row') return 'row';
  else return 'column';
}};
gap: ${(props:any)=>{
  if (props.$direction == 'row' && Platform.OS == 'web') return '1vh';
  else if (props.$direction == 'row' && Platform.OS != 'web') return '3px';
  else return '1';
}};
`
const DatePicker = ({ align, date, onDateChange }: any) => {
  const [showPicker, setShowPicker] = useState(false);
  const [allowDateSelection, setAllowDateSelection] = useState(true);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    if (currentDate >= yesterday) {
      setShowPicker(Platform.OS === 'ios');
      onDateChange(currentDate);
    } else {
      alert('A data selecionada não pode ser anterior à data atual!');
    }
  };

  const toggleDateSelection = () => {
    setAllowDateSelection(!allowDateSelection);
    if (!allowDateSelection) {
      onDateChange(null);
    }
  };

  return (
    <View_Base $direction={align} >

      <StyledButton onPress={toggleDateSelection}>
        <ButtonText>{allowDateSelection ? 'Inserindo' : 'Desativo'}</ButtonText>
      </StyledButton>

      {allowDateSelection && (
        <>
          {Platform.OS === 'web' ? (
           <WebDateInput 
           value={date ? date.toISOString().substr(0, 10) : ''} 
           onChange={(e) => {
             const selectedDate = new Date(e.target.value);
             if (selectedDate > yesterday) {
               onDateChange(selectedDate);
             } else {
               alert('A data selecionada não pode ser menor que a data de hoje!');
             }
           }}
           min={today.toISOString().split('T')[0]} 
         />
          ) : (
            <>
              <TouchableOpacity onPress={() => setShowPicker(true)}>
                <DateInputContainer align={align} >
                  <Text>{date ? date.toDateString() : 'Selecione uma Data'}</Text>
                </DateInputContainer>
              </TouchableOpacity>
              {showPicker && (
                <DateTimePicker
                  value={date || today}
                  mode="date"
                  display="default"
                  minimumDate={today} 
                  onChange={onChange}
                />
              )}
            </>
          )}
        </>
      )}
    </View_Base >
  );
};

export default DatePicker;
