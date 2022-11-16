// Async JS - Callbacks
// Example from https://levelup.gitconnected.com/async-js-crash-course-callbacks-promises-async-await-2e5f11b67dc4

// Simple callback function
const button = document.getElementById("button");
function callback() {
  console.log("Hello world");
}

button.addEventListener("click", callback);

// Callback function is passed as an argument to another function. It is often used with eventListeners
const posts = [
  { title: "JS Basics", summary: "This post contains the basics of JS" },
  { title: "DOM Basics", summary: "This post contains the basics of DOM" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach(
      (post) => (output += `<li>${post.title}</li><p>${post.summary}</p>`)
    );

    console.log(output);
    document.getElementById("callbackSetTimeoutTest").innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

// The title "async basics" is pushed at the end of the array...
// 1) Creating a new post, adding it to posts array
// 2) Getting all posts and displaying them on the page
createPost(
  { title: "Async Basics", summary: "This post contains basics of Async" },
  getPosts
);

// Example API call
// Free fake api: https://jsonplaceholder.typicode.com/
