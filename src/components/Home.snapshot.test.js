import React from 'react'
import renderer from 'react-test-renderer'
import Home from './Home'
import { Provider } from 'react-redux';
import store from '../store';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Home Snapshot Testing...', () => {
    it('renders component correctly', () => {
        const tree = renderer.create(<Provider store={store}><Router><Home /></Router></Provider> ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});