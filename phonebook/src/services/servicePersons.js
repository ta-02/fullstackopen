import axios from "axios";
const baseUrl = "/api/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (contactInfo) => {
  const request = axios.post(baseUrl, contactInfo);
  return request.then((response) => response.data);
};

const deleteInfo = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

const update = (id, contactInfo) => {
  const request = axios.put(`${baseUrl}/${id}`, contactInfo);
  return request.then((response) => response.data);
};

export default {
  getAll,
  create,
  deleteInfo,
  update,
};
