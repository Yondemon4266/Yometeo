import { StyleSheet } from "react-native";
import { Txt } from "./Txt";

export const s = StyleSheet.create({
  container: {
    backgroundColor: "red",
    borderRadius: 15,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderColor: "white",
    borderWidth: 2,
    backgroundColor: "#00000043",
  },
});

export function StyledLabel({ children }) {
  return <Txt style={{ fontSize: 15 }}>{children}</Txt>;
}
export function StyledValue({ children }) {
  return <Txt style={{ fontSize: 20 }}>{children}</Txt>;
}
