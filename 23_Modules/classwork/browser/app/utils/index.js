import { bar } from './bar/bar.js';
import { version } from './bar/meta.js';

import { foo } from './foo.js';

import { log, notify } from './logger/index.js';

// export * from './bar/bar.js';

export { bar, doubleBar, default as defaultBar } from './bar/bar.js';

export {foo, log, notify};