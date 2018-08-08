import React, { Component } from 'react'
import NewsletterBox from './newsletterBox'
import NewsletterArchive from './newsletter-archive'
import NewsletterLatest from './newsletterLatest'

class NewsletterGrid extends Comment {
    render() {
        return (
            <div className="newsletter-grid">
            {/* add button */}
            <NewsletterBox date={new Date()}/>
            <NewsletterArchive/>
            {/* content */}
            </div>
        )
    }
}

export default NewsletterGrid;