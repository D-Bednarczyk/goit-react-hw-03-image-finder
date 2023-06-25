import React, { Component } from 'react';
import css from './App.module.css';

import { fetchImgs } from './Service/fetchImgs';
import { Searchbar } from '../Searchbar/Searchbar';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    searchQuery: '',
    page: 2,
    results: [],
    isLoading: false,
    error: null,
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const input = form.elements.input.value;
    this.setState({ searchQuery: input });
  };

  async componentDidUpdate(prevProps, prevState) {
    try {
      this.setState({ isLoading: true });
      const response = await fetchImgs(this.state.searchQuery, this.state.page);
      if (
        prevState.searchQuery !== this.state.searchQuery ||
        prevState.page !== this.state.page
      )
        this.setState({ results: [response.data.hits] });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { error, isLoading } = this.state;

    if (error) {
      return <div>Oops, something went wrong</div>;
    }

    if (isLoading) {
      return <Loader />;
    }

    return (
      <div className={css.App}>
        <Searchbar submitFunc={this.handleSubmit}></Searchbar>
      </div>
    );
  }
}
