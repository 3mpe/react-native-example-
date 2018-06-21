import React, { Component } from "react";
import { StyleProvider } from "native-base";

import RouteApp from "../Route";
// import getTheme from "../theme/components";
// import variables from "../theme/variables/commonColor";

export default class Layout extends Component {
  render() {
    return (
      // <StyleProvider style={getTheme(variables)}>
      <RouteApp />
      // </StyleProvider>
    );
  }
}
