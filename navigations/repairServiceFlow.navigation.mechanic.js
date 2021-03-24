import React from "react";

// importing colors
import Colors from "../colors/default.colors";

// importing navigators
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

// importing screens
import ProposalScreen from "../screens/proposals.screens";
import ProposalDetail from "../screens/proposalDetails.screen";
import ProposalNavigation from "../screens/proposalNavigation.screen";
import CheckingScreen from "../screens/checking.screen";
import Contracts from "../screens/contracts.screen";
import HistoryScreen from "../screens/history.screen";
import MyAccount from "../screens/myAccount.screen";
import Homescreen from "../screens/homescreen.screen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const defaultStackNavigationOptions = {
  headerTintColor: Colors.primaryColor,
  headerTitleAlign: "center",
  headerTitleStyle: {
    fontFamily: "Montserrat_600SemiBold",
    color: Colors.accentColor,
  },
};

const HomeScreenStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackNavigationOptions}>
      <Stack.Screen
        name="Homescreen"
        component={Homescreen}
        options={{
          title: "Offline",
        }}
      />
    </Stack.Navigator>
  );
};

const ContractScreenStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackNavigationOptions}>
      <Stack.Screen
        name="Contracts"
        component={Contracts}
        options={{
          title: "Contracts",
        }}
      />
    </Stack.Navigator>
  );
};

const ProposalScreenStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackNavigationOptions}>
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
    </Stack.Navigator>
  );
};

const MyAccountScreenStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackNavigationOptions}>
      <Stack.Screen
        name="MyAccount"
        component={MyAccount}
        options={{
          title: "Account",
          headerTintColor: Colors.white,
          headerStyle: {
            backgroundColor: Colors.primaryColor,
            elevation: 0,
          },
        }}
      />
    </Stack.Navigator>
  );
};

const HistoryScreenStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackNavigationOptions}>
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

const DrawerTab = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreenStack} />
      <Drawer.Screen name="Proposals" component={ProposalScreenStack} />
      <Drawer.Screen name="Contracts" component={ContractScreenStack} />
      <Drawer.Screen name="History" component={HistoryScreenStack} />
    </Drawer.Navigator>
  );
};

const NavContainer = () => {
  return (
    <NavigationContainer>
      <DrawerTab />
    </NavigationContainer>
  );
};

export default NavContainer;
