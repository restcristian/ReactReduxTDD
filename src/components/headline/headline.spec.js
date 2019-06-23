import React from 'react'
import { findByTestAttr, checkProps } from '../../../Utils';
import { shallow } from 'enzyme';
import Headline from './index';

const setUp = (props = {}) => {
    const component = shallow(<Headline {...props} />);
    return component;
};

describe('Headline Component', () => {

    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                header:'Test Header',
                desc:'Test Desc',
                tempArr:[{
                    fName:'Test fname',
                    lName:'Test lName',
                    email:'test@email.com',
                    age:23,
                    onlineStatus:false
                }]
            };
            const propsErr = checkProps(Headline, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    });

    describe('Have props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'test header',
                desc: 'Test desc'
            };
            wrapper = setUp(props);
        });

        it('Should render without errors', () => {
            const component = findByTestAttr(wrapper, 'headline-component');
            expect(component.length).toBe(1);
        });

        it('Should render an H1', () => {
            const h1 = findByTestAttr(wrapper, 'header');
            expect(h1.length).toBe(1);
        });
        it('Should render a desc', () => {
            const desc = findByTestAttr(wrapper, 'desc');
            expect(desc.length).toBe(1);
        })


    });

    describe('Have NO Props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        });
        it('Should not render', () => {
            const component = findByTestAttr(wrapper, 'headline-component');
            expect(component.length).toBe(0);
        });
    });
});