import React from 'react'
import { search } from './Search'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

test('Search snapshot test', () => {
  const component = shallow(<Search />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})

test('Search should render a showcard for each show', () => {
  const component = shallow(<Search />)
  expect(component.find(ShowCard).length).toEqual(preload.shows.length)
})

test('Search should render correct amount of shows based on search', () => {
  const searchWord = 'house'
  const component = shallow(<Search />)
  component.find('input').simulate('change', {target: {value: searchWord}})
  const showCount = preload.shows.filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0).length
  expect(component.find(ShowCard).length).toEqual(showCount)
})
