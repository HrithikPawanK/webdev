const tweetForm = document.querySelector('#tweetForm');
tweetForm.addEventListener('submit', function(e){
    e.preventDefault(); 
    // all elements in form --> form.elements.name
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    createTweet(usernameInput.value, tweetInput.value);
    // reseting them
    usernameInput.value = '';
    tweetInput.value = '';
})

const createTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`-${tweet}`);
    const tweetUl = document.querySelector('ul');
    tweetUl.appendChild(newTweet);
}

// Event Delegation -->
// if we want to add event listeners to newly added elements then we use event delegation
// we use concept of event bubbling. so we add listeners to parent element and we pass event object
// event object has a target property. which tell where we clicked like the element we clicked

const tweetUl = document.querySelector('ul');
tweetUl.addEventListener('click', function(e){
    if(e.target.nodeName === 'LI') e.target.remove();
})