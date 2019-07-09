import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SearchForm(props) {
  const { handleSubmit, handleInput, searchInput } = props;
  return(
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="searchInputContainer">
        <Form.Label>Search:</Form.Label>
        <Form.Control
          type="text"
          name='searchInput'
          placeholder="Enter search"
          required
          pattern="\S.{0,30}"
          title="Please enter a search query up to 30 characters without empty space in the very beginning."
          value={searchInput}
          onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
          </Button>
    </Form>
  );
}

export default SearchForm;
