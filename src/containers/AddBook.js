import React from 'react'
import { connect } from 'react-redux'
import { addBook } from '../actions'

const AddBook = ({ dispatch }) => {
  let title
  let author
  let genre
  let des

  return (
    <div>
      <form align="center" onSubmit={e => {
        e.preventDefault()
        if (!title.value.trim() && !author.value.trim() && !genre.value.trim() && !des.value.trim()) {
          return
        }
        dispatch(addBook(title.value , author.value , genre.value , des.value))
        title.value = ''
        author.value=''
        genre.value=''
        des.value=''

      }}>
        <input ref={node => title = node} placeholder="title"/>
        <br></br>
        <input ref={node2 => author = node2} placeholder="author"/>
        <br></br>
        <input ref={node3 => genre = node3} placeholder="genre"/>
        <br></br>
        <input ref={node4 => des = node4} placeholder="description"/>
        <br></br>
        <button type="submit">
          Add Book
        </button>
      </form>
    </div>
  )
}

export default connect()(AddBook)