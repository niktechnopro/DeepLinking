import React from "react";
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ScreenOne from "../Screens/ScreenOne";
import ScreenTwo from "../Screens/ScreenTwo";

const NavigatorObject = createStackNavigator({
	ScreenOne: {
		screen: ScreenOne,
		path: ""
	},
	ScreenTwo: {
		screen: ScreenTwo,
		path: "deeplink"
	}
}, {
    	initialRouteName: 'ScreenOne'
	}
);

const Navigator = createAppContainer(NavigatorObject);

// remove path in this case
// const MainNavigator = () => <Navigator enableURLHandling={false} />;//this construct if we want to disable deeplinking in navigator and want to handle it manually from component

//handling directly through navigator
const prefix = 'app://';
const MainNavigator = () => <Navigator uriPrefix={prefix} />

export default MainNavigator;