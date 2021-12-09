// api call and use onclick in a button
function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}





// 10 users
function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => userNames(data))
}

// function for 10 users
function userNames(data) {
    const ul = document.getElementById('button-2');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = `Name: ${user.name}. Email - ${user.email}.`;
        ul.appendChild(li);
    }
}





// 100 posts
function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}

// use function which is called inside 100 posts fetch
function displayPosts(data) {
    const ul = document.getElementById('users');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = `User Id No. ${user.id}, Title: ${user.title}.`;
        ul.appendChild(li);
    }
}



// another one practice myself
document.getElementById('album-btn').addEventListener('click', function() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => albumPosts(data))
});

// function for albums
function albumPosts(data) {
    const ul = document.getElementById('album-posts');
    for (const album of data) {
        const li = document.createElement('li');
        li.innerText = `Title: ${album.title}.`;
        ul.appendChild(li);
    }
}