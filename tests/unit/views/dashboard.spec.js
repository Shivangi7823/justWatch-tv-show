import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Dashboard from '@/views/Dashboard.vue';
import { routes } from '@/router/index';
import {
  allShows,
  highRatedShows
} from '../testing-data'

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

describe('In DashBoard Component', () => {
  let wrapper;
  const router = new VueRouter({ routes });

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);

    wrapper = shallowMount(Dashboard, {
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
    expect(wrapper.vm.popularShows.length).toBe(2);
  });
  it('return highly rated shows ', () => {
    let data = allShows
    let show= wrapper.vm.getHighRatedshow(data)
    expect(show).toStrictEqual(highRatedShows)    
  })
});
