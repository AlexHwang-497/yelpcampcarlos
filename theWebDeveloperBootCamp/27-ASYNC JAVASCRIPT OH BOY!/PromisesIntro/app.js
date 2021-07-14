// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}


// /////////////this is callback hell////////////

// fakeRequestCallback('books.com/page1',(response)=>{
//     console.log('IT Worked!!!!')
//     console.log(response)
//     fakeRequestCallback('books.com/page2',(response)=>{
//         console.log('IT Worked Again!!!!')
//         console.log(response)
//         fakeRequestCallback('books.com/page3',(response)=>{
//             console.log('IT Worked for the 3rd time!!!!')
//             console.log(response)
//         }, (err)=>{
//             console.log('IT FAILED for the third time!!',err)
//         })
//     }, (err)=>{
//         console.log('error 2nd request!!',err)
//     })
// }, (err)=>{
//     console.log('IT FAILED!!',err)
// })

// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(()=>{
//         console.log('Promise Resolved!')
//         console.log('it worked!')
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(()=>{
//                 console.log('Promise Resolved 2!')
//                 console.log('it worked! 2')
//             }).catch(()=>{
//                 console.log('Oh NO rejected!!!!!!!2')
//                 console.log('Oh NO ERRORRR!!!!!2')
//             })

//     }).catch(()=>{
//         console.log('Oh NO rejected!!!!!!!')
//         console.log('Oh NO ERRORRR!!!!!')
//     })

// //////////////video 276 the magic of promises
fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data)=>{
        console.log('IT WORKED!!!! PG.1')
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page2')
        
    })
    .then((data)=>{
        console.log('IT WORKED!!!! PG.2')
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page3')    
    })
    .then((data)=>{
        console.log('IT WORKED!!!! PG.3')
        console.log(data)
        // return fakeRequestPromise('yelp.com/api/coffee/page4')    
    })
    .catch((err)=>{
        console.log('REQUEST HAS FAILED!!!!!')
        console.log(err)
        // console.log(data)
    })