import React from "react";
import { View, Text, StyleSheet, Button } from "react-native"


class ScreenOne extends React.Component{
	static navigationOptions = {
    	title: 'Home Page',
  	};

	render(){
		const {navigate} = this.props.navigation;
		return(
			<View style={styles.mainContainer}>
				<Text style={styles.text}>Screen One</Text>

		      <Button
		        title="Go to ScreenTwo"
		        onPress={() => navigate("ScreenTwo")}
		      />
			</View>
		)
	}
}

export default ScreenOne;

const styles = StyleSheet.create({
	mainContainer:{
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#00ff0f"
	},
	text:{
		fontSize: 24,
		fontWeight: "bold"
	}
})