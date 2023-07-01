// // THE CALLBACK VERSION
// const fakeRequestCallback = (url, success, failure) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//         if (delay > 4000) {
//             failure('Connection Timeout :(')
//         } else {
//             success(`Here is your fake data from ${url}`)
//         }
//     }, delay)
// }
// // THE PROMISE VERSION 
// const fakeRequestPromise = (url) => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * (4500)) + 500;
//         setTimeout(() => {
//             if (delay > 4000) {
//                 reject('Connection Timeout :(')
//             } else {
//                 resolve(`Here is your fake data from ${url}`)
//             }
//         }, delay)
//     })
// }

// // fakeRequestCallback('books.com/page/1', (response) => {
// //     console.log('it worked', response)
// //     fakeRequestCallback('books.com/page/2', (response) => {
// //         console.log('It worked again', response)
// //         fakeRequestCallback('books.com/page/3', (response) => {
// //             console.log('It worked again again', response)
// //         }, (response) => {
// //             console.log('error3', response)
// //         })
// //     }, (response) => {
// //         console.log('error2', response)
// //     })
// // }, (response) => {
// //     console.log('error', response)
// // })


// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log('it worked')
//         fakeRequestPromise('yelp.com/coffee/page2')
//             .then(() => {
//                 console.log('it worked again')
//                 fakeRequestPromise('yelp.com/api.coffee/page3')
//                     .then(() => {
//                         console.log('it worked again again')
//                     })
//                     .catch(() => {
//                         console.log('ERROR!!!')
//                     })
//             })
//             .catch(() => {
//                 console.log('ERROR!!')
//             })
//     })
//     .catch(() => {
//         console.log('ERROR!')
//     })

// fakeRequestPromise('google.com/page1')
//     .then((resolve) => {
//         console.log(resolve)
//         return fakeRequestPromise('google.com/page2')
//     })
//     .then((resolve) => {
//         console.log(resolve)
//         return fakeRequestPromise('google.com/page3')
//     })
//     .then((resolve) => {
//         console.log(resolve)
//         return fakeRequestPromise('google.com/page4')
//     })
//     .then((resolve) => {
//         console.log(resolve)
//         return fakeRequestPromise('google.com/page5')
//     })
//     .catch((err) => {
//         console.log(err)
//         console.log('Error! A request failed')
//     })

// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const rand = Math.random()
//         setTimeout(() => {
//             if (rand <= 0.7) {
//                 resolve("DATA");
//             }
//             reject("REQUEST ERROR!");
//         }, 1000)

//     })
// }

// fakeRequest('/dogs/1')
//     .then((data) => {
//         console.log("DONE", data)
//     })
//     .catch((err) => {
//         console.log("ERROR ", err)
//     })

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('indigo', 1000))
    .then(() => delayedColorChange('violet', 1000))
