import { useState } from 'react'


function App() {

  const articlesList = [
    "Il cambiamento climantico",
    "La nuova Ferrari elettrica",
    "Gatti neri: portano davvero sfortuna?"
  ]

  const [articles, setArticles] = useState(articlesList);

  return (
    <>
      <header className="container text-center my-3">
        <h1>
          <i className="bi bi-bookshelf mx-3"></i>
          React Blog Form
        </h1>
      </header>
      <main className='container'>
        <form >
          <input type='text' placeholder='Add a new title' />
          <button>Add article</button>
        </form>
        <ul className="list-group my-3">
          {articles.map((article, i) =>
            <li className='list-group-item' key={`${i}-article`}>{article}</li>
          )
          }
        </ul>
      </main>
    </>
  )
}

export default App
