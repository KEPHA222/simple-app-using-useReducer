import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetails from "../components/BookDetails";

const BookList = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No book to read. It's free time.</div>
  );
};

export default BookList;
