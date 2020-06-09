import React from 'react'
import renderer from 'react-test-renderer'
import PageNotFound from './PageNotFound'
import { Provider } from 'react-redux';
import store from '../store';
import { BrowserRouter as Router } from 'react-router-dom';

describe('PageNotFound Snapshot Testing...', () => {
    it('renders component correctly', () => {
        const tree = renderer.create(<Provider store={store}><Router><PageNotFound /></Router></Provider> ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});