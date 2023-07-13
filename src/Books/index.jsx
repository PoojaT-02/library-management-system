import './style.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BookCompo() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
     fetchData();
  }, []);

  const fetchData = async () => {
    try {
       const response = await axios.get('https://openlibrary.org/people/mekBot/books/currently-reading.json');
      setBooks(response.data.reading_log_entries);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  console.log('Books List',  books
  )

  return (
       <>
       <header>

       </header>
        <div className='Book_wrapper'>

      {books.map(item => (
                 <div className='bookList'>
                  <div>
                    <h3>Title: { item.work.title}</h3>
                    <h4>Author Name : {item.work.author_names[0]}</h4>
                    <div>
                      <h4>Year:{item.work.first_publish_year}</h4>
                      <div>
                        <span>book</span>
                        <span>Count : {item?.work?.edition_key?.length}</span>
                      </div>
                    </div>
                 </div>
                 </div>
      ))}
      </div>

        <footer>
        
       </footer>
    
      </>
  );
}

export default BookCompo;
