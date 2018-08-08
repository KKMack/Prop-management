import React, { Component } from 'react'
import NewsletterBox from './newsletterBox'
import NewsletterArchive from './newsletterArchive'
import NewsletterLatest from './newsletterLatest'
import Button from '../button';

class NewsletterGrid extends Component {

    handleAddNewsletter = () => {
        this.props.history.push('/newsletter/new');
    }
    render() {

        const latest = {
            _id: '11',
            title: 'first post',
            body: 'You should be very greatful that I am taking the time to write this. I could have just gone and put in some random Lorem Ipsum text and called it good, but I decided that I would rather prove myself to you by writing out this massive section of text. You\'re welcome.',
            date: new Date(),
            imageUrl: 'http://via.placeholder.com/960x258'
        }

        return (
            <div className="newsletter-grid">
            <Button className="newsletter-grid__button" icon='fas fa-plus' callback={() => this.handleAddNewsletter()}/>
            <NewsletterBox date={new Date()}/>
            <NewsletterArchive/>
            <NewsletterLatest history={this.props.history} {...latest}/>
            </div>
        )
    }
}

export default NewsletterGrid;