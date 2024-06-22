import { FaLaptop, FaChair, FaTshirt, FaBook, FaBaby} from 'react-icons/fa';
import ProfileMenu from './profilemenu';
import {getUserAuthenticated} from '@/actions/user-actions';

const categories = [
    { name: 'Electronics', icon: <FaLaptop /> },
    { name: 'Furniture', icon: <FaChair /> },
    { name: 'Clothing', icon: <FaTshirt /> },
    { name: 'Books', icon: <FaBook /> },
    { name: 'Toys', icon: <FaBaby /> }
  ];

export default async function Header() {
    const user = await getUserAuthenticated();
    return (
    <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto pt-3 flex justify-between items-center justify-center">
          <h1 className="text-2xl font-bold text-blue-600">Marketplace</h1>
          <div>
            {/* <a href="/login" className="p-2 rounded bg-blue-600 text-white hover:bg-blue-700 hover:underline">Login</a>
            <a href='/signup' className="p-2 rounded text-blue-600 hover:text-blue-700 hover:underline">Sign Up</a> */}
            <ProfileMenu user={user}></ProfileMenu>
          </div>
        </div>
        <div className="max-w-7xl mx-auto p-5 flex-1 justify-between items-center justify-center">
            <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center rounded-3xl border rounded-md p-2 bg-white shadow-md">
                <select
                    className="p-2 border-r rounded-l outline-none"
                >
                    <option value="">All Categories</option>
                    {categories.map(category => (
                    <option key={category.name} value={category.name}>{category.name}</option>
                    ))}
                </select>
                <input
                    type="text"
                    placeholder="Search..."
                    // value={search}
                    // onChange={(e) => setSearch(e.target.value)}
                    className="p-2 rounded-r w-96 outline-none"
                />
                </div>
            
          </div>
        </div>
      </header>
    );
}