import React from 'react'
import renderer from 'react-test-renderer'
import Logs from './Logs'
import { Provider } from 'react-redux';
import store from '../store';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Logs Snapshot Testing...', () => {
    it('renders component correctly', () => {
        const tree = renderer.create(<Provider store={store}><Router><Logs /></Router></Provider> ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});