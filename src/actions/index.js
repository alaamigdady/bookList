let bookId =0;
export const addBook = (t1,t2,t3,t4) => ({
  type: 'ADD_BOOK',
  text :{title:t1,author:t2,genre:t3,des:t4},
  id : bookId++
})

export const deleteBook = (id) =>({
	type : 'DELETE_BOOK',
	id
})
