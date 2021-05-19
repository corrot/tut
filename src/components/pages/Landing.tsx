import * as React from "react";
import api from '../../api';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

interface IId {
  $oid: string;
}

interface ILection {
  lector: string;
  name: string;
  repeat: [any];
  score: number;
  tags: [any];
  _id: IId
}

const Landing = () => {
  const [lections, setLections] = React.useState<ILection[]>([]);

  const getLections = () => {
    api.lections.getLections()
    .then((res) => {
      setLections(res?.data);
    })
  }

  React.useEffect(() => {
   getLections();
  }, []);

  const editLection = (id: string) => {
    api.lections.editLections(id, editValue)
      .then((res) => {
        getLections();
      })
    }

  const [editValue, setEditValue] = React.useState('');
  const [lector, setLector] = React.useState('');
  const [name, setName] = React.useState('');


  const createLection = () => {
    api.lections.postLection(lector, name)
    .then((res) => {
      getLections();
    })
  }

  const handleChange = (e: React.ChangeEvent) => {
    setEditValue(e.target.value);
  }

  const changeName = (e: React.ChangeEvent) => {
    setName(e.target.value);
  }

  const changeLector = (e: React.ChangeEvent) => {
    setLector(e.target.value);
  }

  const LectionsTable = (): JSX.Element => {
    return (
      <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Lector</TableCell>
            <TableCell align="right">Lection Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lections.map((lection) => (
            <TableRow key={lection._id.$oid}>
              <TableCell component="th" scope="row">
                {lection._id.$oid}
              </TableCell>
              <TableCell align="right">{lection.lector}</TableCell>
              <TableCell align="right">{lection.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
  }

  return(
  <>
    <p>Landing</p>
    <LectionsTable />
    <TextField label="Edit value" onChange={e => handleChange(e)} />
    <div>{lections.map(lection => (<div key={lection._id.$oid}>
      <div>{JSON.stringify(lection)}</div>
      <Button variant="outlined" color="primary" onClick={() => editLection(lection._id.$oid)}>submit</Button>
    </div>))}
    </div>
    <TextField label="lector" onChange={e => changeName(e)} />
    <TextField label="name" onChange={e => changeLector(e)} />
    <Button variant="outlined" color="secondary" onClick={() => createLection()}>add lection</Button>
    
  </>)
  };

export default Landing;