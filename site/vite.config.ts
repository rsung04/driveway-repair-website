
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import fs from 'fs/promises';
  import path from 'path';
  import { locations } from './src/data/locations';
  import { problemPages } from './src/data/problemPages';

  const siteUrl = 'https://sydneydrivewayrepair.com';
  const rootMarker = '<div id="root"></div>';
  const homeFaqs = [
    {
      question: 'Who is this for — and who is it not for?',
      answer: 'For a Sydney homeowner whose drive has cracked, sunk, or collapsed: a trip lip, a dropped slab, a car scraping, an edge that gave way. Same-day make-safe, then a written quote for the lasting repair. Not for someone shopping a decorative new pour, and not for a cheapest-cash patch with no look at the base. If that is you, Call Now 0480 893 502 or Request Callback.',
    },
    {
      question: "What's the catch on same-day?",
      answer: 'Same-day means we attend before 5:00 pm the day you call, or the emergency call-out fee is waived. You still get the on-site assessment and the written plan. We do not publish the fee in dollars on this page. No work starts until you agree.',
    },
    {
      question: 'Why not just get the cheapest cash pour?',
      answer: 'A cheap pour that skips a failed base usually comes back as the same trip lip. We make the drive safe first and give a written quote before work — that is the difference, not a lower day-rate.',
    },
    {
      question: 'How fast can you get here?',
      answer: 'Most emergency call-outs in the Sydney metropolitan area are attended the same day, often within a few hours, depending on demand.',
    },
    {
      question: 'Do you work after hours or weekends?',
      answer: "Yes – that's when a lot of driveway failures happen. We prioritise active safety risks.",
    },
    {
      question: 'Can you just make it safe for now?',
      answer: 'Yes. We can stabilise the area and give you options for full repair when it suits your schedule and budget.',
    },
    {
      question: 'Is this covered by insurance?',
      answer: 'Every policy is different. We can provide photos and documentation to support your claim if needed.',
    },
    {
      question: 'What areas do you service?',
      answer: 'Yes. We service all Sydney metropolitan local government areas, from the Eastern Suburbs and Inner West to the North Shore, Northern Beaches, Western Sydney, and the Sutherland Shire.',
    },
  ];

  const homeRoute = {
    slug: '',
    title: 'Emergency Driveway Repair Sydney | 24/7 Rapid Response',
    description: 'Emergency driveway repair across all Sydney suburbs. 24/7 rapid response for dangerous cracks, collapses & trip hazards. Call 0480 893 502 for immediate assistance.',
    h1: 'Emergency driveway repair for cracked, sunken, or collapsed drives in Sydney',
    intro: 'If the slab has dropped, a lip is catching a foot or bumper, or the edge has given way, we make it safe to use the same day, then quote the lasting repair before work starts. You want the driveway safe before school pickup — not a lecture about concrete. Serving Greater Sydney. Call 0480 893 502 or Request Callback.',
    faqs: homeFaqs,
  };

  const moneyRoutes = [
    homeRoute,
    ...locations
      .filter((location) => location.richContent)
      .map((location) => ({
        slug: location.slug,
        title: location.metaTitle ?? `Emergency Driveway Repair - ${location.name} & Surrounds | 24/7 Rapid Response`,
        description: location.metaDescription ?? `Emergency driveway repair in ${location.name}, ${location.keySuburbs[0]}, ${location.keySuburbs[1]} & surrounds. 24/7 rapid response. Call 0480 893 502 for immediate assistance.`,
        h1: location.h1 ?? `Emergency driveway repair for cracked, sunken, or collapsed drives in ${location.name}`,
        intro: location.richContent?.intro ?? location.metaDescription ?? `Emergency driveway repair in ${location.name}. Call 0480 893 502 or Request Callback.`,
        faqs: [
          ...homeFaqs.map((faq) => {
            if (faq.question === 'How fast can you get here?') {
              return {
                ...faq,
                answer: `Most emergency call-outs in the ${location.name} area are attended the same day, often within a few hours, depending on demand.`,
              };
            }
            if (faq.question === 'What areas do you service?') {
              return {
                question: 'Do you service all of these suburbs?',
                answer: `Yes. We regularly attend call-outs in ${location.keySuburbs.join(', ')}.`,
              };
            }
            return faq;
          }),
          ...(location.richContent?.localFaqs ?? []),
        ],
      })),
    ...problemPages.map(({ slug, h1, metaTitle, description, faqs }) => ({
      slug,
      title: metaTitle,
      description,
      h1,
      intro: description,
      faqs,
    })),
  ];

  if (moneyRoutes.length !== 9) {
    throw new Error(`Expected 9 money routes, found ${moneyRoutes.length}`);
  }

  function escapeHtml(value: string) {
    return value.replace(/[&<>"']/g, (character) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    })[character]);
  }

  function faqJsonLd(faqs: { question: string; answer: string }[]) {
    return JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
  }


  const moneyNav = [
    { href: '/', label: 'Sydney emergency repair' },
    { href: '/driveway-repair-woollahra', label: 'Woollahra' },
    { href: '/driveway-repair-sydney-city', label: 'City of Sydney' },
    { href: '/driveway-repair-north-sydney', label: 'North Sydney' },
    { href: '/driveway-repair-northern-beaches', label: 'Northern Beaches' },
    { href: '/driveway-repair-parramatta', label: 'Parramatta' },
    { href: '/trip-hazard-driveway-repair', label: 'Trip hazard' },
    { href: '/storm-driveway-repair-sydney', label: 'Storm damage' },
    { href: '/collapsed-driveway-sydney', label: 'Collapsed driveway' },
  ];

  function renderFirstByteContent(route: (typeof moneyRoutes)[number]) {
    const nav = moneyNav
      .map((item) => `<a href="${item.href}">${escapeHtml(item.label)}</a>`)
      .join(' · ');
    return `<div id="root">
    <main>
      <h1>${escapeHtml(route.h1)}</h1>
      <p>${escapeHtml(route.intro)}</p>
      <p><a href="tel:0480893502">Call Now 0480 893 502</a></p>
      <p><a href="#contact">Request Callback</a></p>
      <form id="contact" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/thank-you">
        <input type="hidden" name="form-name" value="contact" />
        <p style="display:none"><label>Do not fill this out: <input name="bot-field" /></label></p>
        <p><label>Name <input type="text" name="name" required /></label></p>
        <p><label>Suburb <input type="text" name="suburb" required /></label></p>
        <p><label>Phone <input type="tel" name="phone" required /></label></p>
        <p><label>Urgency
          <select name="urgency">
            <option value="today">Today / emergency</option>
            <option value="this-week">This week</option>
            <option value="planning">Planning ahead</option>
          </select>
        </label></p>
        <p><label>Issue <textarea name="issue" rows="3" required></textarea></label></p>
        <p><button type="submit">Request Callback</button></p>
      </form>
      <nav aria-label="Service areas">${nav}</nav>
    </main>
  </div>`;
  }

  async function writeMoneyRoutePages() {
    const distPath = path.resolve(__dirname, 'dist');
    const templatePath = path.join(distPath, 'index.html');
    const template = await fs.readFile(templatePath, 'utf8');

    if (!template.includes(rootMarker)) {
      throw new Error(`Could not find ${rootMarker} in ${templatePath}`);
    }

    for (const route of moneyRoutes) {
      const routePath = route.slug ? `/${route.slug}` : '/';
      const faqScript = `\n  <script type="application/ld+json">${faqJsonLd(route.faqs)}</script>`;
      const html = template
        .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(route.title)}</title>`)
        .replace(/<meta name="description"[\s\S]*?\/>/, `<meta name="description" content="${escapeHtml(route.description)}" />`)
        .replace(/<link rel="canonical"[\s\S]*?\/>/, `<link rel="canonical" href="${siteUrl}${routePath}" />`)
        .replace('</head>', `${faqScript}\n</head>`)
        .replace(rootMarker, renderFirstByteContent(route));
      const outputDir = route.slug ? path.join(distPath, route.slug) : distPath;

      await fs.mkdir(outputDir, { recursive: true });
      await fs.writeFile(path.join(outputDir, 'index.html'), html);
    }
  }

  function prerenderMoneyRoutes() {
    return {
      name: 'prerender-money-routes',
      apply: 'build' as const,
      closeBundle: writeMoneyRoutePages,
    };
  }

  export default defineConfig({
    plugins: [react(), prerenderMoneyRoutes()],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        'vaul@1.1.2': 'vaul',
        'sonner@2.0.3': 'sonner',
        'recharts@2.15.2': 'recharts',
        'react-resizable-panels@2.1.7': 'react-resizable-panels',
        'react-hook-form@7.55.0': 'react-hook-form',
        'react-day-picker@8.10.1': 'react-day-picker',
        'next-themes@0.4.6': 'next-themes',
        'lucide-react@0.487.0': 'lucide-react',
        'input-otp@1.4.2': 'input-otp',
        'embla-carousel-react@8.6.0': 'embla-carousel-react',
        'cmdk@1.1.1': 'cmdk',
        'class-variance-authority@0.7.1': 'class-variance-authority',
        '@radix-ui/react-tooltip@1.1.8': '@radix-ui/react-tooltip',
        '@radix-ui/react-toggle@1.1.2': '@radix-ui/react-toggle',
        '@radix-ui/react-toggle-group@1.1.2': '@radix-ui/react-toggle-group',
        '@radix-ui/react-tabs@1.1.3': '@radix-ui/react-tabs',
        '@radix-ui/react-switch@1.1.3': '@radix-ui/react-switch',
        '@radix-ui/react-slot@1.1.2': '@radix-ui/react-slot',
        '@radix-ui/react-slider@1.2.3': '@radix-ui/react-slider',
        '@radix-ui/react-separator@1.1.2': '@radix-ui/react-separator',
        '@radix-ui/react-select@2.1.6': '@radix-ui/react-select',
        '@radix-ui/react-scroll-area@1.2.3': '@radix-ui/react-scroll-area',
        '@radix-ui/react-radio-group@1.2.3': '@radix-ui/react-radio-group',
        '@radix-ui/react-progress@1.1.2': '@radix-ui/react-progress',
        '@radix-ui/react-popover@1.1.6': '@radix-ui/react-popover',
        '@radix-ui/react-navigation-menu@1.2.5': '@radix-ui/react-navigation-menu',
        '@radix-ui/react-menubar@1.1.6': '@radix-ui/react-menubar',
        '@radix-ui/react-label@2.1.2': '@radix-ui/react-label',
        '@radix-ui/react-hover-card@1.1.6': '@radix-ui/react-hover-card',
        '@radix-ui/react-dropdown-menu@2.1.6': '@radix-ui/react-dropdown-menu',
        '@radix-ui/react-dialog@1.1.6': '@radix-ui/react-dialog',
        '@radix-ui/react-context-menu@2.2.6': '@radix-ui/react-context-menu',
        '@radix-ui/react-collapsible@1.1.3': '@radix-ui/react-collapsible',
        '@radix-ui/react-checkbox@1.1.4': '@radix-ui/react-checkbox',
        '@radix-ui/react-avatar@1.1.3': '@radix-ui/react-avatar',
        '@radix-ui/react-aspect-ratio@1.1.2': '@radix-ui/react-aspect-ratio',
        '@radix-ui/react-alert-dialog@1.1.6': '@radix-ui/react-alert-dialog',
        '@radix-ui/react-accordion@1.2.3': '@radix-ui/react-accordion',
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'dist',
      rollupOptions: {
        output: {
          manualChunks: {
            'react-router': ['react-router-dom'],
            'icons': ['lucide-react'],
            'radix': [
              '@radix-ui/react-accordion',
              '@radix-ui/react-alert-dialog',
              '@radix-ui/react-checkbox',
              '@radix-ui/react-collapsible',
              '@radix-ui/react-dialog',
              '@radix-ui/react-dropdown-menu',
              '@radix-ui/react-label',
              '@radix-ui/react-navigation-menu',
              '@radix-ui/react-popover',
              '@radix-ui/react-select',
              '@radix-ui/react-separator',
              '@radix-ui/react-slot',
              '@radix-ui/react-tabs',
              '@radix-ui/react-tooltip',
            ],
          },
        },
      },
    },
    server: {
      port: 3000,
      open: true,
    },
  });
