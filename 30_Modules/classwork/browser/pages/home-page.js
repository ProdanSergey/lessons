export const HomePage = () => {
	const article = document.createElement("article");

	article.innerHTML = `
    <h1>Home</h1>
    <section>Welcome Fellow Guest!</section>
    <button id="blog">Go to Blog</button>
  `;

	return article;
};
