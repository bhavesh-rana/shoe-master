import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CustomTextInput from "../../components/CustomTextInput";
import { hp } from "../../constants/Matrix";
import { SafeAreaView } from "react-native";
import BackgroundImage from "../../components/BackgroundImage";
import ResponsiveButton from "../../components/ResponsiveButton";

const Login = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BackgroundImage>
        <View style={{ marginHorizontal: 20, flex: 1 ,justifyContent:'center' }}>
          <CustomTextInput
            placeholder="Email"
            style={styles.textInputStyle}
            placeholderTextColor={"#6c757d"}
          />
          <CustomTextInput
            placeholder="Password"
            style={styles.textInputStyle}
            placeholderTextColor={"#6c757d"}
          />
          <ResponsiveButton
            title="Click Me"
            onPress={() => console.log("Button Pressed")}
            buttonStyle={{ backgroundColor: "#565696", marginTop: hp(5),    borderWidth: 1,borderColor:'#56569644'
          }}
            textStyle={{ color: "#dee2e6" }}
          />
        </View>
      </BackgroundImage>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  textInputStyle: {
    height: hp(8),
    borderWidth: 1,
    borderColor: "#ced4da",
    borderRadius: 8,
    marginTop: hp(2),
    paddingVertical: 10,
    paddingHorizontal: 15,
    color: "#dee2e6",
    fontSize: 16,
  },
});
