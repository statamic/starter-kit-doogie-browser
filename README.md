<!-- statamic:hide --><p align="center"><img src="https://statamic.com/assets/branding/Statamic-Logo-Rad.png" width="100" alt="Statamic Logo" /></p>
<h1 align="center">
  Statamic Starter Kit: Doogie Browser
</h1>

![Statamic 3.2+](https://img.shields.io/badge/Statamic-3.2+-FF269E?style=for-the-badge&link=https://statamic.com)

> View on the [Statamic Marketplace](https://statamic.com/starter-kits/statamic/doogie-browser)!
<!-- /statamic:hide -->

## Features
- Articles blogging collection with homepage listing
- Markdown focused writing experience
- Keyboard shortcuts for navigation (left/right for previous/next entry)
- Customizable link/toolbar with keyboard shortcuts
- Old school Doogie Howser/IBM word processor design
- Automatic downsampling of all images for that cutting-edge VGA feel
- "Typography" using [IBM VGA8](https://int10h.org/oldschool-pc-fonts/fontlist/#ibmvgamcga)
- Responsive
- Built with [TailwindCSS](https://tailwindcss.com)
- [Vue.js](https://github.com/vuejs/vue) for keyboard navigation
- [PurgeCSS](https://purgecss.com/) for that tiny `4kb` css file size
- :100: Lighthouse score


## Quick Start

### Install as a New Site
You can spin up a new install of Statamic along with this Starter Kit all in one command by using the [Statamic CLI Tool](https://github.com/statamic/cli)

```
statamic new mysite statamic/starter-kit-doogie-browser
```

Follow the prompts and you'll be up and running shortly.

### Install into an existing site
You can alternatively install Starter Kits into an existing Statamic 3.2+ site by running the following command while inside that install's root directory:

```
php please starter-kit:install statamic/starter-kit-doogie-browser
```


### Customizing (optional)

The [TailwindCSS](https://tailwindcss.com/) included in this kit is compiled with [PurgeCSS](https://purgecss.com/) to reduce filesize on any unused classes and selectors. If you want to modify anything you'll need to recompile it.

```
npm i && npm run dev
```

To compile for production again:

```
npm run production
```

## Contributing

Contributions are always welcome, no matter how large or small. Before contributing, please read the [code of conduct](https://github.com/statamic/cms/wiki/Code-of-Conduct).
