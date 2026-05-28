import ArticleListItem from "./ArticleListItem";

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
                    <ArticleListItem
                        key={`${i}-article`}
                        article={article}
                        index={i}
                        deleteArticle={deleteArticle} />
                ))}
            </ul>
        )

    )
}