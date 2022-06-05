import axios from "axios";
export default axios.create({
    baseURL: "https://cisum-musicstore.herokuapp.com/",
  headers: {
    "Content-type": "application/json"
  }

})