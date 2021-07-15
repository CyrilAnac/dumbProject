import React, { Component } from "react";
import Text from "react-native";
import Overlay from "react-native-elements";

/**
 * @param {navigation}
 * @returns popup showing the conditions of use of the application the first time the user opens the application after downloading
 */
export default class ConditionsU extends Component {
  state = {
    modalVisible: true,
  };

  onClose = () => this.setState({ modalVisible: false });

  render() {
    return (
      <Overlay
        visible={this.state.modalVisible}
        onClose={this.onClose}
        closeOnTouchOutside
      >
        <Text>Conditions of use</Text>
      </Overlay>
    );
  }
}
