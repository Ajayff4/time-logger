import React from 'react'
import renderer from 'react-test-renderer'
import AddTag from './AddTag'
import { Provider } from 'react-redux';
import store from '../store';
import { BrowserRouter as Router } from 'react-router-dom';

describe('AddTag Snapshot Testing...', () => {
    it('renders component correctly', () => {
        const tree = renderer.create(<Provider store={store}><Router><AddTag /></Router></Provider> ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});