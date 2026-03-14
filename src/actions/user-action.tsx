import axios from "axios";

const API = import.meta.env.VITE_API_URL

export async function getUsers() {
  const response = await axios.get(`${API}/users`);
  return response.data;
}
