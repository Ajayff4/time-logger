import React from 'react'
import {shallow} from 'enzyme'
import {findByTestAtrr, checkProps} from '../../utils'
import Profile from './Profile'


const setUp = (props = {}) => {
    const component = shallow(<Profile {...props} />);
    return component;
}

describe('Profile Component', () => {

    let wrapper;
    beforeEach(() => {
        const props = {
            username: "ajayff4",
            fullname: "Ajay Agrawal",
            email: "ajayff4@gmail.com",
            logs: []
        };
        wrapper = setUp(props);
    });

    describe('Checking PropTypes', () => {
        it('should not throw a warning', () => {
            const expectedProps = {
                username: "ajayff4",
                fullname: "Ajay Agrawal",
                email: "ajayff4@gmail.com",
                logs: []
            };
            const propsErr = checkProps(Profile, expectedProps);
            expect(propsErr).toBeUndefined();
        })
    })

    it('should render without errors', () => {
        const component = findByTestAtrr(wrapper, '#profileComponent');
        expect(component.length).toBe(1);
    });

    it('should render without errors', () => {
        const tr = wrapper.find('.container tr');
        expect(tr.length).toBe(9);
    });

});