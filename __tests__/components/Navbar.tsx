import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import renderer from 'react-test-renderer';

import { Navbar } from '../../app/components/Navbar';

jest.mock('react-router-dom', () => ({ Link: 'Link', withRouter: jest.fn() }));


describe('Test the Navbar component', () => {
  let component: ShallowWrapper;
  beforeAll(() => {
    component = shallow(<Navbar />);
  });

  test('should have the text "Assemble Store"', () => {
    expect(component.text()).toBe('Assemble Store');
  });

});
