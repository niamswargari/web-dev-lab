# React Component vs Vanilla JS DOM Manipulation (Experiment 7)

In Experiment 7 the page is changed by finding an element with `document.getElementById(...)` and then
setting its `.innerHTML`, `.value` or `.style`, or by using `createElement` and `appendChild`.
React works differently: you change a **state** variable, and React updates the page for you.

## Same task, both ways

| Task | Experiment 7 (vanilla JS) | React |
|---|---|---|
| Read an input | `document.getElementById("name").value` | `const [name, setName] = useState("")` with `value={name} onChange={e => setName(e.target.value)}` |
| Show text on the page | `document.getElementById("output").innerHTML = "Name: " + name;` | `<p>Name: {name}</p>` |
| Clear the form | `document.getElementById("name").value = "";` | `setName("");` |
| Change heading text | `document.getElementById("heading").innerHTML = "New text";` | `setHeading("New text");` with `<h1>{heading}</h1>` |
| Change style | `para.style.color = "red";` | `<p style={{ color: color }}>` and `setColor("red");` |
| Add a list item | `createElement("li")` then `appendChild(li)` | `setItems([...items, "New item"]);` with `items.map(i => <li>{i}</li>)` |
| Object data | `student.display()` result put in `innerHTML` | `student` passed to a component as props: `<StudentCard name={student.name} />` |
| Button click | `onclick="showForm()"` (inline attribute) | `onClick={showForm}` (JSX, function reference) |

## Fetching from the API (this experiment)

| Concern | Vanilla JS (`vanilla.html`) | React (`App.jsx` + `StudentCard.jsx`) |
|---|---|---|
| Style | Imperative: say *how* to change the DOM step by step | Declarative: say *what* the screen should show for the current data |
| Storing data | Global variable `students` | State: `useState([])` |
| Updating the screen | Call `showStudents()` by hand after every change | Call `setStudents(...)`; React re-renders automatically |
| Building elements | `createElement`, `innerHTML`, `appendChild` | JSX: `<StudentCard name={s.name} />` |
| Reusing a UI piece | Copy the code or write a function | `StudentCard` component reused with different props |
| Fetching on page load | `fetch(...)` at the bottom of the script | `useEffect(..., [])` runs after the first render |
| Loading / error | Write text into a `div` yourself | `if (loading) return ...`, chosen from state |
| Search box | `oninput="showStudents()"` clears and rebuilds the whole list | `value={search}` and `onChange`; filtered list computed on render |
| Setup | None, just open the file | Needs Node, npm and Vite |

## Key points
- **Vanilla JS:** Simple for small pages and needs no tools, but you keep the data and the screen in sync yourself. Every change means finding the element by id and updating it, and `innerHTML = ""` rebuilds the list each time. This gets hard to manage as the page grows.
- **React:** State drives the UI, so the data and the screen cannot get out of sync. Components like `StudentCard` can be reused with different props, and React updates only the parts that changed.
- **Trade-off:** React needs setup, a build tool and some learning, so it pays off for larger interactive apps rather than one small page.
- **Same in both:** The Express API, `fetch`, JSON and the loading/error handling are identical. Only the way the screen is updated differs.

## How to run
```
cd server && npm install && npm start      # API on http://localhost:5000/api/students
cd client && npm install && npm run dev    # React app on http://localhost:5173
```
Open `vanilla.html` directly in a browser (with the API running) for the vanilla version.
