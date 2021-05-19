import axios from 'axios';

const getLections = () => 
    axios
    .get<any[]>('https://app.mylab.ge/lection?page=1&items=10')
  

  const editLections = (id, editValue) =>
    axios
      .put<any[]>(`https://app.mylab.ge/lection/${id}`, { lector: editValue }, {
        headers: {
          "Content-Type": "application/json",
        },
      })

  const postLection = (lector, name) => 
    axios
    .post<any[]>('https://app.mylab.ge/lection',
      {
        lector,
        name,
      },
    {
      headers: {
        // "Content-Type": "application/json",
      },
    })

export default {
    getLections, postLection, editLections
};