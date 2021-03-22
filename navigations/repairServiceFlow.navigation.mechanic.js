import React from "react";

// importing colors
import Colors from "../colors/default.colors";

// importing navigators
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";

// importing screens
import ProposalScreen from "../screens/proposals.screens";
import ProposalDetail from "../screens/proposalDetails.screen";
import ProposalNavigation from "../screens/proposalNavigation.screen";
import CheckingScreen from "../screens/checking.screen";
import Contracts from "../screens/contracts.screen";
import HistoryScreen from "../screens/history.screen";

const Stack = createStackNavigator();

const RepairServiceMechStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: Colors.primaryColor,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "Montserrat_600SemiBold",
          color: Colors.accentColor,
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
      <Stack.Screen name="ProposalDetail" component={ProposalDetail} />
      <Stack.Screen
        name="ProposalNavigation"
        component={ProposalNavigation}
        options={{
          title: "online",
        }}
      />
      <Stack.Screen
        name="CheckingScreen"
        component={CheckingScreen}
        options={{
          title: "Checking",
          headerTintColor: Colors.white,
          headerStyle: {
            backgroundColor: Colors.primaryColor,
            elevation: 0,
          },
        }}
      />
      <Stack.Screen
        name="Contracts"
        component={Contracts}
        options={{
          title: "Contracts",
        }}
      />
      <Stack.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{
          title: "History",
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
