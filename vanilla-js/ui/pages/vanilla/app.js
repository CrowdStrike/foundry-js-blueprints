import FalconApi from '@crowdstrike/foundry-js';

const falcon = new FalconApi();

(async () => {
  await falcon.connect();

  // your code goes here
  document.getElementById('app').innerHTML =
    '<h1 class="text-titles-and-attributes">Hello world loaded!</h1>';
})();
