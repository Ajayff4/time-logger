import React from 'react'
import renderer from 'react-test-renderer'
import Login from './Login'
import { Provider } from 'react-redux';
import store from '../store';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Login Snapshot Testing...', () => {
    it('renders component correctly', () => {
        const tree = renderer.create(<Provider store={store}><Router><Login /></Router></Provider> ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});