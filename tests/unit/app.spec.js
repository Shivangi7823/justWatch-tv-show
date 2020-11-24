import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import app from '@/App.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { routes } from "@/router/index.js";

describe('In App Component', () => {
  let wrapper;
  const router = new VueRouter({ routes });

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);

    wrapper = shallowMount(app, {
      localVue,
      router,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  it('it should load the header', () => {
    expect(Header).toBeTruthy();
  });
  it('it should load the footer', () => {
    expect(Footer).toBeTruthy();
  });
});
