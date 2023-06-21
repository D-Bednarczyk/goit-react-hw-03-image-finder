import React, { Component } from 'react';
import css from './styles.module.css';
import Notiflix from 'notiflix';
import axios from 'axios';
import { Searchbar } from './Searchbar';

const API_URL = 'https://pixabay.com/api/';
const API_KEY = '36133466-dbc0c7a3178523b048b6e9d9a';

/* const fetchImgs = async (searchQuery, page) => {
  try {
    const response = await axios.get(
      `${API_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`
    );
    if (response.data.total === 0)
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    return response;
  } catch (error) {
    console.error('Error:' + error);
  }
}; */

export class App extends Component {
  state = { searchQuery: '', page: 2, results: [], isLoading: false };

  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const input = form.elements.input.value;
    this.setState({ searchQuery: input });
    form.reset();
  };

  async componentDidUpdate(prevProps, prevState) {
    const response = await axios.get(
      `${API_URL}?key=${API_KEY}&q=${this.state.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.state.page}&per_page=12`
    );
    console.log(response);
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    )
      this.setState({ results: [response.data.hits] });
    console.log(this.state.results);
  }

  render() {
    const { results } = this.state;
    return (
      <div className={css.App}>
        <Searchbar submitFunc={this.handleSubmit}></Searchbar>
      </div>
    );
  }
}
