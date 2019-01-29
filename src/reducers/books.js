
const books = (state = [], action) => {
  console.log(action,'action')
  console.log(state,'state')
  switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state,
        {
          title: action.text.title,
          author: action.text.author,
          genre : action.text.genre,
          des: action.text.des,
          id:action.id
        }
      ]
    case 'DELETE_BOOK':
   let newBooks =[];
       for(var i=0;i<state.length;i++){
        if(state[i].id !== action.id){
          newBooks.push(state[i])
        }
       }
      return newBooks
    default:
      return state
  }
}

export default books