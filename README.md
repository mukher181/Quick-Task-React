# QuickTask - React Rebuild

A modern, component-driven task management application built with React, Vite, and a professional Git branching and pull-request workflow.

## Tech Stack
- **React (v18+)** with Function Components & Hooks (`useState`, `useEffect`)[cite: 1]
- **Vite** for fast building and development[cite: 1]
- **CSS3** for custom styling and card layout
- **LocalStorage API** for client-side task persistence[cite: 1]

## Features
- **Add Tasks:** Create new tasks with unique IDs.
- **Toggle Status:** Mark tasks as complete or active dynamically.
- **Delete Tasks:** Remove unwanted items seamlessly.
- **Filter Tasks:** Filter the task list between All, Active, and Completed items.
- **Persistence:** Automatically saves tasks to the browser's `localStorage` so data isn't lost on refresh[cite: 1].

## Component Architecture
The application is broken down into single-responsibility components[cite: 1]:
- `App.js`: Manages global state (`tasks`, `filter`) and data synchronization.
- `TaskForm`: Handles user input and submission for new tasks.
- `TaskList`: Renders the collection of task items.
- `TaskItem`: Individual task component handling toggle and delete actions.
- `FilterBar`: Controls filtering states (`all`, `active`, `completed`).

## What Changed from the Vanilla JS Version and Why
- **Component Decomposition:** Instead of directly manipulating the DOM via vanilla JavaScript selectors, the app is split into modular, single-responsibility components[cite: 1]. This makes the code easier to reason about, test, and maintain[cite: 1].
- **Declarative State Management:** Switched from imperative DOM updates to React’s `useState` and `useEffect`, ensuring the user interface cleanly and automatically reacts to underlying data changes.
- **Stable Keys:** Utilized unique task IDs instead of array indexes for list rendering optimization in React[cite: 1].

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone <your-repo-url>