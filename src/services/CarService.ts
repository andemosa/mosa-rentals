import axios from "axios";
import { ICar } from "types/Car";
// import.meta.env.VITE_BASE_URL

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

export const findAllCars = async () => {
  const response = await apiClient.get<{ cars: ICar[]; numCars: number }>(
    "/cars"
  );
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

export const findCar = async (id: string) => {
  const response = await apiClient.get<ICar>(`/cars/${id}`);
  return response.data;
};

export const findCarOptions = async () => {
  const response = await apiClient.get<{
    brands: { _id: string; total: number }[];
    capacities: { _id: number; total: number }[];
    maxPrice: { _id: string; price: number }[];
  }>(`/cars/options`);
  return response.data;
};

export const findCarsSearch = async ({
  brands,
  capacities,
  price,
}: {
  brands: string;
  capacities: string;
  price: string;
}) => {
  const response = await apiClient.post(`/cars/search`, {
    brands,
    capacities,
    price,
  });
  return response.data;
};
