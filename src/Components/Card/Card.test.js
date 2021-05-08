import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

const props = {
  comments: ['test Comment'],
  url:"",
  id:0,
  category:"birds",
  liked: false,
  onImageClick: jest.fn(),
  onDeleteClick: jest.fn(),
  onPostClicked: jest.fn(),
  onLikeClicked: jest.fn(),
 }

describe('Card component', () => {
  it('Card component renders correctly', () => {
    const wrapper = shallow(<Card />);
    const appComponent = wrapper.find('[data-test="component-card"]');
    expect(appComponent.length).toBe(1);
  });

  it('Card component renders correctly', () => {
    const wrapper = shallow(<Card />);
    const appComponent = wrapper.find('[data-test="commentBox"]');
    expect(appComponent.length).toBe(1);
  });

  it('posts comment when button is clicked', () => {
    const wrapper = shallow(<Card likes={0} {...props}/>);
    const postButton = wrapper.find('[data-test="button-post"]');
    postButton.simulate('click');
    const text = wrapper.find('[data-test="comment"]').text();
    expect(text).toEqual('test Comment');
  });

  it('increases number of likes when like button clicked', () => {
    const wrapper = shallow(<Card likes={1} {...props}/>);
    const likeButton = wrapper.find('[data-test="button-like"]');
    likeButton.simulate('click');
    const text = wrapper.find('[data-test="numberOfLikes"]').text();
    expect(text).toEqual("1");
  });
});