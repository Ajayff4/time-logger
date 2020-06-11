import React from 'react'
import renderer from 'react-test-renderer'
import Signup from './Signup'
import { Provider } from 'react-redux';
import store from '../store';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Signup Snapshot Testing...', () => {
    it('renders component correctly', () => {
        const tree = renderer.create(<Provider store={store}><Router><Signup /></Router></Provider> ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});