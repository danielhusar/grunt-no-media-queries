# [grunt](http://gruntjs.com/)-no-media-queries [![Build Status](https://secure.travis-ci.org/danielhusargrunt-no-media-queries.svg?branch=master)](http://travis-ci.org/danielhusar/grunt-no-media-queries)

> Export the css without mediaqueries matching maximum page width.

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-no-media-queries --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-no-media-queries');
```

## The "no_media_queries" task

### Overview
In your project's Gruntfile, add a section named `no_media_queries` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  no_media_queries: {
    custom_options: {
      options: {
        opts: {
          width: '600px'
        },
        rewokOts: {
          compress: true
        }
      },
      files: {
        'tmp/style.css': 'test/fixtures/style.css'
      }
    }
  },
})
```

### Options

#### options.opts
Type: `Object`

Options passed into no_media_queries library.

same as [no-media-queries](https://github.com/danielhusar/no-media-queries#options)

#### options.rewokOts
Type: `Object`

Options passed into rework library.

same as [no-media-queries](https://github.com/danielhusar/no-media-queries#reworkoptions)


## License

MIT © [Daniel Husar](https://github.com/danielhusar)
