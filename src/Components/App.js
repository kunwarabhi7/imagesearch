import React from 'react';
// import { render } from 'react-dom';
// import axios from 'axios';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';



class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term,
        per_page: 80
      }



    })
    this.setState({ images: response.data.results });

  };

  onLoadMore = () => {
    let newPerPage = this.state.perPage + 10;

    this.setState({ perPage: newPerPage }, () =>
      this.fetchUnsplashData(this.state.term)
    );
  };


  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />

      </div>
    );
  };
};

export default App;




