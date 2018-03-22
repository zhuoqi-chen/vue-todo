import { shallow } from '@vue/test-utils';
import TodoAdd from './TodoAdd';

describe('TodoAdd', async () => {
  it('created', () => {
    const wapper = shallow(TodoAdd);
    console.log(wapper.html());
  });
});
