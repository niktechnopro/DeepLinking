import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ScreenOne from "../Screens/ScreenOne";
import ScreenTwo from "../Screens/ScreenTwo";

const Navigator = createStackNavigator({
	ScreenOne: {
		screen: ScreenOne
	},
	ScreenTwo: {
		screen: ScreenTwo
	}
}, {
    	initialRouteName: 'ScreenOne'
	}
);

const MainNavigator = createAppContainer(Navigator);

export default MainNavigator;