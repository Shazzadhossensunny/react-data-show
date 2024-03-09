import { useEffect, useState } from 'react'
import './App.css'
import Books from './Books'

function App() {
  const [books, setBooks] = useState([])
  useEffect(()=>{
    fetch('products.json')
    .then(res => res.json())
    .then(data => setBooks(data))
  },[])
  return (
    <>
      <h1>Books Of Jhankar Mahabub</h1>

      <div className="container">
        {
        books.map((book) => <Books book={book}></Books>)
        }
      </div>

    </>
  )
}

export default App
