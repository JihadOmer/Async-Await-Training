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

// createNewPost({ title: "post three", body: "this is Post Three" })
// .then(getpost)
// .catch(err => err)
// .catch(err => console.log(err)) // another way to catch error

// ### excercise :  use fetch to show data in the console

function fetchdata() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((res) => console.log(res));
}
fetchdata();

// ### excercise : covert above function to  Async /await  to show same in data in the console

async function fetchdata() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  console.log(data);
}
fetchdata();
