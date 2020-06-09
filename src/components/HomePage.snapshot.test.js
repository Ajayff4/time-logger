import React from 'react'
import renderer from 'react-test-renderer'
import HomePage from './HomePage'
import { Provider } from 'react-redux';
import store from '../store';
import { BrowserRouter as Router } from 'react-router-dom';

describe('HomePage Snapshot Testing...', () => {
    it('renders component correctly', () => {
        const tree = renderer.create(<Provider store={store}><Router><HomePage /></Router></Provider> ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});