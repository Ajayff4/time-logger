import React from 'react'
import renderer from 'react-test-renderer'
import Header from './Header'
import { Provider } from 'react-redux';
import store from '../store';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Header Snapshot Testing...', () => {
    it('renders component correctly', () => {
        const tree = renderer.create(<Provider store={store}><Router><Header /></Router></Provider> ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});