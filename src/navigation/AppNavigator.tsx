import React from "react";
import {createNativeStackNavigator} from  "@react-navigation/native-stack"
import Splash from "../screens/onboarding/Splash"
import Board from "../screens/onboarding/Board";
import Manage from "../screens/onboarding/Manage";
import Create from "../screens/onboarding/Create";
import Organize from "../screens/onboarding/Organize";

export type RootStackParamList = {
    Splash: undefined,
    Board: undefined,
    Manage: undefined,
    Create: undefined,
    Organize: undefined
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
        </Stack.Navigator>
    )
}

export default AppNavigator