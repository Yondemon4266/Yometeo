import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Container } from "../components/Container";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Txt } from "../components/Txt";
import { s } from "../assets/style/ForecastStyle";
import { ForecastListItem } from "../components/ForecastListItem";
import { getWeatherInterpretation } from "../services/MeteoService";
import { DAYS, datetoDDMM } from "../services/DateService";
export default function Forecast() {
  const { params } = useRoute();
  const nav = useNavigation();
  const backButton = (
    <TouchableOpacity style={s.back_btn} onPress={() => nav.goBack()}>
      <Txt>{"<"}</Txt>
    </TouchableOpacity>
  );
  const header = (
    <View style={s.header}>
      {backButton}
      <View style={s.header_texts}>
        <Txt>{params.city}</Txt>
        <Txt style={s.subtitle}>Prévision sur 7 jours</Txt>
      </View>
    </View>
  );
  const forecastList = (
    <View style={s.forecastList}>
      {params.time.map((time, index) => {
        const code = params.weathercode[index];
        const image = getWeatherInterpretation(code).image;
        const date = new Date(time);
        const day = DAYS[new Date(time).getDay()];
        const temperature = params.temperature_2m_max[index];
        return (
          <ForecastListItem
            key={time}
            image={image}
            day={day}
            date={datetoDDMM(date)}
            temperature={temperature.toFixed(0)}
          />
        );
      })}
    </View>
  );
  return (
    <Container>
      {header}
      {forecastList}
    </Container>
  );
}
