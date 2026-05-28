import { useState } from 'react'


function App() {

  const articlesList = [
    "Il cambiamento climantico",
    "La nuova Ferrari elettrica",
    "Gatti neri: portano davvero sfortuna?"
  ]

  const [articles, setArticles] = useState(articlesList);
  const [newArticle, setNewArticle] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setArticles([newArticle, ...articles])
    setNewArticle('');
  }

  function deleteArticle(i) {
    const updatedArticles = articles.filter((article, index) => {
      return index !== i;
    }
    )
    setArticles(updatedArticles);
  }

  return (
    <>
      <header className="container text-center my-3">
        <h1>
          <i className="bi bi-bookshelf mx-3"></i>
          React Blog Form
        </h1>
      </header>
      <main className='container'>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Add a new title' value={newArticle} onChange={e => setNewArticle(e.target.value)} />
          <button>Add article</button>
        </form>

        {articles.length === 0 ?
          (<div className='text-center fs-3'> No more articles left!</div>)
          :
          (<ul className="list-group my-3">
            {articles.map((article, i) =>
              <li className='list-group-item d-flex justify-content-between' key={`${i}-article`}>
                {article}
                <button className='btn btn-danger' style={{ cursor: 'pointer' }}
                  onClick={() => deleteArticle(i)}>
                  <i className="bi bi-trash-fill"></i>
                </button>
              </li>
            )}
          </ul>)}

      </main >
    </>
  )
}

export default App
