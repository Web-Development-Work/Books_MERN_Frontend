import { React,Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

class BookCard extends Component {
    constructor(props){
        super(props);
        console.log(this);
    this.state={
        book:{}
    }}

    render(){
        const book=this.props.book;        
        return(
        <div className="card-container">
            <img src="https://commapress.co.uk/books/the-book-of-cairo/cairo-provisional-v3/image%2Fspan3" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-book/${book._id}`}>
                        { book.title }
                    </Link>
                </h2>
                <h3>{book.author}</h3>
                <p>{book.description}</p>
            </div>
        </div>
    )}
};

export default BookCard;