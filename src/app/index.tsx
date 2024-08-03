import { Text, View } from "react-native";
import Feed from "../screens/Feed";
import { NativeBaseProvider } from "native-base";



export default function Index() {
  return (
    <NativeBaseProvider>
      <Feed />
    </NativeBaseProvider>
  );
}
