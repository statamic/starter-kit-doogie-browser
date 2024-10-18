<!-- statamic:hide --><p align="center"><img src="https://statamic.com/assets/branding/Statamic-Logo-Rad.png" width="100" alt="Statamic Logo" /></p>
<h1 align="center">
  Statamic Starter Kit: Doogie Browser
</h1>

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
- Responsive (even that wasn't a thing in the DOS days)
- Built with [TailwindCSS](https://tailwindcss.com)
- :100: Lighthouse score


## Quick Start

### 1. Create a new site

You can create a new site using the [Statamic CLI](https://github.com/statamic/cli):

```
statamic new your-site statamic/starter-kit-doogie-browser
```

Or you can install manually into a fresh [Statamic installation](https://statamic.dev/installation) by running:

```
php please starter-kit:install statamic/starter-kit-doogie-browser --clear-site
```

### 2. Make a new user

The above installers should prompt you to make a user, but you can also run `php please make:user`. You'll want it to be a `super` so you have access to everything.

### 3. Recompile the CSS and JS (optional)

This starter kit comes with precompiled CSS and JS. If you want to modify anything, just recompile it.

```
npm i && npm run dev
```

To compile for production again:

```
npm run build
```

### 4. Do your thing!

If you're using [Laravel Herd](https://herd.laravel.com/) (or similar), your site should be available at `http://your-site.test`. You can access the control panel at `http://your-site.test/cp` and login with your new user. Open up the source code, follow along with the [Statamic docs](https://statamic.dev), and enjoy!

## Contributing

Contributions are always welcome, no matter how large or small. Before contributing, please read the [code of conduct](https://github.com/statamic/cms/wiki/Code-of-Conduct).
