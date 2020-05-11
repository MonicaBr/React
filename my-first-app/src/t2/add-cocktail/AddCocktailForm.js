import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, useHistory } from 'react-router-dom';

export default function AddCocktailForm(props) {
    const backUrl = props.location.state.backUrl;

    let history = useHistory();

    const onAddCocktail = (cocktail) => {
        console.log(`Cocktail added: ${cocktail}`)

        history.push(backUrl);
    }

    return(
        <div>
            <h3>Add a new cocktail</h3>
            <Formik 
                initialValues={{
                    strDrink: ""
                }}
                validate={values => {
                    const errors = {};
                    if(!values.strDrink) {
                        errors.strDrink = "Required";
                    }

                    return errors;
                }}
                onSubmit = {(values, {setSubmitting}) => {
                    setSubmitting(false);
                    onAddCocktail(values);
                }}>
                {({isSubmitting}) => 
                (<Form>
                    <Field type="name" name="strDrink" />
                    <ErrorMessage name="strDrink" />

                    <button disabled={isSubmitting} type="submit">Add cocktail</button>
                    <Link to={backUrl}><button>Back</button></Link>
                </Form>)}
            </Formik>
        </div>
    );
}