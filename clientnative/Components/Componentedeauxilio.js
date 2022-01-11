import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
//import hook para la navegacion
import { useNavigation } from "@react-navigation/core";

const Componentedeauxilio = () => {

    ////--> HOOK PARA LA NAVEGACION <-- ////
const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignContent: 'center'}}>
      <Text style={{textAlign:'center', fontSize: 30, fontWeight: 'bold', marginTop: 300}}>Elige tu rol</Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          margin: 10,
          padding: 20,
          marginBottom: 250
        }}
      >
        <View
          style={{
            borderWidth: 5,
            borderColor: "black",
            borderRadius: 10,
            backgroundColor: "white",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              textAlign: "center",
              marginBottom: 5,
            }}
          >
            Usuario
          </Text>
          <TouchableWithoutFeedback 
          //// --> DEBERIA DIRIGIR AL PROFILE DE USER <-- ////
          // onPress={() => navigation.navigate()}
          >
            <Image
              source={require("./manager.png")}
              style={{ width: 150, height: 100, alignItems: "center" }}
            />
          </TouchableWithoutFeedback>
        </View>

        <View
          style={{
            borderWidth: 5,
            borderColor: "black",
            borderRadius: 10,
            backgroundColor: "white",
            marginLeft: 20,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              textAlign: "center",
              marginBottom: 5,
            }}
          >
            Transportista
          </Text>
          <TouchableWithoutFeedback
          //// --> DEBERIA DIRIGIR AL PROFILE DE CARRIER <-- ////
          // onPress={() => navigation.navigate()}
          >
            <Image
              source={require("./conductor.png")}
              style={{ width: 150, height: 100, alignItems: "center" }}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

export default Componentedeauxilio;

const styles = StyleSheet.create({});