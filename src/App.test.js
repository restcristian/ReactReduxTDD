import App from './App';
import { shallow } from 'enzyme';
import { findByTestAttr, testStore } from './../Utils';
import React from 'react';

const setUp = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store} />).childAt(0).dive();
    return wrapper;
};
describe('App Component', () => {
    let wrapper;
    beforeEach(() => {
        const initialState = {
            posts:[
                {
                    id:1,
                    title:'Example title 1',
                    body:'Some text'
                },
                {
                    id:2,
                    title:'Example title 2',
                    body:'Some text'
                },
                {
                    id:3,
                    title:'Example title 3',
                    body:'Some text'
                }
            ]
        }
        wrapper = setUp(initialState);
    });

    it('Should render without errors', () => {
        const component = findByTestAttr(wrapper, 'app-component');
        expect(component.length).toBe(1);
    });
    // Add this test if component is a class rather than a FSC
    // it('exampleMethod_updatesState Method should update state as expected', () => {
    //     const classInstance = wrapper.instance();
    //     classInstance.exampleMethod_updatesState();
    //     const newState = classInstance.state.hideBtn;
    //     expect(newState).toBe(true);
    // });

});