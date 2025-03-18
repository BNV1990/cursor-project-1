"use client";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[72px] bg-white border-r border-gray-100 flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center justify-center border-b border-gray-100">
        <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-50 text-gray-900">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Main Icons */}
      <div className="flex-1 flex flex-col items-center py-4 space-y-4">
        <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50 text-primary">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 13H10C10.55 13 11 12.55 11 12V4C11 3.45 10.55 3 10 3H4C3.45 3 3 3.45 3 4V12C3 12.55 3.45 13 4 13ZM4 21H10C10.55 21 11 20.55 11 20V16C11 15.45 10.55 15 10 15H4C3.45 15 3 15.45 3 16V20C3 20.55 3.45 21 4 21ZM14 21H20C20.55 21 21 20.55 21 20V12C21 11.45 20.55 11 20 11H14C13.45 11 13 11.45 13 12V20C13 20.55 13.45 21 14 21ZM13 4V8C13 8.55 13.45 9 14 9H20C20.55 9 21 8.55 21 8V4C21 3.45 20.55 3 20 3H14C13.45 3 13 3.45 13 4Z"
              fill="currentColor"
            />
          </svg>
        </button>

        <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-50 text-gray-900">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z"
              fill="currentColor"
            />
          </svg>
        </button>

        <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-50 text-gray-900">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V18C1 18.55 1.45 19 2 19H14C14.55 19 15 18.55 15 18V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C15.05 13.06 15.06 13.08 15.07 13.09C16.21 13.92 17 15.03 17 16.5V18C17 18.35 16.93 18.69 16.82 19H22C22.55 19 23 18.55 23 18V16.5C23 14.17 18.33 13 16 13Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>

      {/* User Avatars */}
      <div className="py-4 flex flex-col items-center space-y-4">
        <button className="w-10 h-10 rounded-full bg-[#B5E4CA] flex items-center justify-center text-sm font-medium text-gray-900">
          KP
        </button>
        <button className="w-10 h-10 rounded-full bg-[#CABDFF] flex items-center justify-center text-sm font-medium text-gray-900">
          NH
        </button>
        <button className="w-10 h-10 rounded-full bg-[#FFBC99] flex items-center justify-center text-sm font-medium text-gray-900">
          HZ
        </button>
        <button className="w-10 h-10 rounded-full border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-300">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 4.16667V15.8333M4.16667 10H15.8333"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </aside>
  );
}
