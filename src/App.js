import React, { Component } from 'react';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import "./App.css";

import CreateBook from './components/CreateBook';
import ShowBookDetails from './components/ShowBookDetails';
import ShowBookList from './components/ShowBookList';
import UpdateBookInfo from './components/UpdateBookInfo';

class App extends Component {
  render() {
    return (
        <Router>
          <Routes>
            <Route exact path="/" element={<ShowBookList />}></Route>
            <Route path="/create-book" element={<CreateBook />}></Route>
            <Route path="/edit-book/:id" element={< UpdateBookInfo />}></Route>
            <Route path="/show-book/:id" element={< ShowBookDetails />}></Route>
          </Routes>
        </Router>
    );
  }
}
export default App;