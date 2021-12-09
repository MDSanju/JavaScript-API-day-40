function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}
loadPosts();

function displayPosts(posts) {
    const postContainer = document.getElementById('posts');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `;
        postContainer.appendChild(div);
    }
}


// my practice
function userDetails() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => usersAccount(data))
}
userDetails();

function usersAccount(users) {
    const userContainer = document.getElementById('users');
    for (const user of users) {
        const div = document.createElement('div');
        div.classList.add('user');
        div.innerHTML = `
        <h3>NAME: ${user.name}</h3>
        <h3>USERNAME: ${user.username}</h3>
        <h3>EMAIL: ${user.email}</h3>
        `;
        userContainer.appendChild(div);
    }
}


// how to creat a post? written below
function addPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'My new post',
                body: 'This is my posts',
                userId: 1
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(res => res.json())
        .then(data => console.log(data));
}