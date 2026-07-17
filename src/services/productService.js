import React from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


const API_OPTIONS = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

const getproducts = async () => {
  const response = await fetch(API_BASE_URL, API_OPTIONS);
  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }
  const data = await response.json();
  return data;
};

export default getproducts;
