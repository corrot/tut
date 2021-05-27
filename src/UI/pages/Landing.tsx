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

interface IId {
  $oid: string;
}

interface ILection {
  lector: string;
  name: string;
  repeat: [any];
  score: number;
  tags: [any];
  _id: IId;
}

const Landing = () => {
  const [lections, setLections] = React.useState([]);

  const [editValue, setEditValue] = React.useState('');
  const [lector, setLector] = React.useState('');
  const [name, setName] = React.useState('');

  const getLections = () => {
    api.lections.getLections().then((res) => {
      setLections(res?.data);
    });
  };

  React.useEffect(() => {
    getLections();
  }, []);

  const editLection = (id: string) => {
    api.lections.editLections(id, editValue).then((res) => {
      getLections();
    });
  };

  const createLection = () => {
    api.lections.postLection(lector, name).then((res) => {
      getLections();
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
          {lections.map((lection: ILection) => (
            <TableRow key={lection._id.$oid}>
              <TableCell component="th" scope="row">
                <Link to={`course/${lection._id.$oid}`}>
                  {lection._id.$oid}
                </Link>
              </TableCell>
              <TableCell align="right">{lection.lector}</TableCell>
              <TableCell align="right">{lection.name}</TableCell>
              <TableCell align="right">
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => editLection(lection._id.$oid)}
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
        {lections.map((lection: ILection) => (
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
        onClick={() => createLection()}
      >
        add lection
      </Button>
    </>
  );
};

export default Landing;
