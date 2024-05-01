import { Formik, Form, Field, ErrorMessage } from 'formik';

import styles from './styles.module.css';

function FormPage() {
    return (
        <Formik
            initialValues={{
                fullname: '',
                email: '',
                phone: '',
            }}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
            }}
            validate={(values) => {
                const errors = {};
                if (!values.fullname) {
                    errors.fullname = 'Please enter your full name';
                }
                if (!values.email) {
                    errors.email = 'Please enter your email';
                } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
                    errors.email = 'Please enter a valid email';
                }
                if (!values.phone) {
                    errors.phone = 'Please enter your phone';
                } else if (!/^\d+$/.test(values.phone)) {
                    errors.phone = 'Please enter only digits for the phone number';
                } else if (values.phone.length < 12) {
                    errors.phone = 'Please enter a valid phone (min 12 characters)';
                }

                return errors;
            }}
        >
            {
                ({errors, touched}) => (
                    <Form className={styles['form-style']}>
                        <label htmlFor='fullname'>Full Name</label>
                        <Field id='fullname' name='fullname' placeholder='Jane Dou' />
                        <ErrorMessage name='fullname' component='div' className={styles['error']} />

                        <label htmlFor='email'>Email</label>
                        <Field
                            id='email'
                            name='email'
                            placeholder='jane@acme.com'
                            type='email'
                        />
                        <ErrorMessage name='email' component='div' className={styles['error']} />

                        <label htmlFor='phone'>Phone</label>
                        <Field id='phone' name='phone' placeholder='+012345678910' />
                        <ErrorMessage name='phone' component='div' className={styles['error']} />

                        <button type='submit'>Submit</button>
                    </Form>
                )
            }
        </Formik>
    );
}

export default FormPage;
