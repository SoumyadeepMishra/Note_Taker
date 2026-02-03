// import axios from 'axios';

// const BACKEND_URL = axios.create ({
//     baseURL : "http://localhost:4001/api/v1/noteapp/"
// })

// export default BACKEND_URL;

import axios from "axios";

const BACKEND_URL = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL
});

export default BACKEND_URL;
