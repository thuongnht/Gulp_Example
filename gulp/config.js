var source = 'web';
var production = '../../GIT Projects/MySite';

module.exports = {
	optimize: {
		css: {
			src: source + "/css/*.css",
			dest: production + "/css/",
			options: {
				keepSpecialComments: 0
			}
		},
		js: {
			src: source + "/js/**/*.js",
			ignore: "libs/**",
			dest: production + "/js/",
			options: {
				mangle: false
			}
		},
		images: {
			src: source + "/media/**/*.{jpg,jpeg,png,gif}",
			dest: production + "/media/",
			options: {
				optimizationLevel: 3,
				progressive: true,
				interlaced: true
			}
		},
		html: {
			src: source + "/**/*.html",
			dest: production,
			options: {
				collapseWhitespace: true
			}
		},
		php: {
			src: source + "/php/**/*.php",
			dest: production + "/php/",
			options: {}
		},
		delete: {
			css: production + '/css/*.css',
			js: production + '/js/**/*.js',
			images: production + '/media/**/*',
			php: production + "/php/**/*.php"
		}
	}
}