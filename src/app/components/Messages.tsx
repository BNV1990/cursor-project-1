"use client";

import { useState, useEffect } from "react";

interface Message {
  id: number;
  name: string;
  status: "online" | "offline" | "work";
  time: string;
  color: string;
}

interface User {
  id: number;
  name: string;
  lastName: string; // Changed email to lastName
}

export default function Messages() {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("/api/users");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // Ensure data.users is an array and filter out null/undefined entries
        const validUsers = Array.isArray(data.users) ? data.users.filter((user: User | null | undefined) => user != null) : []; // Explicitly type user
        setUsers(validUsers as User[]); // Cast to User[] after filtering nulls
      } catch (error) {
        console.error("Failed to fetch users:", error);
        setUsers([]); // Set to empty array on error
      }
    }

    fetchUsers();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "text-green-500";
      case "work":
        return "text-yellow-500";
      case "offline":
        return "text-gray-400";
      default:
        return "text-gray-400";
    }
  };

  const getStatusText = (status: Message["status"]) => {
    switch (status) {
      case "online":
        return "Online";
      case "work":
        return "Work";
      case "offline":
        return "Offline";
      default:
        return status;
    }
  };

  const filteredMessages = users
    ? users.filter((user: User) =>
        user?.name
          ? user.name.toLowerCase().includes(searchQuery.toLowerCase())
          : false
      )
    : [];

  return (
    <div className="bg-white rounded-xl">
      {/* Search */}
      <div className="p-4 border-b border-gray-100">
        <div className="relative">
          <input
            type="text"
            placeholder="Search in Messages"
            className="w-full h-10 pl-10 pr-4 bg-gray-50 rounded-lg text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      {/* Add User */}
      <div className="p-4 border-b border-gray-100">
        <h3 className="text-sm font-medium text-gray-900 mb-2">Add User</h3>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Name"
            className="w-1/2 h-10 px-4 bg-gray-50 rounded-lg text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
            id="name"
          />
          <input
            type="text" // Changed type to text
            placeholder="Last Name" // Changed placeholder
            className="w-1/2 h-10 px-4 bg-gray-50 rounded-lg text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
            id="lastName" // Changed id
          />
          <button
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary hover:bg-primary-dark text-white"
            onClick={async () => {
              const nameInput = document.getElementById("name") as HTMLInputElement;
              const lastNameInput = document.getElementById("lastName") as HTMLInputElement;
              const name = nameInput?.value ?? '';
              const lastName = lastNameInput?.value ?? '';

              if (!name || !lastName) {
                console.error("Name and Last Name are required");
                // Optionally show a message to the user
                return;
              }

              try {
                const response = await fetch("/api/users", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ name, lastName }),
                });
                console.log("Response from /api/users:", response); // Log the entire response

                if (!response.ok) {
                  const errorData = await response.json().catch(() => ({ error: "Failed to parse error response" }));
                  console.error("Failed to add user:", response.status, errorData);
                  // Optionally show an error message to the user
                  return;
                }

                const data = await response.json();

                if (data && data.user) {
                  // Ensure users is an array before spreading
                  setUsers(Array.isArray(users) ? [...users, data.user] : [data.user]);
                  // Clear inputs on success
                  nameInput.value = '';
                  lastNameInput.value = '';
                } else {
                  console.error("Invalid user data received from API:", data);
                }
              } catch (error) {
                console.error("Error adding user:", error);
                // Optionally show an error message to the user
              }
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Direct Messages */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-gray-900">Direct Messages</h3>
          <button className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-50">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>

        <div className="space-y-2">
          {/* Ensure users is an array and filter nulls before mapping */}
          {Array.isArray(users) &&
            users.filter(user => user != null).map((user) => (
              <div
                key={user.id} // Now user should always be a valid object here
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
              >
                <div className="relative">
                  <div
                    className={`w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-white font-medium`}
                  >
                    {user?.name
                      ?.split(" ")
                      ?.map((n) => n[0])
                      ?.join("") ?? ""}
                  </div>
                  {/*<span
                  className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full ${getStatusColor(
                    message.status
                  )} ring-2 ring-white`}
                ></span>*/}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {user?.name ?? "Unknown User"}
                  </p>
                  <p className="text-xs text-gray-500">
                    {user?.lastName ?? "Unknown Last Name"} {/* Changed email to lastName */}
                  </p>
                </div>
                <button
                  className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-50"
                  onClick={async () => {
                    const response = await fetch("/api/users", {
                      method: "DELETE",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({ id: user.id }),
                    });
                    // Ensure users is an array before filtering
                    setUsers(Array.isArray(users) ? users.filter((u) => u && u.id !== user.id) : []);
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            ))}
        </div>

        <button className="w-full mt-4 text-sm text-gray-500 hover:text-gray-900">
          Show More Channels
        </button>
      </div>

      {/* Channels */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-gray-900"># Channels</h3>
          <button className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-50">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
