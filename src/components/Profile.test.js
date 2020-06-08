import React from 'react'
import {shallow} from 'enzyme'
import {findByTestAtrr} from '../../utils'
import {logs} from '../../utils/testMockData'
import Profile from './Profile';

const setUp = (props = {}) => {
    const component = shallow(<Profile {...props} />);
    return component;
}

describe('Profile Component', () => {

    describe('Have props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                username: "ajayff4",
                fullname: "Ajay Agrawal",
                email: "ajayff4@gmail.com",
                logs: logs
            };
            wrapper = setUp(props);
        });

        it('should render without errors', () => {
            const component = findByTestAtrr(wrapper, '#profileComponent');
            expect(component.length).toBe(1);
        });
    });

    describe('Have no props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        });

        it('should render without errors', () => {
            const component = findByTestAtrr(wrapper, '#profileComponent');
            expect(component.length).toBe(1);
        });
    });



    // it('should render without errors', () => {
    //     const wrapper = findByTestAtrr(component, '#profileComponent');
    //     expect(wrapper.length).toBe(1);
    // });

    // it('should render error404 text', () => {
    //     const wrapper = findByTestAtrr(component, 'text404');
    //     expect(wrapper.length).toBe(1);
    // });

})