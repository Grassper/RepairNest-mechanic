import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

// import colors
import Colors from "../colors/default.colors";

// importing icons
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

// import Components
import DashBoardDriverCard from "../components/dashboardDriverCard.component";

const Dashboard = ({ profileImage, profileName, amount }) => {
  return (
    <View style={Styles.container}>
      <DashBoardDriverCard
        profileImage={profileImage}
        profileName={profileName}
        amount={amount}
      />
      <View style={Styles.dashBoardSummaryCardContainer}>
        <View style={Styles.dashBoardSummaryCard}>
          <View style={Styles.summarySection}>
            <AntDesign
              name="clockcircleo"
              size={30}
              color={Colors.accentColor}
              style={Styles.icons}
            />
            <View style={Styles.contentContainer}>
              <Text style={Styles.mainText}>10.2</Text>
              <Text style={Styles.subText}>HOURS ONLINE</Text>
            </View>
          </View>
          <View style={Styles.summarySection}>
            <AntDesign
              name="dashboard"
              size={30}
              color={Colors.accentColor}
              style={Styles.icons}
            />
            <View style={Styles.contentContainer}>
              <Text style={Styles.mainText}>30 KM</Text>
              <Text style={Styles.subText}>Distance coverage</Text>
            </View>
          </View>
          <View style={Styles.summarySection}>
            <MaterialIcons
              name="calendar-today"
              size={30}
              color={Colors.accentColor}
              style={Styles.icons}
            />
            <View style={Styles.contentContainer}>
              <Text style={Styles.mainText}>20</Text>
              <Text style={Styles.subText}>total jobs</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;

const Styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.white,
    borderRadius: 20,
    bottom: 0,
    elevation: 2,
    height: "40%",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  dashBoardSummaryCard: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 10,
    flexDirection: "row",
    height: "100%",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    width: "100%",
  },
  dashBoardSummaryCardContainer: {
    alignSelf: "center",
    height: "50%",
    paddingHorizontal: 20,
    width: "100%",
  },
  mainText: {
    color: Colors.accentColor,
    fontFamily: "Montserrat_700Bold",
    fontSize: 18,
  },
  subText: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 10,
    marginTop: 5,
    textTransform: "uppercase",
  },
  summarySection: {
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
  },
});
