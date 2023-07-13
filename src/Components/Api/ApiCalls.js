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
            "132ef6a0efmshdc3988bfa127bd3p1e53e4jsnd448192975d9",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    ); //getting the data using destructuring and axios get method
    return data;
  } catch (error) {
    console.error(error);
  }
};
