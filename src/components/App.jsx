import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from './fetch-api.js';
import { Button } from './Button/Button';
import { RotatingLines } from 'react-loader-spinner';

export class App extends Component {
  state = {
    query: '',
    gallery: [],
    page: 1,
    error: null,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    ) {
      this.setState({ loading: true });

      fetchImages(this.state.query, this.state.page)
        .then(({ hits }) => this.setState({ gallery: hits }))
        .catch(error => this.setState({ error }))
        .finally(loading => this.setState({ loading: false }));
    }
  }
  handleSubmitSearch = query => {
    this.setState({ query, gallery: [], page: 1 });
  };

  handleLoadMoreClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSubmitSearch} />
        {this.state.loading && (
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        )}
        <ImageGallery gallery={this.state.gallery} />
        <Button handleLoadMoreClick={this.handleLoadMoreClick} />
      </>
    );
  }
}
