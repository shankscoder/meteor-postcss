Package.describe({
  summary: 'Minifier for Meteor with PostCSS processing - use Autoprefixer and others with ease',
  version: '2.1.0',
  name: 'shankscoder:postcss',
  git: 'https://github.com/shankscoder/meteor-postcss.git'
});

Package.registerBuildPlugin({
  name: 'minifier-postcss',
  use: [
    'ecmascript@0.10.4',
    'minifier-css@1.3.1',
    'tmeasday:check-npm-versions@0.3.2'
  ],
  npmDependencies: {
    'source-map': '0.5.6',
    'app-module-path': '2.2.0'
  },
  sources: [
    'plugin/minify-css.js'
  ]
});

Package.onUse(function (api) {
  api.use('isobuild:minifier-plugin@1.0.0');
});

Package.onTest(function (api) {

});
