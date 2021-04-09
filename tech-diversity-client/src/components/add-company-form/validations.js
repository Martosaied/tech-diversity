import * as yup from 'yup';

export const validationSchema = yup.object({
    date: yup
      .string('Enter a valid date')
      .required('Date is required'),
    company: yup
      .string('Enter a valid company')
      .required('Company is required'),
    type: yup
      .string('Enter a valid type')
      .required('Type is required'),
    femaleRate: yup
      .number('Enter rate')
      .min(0, 'The min value is 0')
      .max(100, 'The max value is 100')
      .required('This rate is required'),
    maleRate: yup
      .number('Enter rate')
      .min(0, 'The min value is 0')
      .max(100, 'The max value is 100')
      .required('This rate is required'),
    whiteRate: yup
      .number('Enter rate')
      .min(0, 'The min value is 0')
      .max(100, 'The max value is 100')
      .required('This rate is required'),
    asianRate: yup
      .number('Enter rate')
      .min(0, 'The min value is 0')
      .max(1200, 'The max value is 100')
      .required('This rate is required'),
    latinoRate: yup
      .number('Enter rate')
      .min(0, 'The min value is 0')
      .max(100, 'The max value is 100')
      .required('This rate is required'),
    blackRate: yup
      .number('Enter rate')
      .min(0, 'The min value is 0')
      .max(100, 'The max value is 100')
      .required('This rate is required'),
});
