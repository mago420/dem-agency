const https = require('https');
const url = 'https://drive.google.com/uc?export=download&id=1CLlo7_0JkorCyNkntpNvr2sqYznCqjzu';

https.get(url, (res) => {
  console.log("Status Code:", res.statusCode);
  console.log("Headers:", res.headers);
});
