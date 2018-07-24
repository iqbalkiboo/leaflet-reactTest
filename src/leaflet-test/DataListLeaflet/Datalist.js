import React from "react";
import axios from "axios";

export default class Datalist extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios.get("").then(res => {
      console.log(res);
      this.setState({ person: res.data });
    });
  }
}
