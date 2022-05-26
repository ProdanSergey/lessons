export const BlogPage = (body) => {
	const article = document.createElement("article");

	article.innerHTML = `
      <h1>Blog Post</h1>
      <section>${body}</section>
    `;

	return article;
};
