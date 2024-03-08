import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomTextInput from '../../components/CustomTextInput'
import { hp } from '../../constants/Matrix'

const SignIn = () => {
  return (
    <View style={{ flex: 1 }}>
    <CustomTextInput placeholder="Email" style={styles.textInputStyle}/>
    <CustomTextInput placeholder="Password" style={styles.textInputStyle}/>
  </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
    textInputStyle:{
        height:hp(50),
        borderWidth:1,
        borderColor:'red',
        borderRadius:15,
        marginTop:hp(10),
        paddingVertical:10,
        paddingHorizontal:5
     }
})