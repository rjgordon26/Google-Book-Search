import React from "react";
import "../../styles/Result.css";

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="bookInput" className="book">Book:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="bookInput"
          type="text"
          className="form-control"
          placeholder="Type in a book search to begin"
          id="bookInput"
        />
        <button
          type="submit"
          onClick={props.handleFormSubmit}
          className="btn btn-success"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
