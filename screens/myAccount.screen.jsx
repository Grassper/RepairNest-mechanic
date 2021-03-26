import React, { useLayoutEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

// importing colors
import Colors from "../colors/default.colors";

// importing components
import Divider from "../components/divider.component";
import Hamburger from "../components/hamburger.component";

const MyAccount = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => Hamburger(navigation),
    });
  }, [navigation]);

  const CustomDividerStyle = {
    borderColor: Colors.white,
    marginVertical: 5,
  };
  return (
    <View style={Styles.container}>
      <View style={Styles.profileContainer}>
        <View style={Styles.profilePhotoContainer}>
          <Image
            style={Styles.profilePhoto}
            source={{
              uri:
                "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            }}
          />
        </View>
        <Text style={Styles.profileName}>Martha Banks</Text>
      </View>
      <View style={Styles.profileContent}>
        <View style={Styles.Items}>
          <Text style={Styles.Heading}>Username</Text>
          <Text style={Styles.Content}>Martha Banks</Text>
        </View>
        <Divider customStyles={CustomDividerStyle} />
        <View style={Styles.Items}>
          <Text style={Styles.Heading}>Phone number</Text>
          <Text style={Styles.Content}>#ID-12345</Text>
        </View>
        <Divider customStyles={CustomDividerStyle} />
        <View style={Styles.Items}>
          <Text style={Styles.Heading}>Email</Text>
          <Text style={Styles.Content}>freeslab88@gmail.com</Text>
        </View>
        <Divider customStyles={CustomDividerStyle} />
        <View style={Styles.Items}>
          <Text style={Styles.Heading}>Gender</Text>
          <Text style={Styles.Content}>Female</Text>
        </View>
        <Divider customStyles={CustomDividerStyle} />
        <View style={Styles.Items}>
          <Text style={Styles.Heading}>Birthday</Text>
          <Text style={Styles.Content}>April 16, 1988</Text>
        </View>
      </View>
    </View>
  );
};

export default MyAccount;

const Styles = StyleSheet.create({
  Content: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 16,
  },
  Heading: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 16,
    paddingBottom: 20,
  },
  Items: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  container: {
    backgroundColor: Colors.primaryColor,
    flex: 1,
    justifyContent: "space-between",
  },
  profileContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  profileContent: {
    backgroundColor: Colors.white,
    padding: 20,
  },
  profileName: {
    color: Colors.white,
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 20,
    marginTop: 10,
  },
  profilePhoto: {
    height: "100%",
    width: "100%",
  },
  profilePhotoContainer: {
    borderRadius: 100,
    height: 200,
    overflow: "hidden",
    width: 200,
  },
});
