const tweetForm = document.querySelector('#tweetForm')
const tweetContainer = document.querySelector('#tweets')
tweetForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    // const userNameInput = document.querySelectorAll('input')[0]
    // const tweetInput = document.querySelectorAll('input')[1];
    const userNameInput = tweetForm.elements.username
    const tweetInput = tweetForm.elements.tweet
    addTweet(userNameInput.value ,tweetInput.value)
    userNameInput.value = ''
    tweetInput.value = ''
    
    // alert('SUBMIT!!')
    // console.log(userNameInput.value,tweetInput.value)
})

const addTweet = (userName,tweet)=>{
    const newTweet = document.createElement('li')
    const bTag = document.createElement('b')
    bTag.append(userName)
    newTweet.append(bTag)
    newTweet.append(`- ${tweet}`)
    // console.log(newTweet)
    tweetContainer.append(newTweet)

}