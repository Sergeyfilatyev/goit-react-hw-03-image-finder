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
    imageName: '',
  };
  handleFormSubmit = imageName => {
    this.setState({
      imageName,
      page: 1,
      images: [],
    });
  };
  componentDidUpdate(_, prevState) {
    if (prevState.imageName !== this.state.imageName) {
      this.renderImages();
    }
  }
  renderImages() {
    const { page, imageName } = this.state;
    fetchImage(imageName, page).then(({ data }) => {
      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
      }));
    });
  }
  render() {
    return (
      <>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={this.state.images} />
        <Loader />
        <Button />
        <Modal />
      </>
    );
  }
}
export default App;
