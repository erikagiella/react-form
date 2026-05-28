import { useState } from 'react'

function App() {

  const articlesList = [
    "Il cambiamento climatico esiste?",
    "La nuova Ferrari elettrica: innovazione o scempio?",
    "Gatti neri: portano davvero sfortuna?",
    "I Watussi erano davvero alti?",
    "Non sei pronto per la prova costume? Vai in montagna!"
  ]

  const [articles, setArticles] = useState(articlesList)
  const [newArticle, setNewArticle] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (!newArticle.trim()) return

    setArticles([newArticle, ...articles])
    setNewArticle('')
  }

  function deleteArticle(indexToRemove) {
    const updatedArticles = articles.filter(
      (_, index) => index !== indexToRemove
    )

    setArticles(updatedArticles)
  }

  return (
    <>
      <header className="container text-center py-4">
        <h1 className="fw-bold">
          <i className="bi bi-bookshelf me-3"></i>
          React Blog Form
        </h1>
      </header>

      <main className="container">

        <div className="card shadow-sm border p-3">
          <form
            className="input-group mb-4"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="form-control"
              placeholder="Add a new article..."
              value={newArticle}
              onChange={(e) => setNewArticle(e.target.value)}
            />

            <button className="btn btn-primary fw-bolder fs-5 px-5">
              <i className="bi bi-plus-lg me-2"></i>
              Add
            </button>
          </form>


          {articles.length === 0 ? (
            <div className="text-center py-4">
              <h4 className="text-muted">
                No more articles left!
              </h4>
            </div>
          ) : (
            <ul className="list-group">
              {articles.map((article, i) => (
                <li
                  key={`${i}-article`}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <span>{article}</span>

                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => deleteArticle(i)}
                  >
                    <i className="bi bi-trash-fill fs-5"></i>
                  </button>
                </li>
              ))}
            </ul>
          )}


        </div>
      </main >
    </>
  )
}

export default App