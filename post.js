const posts = [
  { id: 1, title: "Học HTML", content: "HTML là nền tảng của web" },
  { id: 2, title: "Học CSS", content: "CSS giúp web đẹp hơn" }
];

// Lấy id từ URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Tìm bài viết
const post = posts.find(p => p.id == id);

// Render ra màn hình
const container = document.getElementById("post-detail");

if (post) {
  container.innerHTML = `
    <h1>${post.title}</h1>
    <p>${post.content}</p>
  `;
} else {
  container.innerHTML = "<p>Không tìm thấy bài viết</p>";
}

console.log(id);