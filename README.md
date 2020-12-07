# carbon-node-api

A simple node-puppeteer API to get a carbon.sh code image.

![Made with love](https://img.shields.io/badge/made%20with%20♥️%20-red)
![Made with node.js](https://img.shields.io/static/v1?label=runs+on&color=green&message=node.js&logo=node-dot-js)
| Param | Type   | Default   | Description                 |
|-------|--------|-----------|-----------------------------|
| code (required) | string |       | Code used in the screenshot |
| theme | string | Hopscotch | Visual code theme           |
|       |        |           |                             |

## GET `/`

Params are url-encoded:

`
https://carbon-node-api.herokuapp.com/?code=hello%20world&theme=Monakai
`

## Response

![API response](response.png)

Deploy your own to Heroku in one-click:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/cyberboysumanjay/Carbon-API/tree/master)

---

Inspiration from Sumanjay's Python version: https://github.com/cyberboysumanjay/Carbon-API