// {
//   "version": 2,
//   "builds": [
//     {
//       "src": "src/index.js",
//       "use": "@now/node"
//     }
//   ],
//   "routes": [
//     {
//       "src": "/login",
//       "methods": ["POST"],
//       "dest": "src/index.js"
//     }
//   ],
//   "env": {
//     "API_BE": "https://web-english.onrender.com/api"
//   },
//   "functions": {
//     "src/index.js": {
//       "maxDuration": 60
//     }
//   },
//   "headers": [
//     {
//       "source": "/(.*)",
//       "headers": [
//         {
//           "key": "Access-Control-Allow-Origin",
//           "value": "*"
//         }
//       ]
//     }
//   ]
// }