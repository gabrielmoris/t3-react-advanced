# T3 Gallery PRoject

## TODO

- [x] Make it deploy (vercel)
- [x] Scaffold basic ui with mock data
- [x] Tidy up build process
- [x] Set up a database (vercel postgres)
- [x] Attach database to UI
- [x] Add authentication (with clerk)
- [x] Add image upload
- [x] "taint" (server-only)
- [x] Use Next/Image Component
- [x] Error management (with Sentry)
- [x] Routing/image page (parallel route)
- [x] Improve upload button
- [x] ShadUIify (toasts)
- [x] Analytics (posthog)
- [x] Delete button (with server actions)
- [ ] Ratelimiting (upstash)

# Things I learned

- Use `git add -p` to see the changes and select which ones to add
- By default Next caches the website , to force updating the component I use `export const dynamic = "force-dynamic";`
- React Taint is an experimental security feature in React focused on preventing sensitive data—such as secrets, user objects, or tokens—from being unintentionally exposed to the client side when using Server Components (RSCs). It works by "tainting" data or objects, which means marking them as forbidden to cross the server-to-client boundary
- `import 'server-only'` marks your module as only usable on the server and prevents it from being used on the client.
- Parallel routes like @modal creation is a feature from Next.js. Check implementation in `layout.tsx`. https://nextjs.org/docs/app/api-reference/file-conventions/parallel-routes
- Shadui
- Posthog
- [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions), used in `components/full-image-page.tsx` line 36.
- [Ratelimiting with upstash](https://github.com/upstash/ratelimit-js)

# Services Used

- https://docs.uploadthing.com
- https://clerk.com
- https://vercel.com
- https://sentry.io
- https://posthog.com
- https://upstash.com

# Create T3 App

`pnpm create t3-app@latest`

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
