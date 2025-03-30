import React, { useState, useEffect } from 'react';
import JobCard from "../components/JobCard";

const TaskListPage = () => {
  const [tasks, setTasks] = useState([]); // State to store tasks
  const [selectedTask, setSelectedTask] = useState(null); // State to track selected task

  useEffect(() => {
    // Fetch tasks from the new API
const fetchTasks = async () => {
  const token = 'mukeshE'; // Replace with your actual token

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments', {
          method: 'GET',
          headers: {
            'authorization': 'Bearer mukesh', // Replace with your actual token
            'Content-Type': 'application/json'
          }
        });
  const data = await response.json();

        if (data && data) {
          setTasks(data.slice(0, 200).map(task => ({ 
            id: task.id, 
            title: task.name, 
            details: `Details for ${task.body}`, 
            image: task.image || '' // Ensure image is set or fallback to empty string
          }))); // Map to desired format
        }
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="flex">
      {/* Task List Sidebar */}
      <div className="w-1/3 p-4 border-r border-gray-200">
        <h2 className="text-xl font-bold mb-4">Task List</h2>
        <ul>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              
              <li 
                key={task.id}
                className="p-2 hover:bg-gray-100 cursor-pointer" 
                onClick={() => setSelectedTask(task)} // Set selected task on click
              >
                {task.title}
              </li>
            ))
          ) : (
            <li>No tasks available.</li>
          )}
        </ul>
      </div>

      {/* Task Details Section */}
      <div className="w-2/3 p-4">
        <h2 className="text-xl font-bold mb-4">Task Details</h2>
        {selectedTask ? (
          <div>
            <h3 className="text-lg font-bold">{selectedTask.title}</h3>
            <p>{selectedTask.body}</p>
            {selectedTask.image ? (
              <img src="https://picsum.photos/200" alt={selectedTask.title} className="mt-2" />
            ) : (
              <p>No image available.</p>
            )} {/* Display image or fallback message */}
          </div>
        ) : (
          <p>Select a task to see the details here.</p>
        )}
      </div>
    </div>
  );
};

export default TaskListPage;
