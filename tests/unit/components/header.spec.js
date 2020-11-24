import { shallowMount, createLocalVue, mount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Header from '@/components/Header.vue';
import { routes } from '@/router/index';

describe('In Header Component', () => {
  let wrapper;
  const router = new VueRouter({ routes });

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);
    wrapper = shallowMount(Header, {
      localVue,
      router,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  })
  it("has a search input", () => {
    let input = wrapper.find('.input');
    expect(input.exists()).toBe(true);
  })
  it("searchQuery is empty", () => {
    expect(wrapper.vm.searchQuery).toEqual("");
  })
});

