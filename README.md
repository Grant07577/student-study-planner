# Student Study Planner

A simple, responsive web app that helps students organise assignments, revision and reading tasks in one place. Built as an individual mini project for the Accra Technical University (ATU) Virtual Internship in Software Development. It is a student project, not an official university system.

## Main features
- Add a task with a title, subject/course and priority (Low, Medium, High)
- Mark tasks complete or incomplete (checkbox, "Completed" badge and line-through)
- Delete individual tasks
- Summary cards: Total, Completed and Pending (update automatically)
- Tasks saved in the browser with Local Storage, so they survive a refresh
- Form validation: blank or spaces-only titles and missing subjects are rejected with a message
- Friendly empty-state message
- Responsive layout (desktop, tablet, phone) with keyboard focus styles and labelled controls

## Technologies used
HTML5, CSS3, vanilla JavaScript, browser Local Storage, Git and GitHub, GitHub Pages (or Netlify) for hosting. No frameworks, backend or external libraries.

## Run locally
1. Download or clone this repository.
2. Open `index.html` in a modern browser (double-click it), or run a local server, e.g. `python3 -m http.server` and visit `http://localhost:8000`.

## How to use
1. Type a task title and subject, choose a priority, click **Add Task**.
2. Tick the checkbox to mark a task complete; untick to undo.
3. Click **Delete** to remove a task.
4. Refresh the page: your tasks are still there.

Note: Local Storage saves data in your browser on one device. It does not sync between devices or browsers.

## Deployment
Live URL: `[ADD YOUR GITHUB PAGES / NETLIFY URL AFTER DEPLOYING]`

## AI assistance
An AI assistant (Claude by Anthropic) helped generate the initial code, tests and documentation. I reviewed, ran and can explain the code.
