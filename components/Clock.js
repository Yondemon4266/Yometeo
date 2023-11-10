import React, { useEffect, useState } from "react";
import { Txt } from "./Txt";
import { nowToHHMM } from "../services/DateService";
import { s } from "./ClockStyle";
import { View } from "react-native";
export function Clock() {
  const [time, setTime] = useState(nowToHHMM());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(nowToHHMM());
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <View>
      <Txt>{time}</Txt>
    </View>
  );
}
