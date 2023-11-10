import { s } from "../assets/style/AppStyle";
import { ImageBackground } from "react-native";
import bg from "../assets/background.png";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export function Container({ children }) {
  return (
    <ImageBackground source={bg} style={s.img_background} imageStyle={s.img}>
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>{children}</SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
