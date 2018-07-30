import React, { Component } from 'react';

import { FormTitle } from '../formTitle';

class SigninForm extends Component {
    render() {
        return (
            <form className="sign-in-form">
                <FormTitle className='sign-in__title' text='Login'/>
            </form>
        )
    }
}

export default SigninForm;