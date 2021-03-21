import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet } from "react-native";

// importing components
import GreenMarker from "./greenMarker.component";

const ChooseLocationMap = ({ customstyles }) => {
  const [region, setRegion] = useState({
    latitude: 12.9515957,
    longitude: 80.1414093,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [marker, setMarker] = useState({
    latitude: 12.9515957,
    longitude: 80.1414093,
  });
  return (
    <MapView
      style={{ ...Styles.map, ...customstyles }}
      region={region}
      onRegionChangeComplete={(region) => setRegion(region)}
    >
      <Marker
        draggable={true}
        coordinate={marker}
        onDragEnd={(e) => {
          setMarker(e.nativeEvent.coordinate);
        }}
      >
        <GreenMarker />
      </Marker>
    </MapView>
  );
};

export default ChooseLocationMap;

const Styles = StyleSheet.create({
  map: {
    height: "70%",
    width: "100%",
  },
});
