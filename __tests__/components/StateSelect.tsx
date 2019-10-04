import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import renderer from 'react-test-renderer';

import { StateSelect } from '../../app/components/StateSelect/StateSelect';

describe('Test the StateSelect componnet', () => {
  let component: ShallowWrapper;

  beforeAll(() => {
    component = shallow(<StateSelect />);
  });

  test('should have one label', () => {
    expect(component.find('label').length).toBe(1);
  });

  test('should have one span with text State', () => {
    const span = component.find('span');
    expect(span.length).toBe(1);
    expect(span.first().text()).toBe('State');
  });

  test('should have one select', () => {
    expect(component.find('select').length).toBe(1);
  });

  test('should have 50 option', () => {
    const options = component.find('option');
    expect(options.length).toBe(52);
    expect(options.first().text()).toBe('State');
    expect(options.first().prop('value')).toBe('--');
  });

  test('snapshot should be the same', () => expect(renderer.create(<StateSelect />).toJSON()).toMatchSnapshot());
});
