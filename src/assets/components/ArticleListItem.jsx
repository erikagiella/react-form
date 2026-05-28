export default function ArticleListItem({ article, index, deleteArticle }) {
    return (
        <li
            key={`${index}-article`}
            className="list-group-item d-flex justify-content-between align-items-center"
        >
            <span>{article}</span>

            <button
                className="btn btn-sm btn-danger"
                onClick={() => deleteArticle(index)}
            >
                <i className="bi bi-trash-fill fs-5"></i>
            </button>
        </li>
    )
}