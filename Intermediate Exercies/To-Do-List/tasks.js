class Task {
  taskName;
  dueDate;
  comments;
  completed;

  constructor(taskName, dueDate) {
    this.taskName = taskName;
    this.dueDate = dueDate;
    this.comments = [];
    this.completed = false;
  }

  change_taskName(new_taskName) {
    if (new_taskName != this.taskName) {
      this.taskName = new_taskName;
      console.log(this.taskName);
    } else {
      console.log("taskName cannot be the same.");
    }
  }

  change_due_date(new_date) {
    if (new_date != this.dueDate) {
      this.dueDate = new_date;
      console.log(this.dueDate);
    } else {
      console.log("Date cannot be the same.");
    }
  }

  add_comment(comment) {
    this.comments.push(comment);
  }

  edit_comment(comment_number, new_comment) {
    if (this.comments[comment_number]) {
      this.comments[comment_number] = new_comment;
      console.log(this.comments.join(", "));
    } else {
      console.log("Cannot find comment.");
    }
  }

  details() {
    console.log("Name: " + this.taskName + " - Due Date: " + this.dueDate);
  }
}

module.exports = Task;