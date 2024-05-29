import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import GridImageView from "react-native-grid-image-viewer";
import {
  View,
  ScrollView,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const image = require('../assets/imagens/bruxa.jpeg');

const ProfileScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.header}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.headerContent}>
            <Image
              style={styles.avatar}
              source={require('../assets/imagens/UsuarioAnonimo.jpg')}
            />
            <Text style={styles.name}>Pedro</Text>
            <Text style={styles.arroba}>@Pedro</Text>
          </View>
        </ImageBackground>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Camera')}
        style={styles.cameraButton}
      >
        <Ionicons name="camera" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Planos')} 
          style={styles.planButton}
        >
          <Text style={styles.planButtonText}>Escolher Plano</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.profileDetail}>
        <View style={[styles.detailContent, { paddingRight: 10, marginRight: 5, borderRightWidth: 2, borderRightColor: "#fff" }]}>
          <Text style={styles.count}>32</Text>
          <Text style={styles.title}>Seguidores</Text>
        </View>
        <View style={styles.detailContent}>
          <Text style={styles.count}>30</Text>
          <Text style={styles.title}>Seguindo</Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.buttonOne, { marginRight: 10 }]}>
              <Text style={styles.buttonOneText}>
                <Ionicons
                  name="add-circle-outline"
                  size={18}
                  style={{ color: "#fff" }}
                />{" "}
                Seguir
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonTwo}>
              <Text style={styles.buttonTwoText}>
                <Ionicons
                  name="paper-plane-outline"
                  size={18}
                  style={{ color: "#000" }}
                />{" "}
                Direct
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.background}>
            <Text style={styles.headline_text}>Fotos</Text>
            <View style={styles.imagesGrid}>
              <GridImageView
                data={[
                  "https://www.designi.com.br/images/preview/11405447.jpg",
                  "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/09/11/1161338360-raposa-do-artico-pequena.jpg",
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScJnoMcMTQwJA0Acs6kLXvpg8NosLuvxwnG2BRms3MiecmESxi_aqW0o2AXBUCLpAnJro&usqp=CAU",
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyzvEo6y5PaVJKyhCc2cOUYloLWsaDZ1yljeLQdI04qBK8TZ-8fmsmcbftIZxLPaShJWs&usqp=CAU"
                ]}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00CED1",
  },
  headerContent: {
    paddingTop: 70,
    padding: 50,
    height: 305,
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    marginBottom: 2,
    color: "#FFFFFF",
    fontWeight: "400",
  },
  arroba: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "700",
  },
  profileDetail: {
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 275,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: "#00CED1",
  },
  detailContent: {
    margin: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "500",
  },
  count: {
    fontSize: 18,
    fontWeight: "bold",
  },
  bodyContent: {
    alignItems: "center",
    padding: 30,
    marginTop: 40,
  },
  textInfo: {
    fontSize: 18,
    marginTop: 20,
    color: "#696969",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  buttonOne: {
    backgroundColor: "#00CED1",
    padding: 8,
    borderRadius: 10,
  },
  buttonTwo: {
    backgroundColor: "#FFF",
    padding: 8,
    borderRadius: 10,
  },
  buttonOneText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFF",
  },
  buttonTwoText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
  },
  planButton: {
    backgroundColor: '#FFA500',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30, // Torna o botão arredondado
  },
  planButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  description: {
    fontSize: 20,
    color: "#000",
    marginTop: 10,
    textAlign: "center",
  },
  background: {
    backgroundColor: "transparent",
  },
  headline_text: {
    color: "#000",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "600",
    marginTop: 50,
    marginBottom: 5,
    marginLeft: 20,
  },
  explore_text: {
    marginTop: 5,
    marginBottom: 10,
    color: "white",
    marginLeft: 20,
    fontSize: 12,
    fontWeight: "600",
  },
  imagesGrid: {
    flex: 1,
    width: 350,
  },
});

export default ProfileScreen;