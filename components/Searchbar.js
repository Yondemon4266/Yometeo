import { Image, TextInput, View } from "react-native";
import { s } from "./SearchbarStyle";
import { Txt } from "./Txt";
export function Searchbar({ onSubmit }) {
  return (
    <TextInput
      onSubmitEditing={(e) => onSubmit(e.nativeEvent.text)}
      style={s.input}
      placeholder="Chercher une ville... Ex: Paris"
    />
  );
}
