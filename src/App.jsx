import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Feed from './Components/Feed/Feed';
import Header from './Components/Header/Header';
import SearchResult from './Components/SearchResult/SearchResult';
import VideoDetail from './Components/VideoDetail/VideoDetail';
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
              exact
              path='/searchresult/:searchQuery'
              element={<SearchResult />}
            />
            <Route exact path='/video/:id' element={<VideoDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
