import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from '@material-ui/data-grid';
import { ButtonGroup, Button } from '@material-ui/core';
import { AddCompanyForm } from './components/add-company-form/addCompanyForm';
import { CompareCompanies } from './components/compare-companies/compareCompanies';

const API = 'http://localhost:8000';

const App = () => {

  const [companies, setCompanies] = useState([]);
  const [isAddCompanyFormOpen, setAddCompanyFormOpen] = useState(false);
  const [isCompareCompaniesOpen, setCompareCompaniesOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${API}/companies`);
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

  const handleCompareCompaniesOpen = () => {
    setCompareCompaniesOpen(true);
  };

  const handleCompareCompaniesClose = () => {
    setCompareCompaniesOpen(false);
  };

  const handleAddCompanyFormSubmit = async (data, resetForm) => {
      try {
        const res = await axios.post(`${API}/companies`, {
          ...data
        })
        setAddCompanyFormOpen(false);
        setCompanies([...companies, res.data]);
        resetForm();
      } catch (e) {
        alert('There was an error creating the new company, please trye again.')
      }
  };

  return (
    <div className="App">
      <div style={{ height: 500, width: '100%' }}>
        <DataGrid rows={companies} columns={columns} />
      </div>
      <div style={{ margin: '10px' }}>
        <ButtonGroup disableElevation variant="contained" color="primary">
          <Button color="primary" onClick={handleAddCompanyFormOpen}>
            Add Company 
          </Button>
          <Button color="primary" onClick={handleCompareCompaniesOpen}>
            Compare
          </Button>
        </ButtonGroup>
      </div>
      <AddCompanyForm handleSubmit={handleAddCompanyFormSubmit} handleClose={handleAddCompanyFormClose} open={isAddCompanyFormOpen}/>
      <CompareCompanies companies={companies} handleClose={handleCompareCompaniesClose} open={isCompareCompaniesOpen}/>
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
