import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MyHeader = ({
	isGoBack = true,
	text,
	onBack,
	leftIcon,
	onLeft,
	headerStyle,
	goBackTextStyle,
	textStyle,
	rightView,
	rightText,
	rightTextStyle,
}) => {
	const navigation = useNavigation();
	return (
		<View style={[styles.headerStyle, { ...headerStyle }]}>
			{!!isGoBack ? (
				<TouchableOpacity
					activeOpacity={0.8}
					onPress={!!onBack ? onBack : () => navigation.goBack()}
				>
					{!!leftIcon ? (
						<Image
							source={require("../assets/back.png")}
							resizeMode="contain"
							style={{ height: 20, width: 20 }}
						/>
					) : (
						<Text style={[styles.goBackTextStyle, { ...goBackTextStyle }]}>
							GoBack
						</Text>
					)}
				</TouchableOpacity>
			) : (
				<Text />
			)}

			<Text style={[styles.textStyle, { ...textStyle }]}>{text}</Text>

			{!!rightView ? (
				<TouchableOpacity


					onPress={!!onLeft ? onLeft : () => alert("on Left")}>
					<>
						<Text style={[styles.rightTextStyle, { ...rightTextStyle }]}>
							{rightText}
						</Text>
					</>
				</TouchableOpacity>
			) : null}
			<Text />
		</View>
	);
};

export default MyHeader;

const styles = StyleSheet.create({
	headerStyle: {
		flexDirection: "row",
		backgroundColor: "#f4511e",
		justifyContent: "space-between",
		alignItems: "center",
		minHeight: 42,
	},
	goBackTextStyle: {
		fontSize: 14,
		fontWeight: "bold",
	},
	textStyle: {
		fontSize: 16,
		fontWeight: "bold",
	},
	rightTextStyle: {},
});
