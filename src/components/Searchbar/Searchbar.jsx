import { Component } from 'react';

class SearchBar extends Component {
  state = {
    imageName: '',
  };

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ imageName: '' });
  }
  handleNameChange = event => {
    this.setState({ imageName: event.target.value.toLowerCase() });
  };
  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            type="text"
            name="imageName"
            value={this.state.imageName}
            onChange={this.handleNameChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default SearchBar;
