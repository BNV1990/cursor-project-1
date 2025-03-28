"use client";

export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 md:px-6">
      {/* Left side */}
      <div className="flex items-center gap-4 md:gap-8">
        {/* Hamburger Menu (visible on small screens) */}
        <button className="md:hidden w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-50">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <h1 className="text-lg font-semibold text-gray-900">Constructor</h1>
        {/* Desktop Navigation (hidden on small screens) */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm text-gray-900 hover:text-primary">
            Dashboard
          </a>
          <a href="#" className="text-sm text-gray-500 hover:text-primary">
            About Us
          </a>
          <a href="#" className="text-sm text-gray-500 hover:text-primary">
            News
          </a>
          <a href="#" className="text-sm text-gray-500 hover:text-primary">
            User Policy
          </a>
          <a href="#" className="text-sm text-gray-500 hover:text-primary">
            Contacts
          </a>
          {/* More options button */}
          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-50">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </nav>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2 md:gap-3">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full md:w-[280px] h-10 pl-10 pr-4 bg-gray-50 rounded-lg text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 md:w-6 md:h-6"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Notifications */}
        <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-50 relative">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.37 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.64 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16ZM16 17H8V11C8 8.52 9.51 6.5 12 6.5C14.49 6.5 16 8.52 16 11V17Z"
              fill="currentColor"
            />
          </svg>
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User */}
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="User"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
          />
          {/* User info text (hidden on small screens) */}
          <div className="hidden md:flex flex-col">
            <span className="text-sm font-medium text-gray-900">
              Clayton Santos
            </span>
            <span className="text-xs text-gray-500">clayton@construct.com</span>
          </div>
          {/* Dropdown button */}
          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-50">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7 10L12 15L17 10H7Z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
