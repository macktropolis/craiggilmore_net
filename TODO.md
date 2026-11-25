# To Do

Open work for the Craig Gilmore site. See [CURRENT-STATE.md](CURRENT-STATE.md) for how the project fits together.

## Launch

- [ ] **Point the domain at Cloudflare.** Move www.craiggilmore.net from WordPress to the Worker. Spot-check a few old WordPress URLs afterwards to confirm the redirects in `public/_redirects` work.

## Content from Craig

- [ ] **Test the Brevo signup form.** The form URL is in `BREVO_FORM_URL` in `src/data/site.ts`.
  - The old WordPress page used Brevo's WordPress plugin form, which stops working with WordPress. The new form should add to the same Brevo list so existing Ethereal subscribers stay together.
  - Check in Brevo that the form has EMAIL and FIRSTNAME fields, CAPTCHA turned off, double confirmation turned on, and a redirect to `https://www.craiggilmore.net/ethereal/thanks/`. The redirect only matters for visitors without JavaScript: the Ethereal page submits the form in the background and shows the thank-you page itself.
  - After the domain move, test one real signup: it should land on the thank-you page, send a confirmation email, and the contact should appear in Brevo.
  - A real signup on the test domain passed on 2026-11-24: it reached Brevo and landed on the thank-you page.
- [ ] **Sharper Thor image.** The first hero slide (`public/images/home/hero-thor.webp`) is only 658 px wide and looks soft on wide screens. Swap in a larger file if Craig has one, or start the slideshow on a sharper piece.
- [ ] **Studio photo of Craig.** The homepage and About photo (`public/images/home/craig-portrait.webp`) is a casual selfie shown in black and white. A photo of Craig at work would look more professional.

## Old WordPress site (security)

Make no changes to the live site without asking.

- [ ] Check wp-admin for hidden admin accounts. The REST API only lists users who have published posts.
- [ ] Run a Wordfence scan for backdoors.
- [ ] Check Google Search Console for spam pages that are still indexed and for security warnings.

## Done

- [x] Rebuild the site in Astro from the WordPress content: 68 projects, 7 news posts and the uploads.
- [x] Add a favicon, touch icons and a web manifest from Craig's logo.
- [x] Add a mobile menu, a 404 page, the Cloudflare `wrangler.jsonc`, and redirects from the old URLs.
- [x] Polish the design: Anton headings, hero slideshow, floating header, larger logo, artwork banners, thumbnails, lightbox and accessibility.
- [x] Connect the Ethereal signup form to Brevo.
- [x] Restore 12 storyboard images that were lost to file-name case clashes.
- [x] Confirm the Cloudflare setup (2026-11-24): the `craig-gilmore-v2` Worker builds from `main` of `macktropolis/craiggilmore_net`, every recent `main` push has a matching deploy, and the test domain serves the latest commit.
