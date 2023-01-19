const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getpost() {
  setTimeout(() => {
    let output = "";

    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createNewPost(post) {
  setTimeout(() => {
    posts.push(post);
  }, 2000);
}

getpost();
// why this function does not work ?
// because the DOM already paint the UI before the
// craete post function run, here the important of Async/Await came!! 
createNewPost({ title: "post three", body: "this is post three" });
