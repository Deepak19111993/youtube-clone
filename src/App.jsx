import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Feed from './Components/Feed/Feed';
import Header from './Components/Header/Header';
import Round from './Components/Round/Round';
import SearchResult from './Components/SearchResult/SearchResult';
import Traffic from './Components/Traffic/Traffic';
import VideoDetail from './Components/VideoDetail/VideoDetail';
import Signal from './Container/Signal/Signal';
import { AppContext } from './Context/ContextApi';
import './App.css';

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div className='flex flex-col h-full'>
          <Header />
          <Routes>
            <Route exact path='/' element={<Feed />} />
            <Route
              path='/searchresult/:searchQuery'
              element={<SearchResult />}
            />
            <Route path='/video/:id' element={<VideoDetail />} />
            <Route path='/signal' element={<Signal />} />
            <Route path='/traffic' element={<Traffic />} />
            <Route path='/round' element={<Round />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
