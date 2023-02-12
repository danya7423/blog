# A ready-to-use Markdown-based article system

## Get started
- Run ```npm i``` to install modules
- Run the script with the command ```node .```

Done! Your blog is up and running. Open http://localhost:3033 in your browser and make sure

## Create an article
To add an article you need to create 2 files: <name>.md, <name>.config.json in the ```content``` folder. <name> replace it with the desired article name.

In <name>.md you need to put the text of the article in Markdown format (md documentation can be seen by running the script and going to http://localhost:3033/docs)

In the file <name>.config.json you should put the following text:
```json
{
  "title": "<page name>"
}
```
Replace <page name> with the name that will appear in the browser tab name.
