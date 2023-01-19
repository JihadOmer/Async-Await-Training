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

/* 
getpost(); add it as a parameter for createnewpost()
why this function does not work ?
because the DOM already paint the UI before the
craete post function run it take longer time(2000), here the important of Async/Await came!!
*/

function createNewPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject(console.log("Somthing went Wrong"));
      }
    }, 500);
  });
}

createNewPost({ title: "post three", body: "this is Post Three" })
.then(getpost)
.catch(err => err)
// .catch(err => console.log(err))
