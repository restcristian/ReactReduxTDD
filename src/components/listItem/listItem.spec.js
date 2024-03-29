import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../Utils';
import ListItem from './index';

describe('ListItem Component', () => {
    describe('Checking PropTypes', () => {
        it('Should NOT throw a warning', () => {
            const expectedProps = {
                title:'Example title',
                desc:'Some text'
            };
            const propsErrors = checkProps(ListItem, expectedProps);
            expect(propsErrors).toBeUndefined();
        });
    });
    describe('Component Renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                title:'Example title',
                desc:'Some text' 
            };
            wrapper = shallow(<ListItem {...props} />);
        });
        it('Should render without error', () => {
            const component = findByTestAttr(wrapper, 'listitem-component');
            expect(component.length).toBe(1);
        });
        it('Should render a title', () => {
            const title = findByTestAttr(wrapper, 'component-title');
            expect(title.length).toBe(1);
        });
        it('Should render a desc', () => {
            const desc = findByTestAttr(wrapper, 'component-desc');
            expect(desc.length).toBe(1);
        });
    });

    describe('Should NOT render', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                desc:'Some text' 
            };
            wrapper = shallow(<ListItem {...props}/>);
        });
        it('Component is not rendered', () => {
            const component = findByTestAttr(wrapper, 'listitem-component');
            expect(component.length).toBe(0)
        });
    })
});
