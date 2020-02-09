import React from "react";
import { View, Text, StyleSheet, Button, Linking } from "react-native"


class ScreenOne extends React.Component{
	static navigationOptions = {
    	title: "screenOne",
  	};


  	//the following not needed if using react-navigation for deep link
 //  	componentDidMount = () => {
	//   	Linking.addEventListener("url", this.handleDeepLink);
 //  	}
  
	// handleDeepLink = (event) => {
	// 	console.log("handleDeepLink event", event);
	// 	if(event.url){
	// 		const route = event.url.replace(/.*?:\/\//g, "");//extracts host from here
	// 	    if(route === "deeplink"){
	//     		this.props.navigation.navigate("ScreenTwo");
	//     	}
	// 	}
	// }

 //  	componentWillUnmount = () => {
 //  		Linking.removeEventListener('url', this.handleDeepLink);
 //  	}

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