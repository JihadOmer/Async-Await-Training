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

function createNewPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

// getpost(); add it as a parameter for createnewpost()
// why this function does not work ?
// because the DOM already paint the UI before the
// craete post function run it take longer time(2000), here the important of Async/Await came!!
createNewPost({ title: "post three", body: "this is post three" }, getpost);
