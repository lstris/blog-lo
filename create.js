/** 
function addPost() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  if (!title || !content) {
    alert("Nhập đầy đủ thông tin!");
    return;
  }

  // Lấy data cũ
  let posts = JSON.parse(localStorage.getItem("posts")) || [];

  const newPost = {
    id: Date.now(),
    title,
    content
  };

  posts.push(newPost);

  // Lưu lại
  localStorage.setItem("posts", JSON.stringify(posts));

  alert("Đăng bài thành công!");

  // quay về trang chủ
  window.location.href = "index.html";
}
**/

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Lấy data cũ
let posts = JSON.parse(localStorage.getItem("posts")) || [];

// Nếu là edit → load dữ liệu
if (id) {
  const post = posts.find(p => p.id == id);

  if (post) {
    document.getElementById("title").value = post.title;
    document.getElementById("content").value = post.content;
  }
}

function addPost() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  if (!title || !content) {
    alert("Nhập đầy đủ!");
    return;
  }

  if (id) {
    // sửa
    posts = posts.map(p => {
      if (p.id == id) {
        return { ...p, title, content };
      }
      return p;
    });
  } else {
    // thêm mới
    posts.push({
      id: Date.now(),
      title,
      content
    });
  }

  localStorage.setItem("posts", JSON.stringify(posts));
  window.location.href = "index.html";
}