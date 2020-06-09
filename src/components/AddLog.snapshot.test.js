import React from 'react'
import renderer from 'react-test-renderer'
import AddLog from './AddLog'
import { Provider } from 'react-redux';
import store from '../store';
import { BrowserRouter as Router } from 'react-router-dom';

describe('AddLog Snapshot Testing...', () => {
    it('renders component correctly', () => {
        const tree = renderer.create(<Provider store={store}><Router><AddLog /></Router></Provider> ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});