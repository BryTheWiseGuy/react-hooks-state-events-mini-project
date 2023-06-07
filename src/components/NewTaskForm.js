import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [newTaskData, setNewTaskData] = useState({
    text: "",
    category: "Code",
  });

  function handleNewTaskDetails(event) {
    setNewTaskData({...newTaskData, text: event.target.value})
  }

  function handleNewTaskCategory(event) {
    setNewTaskData({...newTaskData, category: event.target.value})
  }

  function handleNewTaskSubmission(event) {
    event.preventDefault();
    onTaskFormSubmit(newTaskData);
  }
  
  return (
    <form className="new-task-form" onSubmit={handleNewTaskSubmission}>
      <label>
        Details
        <input type="text" name="text" onChange={handleNewTaskDetails}/>
      </label>
      <label>
        Category
        <select name="category">
          {categories.map((category) => (
            category === "All" ? null : <option key={category} value={category} onChange={handleNewTaskCategory}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
