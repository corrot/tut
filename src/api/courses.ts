import axios from 'axios';
import { BASE_URL } from 'constants/index';

const getCourses = () => axios.get(`${BASE_URL}/course?page=1&items=10`);

const editCourse = (id: any, editValue: any) =>
  axios.put(
    `${BASE_URL}/${id}`,
    { lector: editValue },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

const postCourse = (lector: any, name: any) =>
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
  getCourses,
  editCourse,
  postCourse
};
