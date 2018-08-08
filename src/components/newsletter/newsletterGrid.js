import React, { Component } from 'react'
import NewsletterBox from './newsletterBox'
import NewsletterArchive from './newsletter-archive'
import NewsletterLatest from './newsletterLatest'

class NewsletterGrid extends Comment {
    render() {

        const latest = {
            _id: '11',
            title: 'first post',
            body: 'You should be very greatful that I am taking the time to write this. I could have just gone and put in some random Lorem Ipsum text and called it good, but I decided that I would rather prove myself to you by writing out this massive section of text. You\'re welcome.',
            date: new Date(),
            imgUrl: 'http://via.placeholder.com/960x258'
        }

        return (
            <div className="newsletter-grid">
            {/* add button */}
            <NewsletterBox date={new Date()}/>
            <NewsletterArchive/>
            <NewsletterLatest {...latest}/>
            </div>
        )
    }
}

export default NewsletterGrid;