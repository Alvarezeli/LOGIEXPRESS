import React from "react";
import { Button, Text, TextInput, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
//iconos
import Icon from "react-native-vector-icons/Ionicons";
//Formik
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/core";

const EditFormCarrier = () => {
  const navigation = useNavigation();

  return (  
    <>
      <Formik
        initialValues={{ name: "", cuentas: "", locacion: "", phone: "", license: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.container}>
            <View>
              <Text style={styles.textInputs}>Nombre completo</Text>
              <View style={styles.viewsInputs} >
                <Icon name="person-outline" size={25} />
                <TextInput
                  placeholder="Nombre completo"
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                  style={styles.textPlaceholder}
                />
              </View>
            </View>
            <View>
              <Text style={styles.textInputs}>Medio de pago</Text>
              <View style={styles.viewsInputs}>
                <Icon name="card-outline" size={25} />
                <TextInput
                  placeholder="Medio de pago válido"
                  onChangeText={handleChange("cuentas")}
                  onBlur={handleBlur("cuentas")}
                  value={values.cuentas}
                  style={styles.textPlaceholder}
                />
              </View>
            </View>
            <View >
              <Text style={styles.textInputs}>Locacion</Text>
              <View style={styles.viewsInputs} >
                <Icon name="earth-outline" size={25} />
                <TextInput
                  placeholder="Ciudad donde vivis"
                  onChangeText={handleChange("locacion")}
                  onBlur={handleBlur("locacion")}
                  value={values.locacion}
                  style={styles.textPlaceholder}
                />
              </View>
            </View>
            <View>
              <Text style={styles.textInputs}>Celular</Text>
              <View style={styles.viewsInputs} >
                <Icon name="phone-portrait-outline" size={25} />
                <TextInput
                  placeholder="Número de celular"
                  onChangeText={handleChange("phone")}
                  onBlur={handleBlur("phone")}
                  value={values.phone}
                  style={styles.textPlaceholder}
                />
              </View>
            </View>
            <View>
              <Text style={styles.textInputs}>Licencia</Text>
              <View style={styles.viewsInputs} >
                <Icon name="car-outline" size={25} />
                <TextInput
                  placeholder="Número de licencia"
                  onChangeText={handleChange("license")}
                  onBlur={handleBlur("license")}
                  value={values.license}
                  style={styles.textPlaceholder}
                />
              </View>
            </View>
            <TouchableOpacity
            onPress={() => navigation.navigate('EditVehiculeCarrier')}
            style={styles.btnEditar}
            >
              <Text style={styles.textBtn}>Siguiente</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </>
  );
};
export default EditFormCarrier;

const styles = StyleSheet.create({
  container: {
     flex: 1,
    backgroundColor: "white",
    alignItems: "center",
     justifyContent: "center",
  },
  viewsInputs: {
      margin: 2,
      borderColor: '#FFD523',
      borderBottomWidth: 4,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      width: 300,
      alignItems: "flex-start",
      marginBottom: 17
  },
  textInputs: {
    fontSize: 18,
    fontWeight: 'bold',

  },
  textPlaceholder: {
    marginLeft: 15,
    fontSize: 15,
    marginBottom: 3
  },
  btnEditar:{
    backgroundColor: '#FFD523',
    borderRadius: 10,
    width: 150,
    height: 50,
    marginTop: 20

  },
  textBtn:{
    color: 'black',
    fontSize: 15,
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: 35,
    marginTop: 12
  }
});
