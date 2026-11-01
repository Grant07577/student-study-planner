# Student Study Planner Web Application

**Accra Technical University** | ATU Virtual Internship | Software Development | Individual Mini Project

**Student name:** [INSERT YOUR FULL NAME] &nbsp;&nbsp; **Submission date:** 1 November 2026

## 1. Problem Statement
Students often juggle assignments, revision and reading across many courses and lose track of what is done and what is pending. A simple study planner lets a student record tasks by subject, see progress at a glance and remove tasks no longer needed. The intended user is a student organising academic work.

## 2. Objectives
To build a simple, responsive web application that lets students add study tasks with a subject, mark them complete or incomplete, delete them, and keep them saved between visits.

## 3. Technologies Used
- **HTML5:** page structure (header, summary cards, form, task list, footer).
- **CSS3:** blue, white and light-grey styling, cards, badges, responsive layout.
- **JavaScript (vanilla):** adding, validating, completing, deleting and displaying tasks.
- **Browser Local Storage:** keeps tasks after refresh. It stores data in one browser and does not sync across devices.
- **GitHub:** version control and source-code hosting.
- **GitHub Pages / Netlify:** free online hosting. [DELETE the one not used]

## 4. Features Implemented
**Required:** add task (title and subject); display tasks; mark complete; mark incomplete; delete task; Local Storage saving and loading (invalid stored data is handled safely); input validation with visible messages; empty-state message; summary counters (total, completed, pending); responsive layout; accessibility (labels, focus outlines, semantic HTML, status shown by text and not colour alone). User text is inserted with `textContent`, so it is never run as HTML.

**Optional extra:** task priority (Low, Medium, High) shown as badges and saved in Local Storage.

## 5. Interface Design
The header shows the title, subtitle and a "Saved locally" indicator. Below are three summary cards, the Add Task form, the task list (each task has a checkbox, subject, status and priority badges, and a Delete button), and a footer.

![Screenshot of the working application](../screenshots/application-screenshot.png){ width=45% }

## 6. Testing and Results
Tests were run automatically in headless Chromium (Playwright) against the final code, opening `index.html` as a local file. [Add your own manual check on your browser/phone and on the live URL.]

| # | Test | Expected | Actual result | Status |
|---|------|----------|---------------|--------|
| 1 | Add task, valid title and subject | Task appears | 1 task shown with title, subject, priority; form cleared | Pass |
| 2 | Empty title | Rejected with message | No task added; "Please enter a task title." shown | Pass |
| 3 | Title of spaces only | Rejected | No task added; same message shown | Pass |
| 4 | Mark incomplete task complete | Visibly complete | Completed style, "Completed" badge, line-through | Pass |
| 5 | Mark complete task incomplete | Returns to normal | Normal style and "Pending" badge restored; no duplicate | Pass |
| 6 | Delete a task | Selected task removed | Only the chosen task removed; others kept | Pass |
| 7 | Refresh browser | Tasks remain | 3 tasks, counters 3/1/2, completed state kept | Pass |
| 8 | Delete every task | Empty message appears | Message visible; counters 0/0/0 | Pass |
| 9 | Add task after deleting all | Task appears, message hides | 1 task shown; empty message hidden | Pass |
| 10 | Add several tasks | Each shown separately | 3 tasks with correct titles and subjects | Pass |
| 11 | Summary counters | Correct counts | 1/1/0, then 3/1/2 (total/completed/pending) | Pass |
| 12 | Narrow screen (360 px) | No horizontal scroll | Page width 360 = viewport 360 | Pass |

Extra checks: corrupted Local Storage data gave an empty list without errors, and text such as `<img onerror=...>` was displayed as plain text. No defects were found, so no fixes or retests were needed.

## 7. Challenges and Reflection
**[WRITE YOUR OWN. Replace this with your real experience.]** *Example to adapt only if true for you:* "Keeping the counters and Local Storage in step with the list was hard at first. I solved it by making every change call `saveTasks()` and `renderTasks()`, which redraws the list and recalculates the counters. In a future version I would add due dates and task editing."

## 8. Deployment and Source Code
- Live application: [INSERT VERIFIED URL]
- GitHub repository: [INSERT VERIFIED URL]

## 9. AI Assistance Declaration
An AI assistant (Claude, by Anthropic) assisted with planning, generating the HTML, CSS and JavaScript, running the tests and drafting this report and README. I reviewed the code and I am responsible for this submission. [Edit to describe your own involvement honestly.]
