import { Component } from 'react';
import s from './Searchbar.module.css';
class SearchBar extends Component {
  state = {
    imageName: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.imageName.trim() === '') {
      alert('Введите имя.');
      return;
    }
    console.log(this.state.imageName);

    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };
  handleNameChange = event => {
    this.setState({ imageName: event.target.value.toLowerCase() });
  };
  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.searchForm} onSubmit={this.handleSubmit}>
          <button className={s.searchFormButton} type="submit">
            <span className={s.searchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
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
