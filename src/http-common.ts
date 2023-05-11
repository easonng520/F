import axios from "axios";

export default axios.create({
  baseURL: "https://b.easonng520.repl.co/api/",
  headers: {
    "Content-type": "application/json"
  }
});