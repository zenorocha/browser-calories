# Browser Calories

[![Build Status](http://img.shields.io/travis/zenorocha/browser-calories/master.svg?style=flat)](https://travis-ci.org/zenorocha/browser-calories)
![Perf Matters](https://img.shields.io/badge/perf-matters-brightgreen.svg?style=flat)

> The easiest way to measure your performance budget.

[![Browser Calories](https://cloud.githubusercontent.com/assets/398893/15591790/09e9a616-2354-11e6-9c43-4eb3b336cff1.jpg)](https://browserdiet.com/calories/)

## Install

This browser extension available for:

| <a href="https://chrome.google.com/webstore/detail/browser-calories/pdkibgfjegigkoaleelbkdpkgceljfco"><img src="https://cloud.githubusercontent.com/assets/398893/15528951/e9f5dc0a-21fd-11e6-86e7-8a0cad6e7548.png" width="48px" height="48px" alt="Chrome logo"></a> | <a href="https://addons.mozilla.org/en-US/firefox/addon/browser-calories/"><img src="https://cloud.githubusercontent.com/assets/398893/15528952/ea095cc6-21fd-11e6-9aae-d67479edd442.png" width="48px" height="48px" alt="Firefox logo"></a> | <a href="https://addons.opera.com/en/extensions/details/browser-calories"><img src="https://cloud.githubusercontent.com/assets/398893/15528953/ea1ef482-21fd-11e6-9ba2-252aa0bcc1d2.png" width="48px" height="48px" alt="Opera logo"></a> |
|:---:|:---:|:---:|
| [Chrome](https://chrome.google.com/webstore/detail/browser-calories/pdkibgfjegigkoaleelbkdpkgceljfco) | [Firefox](https://addons.mozilla.org/en-US/firefox/addon/browser-calories/) | [Opera](https://addons.opera.com/en/extensions/details/browser-calories) |

## Setup

Install dependencies:

```
npm install
```

Compile scripts and styles:

```
npm start
```

## Testing

###### Chrome

1. Navigate to `chrome://extensions`

2. Click on `Load unpacked extension...`

3. Select the `dist` folder

###### Firefox

1. Navigate to `about:debugging`

2. Click on `Load temporary Add-on`

3. Select the `manifest.json` inside the `dist` folder

###### Opera

1. Navigate to `extensions`

2. Click on `Developer Mode`

3. Click on `Load unpacked extension...`

4. Select the `dist` folder

## Credits

* Illustrations by [Scott Johnson](https://twitter.com/scottjohnson)
* CSS-based Nutrition Facts table by [Chris Coyier](https://twitter.com/chriscoyier)

## License

[MIT License](http://zenorocha.mit-license.org/) © Zeno Rocha
