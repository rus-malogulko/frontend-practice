// Promise

// Callback hell

// fetch('https://api.example.com/first', (error, firstResponse) => {
//   if (error) {
//     console.error('Error fetching first data:', error);
//   } else {
//     // First data fetched successfully
//     fetch(`https://api.example.com/second/${firstResponse.id}`, (error, secondResponse) => {
//       if (error) {
//         console.error('Error fetching second data:', error);
//       } else {
//         // Second data fetched successfully
//         fetch(`https://api.example.com/third/${secondResponse.id}`, (error, thirdResponse) => {
//           if (error) {
//             console.error('Error fetching third data:', error);
//           } else {
//             // Third data fetched successfully
//             console.log('All data fetched:', firstResponse, secondResponse, thirdResponse);
//           }
//         });
//       }
//     });
//   }
// });

// Using promises (a bit simpler)

// fetch('https://api.example.com/first')
//   .then((firstResponse) => {
//     // First data fetched successfully
//     return fetch(`https://api.example.com/second/${firstResponse.id}`);
//   })
//   .then((secondResponse) => {
//     // Second data fetched successfully
//     return fetch(`https://api.example.com/third/${secondResponse.id}`);
//   })
//   .then((thirdResponse) => {
//     // Third data fetched successfully
//     console.log('All data fetched:', thirdResponse);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });

// And using async/await (the simplest, looks like synchronous code)

// async function fetchData() {
//   try {
//     const firstResponse = await fetch('https://api.example.com/first');
//     // First data fetched successfully

//     const secondResponse = await fetch(`https://api.example.com/second/${firstResponse.id}`);
//     // Second data fetched successfully

//     const thirdResponse = await fetch(`https://api.example.com/third/${secondResponse.id}`);
//     // Third data fetched successfully

//     console.log('All data fetched:', thirdResponse);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// fetchData();

// Promisify function

// NodeJS has a built-in function called promisify that converts a callback-based function into a promise-based one.
// https://nodejs.org/dist/latest-v8.x/docs/api/util.html#util_util_promisify_original

// function promisify(callbackBasedFunction) {
//   return function (...args) {
//     return new Promise((resolve, reject) => {
//       // Invoke the original function with the provided arguments
//       callbackBasedFunction(...args, (error, result) => {
//         if (error) {
//           reject(error); // Reject the Promise with the error
//         } else {
//           resolve(result); // Fulfill the Promise with the result
//         }
//       });
//     });
//   };
// }
