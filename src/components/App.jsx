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
  componentDidMount() {
    this.renderImages();
  }
  renderImages() {
    fetchImage('car', this.state.page).then(r => {
      this.setState(prevState => ({ images: [...prevState.images, ...r] }));
    });
  }
  render() {
    return (
      <>
        <SearchBar />
        <ImageGallery images={this.state.images} />
        <Loader />
        <Button />
        <Modal />
      </>
    );
  }
}
export default App;
