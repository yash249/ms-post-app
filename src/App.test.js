import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('App component renders correctly', () => {
    const wrapper = shallow(<App />);
    const appComponent = wrapper.find('[data-test="component-app"]');
    expect(appComponent.length).toBe(1);
  });
});