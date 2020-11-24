import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Shows from '@/views/Shows.vue';
import { routes } from '@/router/index';

jest.mock("axios", () => ({
  get: () => Promise.resolve({
    data: [{
      id: 1,
      genres: ["Action", "Drama"],
      rating: {
        average: 7
      }
    },
    {
      id: 2,
      genres: ["Thriller", "Action"],
      rating: {
        average: 8.1
      }
    },
    {
      id: 3,
      genres: ["Thriller", "Action"],
      rating: {
        average: null
      }
    }
    ]
  })
}));

describe('In Shows Component', () => {
  let wrapper;
  const router = new VueRouter({ routes });

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);

    wrapper = shallowMount(Shows, {
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
  it("getting shows and popular shows data", () => {
    expect(wrapper.vm.shows.length).toBe(3);
  });



});
