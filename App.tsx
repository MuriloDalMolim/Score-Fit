import { StyleSheet } from "react-native";
import Routes from "./src/routes";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
import { themes } from "./src/global/themes";

const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: themes.colors.lightbluu,
        backgroundColor: themes.colors.grayy,
      }}
      text1Style={{
        fontSize: 16,
        fontWeight: "bold",
        color: themes.colors.darkblue,
      }}
      text2Style={{
        fontSize: 14,
        color: themes.colors.ciano,
      }}
    />
  ),
  error: (props: any) => (
    <ErrorToast
      {...props}
      style={{
        borderLeftColor: themes.colors.fire,
        backgroundColor: themes.colors.grayy,
      }}
      text1Style={{
        fontSize: 16,
        fontWeight: "bold",
        color: themes.colors.darkblue,
      }}
      text2Style={{
        fontSize: 14,
        color: themes.colors.dkgrayy,
      }}
    />
  ),
};

export default function App() {
  return (
    <>
      <Routes />
      <Toast config={toastConfig} />
    </>
  );
}

const styles = StyleSheet.create({});
