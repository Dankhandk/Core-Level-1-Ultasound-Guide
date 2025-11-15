/* Basic style for the Core Level 1 Ultrasound Guide */
body {
  font-family: sans-serif;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
  color: #222;
}

header {
  background-color: #004466;
  color: #fff;
  padding: 1rem;
  text-align: center;
}

header h1 {
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
  font-size: 1.8rem;
}

header p {
  margin: 0.5rem 0;
  font-size: 1rem;
}

nav {
  background-color: #eee;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}

nav ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style-type: none;
}

nav li {
  margin: 0.5rem;
}

nav a {
  text-decoration: none;
  color: #004466;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s, color 0.2s;
}

nav a:hover {
  background-color: #004466;
  color: #fff;
}

main {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}

section {
  margin-bottom: 2rem;
}

section h2 {
  border-bottom: 2px solid #004466;
  padding-bottom: 0.25rem;
  margin-top: 1.5rem;
}

section h3 {
  margin-top: 1rem;
  color: #004466;
}

ul {
  margin-left: 1.5rem;
}

footer {
  background-color: #eee;
  border-top: 1px solid #ddd;
  padding: 1rem;
  text-align: center;
  font-size: 0.9rem;
}

footer button {
  background-color: #004466;
  border: none;
  color: #fff;
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
}

footer button:hover {
  background-color: #003655;
}

/* Print styling: hide navigation and button; adjust fonts for print */
@media print {
  nav, footer button { display: none; }
  body {
    color: #000;
    background-color: #fff;
    font-size: 12pt;
  }
  h1 { font-size: 20pt; }
  h2 { font-size: 16pt; }
  h3 { font-size: 14pt; }
  a { color: inherit; text-decoration: none; }
}
