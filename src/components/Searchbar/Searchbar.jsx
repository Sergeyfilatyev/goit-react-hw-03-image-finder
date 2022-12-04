import { Component } from 'react';
class SearchBar extends Component {
  render() {
    return (
      <header>
        <form>
          <button type="submit">
            <span>Search</span>
          </button>

          <input type="text" placeholder="Search images and photos" />
        </form>
      </header>
    );
  }
}
export default SearchBar;
