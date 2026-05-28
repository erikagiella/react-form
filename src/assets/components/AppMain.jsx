import { useState } from 'react'
import ArticleForm from './ArticleForm'
import ArticleList from './ArticleList'

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

                <ArticleList
                    articles={articles}
                    deleteArticle={deleteArticle}
                />

            </div>
        </main >
    )
}