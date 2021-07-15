module.exports = (eleventyConfig) => {
    // Copy the "assets" directory to the compiled "_site" folder.
    eleventyConfig.addPassthroughCopy('assets');

    return {
        dir: {
            input: './',
            output: './_site',
            layouts: './_layouts',
            includes: './_includes',
        },
        templateFormats: [
            'html',
            'liquid',
            'md',
            'markdown',
        ],
    };
};