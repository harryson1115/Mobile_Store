import axios from 'axios';
require('dotenv').config();

const headers = {
    'Authorization': "eyJhbGciOiJIUzUxMiJ9.eyJhcHBfbG9naW5fdXNlcl9rZXkiOiI3YzEwNTM4Ny03YWEzLTQwZWEtYWJjYS1mNmY3Y2YxMWYyMTkifQ.7Ub939QkmEVttNmBAhmtaY_aMjhS4wV4ehlliUWcgku6J7btmfHBB5dWZutA-1cN2DCEpQVdAsG99fesPD1xUg", 
    'Accept-Language': 'en', 
    'Content-Type': 'application/json'
}

export const userSignUp = (data, callback) => {
    axios.post(`${process.env.REACT_APP_BACKEND_API}/app/member/register`, {
        headers: headers, 
        data: data
    }).then(response => {
        callback(response);
    }).catch(err => {
        callback(err);
    })
} 

export const userLogin = (data, callback) => {
    axios.post(`${process.env.REACT_APP_BACKEND_API}/app/member/login`, {
        headers: headers, 
        data: data
    }).then(response => {
        callback(response);
    }).catch(err => {
        callback(err);
    })
} 