let axios = require("axios-https-proxy-fix");

exports.request = async (config) => {
   let startTime = (new Date()).getTime(), endTime;
   return new Promise((res, rej) => {
      config.timeout = 2500
      // config.proxy = {
      //    "host": "p.webshare.io",
      //    "port": 80,
      //    "protocol": "http",
      //    "auth": {"username": "ldsgwara-rotate", "password": "szs3w0zxpjnz"},
      // }
      // config.proxy= {host: "13.53.246.16", port: 3118, protocol: "http", auth: {username: "vishal", password: "vishal89"}}
      axios(config).then(function (response) {
         endTime = (new Date()).getTime();
         // console.log('API TIME ' + (endTime - startTime) + 'ms')
         res(response)
      }).catch(function (error) {
         console.log("====",error.response)
         rej(error?.response?.data || "Invalid phone number or data not found.")
      });
   })
}
