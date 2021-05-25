import axios from 'axios';
import { BASE_URL } from '../constants';

const getLections = () => axios
  .get<any[]>(`${BASE_URL}/lection?page=1&items=10`);

const editLections = (id, editValue) => axios
  .put<any[]>(`${BASE_URL}/${id}`, { lector: editValue }, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

const postLection = (lector, name) => axios
  .post<any[]>(`${BASE_URL}/lection`,
    {
      lector,
      name,
    },
    {
      headers: {
        // "Content-Type": "application/json",
      },
    });

export default {
  getLections, postLection, editLections,
};
