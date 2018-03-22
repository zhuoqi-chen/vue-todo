import { shallow } from '@vue/test-utils';
import TodoAdd from './TodoAdd';

describe('TodoAdd', async () => {
  describe('init', () => {
    it('default render should behave a input with placehoder', () => {
      const wapper = shallow(TodoAdd);
      expect(wapper.contains('input')).toBe(true);
      expect(wapper.find('input').attributes().placeholder).toEqual('What needs to be done?');
    });
    it('props', () => {
      const placeholder = '今天想干什么呢?';
      const wapper = shallow(TodoAdd, {
        propsData: {
          placeholder,
        },
      });
      expect(wapper.props().placeholder).toEqual(placeholder);
      // todo:think 是否有必要测节点呢?
      expect(wapper.find('input').attributes().placeholder).toEqual(placeholder);
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
