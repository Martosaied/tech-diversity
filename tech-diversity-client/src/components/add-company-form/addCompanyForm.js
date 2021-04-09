import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import { validationSchema } from './validations';

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

    const formik = useFormik({
        initialValues: {
            date: '',
            company: '',
            type: '',
            femaleRate: '',
            maleRate: '',
            whiteRate: '',
            asianRate: '',
            latinoRate: '',
            blackRate: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            props.handleSubmit(values, resetForm);
        },
    });

    return (
        <div>
            <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Company</DialogTitle>
                <DialogContent>
                    <form onSubmit={formik.handleSubmit} className={classes.root}>
                        <div>
                            <FormikTextField
                                id="date"
                                label="Date"
                                type="month"
                                formik={formik}
                            />
                            <FormikTextField
                                id="company"
                                label="Company"
                                formik={formik}
                            />
                            <FormikTextField
                                id="type"
                                label="Type"
                                formik={formik}
                            />
                            <FormikTextField
                                id="femaleRate"
                                label="Female %"
                                type="number"
                                formik={formik}
                            />
                            <FormikTextField
                                id="maleRate"
                                label="Male %"
                                type="number"
                                formik={formik}
                            />
                            <FormikTextField
                                id="whiteRate"
                                label="White %"
                                type="number"
                                formik={formik}
                            />
                            <FormikTextField
                                id="asianRate"
                                label="Asian %"
                                type="number"
                                formik={formik}
                            />
                            <FormikTextField
                                id="latinoRate"
                                label="Latino %"
                                type="number"
                                formik={formik}
                            />
                            <FormikTextField
                                id="blackRate"
                                label="Black %"
                                type="number"
                                formik={formik}
                            />
                        </div>
                        <DialogActions>
                        <Button onClick={props.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button type="submit" color="primary">
                            Submit
                        </Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export const FormikTextField = props => (
    <TextField
        id={props.id}
        label={props.label}
        type={props.type}
        InputLabelProps={{
            shrink: true,
        }}
        value={props.formik.values[props.id]}
        onChange={props.formik.handleChange}
        error={props.formik.touched[props.id] && Boolean(props.formik.errors[props.id])}
        helperText={props.formik.touched[props.id] && props.formik.errors[props.id]}
    />
)