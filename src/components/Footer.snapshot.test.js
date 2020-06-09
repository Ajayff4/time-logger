import React from 'react'
import renderer from 'react-test-renderer'
import Footer from './Footer'
import { Provider } from 'react-redux';
import store from '../store';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Footer Snapshot Testing...', () => {
    it('renders component correctly', () => {
        const tree = renderer.create(<Provider store={store}><Router><Footer /></Router></Provider> ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});