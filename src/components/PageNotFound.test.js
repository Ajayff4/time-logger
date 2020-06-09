import React from 'react'
import {shallow} from 'enzyme'
import {findByTestAtrr} from '../../utils'
import PageNotFound from './PageNotFound'

const setUp = (props = {}) => {
    const component = shallow(<PageNotFound {...props} />);
    return component;
}

describe('PageNotFound Component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    })

    it('should render without errors', () => {
        const wrapper = findByTestAtrr(component, '#errorPage404Component');
        expect(wrapper.length).toBe(1);
    });

    it('should render error404 text', () => {
        const wrapper = findByTestAtrr(component, '#text404');
        expect(wrapper.length).toBe(1);
    });

});