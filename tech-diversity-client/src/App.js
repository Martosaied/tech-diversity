import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from '@material-ui/data-grid';
import { ButtonGroup, Button } from '@material-ui/core';
import { AddCompanyForm } from './components/addCompanyForm';

const App = () => {

  const [companies, setCompanies] = useState([]);
  const [isAddCompanyFormOpen, setAddCompanyFormOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:8000/companies');
      setCompanies(response.data);
    };
 
    fetchData();
  }, []);

  const handleAddCompanyFormOpen = () => {
    setAddCompanyFormOpen(true);
  };

  const handleAddCompanyFormClose = () => {
    setAddCompanyFormOpen(false);
  };

  const handleAddCompanyFormSubmit = (data) => {
      console.log(data)
      axios.post('http://localhost:8000/companies', {
        ...data
      })
      setAddCompanyFormOpen(false);
  };

  return (
    <div className="App">
      <div style={{ height: 500, width: '100%' }}>
        <DataGrid rows={companies} columns={columns} />
      </div>
      <div>
        <ButtonGroup disableElevation variant="contained" color="primary">
          <Button variant="outlined" color="primary" onClick={handleAddCompanyFormOpen}>
            Add Company 
          </Button>
          <Button variant="outlined" color="primary" onClick={handleAddCompanyFormOpen}>
            Compare
          </Button>
        </ButtonGroup>
      </div>
      <AddCompanyForm handleSubmit={handleAddCompanyFormSubmit} handleClose={handleAddCompanyFormClose} open={isAddCompanyFormOpen}/>
    </div>
  );
}

export default App;


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'date', headerName: 'Date', width: 130 },
  { field: 'company', headerName: 'Company', width: 130 },
  { field: 'type', headerName: 'Type', width: 130 },
  { field: 'femaleRate', headerName: 'Female Rate', width: 130 },
  { field: 'maleRate', headerName: 'Male Rate', width: 130 },
  { field: 'whiteRate', headerName: 'White Rate', width: 130 },
  { field: 'asianRate', headerName: 'Asian Rate', width: 130 },
  { field: 'latinoRate', headerName: 'Latino Rate', width: 130 },
  { field: 'blackRate', headerName: 'Black Rate', width: 130 },
];
