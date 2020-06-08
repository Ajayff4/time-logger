import checkPropTypes from 'check-prop-types'

export const findByTestAtrr = (component, attr) => {
    let wrapper = undefined;
    if(attr[0]==='.' || attr[0]==='#'){
        wrapper = component.find(attr);
    }else{
        wrapper = component.find(`[data-test='${attr}']`);
    }
    return wrapper;
};

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
}