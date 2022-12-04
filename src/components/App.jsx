import { Component } from 'react';
import SearchBar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import Modal from './Modal/Modal';
import fetchImage from 'services/imageApi';
class App extends Component {
  state = {
    images: [],
    page: 1,
  };
  onSubmit() {}
  renderImages() {
    const { page } = this.state;
    fetchImage('car', page).then(({ data }) => {
      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
      }));
    });
  }
  render() {
    return (
      <>
        <SearchBar onSubmit={this.onSubmit} />
        <ImageGallery images={this.state.images} />
        <Loader />
        <Button />
        <Modal />
      </>
    );
  }
}
export default App;
fetchImage('car', 1).then(r => console.log(r));
