import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

//default global configuration
axios.defaults.baseURL = "http://jsonplaceholder.typicode.com";
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

//http reques拦截器
axios.interceptors.request.use(config=>{
    console.log(config);
    //edit request config
    return config;
},error => {
    console.log(error);
    return Promise.reject(error);
});
 

//http response 拦截器
axios.interceptors.response.use(response=>{
    console.log(response);
    return response;
},error => {
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
