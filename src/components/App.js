import React, { Component } from 'react';
import { connect } from 'react-redux'
import AddBook from '../containers/AddBook'

class App extends Component {
constructor(){
	super();
	this.state = {show:false}
}

delete_book( index){
	console.log(index)
this.props.deleteBook(index);
}

render(){
	if(this.props.books.length === 0 && !this.state.show){
		return(
			<div align="center">
				<AddBook />
			</div>
    	)
	}else if (this.props.books.length !== 0 && !this.state.show){
   		 return(
			<div align="center">
				<AddBook />
				<button onClick={()=>this.setState({show:true})}>
		           VIEW BOOKS         
				</button>
			</div>
			)
	}else if(this.state.show && this.props.books !== undefined){
		return (
			
			<div align="center">
			<style>{`
		    table ,th, td{
		     border:1px solid black;
		     text-align:center;
		     height: 50px;
  			vertical-align: center;
  			  padding: 15px;


		    }
  			`}</style>
				<AddBook />
				<button onClick={()=>this.setState({show:true})}>
           			VIEW BOOKS         
				</button>
				<br></br>
				<br></br>
				<table>
    				<thead>
					    <tr>
					        <th>Title</th>
					        <th>Author</th>
					        <th>Genre</th>
					        <th>Description</th>
					        <th>Delete</th>
					    </tr>
    				</thead>
   					<tbody>
    				{this.props.books.filter(book =>{
    					return book!==undefined && book !== null}).map((book)=>{
    				return(
    						<tr key={book.id}>
				    			<td>{book.title}</td>
				    			<td>{book.author}</td>
				    			<td>{book.genre}</td>
				    			<td>{book.des}</td>
				    			<td><button onClick={()=>{this.delete_book(book.id)}}>delete</button></td>

    						</tr>
    					)

    				})
				}
    			</tbody>
    		</table>
		</div>
	)

}}}


const mapStateToProps = (state) =>{
	return {
		books:state.books
		}
}

const mapDispatchToProps =(dispatch) =>{
	return {
		deleteBook : (id)=>{dispatch({type:"DELETE_BOOK",id:id})}
		}
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
