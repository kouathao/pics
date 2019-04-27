import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID dd359a1d99381400dd696e12fe8a2207dff3c765baad5d5df0ca2a77f271fd61"
  }
});
