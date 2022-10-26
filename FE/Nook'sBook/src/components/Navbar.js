import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
      <div className="p-6">
        <a className="text-gray-600 text-3xl font-semibold uppercase hover:text-green-600">
          Nooks
        </a>
      </div>
      <nav className="text-gray-600 text-base font-semibold pt-3">
        <Link to="/home">
          <a
            href="index.html"
            className="flex items-center active-nav-link py-4 pl-6 nav-item"
          >
            <i className="fas fa-house-user mr-3"></i>
            Home
          </a>
        </Link>
        <Link to="/books">
          <a
            href="tables.html"
            className="flex items-center opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
          >
            <i className="fas fa-book mr-3"></i>
            Books on Shelf
          </a>
        </Link>
        <Link to="/orders">
          <a
            href="tables.html"
            className="flex items-center opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
          >
            <i className="fas fa-table mr-3"></i>
            Orders
          </a>
        </Link>
        <Link to="/createOrder">
          <a
            href="tables.html"
            className="flex items-center  opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
          >
            <i className="fas fa-file mr-3"></i>
            Create Order
          </a>
        </Link>
        <footer className="flex items-center text-right p-4 absolute -bottom-0">
          Built by
          <a
            target="_blank"
            href="https://zzbbcsd.github.io/csb-cr7m53/"
            className="underline px-1"
          >
            Abby Xie
          </a>
        </footer>
      </nav>
    </aside>
  );
}
