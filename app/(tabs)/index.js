import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,

 
} from "react-native";
import { Calendar } from "react-native-calendars";
import { useNavigation } from "@react-navigation/native";


export default function CalenderScreen() {
 const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Calendar
        selected={new Date()}
        onDayPress={() => navigation.navigate("event")}
        markedDates={{
          "2024-05-23": { marked: true, dotColor: "red", },
          "2024-05-24": { marked: true ,dotColor: "red",},
        
        }}
        />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
 
});
