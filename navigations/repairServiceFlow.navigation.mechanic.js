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

//  importing icons
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

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
    <Drawer.Navigator
      initialRouteName="Home"
      drawerType={"back"}
      drawerContentOptions={{
        activeBackgroundColor: Colors.primaryColor,
        activeTintColor: Colors.white,
        inactiveTintColor: Colors.accentColor,
        itemStyle: {
          paddingVertical: 5,
          margin: 0,
        },
        labelStyle: {
          fontFamily: "Montserrat_500Medium",
          fontSize: 16,
        },
        style: {
          backgroundColor: Colors.white,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreenStack}
        options={{
          // eslint-disable-next-line react/display-name
          drawerIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
          headerTitleAlign: "center",
        }}
      />
      <Drawer.Screen
        name="Proposals"
        component={ProposalScreenStack}
        options={{
          // eslint-disable-next-line react/display-name
          drawerIcon: ({ color, size }) => (
            <Ionicons name="people-circle-sharp" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Contracts"
        component={ContractScreenStack}
        options={{
          // eslint-disable-next-line react/display-name
          drawerIcon: ({ color, size }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="History"
        component={HistoryScreenStack}
        options={{
          // eslint-disable-next-line react/display-name
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="history" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Account"
        component={MyAccountScreenStack}
        options={{
          // eslint-disable-next-line react/display-name
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="account-circle" size={size} color={color} />
          ),
        }}
      />
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
