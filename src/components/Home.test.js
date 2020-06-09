import React from 'react'
import {shallow} from 'enzyme'
import {findByTestAtrr} from '../../utils'
import Home from './Home'


const setUp = (props = {}) => {
    const component = shallow(<Home {...props} />);
    return component;
}

describe('Home Component', () => {
    
    let component;
    beforeEach(() => {
        component = setUp();
    })

    it('should render without errors', () => {
        const wrapper = findByTestAtrr(component, '.homeComponent');
        expect(wrapper.length).toBe(1);
    });

    it('should render home text', () => {
        const wrapper = findByTestAtrr(component, '.homePageText');
        expect(wrapper.length).toBe(1);
    });

})