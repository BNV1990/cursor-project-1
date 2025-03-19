"use client";

import Filter from "./Filter";

interface MenuItem {
  id: number;
  title: string;
  icon?: React.ReactNode;
}

interface Project {
  id: number;
  title: string;
  isActive?: boolean;
  isExpanded?: boolean;
}

export default function Navigation() {
  const mainMenu: MenuItem[] = [
    {
      id: 1,
      title: "Dashboard",
      icon: (
        <svg
          className="shrink-0"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M4 13H10C10.55 13 11 12.55 11 12V4C11 3.45 10.55 3 10 3H4C3.45 3 3 3.45 3 4V12C3 12.55 3.45 13 4 13ZM4 21H10C10.55 21 11 20.55 11 20V16C11 15.45 10.55 15 10 15H4C3.45 15 3 15.45 3 16V20C3 20.55 3.45 21 4 21ZM14 21H20C20.55 21 21 20.55 21 20V12C21 11.45 20.55 11 20 11H14C13.45 11 13 11.45 13 12V20C13 20.55 13.45 21 14 21ZM13 4V8C13 8.55 13.45 9 14 9H20C20.55 9 21 8.55 21 8V4C21 3.45 20.55 3 20 3H14C13.45 3 13 3.45 13 4Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Applications",
      icon: (
        <svg
          className="shrink-0"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Clients",
      icon: (
        <svg
          className="shrink-0"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V18C1 18.55 1.45 19 2 19H14C14.55 19 15 18.55 15 18V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C15.05 13.06 15.06 13.08 15.07 13.09C16.21 13.92 17 15.03 17 16.5V18C17 18.35 16.93 18.69 16.82 19H22C22.55 19 23 18.55 23 18V16.5C23 14.17 18.33 13 16 13Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];

  const projects: Project[] = [
    { id: 1, title: "Coca Cola Project", isActive: true, isExpanded: true },
    { id: 2, title: "Link Colors" },
    { id: 3, title: "Additional Content" },
    { id: 4, title: "Dismissing" },
    { id: 5, title: "Java Script Behavior" },
  ];

  const handleFilterChange = (filters: any) => {
    console.log("Filters changed:", filters);
    // Тут можна додати логіку обробки фільтрів
  };

  return (
    <nav className="fixed left-[72px] top-0 h-screen w-[280px] bg-white border-r border-gray-100 overflow-y-auto">
      <div className="p-6">
        {/* Search */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search products"
            className="w-full h-10 pl-10 pr-4 bg-gray-50 rounded-lg text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
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

        {/* Filter */}
        <Filter onFilterChange={handleFilterChange} />
      </div>
    </nav>
  );
}
