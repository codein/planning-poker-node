module.exports = function(grunt) {

  grunt.initConfig({
    // pkg: grunt.file.readJSON('package.json'),
    // concat: {
    //   options: {
    //     separator: ';'
    //   },
    //   dist: {
    //     src: ['src/**/*.js'],
    //     dest: 'dist/<%= pkg.name %>.js'
    //   }
    // },
    // uglify: {
    //   options: {
    //     banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
    //   },
    //   dist: {
    //     files: {
    //       'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
    //     }
    //   }
    // },

    coffee: {
      app: {
        src: ['coffee/*.coffee'],
        dest: 'js/hello',
        options: {
            bare: true
        }
      }
    },
    coffee: {
      // compile: {
      //   files: {
      //     'path/to/result.js': 'path/to/source.coffee', // 1:1 compile
      //     'path/to/another.js': ['path/to/sources/*.coffee', 'path/to/more/*.coffee'] // compile and concat into single file
      //   }
      // },

      glob_to_multiple: {
        expand: true,
        cwd: 'coffee',
        src: ['*.coffee'],
        dest: 'js',
        ext: '.js'
      }
    },
    // qunit: {
    //   files: ['test/**/*.html']
    // },
    // jshint: {
    //   files: ['gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
    //   options: {
    //     // options here to override JSHint defaults
    //     globals: {
    //       jQuery: true,
    //       console: true,
    //       module: true,
    //       document: true
    //     }
    //   }
    // },
    watch: {
      files: ['coffee/*.coffee'],
      tasks: ['coffee']
    }
  });

  // grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-contrib-qunit');
  // grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['coffee']);

};