import * as React from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

import api from 'api';

interface ICourse {
  _id: string;
  lector: string;
  name: string;
  score: number;
  tags: [string];
  stream: [string];
}

const Landing = () => {
  const [courses, setCourses] = React.useState([]);

  const [editValue, setEditValue] = React.useState('');
  const [lector, setLector] = React.useState('');
  const [name, setName] = React.useState('');

  const getCourses = () => {
    api.courses.getCourses().then((res) => {
      setCourses(res?.data);
    });
  };

  React.useEffect(() => {
    getCourses();
  }, []);

  const editCourse = (id: string) => {
    api.courses.editCourse(id, editValue).then((res) => {
      getCourses();
    });
  };

  const createCourse = () => {
    api.courses.postCourse(lector, name).then((res) => {
      getCourses();
    });
  };

  const handleChange = (e: any) => {
    setEditValue(e.target.value);
  };

  const changeName = (e: any) => {
    setName(e.target.value);
  };

  const changeLector = (e: any) => {
    setLector(e.target.value);
  };

  const LectionsTable = (): JSX.Element => (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Lector</TableCell>
            <TableCell align="right">Lection Name</TableCell>
            <TableCell align="right">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses.map((lection: ICourse) => (
            <TableRow key={lection._id}>
              <TableCell component="th" scope="row">
                <Link to={`course/${lection._id}`}>{lection._id}</Link>
              </TableCell>
              <TableCell align="right">{lection.lector}</TableCell>
              <TableCell align="right">{lection.name}</TableCell>
              <TableCell align="right">
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => editCourse(lection._id)}
                >
                  submit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <>
      <p>Landing</p>
      <LectionsTable />
      <TextField label="Edit value" onChange={(e) => handleChange(e)} />
      {/* <div>
        {lections.map((lection: ICourse) => (
          <div key={lection._id.$oid}>
            <div>{JSON.stringify(lection)}</div>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => editLection(lection._id.$oid)}
            >
              submit
            </Button>
          </div>
        ))}
      </div> */}
      <TextField label="lector" onChange={(e) => changeName(e)} />
      <TextField label="name" onChange={(e) => changeLector(e)} />
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => createCourse()}
      >
        add lection
      </Button>
    </>
  );
};

export default Landing;
