import React, { Component } from "react";

// redux
import { connect } from 'react-redux'
import { addPlace } from "./../../store/actions"

// elemeents
import { View, StatusBar } from "react-native";
import { Container, Button, H3, Text, } from "native-base";

// custom style
import styles from "./styles";



class Home extends Component {
    onPlaceAdded = (placeName) => {
        console.log(placeName);
        this.props.onAddPlace(placeName);
    };

    render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />

        <View
          style={{
            alignItems: "center",
            marginBottom: 50,
            backgroundColor: "transparent"
          }}
        >

          <H3 style={styles.text}>React Native Example</H3>
          <View style={{ marginTop: 8 }} />
        </View>
        <View style={{ marginBottom: 80 }}>




          <Button
            style={{ backgroundColor: "#6FAF98", alignSelf: "center" }}
            onPress={() => {
                this.onPlaceAdded('Istanbul');
                this.props.navigation.navigate("DrawerOpen");
            }}
          >
            <Text>Lets Go!</Text>
          </Button>
        </View>
      </Container>
    );
  }
}


const dispatchToProps = (dispatch) => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    }
};


export default connect(null, dispatchToProps) (Home);
