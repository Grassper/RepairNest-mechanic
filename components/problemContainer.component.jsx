import React from "react";
import { View, StyleSheet, Text } from "react-native";

const ProblemContainer = ({ problem }) => {
  return (
    <View>
      <Text style={Styles.problemTitle}>{"problem".toUpperCase()}</Text>
      <View style={Styles.problem}>
        <View>
          <Text style={Styles.problemText} numberOfLines={5}>
            {problem ? problem.substring(0, 100) : null}...
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProblemContainer;

const Styles = StyleSheet.create({
  problem: {
    alignItems: "flex-end",
    flexDirection: "row",
    paddingVertical: 10,
  },
  problemText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 16,
    paddingLeft: 5,
  },
  problemTitle: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 10,
  },
});
