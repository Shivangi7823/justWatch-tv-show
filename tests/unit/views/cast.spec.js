import { shallowMount, createLocalVue } from '@vue/test-utils';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Cast from '@/views/Cast.vue';

describe('In Cast Component', () => {
  let castWrapper;
  let cast = {
    "person": {
      "name": "Justin Roiland",
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/1/3602.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/1/3602.jpg"
      },
    },
    "character": {
      "id": 56241,
      "name": "Rick Sanchez",
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/105/262781.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/105/262781.jpg"
      }
    },
  }
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);
    castWrapper = shallowMount(Cast, {
      localVue,
      propsData: {
        cast
      }
    });
  });

  afterEach(() => {
    castWrapper.destroy();
  });

  it('is a Vue instance', () => {
    expect(castWrapper.isVueInstance).toBeTruthy();
  })
  it('returns character image when available', () => {
    expect(castWrapper.vm.castImage).toStrictEqual(cast.character.image.medium || cast.character.image.original);
  })
  it("returns character medium image if available else character original", () => {
    cast.character.image.medium = null
    const wrapper = shallowMount(Cast, {
      propsData: {
        cast
      },
    })
    expect(wrapper.vm.castImage).toStrictEqual(cast.character.image.original);
  })
  it('returns person image when character image not available', () => {
    cast.character.image = null
    const wrapper = shallowMount(Cast, {
      propsData: {
        cast
      },
    })
    expect(wrapper.vm.castImage).toStrictEqual(cast.person.image.medium || cast.person.image.original);
  })
  it("returns person medium image if available else person original", () => {
    cast.person.image.medium = null
    const wrapper = shallowMount(Cast, {
      propsData: {
        cast
      },
    })
    expect(wrapper.vm.castImage).toStrictEqual(cast.person.image.original);
  })
})

describe('In Cast Component', () => {
  const localVue = createLocalVue();
  localVue.use(BootstrapVue);
  localVue.use(IconsPlugin);
  let castWrapper;
  let cast = {
    "person": {
      "name": "Justin Roiland",
      "image": null
    },
    "character": {
      "id": 56241,
      "name": "Rick Sanchez",
      "image":
        null
    },
  }
  castWrapper = shallowMount(Cast, {
    localVue,
    propsData: {
      cast
    }
  });
  it('returns null when no cast image available', () => {
    cast.character.image = null
    cast.person.image = null
    expect(castWrapper.vm.castImage).toStrictEqual(null);
  })
})


