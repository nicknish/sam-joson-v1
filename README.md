# samjoson.com

Website built with the Gatsby starter template [gatsby-contentful-gcn](https://github.com/ryanwiemer/gatsby-starter-gcn/).

# Getting Started

## Development

```bash
yarn dev # start dev server
yarn build # build production assets
yarn develop # alias for dev
yarn test # run tests
yarn setup # setup Contentful (should not have to run again)
yarn lint:js # lint js
yarn lint:css # lint styles
yarn check-pretty # run prettier (dry)
yarn format # run prettier
```

## Deployment

### Netlify Deployment From Git

Netlify will automatically deploy when new code is pushed to `master`.

### Netlify Form Notifications

Navigate to Netlify: **Forms** → **Notifications**

## Useful Tips

- If you make edits to your Contentful space while running `gatsby develop` you will need to stop it and rerun the command to see the changes reflected. For example a new post or page will not automatically show up until the website has been rebuilt.
- The template assumes you have at least **one page**, **one post** and **one tag** in Contentful. If you do not the website will fail to build.
- The SEO component assumes you have entered at least one meta description in Contentful for a post and one for a page. If you do not the website will fail to build.
- **DO NOT** store your Contentful access tokens or space ids anywhere in GitHub. Treat them like passwords.
