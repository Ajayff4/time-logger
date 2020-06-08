import React from 'react'
import {shallow} from 'enzyme'
import {findByTestAtrr} from '../../utils'
import Footer from './Footer'

const setUp = (props = {}) => {
    const component = shallow(<Footer {...props} />);
    return component;
}

describe('Footer Component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    })

    it('should render without errors', () => {
        const wrapper = findByTestAtrr(component, '#footerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('should render footer text', () => {
        const wrapper = findByTestAtrr(component, 'footerText');
        expect(wrapper.length).toBe(1);
    });

})

//console.log(component.debug());