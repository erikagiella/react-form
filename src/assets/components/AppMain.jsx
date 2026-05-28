import { useState } from 'react'
import ArticleForm from './ArticleForm'

export default function AppMain() {

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
        <main className="container">
            <div className="card shadow-sm border p-3">

                <ArticleForm
                    newArticle={newArticle}
                    setNewArticle={setNewArticle}
                    handleSubmit={handleSubmit}
                />

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
    )
}