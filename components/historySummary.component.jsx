import React from "react";
import { Text, View, StyleSheet } from "react-native";

// importing colors
import Colors from "../colors/default.colors";

// importing icons
import { FontAwesome } from "@expo/vector-icons";

const HistorySummary = ({ TotalJobs, AmountEarned }) => {
  return (
    <View style={Styles.historySummary}>
      <View style={Styles.summaryItem}>
        <FontAwesome name="car" size={24} color="black" />
        <View>
          <Text style={Styles.summaryHeading}>Total Jobs</Text>
          <Text style={Styles.summaryCount}>{TotalJobs}</Text>
        </View>
      </View>
      <View style={{ ...Styles.summaryItem, ...Styles.summaryItem2 }}>
        <FontAwesome name="money" size={24} color="black" />
        <View>
          <Text style={Styles.summaryHeading}>Earned</Text>
          <View style={Styles.summaryCountContainer}>
            <FontAwesome
              name="rupee"
              size={18}
              color={Colors.black}
              style={Styles.icon}
            />
            <Text style={Styles.summaryCount}>{AmountEarned}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HistorySummary;

const Styles = StyleSheet.create({
  historySummary: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10,
    padding: 10,
    width: "100%",
  },
  icon: {
    marginRight: 5,
  },
  summaryCount: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 16,
  },
  summaryCountContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  summaryHeading: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 14,
    marginBottom: 5,
  },
  summaryItem: {
    alignItems: "flex-start",
    backgroundColor: Colors.primaryColor,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    width: "45%",
  },
  summaryItem2: {
    backgroundColor: Colors.notification_banner,
  },
});
