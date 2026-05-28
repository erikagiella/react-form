export default function ArticleForm({ newArticle, setNewArticle, handleSubmit }) {

    return (

        <form className="input-group mb-4" onSubmit={handleSubmit}>
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
    )
}