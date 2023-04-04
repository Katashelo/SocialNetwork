import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'
import { login } from '../../redux/authReducer';
import s from './../common/FormsControls/FormsControls.module.css'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'email'} component={'input'} />
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={'input'} type={'password'} />
            </div>
            <div>
                <Field name={'rememberMe'} component={'input'} type={ 'checkbox' } /> rememberMe
            </div>
                { props.error && <div className={s.formSummaryError}>
                {props.error}
                </div> }
            <div>
                <button> Login </button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if ( props.isAuth ) {
       return <Navigate to={'/profile'} />
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps , {login}) (Login);