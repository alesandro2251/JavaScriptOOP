// The Section class should receive a name (string) upon initialization. The task also has one instance attribute:
// tasks (empty list)
// The Section class should also have four methods:

// - add_task(new_task: Task)
//   o Adds a new task to the collection and returns "Task {task details} is added to the
//   section"
//   o If the task is already in the collection, returns "Task is already in the section
//   {section_name}"
// - complete_task(task_name: str)
//   o Changes the task to completed (True) and returns "Completed task {task_name}"
//   o If the task is not found, returns "Could not find task with the name {task_name}"
// - clean_section()
//   o Removes all the completed tasks and returns "Cleared {amount of removed tasks}
//   tasks."
// - view_section()
//   o Returns information about the section and its tasks in this format:
//   "Section {section_name}:
//   {details of the first task}
//   {details of the second task}
//   ...
//   {details of the n task}"

class Section {
  name;
  tasks;

  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  add_task(new_task) {
    if (!this.tasks.includes(new_task)) {
      this.tasks.push(new_task);

      const filteredEntries = Object.entries(new_task)
        .filter(
          ([, value]) =>
            value !== false && value !== undefined && value !== null
        )
        .map(([key, value]) => `${value}`)
        .join(", ");

      console.log("Task " + filteredEntries + " is added to the section");
    } else {
      console.log(
        "Task is already in the section " + this.name + "{section_name}"
      );
    }
  }

  complete_task(task_name) {
    if (this.tasks.includes(task_name)) {
      this.tasks.task_name.completed = true;
    } else {
      console.log("Could not find task with the name " + task_name);
    }
  }

  clean_section() {
    let counter = 0;

    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].completed === true) {
        this.tasks.pop(this.tasks[i]);
        counter++;
      }
    }
    console.log("Cleared " + counter + " tasks.");
  }

  view_section() {
    console.log("Section : " + this.name);
    for (let i = 0; i < this.tasks.length; i++) {

        const filteredEntries = Object.entries(this.tasks[i])
        .filter(
          ([, value]) =>
            value !== false && value !== undefined && value !== null
        )
        .map(([key, value]) => `${value}`)
        .join(" ");

      console.log(filteredEntries)
    }
  }
}

module.exports = Section;
