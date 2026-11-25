// Site-wide navigation and social links, shared by the header and footer.

export const STORE_URL = 'https://craiggilmore.square.site';

// Brevo form for Ethereal release updates: the <form action="…sibforms.com/serve/…">
// URL from the form's HTML embed code in Brevo (Marketing → Forms). The form must
// use EMAIL and FIRSTNAME fields (both required) and have CAPTCHA off. The Ethereal page submits it
// in the background and then shows /ethereal/thanks/; the redirect set in Brevo is only a no-JavaScript fallback.
// If this is empty the Ethereal page shows an email button instead.
export const BREVO_FORM_URL =
  'https://a4645cb3.sibforms.com/serve/MUIFAHV6a-AvgpcznjEUNPECcaLYfJKyio_Ipc87UjrFym6WWswvrM3FkiRSOGtwbQNCQY0LgoIyOd80Zywd_GxgoAP_Sx0KzYhkXCyxrvx_QpPYPJIEkiY9ALg3I-87gkuE5UE52WgWhiTMWPbjipl6ZXoeCCXuNEPWCMwW5NGuYNYVl5_6NSal2gASg1Ahk0PMigRp80LY9AV5';

export const primaryNav = [
  { label: 'Home', href: '/' },
  {
    label: 'Portfolio',
    href: '/portfolio/', // the full portfolio; the dropdown lists the sections
    children: [
      { label: 'Storyboards', href: '/storyboards/' },
      { label: 'Concept Art', href: '/concept-art/' },
      { label: 'Comics', href: '/comics/' },
    ],
  },
  { label: 'Ethereal: A Tale', href: '/ethereal/' },
  { label: 'About', href: '/about/' },
  { label: 'News', href: '/news/' },
];

export const footerNav = [
  { label: 'Home', href: '/' },
  { label: 'Storyboards', href: '/storyboards/' },
  { label: 'Concept Art', href: '/concept-art/' },
  { label: 'Comics', href: '/comics/' },
  { label: 'Ethereal: A Tale', href: '/ethereal/' },
  { label: 'About', href: '/about/' },
  { label: 'News', href: '/news/' },
];

// URLs taken from the current WordPress site.
export const social = [
  {
    label: 'X (Twitter)',
    href: 'https://x.com/scraiggilmore',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.748-8.84L1.254 2.25H8.08l4.262 5.633 5.902-5.633zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/Craig-Gilmore-Illustration-173708272774205/',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/craiggilmore01/',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
];
