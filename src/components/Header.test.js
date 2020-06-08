import React from 'react'
import {shallow} from 'enzyme'
import Header from './Header'
import {findByTestAtrr} from '../../utils'

const setUp = (props = {}) => {
    const component = shallow(<Header {...props} />);
    return component;
}

describe('Header Component', () => {
    let component;
    beforeEach(() => {
        component = setUp();
    })

    it('should render without errors', () => {
        const wrapper = findByTestAtrr(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('should render header text', () => {
        const wrapper = findByTestAtrr(component, 'titleText');
        expect(wrapper.length).toBe(1);
    });

})

//console.log(component.debug());