/**const posts = [
  { id: 1, title: "Học HTML", content: "HTML là nền tảng của web" },
  { id: 2, title: "Học CSS", content: "CSS giúp web đẹp hơn" }
];
**/
let posts = JSON.parse(localStorage.getItem("posts")) || [];

const container = document.getElementById("posts");

function renderPosts(list) {
  container.innerHTML = "";

  list.forEach(post => {
    container.innerHTML += `
      <div class="post">
         <h3>
          <a href="post.html?id=${post.id}">
            ${post.title}
          </a>
        </h3>
        <p>${post.content}</p>
        
        <button onclick="deletePost(${post.id})">Xoá</button>
        <button onclick="editPost(${post.id})">Sửa</button>
      </div>
    `;
  });
}

renderPosts(posts);
//lọc readtime
document.getElementById("search").addEventListener("input", (e) => {
  const keyword = e.target.value.toLowerCase();
//lọc dữ liệu
  const filtered = posts.filter(post =>
    post.title.toLowerCase().includes(keyword)
  );

  renderPosts(filtered);
});

//sửa bài
function editPost(id) {
  window.location.href = `create.html?id=${id}`;
}

//xoá bài
function deletePost(id) {
  let posts = JSON.parse(localStorage.getItem("posts")) || [];

  posts = posts.filter(p => p.id !== id);

  localStorage.setItem("posts", JSON.stringify(posts));

  renderPosts(posts);
}

console.log(posts);