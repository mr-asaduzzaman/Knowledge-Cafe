

import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import PropTypes from 'prop-types';

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [markAsRead, setMarkAsRead] = useState(0);

  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }
  const handleMarkAsRead = (time) => {
    const newReadingTime = markAsRead + time;
    setMarkAsRead(newReadingTime)
    console.log('output', newReadingTime)
  }
  return (
    <div className='max-w-5xl mx-auto'>
      <Header></Header>
      <div className='md:flex'>
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks}
          markAsRead={markAsRead}
        ></Bookmarks>
      </div>
    </div>
  )
}


App.propTypes = {
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func
}
export default App
