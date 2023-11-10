import { Image, View } from "react-native";
import { s } from "./ForecastListItemStyle";
import { Txt } from "./Txt";
export function ForecastListItem({ image, day, date, temperature }) {
  return (
    <View style={s.container}>
      <Image source={image} style={s.image} />
      <Txt style={s.day}>{day}</Txt>
      <Txt style={s.date}>{date}</Txt>
      <Txt style={s.temperature}>{temperature}°</Txt>
    </View>
  );
}
