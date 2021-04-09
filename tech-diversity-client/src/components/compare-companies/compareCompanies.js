import React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    autocompletes: {
        display: 'flex', 
        margin: 10,
    }
}));

export const CompareCompanies = props => {
    const [company1, setCompany1] = React.useState({});
    const [company2, setCompany2] = React.useState({});
    const [rows, setRows] = React.useState([]);

    React.useEffect(() => {
        const rows = [
            {name: 'Female %', c1: company1.femaleRate, c2: company2.femaleRate },
            {name: 'Male %', c1: company1.femaleRate, c2: company2.femaleRate },
            {name: 'White %', c1: company1.maleRate, c2: company2.maleRate },
            {name: 'Asian %', c1: company1.asianRate, c2: company2.asianRate },
            {name: 'Latino %', c1: company1.latinoRate, c2: company2.latinoRate },
            {name: 'Black %', c1: company1.blackRate, c2: company2.blackRate },
        ]
        setRows(rows)
    }, [company1, company2])

    const classes = useStyles();

    return (
        <div>
            <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Compare Companies</DialogTitle>
                <DialogContent>
                        <div>
                            <div className={classes.autocompletes}>
                                <Autocomplete
                                    id="company-1"
                                    options={props.companies}
                                    getOptionLabel={(option) => option.company}
                                    style={{ width: 200, margin: 10 }}
                                    renderInput={(params) => <TextField {...params} label="Company 1" variant="outlined" />}
                                    onChange={(event, newValue) => {
                                        setCompany1(newValue || {});
                                    }}
                                />
                                <Autocomplete
                                    id="company-2"
                                    options={props.companies}
                                    getOptionLabel={(option) => option.company}
                                    style={{ width: 200, margin: 10 }}
                                    renderInput={(params) => <TextField {...params} label="Company 2" variant="outlined" />}
                                    onChange={(event, newValue) => {
                                        setCompany2(newValue || {});
                                    }}
                                />
                            </div>
                            <TableContainer component={Paper}>
                                <Table size="small" aria-label="a dense table">
                                    <TableHead>
                                    <TableRow>
                                        <TableCell>Data Rates</TableCell>
                                        <TableCell align="right">{`${company1.date} - ${company1.company}(${company1.type})`}</TableCell>
                                        <TableCell align="right">{`${company2.date} - ${company2.company}(${company2.type})`}</TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.c1}</TableCell>
                                        <TableCell align="right">{row.c2}</TableCell>
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
