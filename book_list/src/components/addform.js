import React, { Component } from "react";
import Books from "./books";

export default class addform extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],

      title: "",
      author: "",
      year: "",
    };

    this.titleValueHandler = this.titleValueHandler.bind(this);
    this.authorValueHandler = this.authorValueHandler.bind(this);
    this.yearValueHandler = this.yearValueHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  titleValueHandler(event) {
    this.setState({
      title: event.target.value,
    });
  }
  authorValueHandler(event) {
    this.setState({
      author: event.target.value,
    });
  }
  yearValueHandler(event) {
    this.setState({
      year: event.target.value,
    });
  }
  submitHandler(event) {
    event.preventDefault();

    let { title, author, year } = this.state;

    if (title && author && year) {
      let newBook = {
        id: this.state.books.length + 1,
        title,
        author,
        year,
      };
      this.setState({ books: [...this.state.books, newBook] });
      this.setState({
        title: "",
        author: "",
        year: "",
      });
    }
  }

  render() {
    return (
      <>
        <form id="book-form" autocomplete="off">
          <div class="form-group">
            <label for="title">Title</label>
            <input
              type="text"
              id="title"
              class="form-control"
              onChange={this.titleValueHandler}
              value={this.state.title}
            />
          </div>

          <div class="form-group">
            <label for="author">Author</label>
            <input
              type="text"
              id="author"
              class="form-control"
              onChange={this.authorValueHandler}
              value={this.state.author}
            />
          </div>

          <div class="form-group">
            <label for="year">Year</label>
            <input
              type="text"
              id="year"
              class="form-control"
              onChange={this.yearValueHandler}
              value={this.state.year}
            />
          </div>
          <input
            type="submit"
            value="Add Book"
            class="btn btn-warning btn-block add-btn"
            onClick={this.submitHandler}
          />
        </form>
        <table class="table table-striped mt-5 text-center">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Year</th>
            </tr>
          </thead>
          {this.state.books.map((book) => (
            <Books key={book.id} {...book} />
          ))}
        </table>
      </>
    );
  }
}
