import React from "react";

function TaskList({ task }) {
  const ListTask = task.map((value) => <li key={value}>{value}</li>);

  return (
    <div>
      <ul>{ListTask}</ul>
    </div>
  );
}

export default TaskList;
