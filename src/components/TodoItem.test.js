import { shallow } from '@vue/test-utils';
import TodoItem from './TodoItem';

let propsData;
beforeEach(() => {
  propsData = {
    todo: {
      completed: false,
      id: 0,
      title: 'propsData title',
      uuid: 'd16fc93c-a377-1e3b-224b-1ee85ee18ba9',
    },
  };
});
describe('TodoItem', async () => {
  describe('init', () => {
    it('created', () => {
      const wapper = shallow(TodoItem, {
        propsData,
      });
      expect(wapper.vm.localTodo).toEqual(propsData.todo);
      expect(wapper.vm.oldTitle).toEqual(propsData.todo.title);
    });
  });
  describe('methods', () => {
    describe('doneEdit', () => {
      it('if not change should return', () => {
        const wapper = shallow(TodoItem, {
          propsData,
          data: {
            isEditing: true,
          },
        });
        wapper.vm.doneEdit();
        expect(wapper.vm.isEditing).toBe(false);
      });
      it('title change should emit "doneEdit" event', () => {
        const wapper = shallow(TodoItem, {
          propsData,
          data: {
            isEditing: true,
          },
        });
        wapper.setData({
          oldTitle: 'xxxxx',
        });
        wapper.vm.doneEdit();
        expect(wapper.vm.isEditing).toBe(false);
        expect(wapper.vm.oldTitle).toEqual(propsData.todo.title);
        expect(wapper.emitted().doneEdit).toBeTruthy();
        expect(wapper.emitted().doneEdit.length).toBe(1);
        expect(wapper.emitted().doneEdit[0][0]).toEqual(Object.assign({}, propsData.todo));
      });
    });
    describe('remove', () => {
      it('should emit "remove" enent', () => {
        const wapper = shallow(TodoItem, {
          propsData,
        });
        wapper.vm.remove();
        expect(wapper.emitted().remove).toBeTruthy();
      });
    });
  });
  describe('watch', () => {
    it('localTodo.completed change should emit "doneEdit" enent', async () => {
      const wapper = shallow(TodoItem, {
        propsData,
      });
      wapper.vm.localTodo.completed = true;
      // todo: think why need await Promise.resolve();
      await Promise.resolve();
      expect(wapper.emitted().doneEdit).toBeTruthy();
      expect(wapper.emitted().doneEdit.length).toBe(1);
      expect(wapper.emitted().doneEdit[0][0]).toEqual(Object.assign({}, propsData.todo, { completed: true }));
    });
  });
});
