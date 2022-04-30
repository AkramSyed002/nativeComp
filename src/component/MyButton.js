import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../styles/colors";

const MyButton = ({ btnText, btnPress, btnStyle, btnTextStyle }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.btnStyle, { ...btnStyle }]}
        activeOpacity={0.8}
        onPress={btnPress ? btnPress : () => alert("hi")}
      >
        <Text style={[styles.btnTextStyle, { ...btnTextStyle }]}>
          {btnText || "My Button"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: "#000",
    height: 42,
    width: "100%",
    // borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTextStyle: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});
