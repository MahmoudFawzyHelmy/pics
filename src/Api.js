import axios from "axios";

const searchImage = async (term) => {
  let response = await axios.get(
    `https://api.unsplash.com/search/photos?query=${term}`,
    {
      headers: {
        Authorization: "Client-ID cIHfw8WaAbZgbHyTWBJF43ZV9nrovsKy_h-cSS488TY",
      },
    }
  );

  return response.data.results;
};

export default searchImage;
