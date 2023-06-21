import React, { Component } from 'react';
import css from './styles.module.css';
import Notiflix from 'notiflix';

import { Searchbar } from './Searchbar';
const axios = require('axios').default;
const API_URL = 'https://pixabay.com/api/';
const API_KEY = '36133466-dbc0c7a3178523b048b6e9d9a';

const fetchImgs = async (searchQuery, page) => {
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
};

export class App extends Component {
  state = {};

  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    const input = form.elements.input.value;
    console.log(fetchImgs(input, 1));
    form.reset();
  };

  render() {
    return (
      <div className={css.App}>
        <Searchbar submitFunc={this.handleSubmit}></Searchbar>
      </div>
    );
  }
}
