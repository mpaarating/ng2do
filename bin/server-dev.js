const path = require('path');

if (!require('piping')({ // eslint-disable-line import/no-extraneous-dependencies
  main: path.resolve(__dirname, './server-dev-require'),
  hook: true,
  ignore: /(\/\.|~$|\.json|\.scss$)/i
}));
