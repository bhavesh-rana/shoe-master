import { Dimensions } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const wp = (percentage: number) => {
  return (percentage * screenWidth) / 100;
};

export const hp = (percentage: number) => {
  return (percentage * screenHeight) / 100;
};