# Object-Oriented Programming (JavaScript)

Object-Oriented Programming (OOP) is a programming paradigm that uses objects, which have both data (in the form of properties) and behavior (in the form of methods), to design and implement software.

## 4 main principles:
 - Encapsulation
 - Abstraction
 - Inheritence
 - Polymorphism

## 1. Encapsulation:

Encapsulation is the bundling of data (properties) and methods that operate on that data into a single unit or class. This helps to prevent the accidental modification of data.

- **Properties (variables):** These are the data or state of an object.
- **Methods (functions):** These are the behaviors or actions an object can perform.

By encapsulating properties and methods within classes, we can reduce the complexity of code and ensure that an object's internal state is managed correctly.

## 2. Abstraction:

Abstraction allows us to hide complex implementation details and show only the essential features of an object. This ensures that objects can be used without understanding their inner workings.

- **Simplify the interface:** Only present necessary and relevant details.
- **Reduce the impact of change:** By abstracting details, any changes to the internal workings of a class should have minimal impact on other parts of the system that use that class.

## 3. Inheritance:

Inheritance is a mechanism where a new class inherits properties and behaviors (methods) from an existing class. This promotes code reusability and establishes a relationship between the base (parent) class and the derived (child) class.

- **Eliminating redundant code:** Instead of repeating the same code in multiple classes, a class can inherit common properties and methods from another class.

## 4. Polymorphism:

Polymorphism is the ability of a function, method, or object to take on multiple forms. In JavaScript, polymorphism is often achieved using method overriding.

- **Refactor switch/case statements:** Instead of using long switch/case statements to determine behavior, polymorphism lets objects determine the appropriate behavior for themselves.

### Additional Key Terms:

- **`extends`**: A keyword used in class declarations or class expressions to create a class as a child of another class.
- **`constructor()`**: A special method for creating and initializing objects created within a class.
- **`new`**: A keyword used to instantiate a new object from a class.
- **`super()`**: A function used to call corresponding methods of super class, especially when working in the context of inheritance. It is crucial in the context of constructors of derived classes.

## Exceptions in JavaScript:

Exceptions provide a way to handle the occurrence of errors during program execution. They let you create custom errors, allowing small objects to control the program flow based on exceptions. This ensures that the system can gracefully handle unforeseen errors instead of abruptly terminating.

```javascript
try {
    // Code that might throw an exception
} catch (error) {
    // Handle the error
} finally {
    // Execute code after try and catch, regardless of the outcome
}

