import React from "react";
import { s } from "./MeteoBasicStyle";
import { Image, TouchableOpacity, View } from "react-native";
import { Txt } from "./Txt";
import { Clock } from "./Clock";
export default function MeteoBasic({
  onPress,
  temperature,
  city,
  interpretation,
}) {
  return (
    <>
      <View style={s.clock}>
        <Clock />
      </View>
      <Txt style={s.city}>{city}</Txt>
      <Txt style={s.weather_label}>{interpretation.label}</Txt>
      <View style={s.temperature_box}>
        <TouchableOpacity onPress={onPress}>
          <Txt style={s.temperature}>{temperature}°</Txt>
        </TouchableOpacity>
        <Image style={s.image} source={interpretation.image} />
      </View>
    </>
  );
}
