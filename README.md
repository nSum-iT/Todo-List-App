# Django + React To-Do List App

## Overview

This project is a To-Do List application built using Django for the backend and React for the frontend. It allows users to create, update, delete, and mark tasks as complete. The communication between the frontend and backend is handled using Axios, which facilitates HTTP requests.

## Features

- Create new tasks with a title.
- Update existing tasks.
- Mark tasks as complete.
- Delete tasks.
- Retrieve tasks from the backend and display them in the frontend.

## Installation

1. Clone this repository to your local machine using `git clone`.
2. Navigate to the project directory.
3. Install backend dependencies.
4. Navigate to the `frontend` directory and install frontend dependencies by running `npm install`.

## Usage

1. Start the Django server by running `python manage.py runserver`.
2. Navigate to the `frontend` directory and start the React development server by running `npm start`.
3. Open your web browser and navigate to `http://localhost:3000` to access the To-Do List app.
4. Use the interface to create, update, complete, and delete tasks.

## Backend API Endpoints

- `GET /api/tasks/`: Retrieve all tasks.
- `POST /api/tasks/`: Create a new task.
- `GET /api/tasks/<id>/`: Retrieve details of a specific task.
- `PUT /api/tasks/<id>/`: Update a specific task.
- `DELETE /api/tasks/<id>/`: Delete a specific task.

## Frontend Structure

The frontend is built with React and structured as follows:

- `src/components`: Contains React components for the UI.
- `src/App.js`: Main component that renders the application.

## Backend Structure

The backend is built with Django and structured as follows:

- `todo/`: Django app for managing tasks.
- `todo/models.py`: Defines the Task model.
- `todo/views.py`: Contains API views for handling CRUD operations on tasks.
- `todo/urls.py`: Defines URL patterns for the API endpoints.

## Dependencies

- Django
- Django Rest Framework
- React
- Axios
