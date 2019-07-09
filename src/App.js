import React, { Component } from 'react';
import Axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import SearchForm from './components/SearchForm.js';
import Event from './components/Event.js';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.KEY = '286525c7e68461134423e1074c217';

    this.state = {
      searchInput: '',
      loading: false,
      neverSearched: true,
      events: [],
    }
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      this.setState({
        loading: true,
      });

      const data = await Axios.get(
        `${'https://cors-anywhere.herokuapp.com/'}https://api.meetup.com/find/upcoming_events`,
        {
          params: {
            key: this.KEY,
            text: this.state.searchInput,
          }
        }
      );
      this.setState({
        loading: false,
        neverSearched: false,
        events: data.data.events,
      });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <div className="app-wrapper">
        <h1 className='text-center'>Eventz</h1>

        <SearchForm 
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
          searchInput={this.state.searchInput}
        />

        {
          this.state.loading
            ? <Spinner animation="border" role="status" className='center'>
                <span className="sr-only">Loading...</span>
              </Spinner>
            : this.state.events.length || this.state.neverSearched
              ? this.state.events.map(event => {
                  return (
                    <Event key={event.id} event={event} />
                  )
                })
              : <Alert variant='info'>No Search results for: {this.state.searchInput}</Alert>
        }
      </div>
    );
  }
}

export default App;
