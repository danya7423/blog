const MarkdownIt = require("markdown-it");
const emoji = require("markdown-it-emoji");
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});
md.use(emoji);

const getPage = async (mdContent, config) => {
  const rendered = md.render(mdContent);
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${config.title}</title>

        <link rel="stylesheet" href="/style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.3/gh-fork-ribbon.min.css">

        <script src="https://cdnjs.cloudflare.com/ajax/libs/markdown-it/13.0.1/markdown-it.min.js" integrity="sha512-SYfDUYPg5xspsG6OOpXU366G8SZsdHOhqk/icdrYJ2E/WKZxPxze7d2HD3AyXpT7U22PZ5y74xRpqZ6A2bJ+kQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    </head>
    <body>
        <article class="markdown-body">
            ${rendered}
        </article>
    </body>
    </html>`;
};

module.exports = getPage;
