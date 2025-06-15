import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
});

const useAxios = () => {
  const get = (url) => axiosInstance.get(url);
  const put = (url, data) => axiosInstance.put(url, data);
  const post = (url, data) => axiosInstance.post(url, data);
  const patch = (url, data) => axiosInstance.patch(url, data);
  const remove = (url, data) => axiosInstance.delete(url, data);

  return { get, put, post, patch, remove };
};

export default useAxios;
