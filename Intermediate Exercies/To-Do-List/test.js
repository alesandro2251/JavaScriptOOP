const Section = require('./sections.js');
const Task = require('./tasks.js');

// Test 1
console.log('Test 1')
task = new Task("Make bed", "27/05/2020")
task.change_taskName("Go to University")
task.change_due_date("28.05.2020")
task.add_comment("Don't forget laptop")
task.edit_comment(0, "Don't forget laptop and notebook")
task.details()
section = new Section("Daily tasks")
section.add_task(task)
second_task = new Task("Make bed","27/05/2020")
section.add_task(second_task)
section.clean_section()
section.view_section()

// Expected Output 
// Go to University
// 28.05.2020
// Don't forget laptop and notebook
// Name: Go to University - Due Date: 28.05.2020
// Task Go to University, 28.05.2020, Don't forget laptop and notebook is added to the section
// Task Make bed, 27/05/2020,  is added to the section
// Cleared 0 tasks.
// Section : Daily tasks
// Go to University 28.05.2020 Don't forget laptop and notebook
// Make bed 27/05/2020 

// Test 2 
console.log("Test 2")
const task1 = new Task("Wash dishes", "29/05/2020");
task1.add_comment("Use eco-friendly detergent");
task1.add_comment("Rinse thoroughly"); 
task1.edit_comment(1, "Rinse twice and dry");
task1.details();

const task2 = new Task("Laundry", "30/05/2020");
task2.change_taskName("Do Laundry");
task2.add_comment("Whites separately");
task2.add_comment("Use fabric softener");

const section1 = new Section("Household Chores");
section1.add_task(task1); 
section1.add_task(task2);  

section1.view_section(); 

// Expected Output
// Use eco-friendly detergent, Rinse twice and dry
// Name: Wash dishes - Due Date: 29/05/2020
// Do Laundry
// Task Wash dishes, 29/05/2020, Use eco-friendly detergent, Rinse twice and dry is added to the section
// Task Do Laundry, 30/05/2020, Whites separately, Use fabric softener is added to the section
// Section: Household Chores
// Wash dishes 29/05/2020 Use eco-friendly detergent, Rinse twice and dry
// Do Laundry 30/05/2020 Whites separately, Use fabric softener
