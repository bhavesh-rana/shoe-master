import React from 'react';
import { TextInput, View, StyleSheet, TextInputProps, StyleProp, ViewStyle } from 'react-native';

interface CustomTextInputProps extends TextInputProps {
  container?: StyleProp<ViewStyle>;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({ container, ...rest }) => {
  return (
    <View style={[styles.container, container]}>
      <TextInput style={[styles.input]} {...rest} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
});

export default CustomTextInput;
