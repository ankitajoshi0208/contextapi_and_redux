# Experiment 4 – Global State Management in React

## Aim
To implement global state management in a React application using:
1. React Context API  
2. Redux Toolkit  

---

## Software Requirements
- Node.js  
- React (Vite)  
- VS Code  
- Web Browser  

---

# Part 1 – Global State Management using React Context API

## Theory
The React Context API is used to manage global state and avoid prop drilling.  
It allows data to be shared across multiple components without passing props manually at every level.


## Implementation
- Created `ThemeContext`
- Implemented light/dark theme toggle
- Accessed global state inside components

## Output
The theme of the application changes globally when the toggle button is clicked.

---

# Part 2 – State Management using Redux Toolkit (Counter Application)

## Theory
Redux is a centralized state management library.  
Redux Toolkit simplifies Redux by reducing boilerplate code and providing built-in tools for store configuration and state updates.


## Implementation
- Created Redux store
- Created counter slice
- Implemented Increment and Decrement functionality

## Output
The counter value increases and decreases when the respective buttons are clicked.

---

# Screenshots

## Context API Output
<img width="1231" height="589" alt="image" src="https://github.com/user-attachments/assets/0c51ffb5-d352-4b34-bd94-e48e460d3a28" />
<img width="1130" height="685" alt="image" src="https://github.com/user-attachments/assets/44335ea1-2a86-4175-a393-43aaecdcb514" />

## Redux Counter Output
<img width="1224" height="457" alt="image" src="https://github.com/user-attachments/assets/c963bdda-e236-48e7-8a6a-ebf0d7a4b53d" />


---

# Result
Thus, global state management was successfully implemented using React Context API and Redux Toolkit.
