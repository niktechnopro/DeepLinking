import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ScreenOne from "../Screens/ScreenOne";
import ScreenTwo from "../Screens/ScreenTwo";

const NavigatorObject = createStackNavigator({
	ScreenOne: {
		screen: ScreenOne,
		// path: ""//you need path property if you handle deep link with navigator
	},
	ScreenTwo: {
		screen: ScreenTwo,
		// path: "deeplink"
	}
}, {
    	initialRouteName: 'ScreenOne'
	}
);

const Navigator = createAppContainer(NavigatorObject);

// remove path in case if you handle deep link manually
const MainNavigator = () => <Navigator enableURLHandling={false} />;//this construct if we want to disable deeplinking in navigator and want to handle it manually from component

//handling deep link directly through navigator
// const prefix = 'app://';//scheme in AndroidMainfest
// const MainNavigator = () => <Navigator uriPrefix={prefix} />

export default MainNavigator;