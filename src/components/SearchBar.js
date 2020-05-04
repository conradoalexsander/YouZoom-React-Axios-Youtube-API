import React from "react";

class SearchBar extends React.Component {
  //
  state = { term: "" };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <h3 className="ui dividing header">
          <i className="video icon large"></i>
          YouZoom
        </h3>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="inline fields">
            <div className="field">
              <input
                style={{
                  width: "80vw",
                  height: "35px"
                }}
                type="text"
                value={this.state.term}
                onChange={t => this.setState({ term: t.target.value })}
              />
              <div
                class="ui animated fade button name"
                tabIndex="0"
                onClick={this.onFormSubmit}
                style={{ width: "10vw", backgroundColor: "red" }}
              >
                <div className="visible content">Search</div>
                <div className="hidden content">
                  <i className="search icon"></i>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
