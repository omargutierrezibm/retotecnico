import { shallowMount } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import Home from '@/views/Home-component.vue'

describe('Home-component.vue', () => {
  it('ingreso de texto en input', async () => {
    const wrapper = mount(Home)
    wrapper.vm.newTodo = 'nueva tarea'
    await wrapper.trigger('keydown.enter')
    expect(wrapper.vm.newTodo).toBe('nueva tarea')
  })
})
