import React from "react";
import {createNativeStackNavigator} from  "@react-navigation/native-stack"
import Splash from "../screens/onboarding/Splash"
import Board from "../screens/onboarding/Board";
import Manage from "../screens/onboarding/Manage";
import Create from "../screens/onboarding/Create";
import Organize from "../screens/onboarding/Organize";
import Welcome from "../screens/onboarding/Welcome";

import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";

import TabNavigator from "./TabNavigator";

export type RootStackParamList = {
    Splash: undefined,
    Board: undefined,
    Manage: undefined,
    Create: undefined,
    Organize: undefined
    Welcome: undefined,
    Login: undefined,
    Register: undefined,
    MainTab: undefined,
}

const Stack =  createNativeStackNavigator<RootStackParamList>()

const AppNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Board" component={Board} />
            <Stack.Screen name="Manage" component={Manage} />
            <Stack.Screen name="Create" component={Create} />
            <Stack.Screen name="Organize" component={Organize} />
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="MainTab" component={TabNavigator} />
        </Stack.Navigator>
    )
}

export default AppNavigator