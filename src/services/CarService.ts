import axios from "axios";
import { ICar } from "types/Car";
// import.meta.env.VITE_BASE_URL

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

export const findAllCars = async () => {
  const response = await apiClient.get<ICar[]>("/cars");
  return response.data;
};

export const findPopularCars = async () => {
  const response = await apiClient.get<ICar[]>("/cars/popular");
  return response.data;
};

export const findRecommendedCars = async () => {
  const response = await apiClient.get<{ cars: ICar[]; numCars: number }>(
    "/cars/recommended"
  );
  return response.data;
};
