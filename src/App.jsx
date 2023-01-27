import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Feed from './Components/Feed/Feed';
import Header from './Components/Header/Header';
import SearchResult from './Components/SearchResult/SearchResult';
import VideoDetail from './Components/VideoDetail/VideoDetail';
import Signal from './Container/Signal/Signal';
import { AppContext } from './Context/ContextApi';

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
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
