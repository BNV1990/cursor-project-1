"use client";

import Image from "next/image";
import { useState } from "react";

interface Project {
  id: number;
  icon: string;
  name: string;
  progress: number;
  stages: number;
  deadline: string;
  income: number;
  tasks: number;
  team: string[];
}

const lastProjects: Project[] = [
  {
    id: 1,
    icon: "/chat-app.svg",
    name: "Develop Chat Application",
    progress: 45,
    stages: 5,
    deadline: "09.25.2078",
    income: 5000,
    tasks: 21,
    team: ["/team1.jpg", "/team2.jpg", "/team3.jpg", "/team4.jpg"],
  },
  {
    id: 2,
    icon: "/apple.svg",
    name: "City Advertising Campaign",
    progress: 25,
    stages: 5,
    deadline: "09.25.2078",
    income: 5000,
    tasks: 21,
    team: ["/team1.jpg", "/team2.jpg", "/team3.jpg", "/team4.jpg"],
  },
  {
    id: 3,
    icon: "/web-app.svg",
    name: "Web Application Development",
    progress: 25,
    stages: 5,
    deadline: "09.25.2078",
    income: 5000,
    tasks: 21,
    team: ["/team1.jpg", "/team2.jpg", "/team3.jpg", "/team4.jpg"],
  },
];

const onDeadlineProjects: Project[] = [
  {
    id: 4,
    icon: "/facebook.svg",
    name: "Facebook Application",
    progress: 25,
    stages: 5,
    deadline: "09.25.2078",
    income: 5000,
    tasks: 21,
    team: ["/team1.jpg", "/team2.jpg", "/team3.jpg", "/team4.jpg"],
  },
  {
    id: 5,
    icon: "/apple.svg",
    name: "City Advertising Campaign",
    progress: 25,
    stages: 5,
    deadline: "09.25.2078",
    income: 5000,
    tasks: 21,
    team: ["/team1.jpg", "/team2.jpg", "/team3.jpg", "/team4.jpg"],
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"last" | "deadline">("last");

  const projects = activeTab === "last" ? lastProjects : onDeadlineProjects;

  return (
    <div className="bg-white rounded-2xl p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-x-2">
          <button
            className={`px-4 py-2 rounded-full text-gray-600 font-medium ${
              activeTab === "last" ? "bg-gray-100" : ""
            }`}
            onClick={() => setActiveTab("last")}
          >
            Last Projects
          </button>
          <button
            className={`px-4 py-2 text-gray-600 ${
              activeTab === "deadline" ? "bg-gray-100 rounded-full" : ""
            }`}
            onClick={() => setActiveTab("deadline")}
          >
            On Deadline
          </button>
        </div>
        <button className="text-gray-600">•••</button>
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-4 border border-gray-100 rounded-xl space-y-4"
          >
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                  <Image
                    src={project.icon}
                    alt={project.name}
                    width={24}
                    height={24}
                  />
                </div>
                <h3 className="font-semibold text-gray-800">{project.name}</h3>
              </div>
              <span className="text-gray-500">{project.progress}%</span>
            </div>

            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-500 rounded-full"
                style={{ width: `${project.progress}%` }}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <span className="text-lg">≡</span>
                <span>{project.stages} Stages</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <span className="text-lg">⏰</span>
                <span>Deadline: {project.deadline}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <span className="text-lg">💰</span>
                <span>Income: $ {project.income}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <span className="text-lg">📋</span>
                <span>{project.tasks} tasks</span>
              </div>
            </div>

            <div className="flex -space-x-2">
              {project.team.map((member, index) => (
                <div
                  key={index}
                  className="w-8 h-8 rounded-full border-2 border-white overflow-hidden"
                >
                  <div className="w-full h-full bg-blue-400 rounded-full flex items-center justify-center text-white text-sm">
                    {String.fromCharCode(65 + index)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
