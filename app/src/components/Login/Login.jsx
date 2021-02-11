import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './Login.module.css';
import {Input} from '../common/FormsControl/FormsControls';
import {required} from '../../utils/validators/validators';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';

const LoginForm = (props) => {
        return (
                <form className={s.form} onSubmit={props.handleSubmit} >
                    <div className={s.formField}>
                        <Field placeholder={'Email'} name={'email'} validate={[required]} component={Input} />
                    </div> 
                    <div className={s.formField}>
                        <Field type={'password'} placeholder={'Password'} name={'password'} validate={[required]} component={Input} />
                    </div>
                    <div>
                        <Field type={'checkbox'} name={'remember'} component={Input} /> Remember
                    </div>
                    <div>
                        <button className={s.signin}>Sign in</button>
                    </div>
                </form>
        )
    }

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.remember)
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div className={s.form}>
            <h3>Enter your contacts</h3>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login}) (Login);
