import React from 'react';
import { View, TouchableOpacity, TouchableOpacityProps, Text, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  isLoading?: boolean;
  icon: keyof typeof Ionicons.glyphMap;
}

export function Button({ title, isLoading = false, icon, ...rest }: ButtonProps) {
  return (
    <>
      <TouchableOpacity  {...rest} style={[styles.container,styles.background_sign]}>
        {isLoading ? (
          <ActivityIndicator color="white" />
        ) : (
          <>
            <Ionicons name={icon} style={styles.icon} />
            <Text style={styles.title}>{title}</Text>
          </>
        )}
      </TouchableOpacity>
      <View style={styles.subcontainer}>
        {title == 'exit'? (<></>):(<><Text> Não está cadastro ainda? </Text>
        <TouchableOpacity style={styles.registrer} disabled={isLoading} {...rest}>
          <Text style={styles.infobutton}>Clique aqui</Text>
        </TouchableOpacity></>)}
        
      </View>
      {title == 'exit'? (<></>):(<><Text style={styles.info}> Projeto de conclusão de TCC </Text></>)}

      
    </>
  );
}
