import run from './run';
import clean from './clean';
import copy from './copy';
import bundle from './bundle';
import render from './render';

async function build() {
  await run(clean);
  await run(copy);
  await run(bundle);
  await run(render);
}

export default build;
