import React from 'react';
import {mount} from 'react-mounter';
import Keen from 'keen-js';

const Welcome = React.createClass({
  componentDidMount() {
    const client = new Keen({
      projectId: 'KEEN_PROJECT_ID_GOES_HERE',
      readKey: 'KEEN_READ_KEY_GOES_HERE'
    });

    Keen.ready(() => {
      const query = new Keen.Query('count', {
        eventCollection: 'userRegistered',
        timeframe: 'this_14_days',
        timezone: 'UTC'
      });

      client.draw(query, document.getElementById('my-chart'), {});
    });

  },

  render() {
    <div>
      <div>Hello, {this.props.name}</div>
      <div id='my-chart'></div>
    </div>
  }
});

mount(Welcome, {name: 'Foo Bar'});
