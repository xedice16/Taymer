import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store/store';
import Header from './Components/Header';
import ClockPage from './Pages/ClockPage';
import StopwatchPage from './Pages/StopwatchPage';
import TimePage from './Pages/TimePage';
import './App.css'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ClockPage />} />
          <Route path="/stopwatch" element={<StopwatchPage />} />
          <Route path="/timer" element={<TimePage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

