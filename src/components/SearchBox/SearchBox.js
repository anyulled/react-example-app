import React, { Component } from "react";

import styles from "./SearchBox.css";

export default class SearchBox extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
    
    this.state = {
      query: props.query || "",
      submitedQuery: "",
    }
  }

  handleSubmit(e) {
    if(this.state.query !== this.state.submitedQuery) {
      this.props.onSearch(this.state.query);
      this.setState({
        submitedQuery: this.state.query
      })
    }
    e.preventDefault();
  }

  handleQueryChange(e) {
    this.setState({
      query: e.target.value
    });
  }

  render() {
    return <div className={styles.SearchBox + " SearchBox"}>
      <form action="#" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter a search query to continue ..."
          value={this.state.query}
          onChange={this.handleQueryChange} onBlur={this.handleSubmit} />
      </form>
    </div>;
  }
}