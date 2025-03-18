"use client";

interface Message {
  id: number;
  name: string;
  status: "online" | "offline" | "work";
  time: string;
  avatar: string;
}

export default function Messages() {
  const messages: Message[] = [
    {
      id: 1,
      name: "Ina Perry",
      status: "online",
      time: "12:45",
      avatar: "/avatars/1.jpg",
    },
    {
      id: 2,
      name: "Wesley Ray",
      status: "online",
      time: "12:45",
      avatar: "/avatars/2.jpg",
    },
    {
      id: 3,
      name: "Eula Burton",
      status: "work",
      time: "12:45",
      avatar: "/avatars/3.jpg",
    },
    {
      id: 4,
      name: "Viola Morales",
      status: "offline",
      time: "12:45",
      avatar: "/avatars/4.jpg",
    },
    {
      id: 5,
      name: "Vincent Terry",
      status: "online",
      time: "12:45",
      avatar: "/avatars/5.jpg",
    },
    {
      id: 6,
      name: "Nell Burns",
      status: "offline",
      time: "12:45",
      avatar: "/avatars/6.jpg",
    },
    {
      id: 7,
      name: "Lydia Sutton",
      status: "online",
      time: "12:45",
      avatar: "/avatars/7.jpg",
    },
    {
      id: 8,
      name: "Cynthia Evans",
      status: "offline",
      time: "12:45",
      avatar: "/avatars/8.jpg",
    },
  ];

  const getStatusColor = (status: Message["status"]) => {
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

  return (
    <div className="bg-white rounded-xl">
      {/* Search */}
      <div className="p-4 border-b border-gray-100">
        <div className="relative">
          <input
            type="text"
            placeholder="Search in Messages"
            className="w-full h-10 pl-10 pr-4 bg-gray-50 rounded-lg text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
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
          {messages.map((message) => (
            <div
              key={message.id}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
            >
              <div className="relative">
                <img
                  src={message.avatar}
                  alt={message.name}
                  className="w-10 h-10 rounded-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      message.name
                    )}&background=random`;
                  }}
                />
                <span
                  className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full ${getStatusColor(
                    message.status
                  )} ring-2 ring-white`}
                ></span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {message.name}
                </p>
                <p className="text-xs text-gray-500">
                  {getStatusText(message.status)}
                </p>
              </div>
              <span className="text-xs text-gray-400">{message.time}</span>
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
