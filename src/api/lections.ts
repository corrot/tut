import axios from 'axios';
import { BASE_URL } from 'constants/index';

const getLections = () => axios.get(`${BASE_URL}/lection?page=1&items=10`);

const editLections = (id: any, editValue: any) =>
  axios.put(
    `${BASE_URL}/${id}`,
    { lector: editValue },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

const postLection = (lector: any, name: any) =>
  axios.post(
    `${BASE_URL}/lection`,
    {
      lector,
      name
    },
    {
      headers: {
        // "Content-Type": "application/json",
      }
    }
  );

export default {
  getLections,
  postLection,
  editLections
};
