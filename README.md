<p align="center"><img src="https://statamic.com/assets/branding/Statamic-Logo-Rad.png" width="100" alt="Statamic Logo" /></p>
<h1 align="center">
  Statamic Starter Kit: Doogie Browser
</h1>

![Statamic 3.0+](https://img.shields.io/badge/Statamic-3.0+-FF269E?style=for-the-badge&link=https://statamic.com)

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

## Screenshot

![Screenshot](https://github.com/statamic/statamic-starter-doogie-browser/raw/master/screenshot.png)

## Video Tour

Watch the [Doogie Browser video tour](https://www.youtube.com/watch?v=-cLzCWu-DeE) to see what's going on under the hood.

## Quick Start

**1. Create a new site** cloning the repo and removing the origin repo.

```
git clone git@github.com:statamic/starter-kit-doogie-browser.git diary
cd diary
rm -rf .git
composer install
cp .env.example .env && php artisan key:generate
```

**2. Make a new user** – you'll want it to be a `super` so you have access to everything.

```
php please make:user
```

**3. Recompile the CSS** (optional)

The [TailwindCSS](https://tailwindcss.com/) included in this kit is compiled with [PurgeCSS](https://purgecss.com/) to reduce filesize on any unused classes and selectors. If you want to modify anything, just recompile it.

```
npm i && npm run dev
```

To compile for production again:
```
npm run production
```

**4. Do your thing!**

If you're using [Laravel Valet](https://laravel.com/docs/valet) (or similar), your site should be available at `http://diary.test`. You can access the control panel at `http://diary.test/cp` and login with your new user. Open up the source code, follow along with the [Statamic 3 docs](https://statamic.dev), and enjoy!

## Contributing

Contributions are always welcome, no matter how large or small. Before contributing, please read the [code of conduct](https://github.com/statamic/cms/wiki/Code-of-Conduct).
