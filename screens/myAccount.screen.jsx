import React, { useLayoutEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

// importing redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// importing selectors
import { selectAccountDetails } from "../redux/accounts/account.selectors.redux";

// importing colors
import Colors from "../colors/default.colors";

// importing components
import Divider from "../components/divider.component";
import Hamburger from "../components/hamburger.component";

const getDate = (timeStamp) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[timeStamp.getMonth()];
  let date = timeStamp.getDate();
  let year = timeStamp.getFullYear();
  return `${month} ${date}, ${year}`;
};

const MyAccount = ({ navigation, accountDetails }) => {
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
              uri: accountDetails.profileUrl,
            }}
          />
        </View>
        <Text style={Styles.profileName}>{accountDetails.profileName}</Text>
      </View>
      <View style={Styles.profileContent}>
        <View style={Styles.Items}>
          <Text style={Styles.Heading}>Username</Text>
          <Text style={Styles.Content}>{accountDetails.profileName}</Text>
        </View>
        <Divider customStyles={CustomDividerStyle} />
        <View style={Styles.Items}>
          <Text style={Styles.Heading}>Phone number</Text>
          <Text style={Styles.Content}>{accountDetails.phoneNumber}</Text>
        </View>
        <Divider customStyles={CustomDividerStyle} />
        <View style={Styles.Items}>
          <Text style={Styles.Heading}>Email</Text>
          <Text style={Styles.Content}>{accountDetails.email}</Text>
        </View>
        <Divider customStyles={CustomDividerStyle} />
        <View style={Styles.Items}>
          <Text style={Styles.Heading}>Gender</Text>
          <Text style={Styles.Content}>{accountDetails.gender}</Text>
        </View>
        <Divider customStyles={CustomDividerStyle} />
        <View style={Styles.Items}>
          <Text style={Styles.Heading}>Birthday</Text>
          <Text style={Styles.Content}>{getDate(accountDetails.birthday)}</Text>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = createStructuredSelector({
  accountDetails: selectAccountDetails,
});

export default connect(mapStateToProps)(MyAccount);

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
