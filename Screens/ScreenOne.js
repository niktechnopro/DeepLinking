import React from "react";
import { View, Text, StyleSheet, Button, Linking, BackHandler } from "react-native"


class ScreenOne extends React.Component{
	static navigationOptions = {
    	title: 'Home Page',
  	};


  	componentDidMount = () => {
  		BackHandler.addEventListener('hardwareBackPress', () => true);
  		console.log("ScreenOne mounted:");
  		const url = Linking.getInitialURL().then(url => {//one way, I gues another way is to reach into Navigator directly
		    if (url) {
		    	console.log("url: ", url);
		     	const route = url.replace(/.*?:\/\//g, "");//extracts host from here
		    	console.log("route", route);
		    	if(route === "deeplink"){
		    		this.props.navigation.navigate("ScreenTwo");
		    	}
		    }
	  	});
  	}

  	componentWillUnmount = () => {
  		BackHandler.removeEventListener('hardwareBackPress', () => true);
  	}

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