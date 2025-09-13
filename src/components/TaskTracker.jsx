import React, { useState, useEffect } from "react";
import './TaskTracker.css';

function TaskTracker() {
  const [tasks, setTasks] = useState([]);

  const sampleTasks = [
    { id: 1, title: "Finish Portfolio", priority: "High", completed: false },
    { id: 2, title: "Learn React Animations", priority: "Medium", completed: false },
    { id: 3, title: "Practice Java Backend", priority: "High", completed: true },
  ];

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("tasks"));
    if (stored?.length) setTasks(stored);
    else {
      setTasks(sampleTasks);
      localStorage.setItem("tasks", JSON.stringify(sampleTasks));
    }
  }, []);

  const toggleComplete = (id) => {
    const updated = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  return (
    <section id="task-tracker">
      <h2>Daily Task Tracker</h2>
      <div className="tasks-grid">
        {tasks.map(task => (
          <div key={task.id} className={`task-card ${task.completed ? 'completed' : ''}`}>
            <h4>{task.title}</h4>
            <p>Priority: {task.priority}</p>
            <button onClick={() => toggleComplete(task.id)}>
              {task.completed ? "Undo" : "Complete"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TaskTracker;
