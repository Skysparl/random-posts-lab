async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  displayPosts(await response.json());
}

function displayPosts(posts) {
  const list = document.getElementById("post-list");

  for (const { title, body } of posts) {
    const li = document.createElement("li");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    h1.textContent = title;
    p.textContent = body;

    li.appendChild(h1);
    li.appendChild(p);
    list.appendChild(li);
  }
}

fetchPosts().catch(console.error);

if (typeof module !== "undefined") module.exports = { fetchPosts, displayPosts };