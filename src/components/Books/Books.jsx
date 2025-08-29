import React, { useEffect, useState } from 'react'
import Book from './Book'

export default function Books() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('data/books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div>
            <h1 className='text-3xl text-green-500 '>Books</h1>

            <div className='grid grid-cols-1 md:grid-cols-3  gap-4 mb-4'>

                {
                    books.map(book => <Book
                        key={book.bookId}
                        book={book}
                    ></Book>)
                }

            </div>
        </div>
    )
}
