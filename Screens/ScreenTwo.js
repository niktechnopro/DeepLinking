import React from "react";
import { View, Text, StyleSheet } from "react-native"


class ScreenTwo extends React.Component{
	static navigationOptions = {
    	title: 'Second Page for deep linking',
  	};

	render(){
		return(
			<View style={styles.mainContainer}>
				<Text style={styles.text}>Screen Two</Text>
			</View>
		)
	}
}

export default ScreenTwo;

const styles = StyleSheet.create({
	mainContainer:{
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#ff000f"
	},
	text:{
		fontSize: 24,
		fontWeight: "bold"
	}
})