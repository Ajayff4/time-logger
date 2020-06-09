import React from 'react'
import renderer from 'react-test-renderer'
import AddCategory from './AddCategory'
import { Provider } from 'react-redux';
import store from '../store';
import { BrowserRouter as Router } from 'react-router-dom';

describe('AddCategory Snapshot Testing...', () => {
    it('renders component correctly', () => {
        const tree = renderer.create(<Provider store={store}><Router><AddCategory /></Router></Provider> ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});