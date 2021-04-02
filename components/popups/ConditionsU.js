import React, { Component } from "react";
import Text from "react-native";
import Overlay from "react-native-elements";

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
        <Text>Some Modal Content</Text>
      </Overlay>
    );
  }
}
