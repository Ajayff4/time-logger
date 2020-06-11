import checkPropTypes from 'check-prop-types'
import { createStore } from 'redux';
import rootReducer from '../src/reducers'

export const findByTestAtrr = (component, attr) => {
    let wrapper = component.find(attr);
    return wrapper;
};

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
}

export const testStore = createStore(rootReducer);