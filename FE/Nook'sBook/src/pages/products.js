import Navbar from "../components/Navbar";
import Card from "../components/bookCard";
import Header from "../components/header";

export const books = [
  {
    Title: "The Adventures of Sherlock Holmes",
    Author: "Arthur Conan Doyle",
    Publication: "George Newnes",
    Num: 0,
    IMG: "https://images.booksense.com/images/972/545/9798629545972.jpg"
  },
  {
    Title: "1984",
    Author: "George Orwell",
    Publication: "Secker & Warburg",
    Num: 1,
    IMG:
      "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781839642401/nineteen-eighty-four-9781839642401_hr.jpg"
  },
  {
    Title: "Thinking, Fast and Slow",
    Author: "Daniel Kahneman",
    Publication: "Farrar, Straus and Giroux",
    Num: 2,
    IMG:
      "https://m.media-amazon.com/images/I/41wI53OEpCL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
  },
  {
    Title: "Biochemistry",
    Author: "Jeremy M. Berg",
    Publication: "W. H. Freeman",
    Num: 3,
    IMG:
      "https://m.media-amazon.com/images/I/41r5VS+YFfL._SX388_BO1,204,203,200_.jpg"
  }
];

export default function Products() {
  return (
    <div className="bg-gray-100 font-family-karla flex ">
      <Navbar />
      <div className="w-full flex flex-col h-screen overflow-y-hidden ">
        <Header />
        <div className="grid grid-cols-4 gap-4 p-10">
          {books.map((book) => (
            <Card
              key={book.Num}
              title={book.Title}
              author={book.Author}
              publication={book.Publication}
              img={book.IMG}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
