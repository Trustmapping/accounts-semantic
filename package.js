Package.describe({
  name: 'std:accounts-semantic',
  version: '1.1.8',
  summary: 'Semantic UI – Accounts UI for React in Meteor 1.3',
  git: 'https://github.com/studiointeract/accounts-semantic',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use('ecmascript');
  api.use('underscore');
  api.use('fourseven:scss@3.4.1');
  api.use('std:accounts-ui@1.2.0');

  api.addFiles([], 'client');

  api.mainModule('main.jsx');
});
