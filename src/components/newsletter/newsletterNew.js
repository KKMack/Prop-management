import React, { Component } from 'react';
import NewNewsletterForm from './newsletterNewForm';

class NewNewsletter extends Component {

    onSubmit = (fields) => {
        console.log(submit)
    }

    render() {
        return (
            <div className='new-newsletter'>
                <NewNewsletterForm onSubmit={(event) => this.onSubmit(event)}/>
            </div>
        )
    }
}

export default NewNewsletter;