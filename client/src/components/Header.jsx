import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <h1 className="text-2xl font-extrabold tracking-wide">
            <span className="text-indigo-600">Dream</span>
            <span className="text-gray-800">Space</span>
          </h1>
        </Link>

        {/* Search Bar */}
        <form
          onSubmit={handleSubmit}
          className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-inner w-72 focus-within:ring-2 focus-within:ring-indigo-400 transition"
        >
          <input
            type="text"
            placeholder="Search properties..."
            className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="ml-2 text-indigo-600 hover:text-indigo-800">
            <FaSearch />
          </button>
        </form>

        {/* Navigation */}
        <ul className="flex items-center gap-6 text-gray-700 font-medium">
          <Link to="/">
            <li className="hover:text-indigo-600 transition">Home</li>
          </Link>
          <Link to="/about">
            <li className="hover:text-indigo-600 transition">About</li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-8 w-8 object-cover border-2 border-indigo-500"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                Sign In
              </li>
            )}
          </Link>
        </ul>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-6 pb-4">
        <form
          onSubmit={handleSubmit}
          className="flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-inner w-full focus-within:ring-2 focus-within:ring-indigo-400 transition"
        >
          <input
            type="text"
            placeholder="Search properties..."
            className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="ml-2 text-indigo-600 hover:text-indigo-800">
            <FaSearch />
          </button>
        </form>
      </div>
    </header>
  );
}
