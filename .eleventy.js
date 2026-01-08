module.exports = function(eleventyConfig) {
  // Pass through static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");

  // Watch for changes in CSS
  eleventyConfig.addWatchTarget("src/assets/css/");
  
  // Date formatting filter
  eleventyConfig.addFilter("dateFormat", function(date, format) {
    const d = new Date(date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return d.toLocaleDateString('en-US', options);
  });
  
  // Short date filter
  eleventyConfig.addFilter("shortDate", function(date) {
    const d = new Date(date);
    return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  });
  
  // Collection for meeting minutes posts
  eleventyConfig.addCollection("minutes", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md").reverse();
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    pathPrefix: "/mcarc-website/",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
