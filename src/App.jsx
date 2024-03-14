import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <h1>Movies Stuff</h1>
    </header>
    <main>
      Movies Carrousel goes here
    </main>
      <footer>
        <p>
          Here is the link to the{" "}
          <a href="https://github.com/marianaGOD" target="_blank">
            GitHub Mariana's GitHub
          </a>
        </p>
      </footer>
    </>
  );
}

export default App
