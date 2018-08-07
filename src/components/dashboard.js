import React, { Component } from 'react';
import Tabnav from './tabnav'

class Dashboard extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            tabs: [
                {
                    title: 'Newsletter',
                    active: true,
                    component: <h4>Hey There - Newsletter</h4>
                },
                {
                    title: 'Requests',
                    active: false,
                    component: <h4>Hey There - Requests</h4>
                },
            ]
        }
    }

    handleTabChange = () => {
        console.log('clicked on tab', title);
    }

    render() {
      return (
        <div className='dashboard'>
            <Tabnav handleClick={(title) => this.handleTabChange(title)} tabs={this.state.tabs}/>
        </div>
      )
      }
  }

  export default Dashboard;