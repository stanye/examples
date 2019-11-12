const axios = require('axios');

axios.get('https://www.stanye.com')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

axios.interceptors.request.use(config => {
  let token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axios.interceptors.response.use(res => {
  return res.status.code !== 0 ? Promise.reject(res.data) : res.data;
}, res => {
  if (res.response.status === 401) {
    router.history.push("/login");
  }

  return Promise.reject();
})