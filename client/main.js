import React from 'react';
import {mount} from 'react-mounter';

const Welcome = ({name}) => <div>Hello, {name}</div>;

mount(Welcome, {name: 'Foo Bar'});
