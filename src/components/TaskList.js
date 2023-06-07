import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete, selectedCategory }) {

  const filteredTasks = tasks.filter((task) => {
    if (selectedCategory === "All") return true;
    return task.category === selectedCategory
  })

  return (
    <div className="tasks">
      {filteredTasks.map((task, index) => (
        <Task key={index} category={task.category} text={task.text} onDelete={() => onDelete(index)} />
      ))}
    </div>
  );
}

export default TaskList;
