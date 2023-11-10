import React from "react";
import { Txt } from "./Txt";
import { View, Text } from "react-native";
import { StyledLabel, StyledValue, s } from "./MeteoAdvancedStyle";
export default function MeteoAdvanced({ dusk, dawn, wind }) {
  return (
    <View style={s.container}>
      <View style={{ alignItems: "center" }}>
        <StyledValue>{dusk}</StyledValue>
        <StyledLabel> Aube</StyledLabel>
      </View>
      <View style={{ alignItems: "center" }}>
        <StyledValue>{dawn}</StyledValue>
        <StyledLabel>Crépuscule</StyledLabel>
      </View>
      <View style={{ alignItems: "center" }}>
        <StyledValue>{wind} km/h</StyledValue>
        <StyledLabel>Vent</StyledLabel>
      </View>
    </View>
  );
}
