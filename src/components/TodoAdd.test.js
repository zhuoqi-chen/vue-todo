import { shallow } from '@vue/test-utils';
import TodoAdd from './TodoAdd';

describe('TodoAdd', async () => {
  describe('init', () => {
    it('should behave a input', () => {
      const wapper = shallow(TodoAdd);
      expect(wapper.contains('input')).toBe(true);
    });
  });
  describe('methods', () => {
    describe('add', () => {
      it('title is empty,it should return', () => {
        const wapper = shallow(TodoAdd);
        wapper.setData({
          title: '',
        });
        wapper.vm.add();
        expect(wapper.emitted().add).toBeFalsy();
      });
      it('title is not empty,it should emit "add" event', () => {
        const wapper = shallow(TodoAdd);
        wapper.setData({
          title: 'xxx',
        });
        wapper.vm.add();
        expect(wapper.emitted().add).toBeTruthy();
        expect(wapper.emitted().add[0][0].title).toEqual('xxx');
        expect(wapper.emitted().add[0][0].completed).toBe(false);
      });
    });
  });
});
