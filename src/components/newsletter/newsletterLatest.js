import React, { Component } from 'react';

class NewsletterLatest extends Component {
    render() {
        return (
            <div className='newsletter-latest'>
                <h1 className="newsletter-latest__title">Title Goes Here</h1>
                <img className='newsletter-latest__image' src="http://via.placeholder.com/960x258"/>
                <div className="newsletter-latest__body">
                    <p>You should be very greatful that I am taking the time to write this. I could have just gone and put in some random Lorem Ipsum text and called it good, but I decided that I would rather prove myself to you by writing out this massive section of text. You're welcome.</p>
                </div>
            </div>
        )
    }
}

export default NewsletterLatest;