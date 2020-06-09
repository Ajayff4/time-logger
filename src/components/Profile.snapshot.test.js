import React from 'react'
import renderer from 'react-test-renderer'
import Profile from './Profile'
import { Provider } from 'react-redux';
import store from '../store';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Profile Snapshot Testing...', () => {
    it('renders component correctly', () => {
        const tree = renderer.create(<Provider store={store}><Router><Profile /></Router></Provider> ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});