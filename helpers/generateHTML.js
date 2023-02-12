const { readFileSync } = require("fs");
const getPage = require("./getPage");

async function generateHTML(file) {
  const content = await readFileSync(`./content/${file}.md`, {
    encoding: "utf-8",
  });

  const configFile = await readFileSync(`./content/${file}.config.json`, {
    encoding: "utf-8",
  });
  const config = JSON.parse(configFile);

  const html = await getPage(content, config);

  return html;
}

module.exports = generateHTML;
