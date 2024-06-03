export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-10 py-10 text-black">
      <div className="flex items-center">
        <a href="" className="text-2xl font-semibold text-blue-400">
          Traveling!
        </a>
      </div>

      <div className="flex-1 flex justify-center">
        <ul className="flex gap-20">
          <li>
            <a href="" className="hover:text-blue-500">
              Product
            </a>
          </li>
          <li>
            <a href="" className="hover:text-blue-500">
              Contacts
            </a>
          </li>
          <li>
            <a href="" className="hover:text-blue-500">
              About Us
            </a>
          </li>
        </ul>
      </div>

      <div className="flex items-center">
        <button className="px-5 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600">
          Sign Up
        </button>
      </div>
    </div>
  );
}
