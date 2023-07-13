import axios from "axios";

export const mapData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw?.lat,
          tr_latitude: ne?.lat,
          bl_longitude: sw?.lng,
          tr_longitude: ne?.lng,
        },
        headers: {
          "X-RapidAPI-Key":
            "ba2d03d219mshf2cc206672f39a4p1c09bajsnfde5740ddd02",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    ); //getting the data using destructuring and axios get method
    return data;
  } catch (error) {
    console.error(error);
  }
};
