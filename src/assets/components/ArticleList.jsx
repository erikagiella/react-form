export default function ArticleList({ articles, deleteArticle }) {
    return (

        articles.length === 0 ? (
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
        )

    )
}