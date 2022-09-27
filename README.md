This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000/respadon-website/](http://localhost:3000/respadon-website/) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## About the **base path**

If at some point the site's base path (here `/respadon-website`) needs to be updated (for instance if the site is deployed on `https://respadon.com/` or whatever), the base path needs to be updated in multiple parts of the code:

1. This very `README.md`
2. In `next.config.js`, for both the `"basePath"` and `"assetPrefix"` entries
3. In `styles/_variables.scss`, in the `$BASE_PATH` variable declaration
