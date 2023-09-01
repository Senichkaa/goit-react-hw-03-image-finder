import { Component } from 'react';
import { SearchbarForm } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.query.trim() === '') {
      return alert('Enter a valid search query!');
    }
    this.props.onSubmit(this.state.query);
    this.setState({
      query: '',
    });
  };

  handleInput = event => {
    this.setState({ query: event.target.value.toLowerCase() });
  };

  render() {
    return (
      <header className="searchbar">
        <SearchbarForm className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleInput}
          />
        </SearchbarForm>
      </header>
    );
  }
}
