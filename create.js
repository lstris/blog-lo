
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