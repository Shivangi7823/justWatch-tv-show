import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import SearchResult from '@/views/SearchResult.vue';
import { routes } from '@/router/index';

jest.mock("axios", () => ({
  get: () => Promise.resolve({
    data: [{
      score: 99,
      show: {
        id: 240,
        url: "http://www.tvmaze.com/shows/240/cops",
        name: "Cops",
        genres: ["Action", "Drama"],
      },
    },
    {
      score: 98,
      show: {
        id: 241,
        url: "http://www.tvmaze.com/shows/241/benched",
        name: "Benched",
        genres: ["Thriller", "Comedy"],
      }
    }]
  })
}));

describe('In SearchResult Component', () => {
  let wrapper;
  const router = new VueRouter({ routes });

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);

    wrapper = shallowMount(SearchResult, {
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
  it("created assigns shows", () => {
    expect(wrapper.vm.shows).not.toBe(undefined);
  });
  it("getting searchshow data", () => {
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.shows.length).toBe(2);
    });
  });
});
