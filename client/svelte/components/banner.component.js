import Banner from './banner.component.html';

const BannerComponent = new Banner({
  target: document.querySelector('sample-app'),
  data: {
    name: 'Svelte'
  }
});

export default BannerComponent;
