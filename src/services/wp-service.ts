import axios from "axios";

export const wpServiceApi = axios.create({
  baseURL: `${process.env.NEXT_WP_API_URL}/wp-json`,
});
