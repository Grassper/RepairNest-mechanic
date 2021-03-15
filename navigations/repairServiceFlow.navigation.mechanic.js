import React from "react";

// importing colors
import Colors from "../colors/default.colors";

// importing navigators
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";

// importing screens
import ProposalScreen from "../screens/proposals.screens";

const Stack = createStackNavigator();

const RepairServiceMechStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: Colors.accentColor,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "Montserrat_600SemiBold",
        },
      }}
    >
      <Stack.Screen
        name="ProposalScreen"
        component={ProposalScreen}
        options={{
          title: "Proposals",
        }}
      />
    </Stack.Navigator>
  );
};

const NavContainer = () => {
  return (
    <NavigationContainer>
      <RepairServiceMechStackNavigation />
    </NavigationContainer>
  );
};

export default NavContainer;
