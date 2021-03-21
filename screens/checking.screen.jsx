import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, ScrollView } from "react-native";

// importing colors
import Colors from "../colors/default.colors";

// importing components
import Divider from "../components/divider.component";
import CustomButton from "../components/customButton.component";

const CheckingScreen = ({ navigation }) => {
  const [repairId, setRepairId] = useState("#ID-12345");
  const [problem, setProblem] = useState("");
  const [fare, setFare] = useState("");
  const CustomDividerStyle = {
    borderColor: Colors.white,
    marginVertical: 10,
  };
  const buttonCustomSolidStyles = {
    backgroundColor: Colors.primaryColor,
    borderWidth: 1,
    borderColor: Colors.primaryColor,
    width: "100%",
  };
  const buttonCustomOutlineStyles = {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.accentColor,
    marginBottom: 15,
    width: "100%",
  };
  const buttonTitleStyle = {
    color: Colors.accentColor,
  };

  const completedHandler = () => {
    const checkingForm = {
      repairId,
      problem,
      fare,
    };
    navigation.navigate("Contracts");
  };

  return (
    <ScrollView contentContainerStyle={Styles.container}>
      <View style={Styles.receiptContainer}>
        <View style={Styles.headerContainer}>
          <Text style={Styles.header}>{"Repair Fair".toUpperCase()}</Text>
        </View>
        <Divider />
        <View style={Styles.receiptItems}>
          <Text style={Styles.itemHeading}>{"Repair ID".toUpperCase()}</Text>
          <Text style={Styles.itemContent}>{repairId}</Text>
        </View>
        <Divider customStyles={CustomDividerStyle} />
        <View style={Styles.receiptItems}>
          <Text style={Styles.itemHeading}>{"Problem".toUpperCase()}</Text>
          <TextInput
            multiline={true}
            numberOfLines={5}
            onChangeText={(problem) => setProblem(problem)}
            placeholder="Describe Vehicle Condition..."
            value={problem}
            textAlign="left"
            textAlignVertical="top"
            style={Styles.textBox}
          />
        </View>
        <Divider customStyles={CustomDividerStyle} />
        <Divider customStyles={CustomDividerStyle} />
        <View style={Styles.receiptItems}>
          <Text style={Styles.itemHeading}>{"Nominal".toUpperCase()}</Text>
          <TextInput
            numberOfLines={1}
            onChangeText={(fare) => setFare(fare)}
            placeholder="Range 150 - 200"
            value={fare}
            textAlign="left"
            keyboardType="number-pad"
            textAlignVertical="top"
            style={Styles.textBox}
          />
        </View>
        <Divider />
        <View style={Styles.buttonContainer}>
          <CustomButton
            buttonTitle="Cancel"
            customStyles={buttonCustomOutlineStyles}
            buttonTitleStyle={buttonTitleStyle}
            onSelect={() => {}}
          />
          <CustomButton
            buttonTitle="Checking Completed"
            customStyles={buttonCustomSolidStyles}
            onSelect={completedHandler}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default CheckingScreen;

const Styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  container: {
    alignItems: "center",
    backgroundColor: Colors.primaryColor,
    flexGrow: 1,
    justifyContent: "center",
  },
  header: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 18,
  },
  headerContainer: {
    alignItems: "flex-start",
  },
  itemContent: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 16,
  },
  itemHeading: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 16,
    paddingBottom: 20,
  },
  receiptContainer: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    elevation: 3,
    padding: 20,
    width: "90%",
  },
  textBox: {
    backgroundColor: Colors.borderColor,
    borderRadius: 10,
    fontFamily: "Montserrat_400Regular",
    fontSize: 16,
    opacity: 0.5,
    padding: 20,
    width: "100%",
  },
});
