import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import renderer from 'react-test-renderer';

import { CountrySelect } from '../../app/components/CountrySelect/CountrySelect';

describe('Test the CountrySelect component', () => {
  let component: ShallowWrapper;

  beforeAll(() => {
    component = shallow(<CountrySelect />);
  });

  test('should have one label', () => {
    expect(component.find('label').length).toBe(1);
  });

  test('should have one span with text Country', () => {
    const span = component.find('span');
    expect(span.length).toBe(1);
    expect(span.first().text()).toBe('Country');
  });

  test('should have one select', () => {
    expect(component.find('select').length).toBe(1);
  });

  test('should have 250 options', () => {
    const options = component.find('option');
    expect(options.length).toBe(250);
    expect(options.first().text()).toBe('Country');
    expect(options.first().prop('value')).toBe('--');
  });

  test('snapshot should be the same', () => expect(renderer.create(<CountrySelect />).toJSON()).toMatchSnapshot());
});
