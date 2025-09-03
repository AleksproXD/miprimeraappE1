import { Text, View } from "react-native";
import { WelcomeText } from "@/components/WelcomeText";
import { Welcomepepe } from "@/components/WelcomeText";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <WelcomeText></WelcomeText>
      <Welcomepepe></Welcomepepe>
    </View>
  );
}
