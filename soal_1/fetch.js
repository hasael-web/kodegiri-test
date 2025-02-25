const rootElement = document.getElementById("root");
const table = document.createElement("table");
const tHead = document.createElement("thead");
const tBody = document.createElement("tbody");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    // Buat Header Table
    tHead.innerHTML =
      "<tr><th>ID</th><th>User ID</th><th>Title</th><th>Body</th><th>Action</th></tr>";

    // Looping Data dengan Limit 10
    data.slice(0, 10).map(({ userId, ...post }) => {
      console.log(post);

      const row = document.createElement("tr");
      row.setAttribute("data-id", post.id); // Tambahkan ID sebagai atribut

      row.innerHTML = `
        <td>${post.id}</td>
        <td>${post.title}</td>
        <td>${post.body}</td>
        <td><button onclick="deleteRow(${post.id})">Hapus</button></td>
      `;

      tBody.appendChild(row);
    });

    // Gabungkan table
    table.appendChild(tHead);
    table.appendChild(tBody);
    rootElement.appendChild(table);
  })
  .catch((err) => console.log(err));

// Function untuk menghapus row berdasarkan ID
function deleteRow(postId) {
  const rowToDelete = document.querySelector(`tr[data-id='${postId}']`);
  if (rowToDelete) {
    rowToDelete.remove();
  }
}
