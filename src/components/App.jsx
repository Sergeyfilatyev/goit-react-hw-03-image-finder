import { Component } from 'react';
import SearchBar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import Modal from './Modal/Modal';
import fetchImage from 'services/imageApi';
import s from './App.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
class App extends Component {
  state = {
    error: null,
    images: [],
    page: 1,
    imageName: '',
    status: Status.IDLE,
  };
  handleFormSubmit = imageName => {
    if (imageName === this.state.imageName) {
      this.setState({
        imageName,
        page: 1,
        images: [...this.state.images],
      });
    } else {
      this.setState({
        imageName,
        page: 1,
        images: [],
      });
    }
  };

  componentDidUpdate(_, prevState) {
    if (prevState.imageName !== this.state.imageName) {
      this.renderImages();
      this.setState({ status: Status.PENDING });
    }
  }
  renderImages() {
    const { page, imageName } = this.state;
    fetchImage(imageName, page)
      .then(({ data }) => {
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          page: prevState.page + 1,
          status: Status.RESOLVED,
        }));
      })
      .catch(error => this.setState({ error, status: Status.REJECTED }));
  }
  nextPages = () => {
    this.renderImages();
  };
  render() {
    const { status } = this.state;

    return (
      <div className={s.App}>
        <SearchBar onSubmit={this.handleFormSubmit} />
        {status === Status.IDLE && <p>Please enter your search</p>}
        {status === Status.PENDING && <Loader />}
        {status === Status.RESOLVED && (
          <>
            <ImageGallery images={this.state.images} />
            <Button onClick={this.nextPages} />
          </>
        )}
        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    );
  }
}
export default App;
