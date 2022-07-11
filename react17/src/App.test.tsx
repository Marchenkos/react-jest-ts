import { shallow, ShallowWrapper } from "enzyme";

import App, { EditComponent } from './App';

describe('AccountDetailsScreen', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
      wrapper = shallow(<App />);
  });

  it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
  });

  it('should render an EditComponet', () => {
    expect(wrapper.find(EditComponent)).toBeTruthy();
  });
});
