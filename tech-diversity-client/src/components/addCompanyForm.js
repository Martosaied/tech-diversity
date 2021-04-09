import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
}));

export const AddCompanyForm = props => {
    const classes = useStyles();
    const [formData, setFormData] = React.useState({});

    const handleInput = (property, value) => {
        console.log(value)
        setFormData({
            ...formData,
            [property]: value,
        })
    }

    const handleSubmit = () => {
        props.handleSubmit(formData);
    }

    return (
        <div>
            <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Company</DialogTitle>
                <DialogContent>
                    <form className={classes.root}>
                        <div>
                            <TextField
                                id="date"
                                label="Date"
                                type="month"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onInput={e => handleInput('date', e.target.value)}
                                required
                            />
                            <TextField
                                id="company"
                                label="Company"
                                onInput={e => handleInput('company', e.target.value)}
                                required
                            />
                            <TextField
                                id="type"
                                label="Type"
                                onInput={e => handleInput('type', e.target.value)}
                                required
                            />
                            <TextField
                                id="femaleRate"
                                label="Female %"
                                type="number"
                                InputProps={{
                                    inputProps: { 
                                        max: 100, min: 0 
                                    }
                                }}
                                onInput={e => handleInput('femaleRate', e.target.value)}
                            />
                            <TextField
                                id="maleRate"
                                label="Male %"
                                type="number"
                                InputProps={{
                                    inputProps: { 
                                        max: 100, min: 0 
                                    }
                                }}
                                onInput={e => handleInput('maleRate', e.target.value)}
                            />
                            <TextField
                                id="whiteRate"
                                label="White %"
                                type="number"
                                InputProps={{
                                    inputProps: { 
                                        max: 100, min: 0 
                                    }
                                }}
                                onInput={e => handleInput('whiteRate', e.target.value)}
                            />
                            <TextField
                                id="asianRate"
                                label="Asian %"
                                type="number"
                                InputProps={{
                                    inputProps: { 
                                        max: 100, min: 0 
                                    }
                                }}
                                onInput={e => handleInput('asianRate', e.target.value)}
                            />
                            <TextField
                                id="latinoRate"
                                label="Latino %"
                                type="number"
                                InputProps={{
                                    inputProps: { 
                                        max: 100, min: 0 
                                    }
                                }}
                                onInput={e => handleInput('latinoRate', e.target.value)}
                            />
                            <TextField
                                id="blackRate"
                                label="Black %"
                                type="number"
                                InputProps={{
                                    inputProps: { 
                                        max: 100, min: 0 
                                    }
                                }}
                                onInput={e => handleInput('blackRate', e.target.value)}
                            />
                        </div>
                    </form>
                </DialogContent>
                <DialogActions>
                <Button onClick={props.handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit} color="primary">
                    Submit
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
