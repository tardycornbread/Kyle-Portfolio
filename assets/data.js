/* ============================================================
   data.js — THE SINGLE SOURCE OF TRUTH
   This is the only file you normally edit. Everything on the site
   (home page + every case study) is generated from window.SITE.

   ADD A PROJECT (2 steps):
     1. Append an object to SITE.projects below. Card fields drive the
        home grid; an optional `caseStudy` adds a full write-up.
     2. Copy projects/neta-ai.html to projects/<slug>.html and
        change the single data-slug="<slug>" attribute.
   ============================================================ */
window.SITE = {

  profile: {
    name: 'Kyle Hao',
    role: 'Product Designer',
    pageTitle: 'Kyle Hao — Product Designer',
    description: 'Kyle Hao is a UI/UX and digital product designer based in New York.',
    location: 'New York',
    year: '2026',
    resumeUrl: '/assets/Kyle-Hao-Resume.pdf'
  },

  // Used by the home footer AND every case-study footer (single source).
  social: [
    { label: 'Email', url: 'mailto:azykh21@pm.me' }
    // LinkedIn / GitHub / X removed for now — add back as { label, url } entries when ready.
  ],

  // Home-page sections.
  home: {
    hero: {
      pre: 'Kyle Hao is a UI/UX and digital product designer based in ',
      em: 'New York',          // rendered in serif italic
      post: '.'
    },
    // newest first — [year, company, role]
    // Hidden for now — move these entries back into `experience` to show the hero timeline again:
    //   ['2026', 'Independent Practice', 'Design Engineer'],
    //   ['2025', 'Company A', 'Software Engineering Intern'],
    //   ['2025', 'Company B', 'Product Design Intern'],
    //   ['2024', 'Company C', 'Software Engineering Intern'],
    //   ['2023', 'Company D', 'Product Design + Engineering Intern']
    experience: [],
    about: {
      pre: 'I started in editorial design and now build dense, complicated products — ',
      soft: 'dashboards, compliance tools, interfaces that show users everything and help users decide nothing. I work end to end and build what I design (HTML/CSS, AI tools). Based in New York, open to product, web, and interaction roles.',
      info: [
        ['Based in', 'New York'],
        ['Focus', 'Product · UI/UX · Front-end'],
        ['Tools', 'Figma · InDesign · HTML/CSS · AI tooling'],
        ['Status', 'Open to work']
      ]
    },
    contact: {
      pre: 'Think of all the cool stuff we could ',
      em: 'build together',     // links to social[0] (email)
      post: '.'
    }
  },

  /* ---- FUN ---------------------------------------------------------------
     Side projects / experiments shown on /fun.html. Cards link OUT (external).
     Item fields:  title, sub (context/award), cap (one-liner), href, gradient,
                   cover? (thumbnail image instead of gradient), darkTitle?
     Replace the placeholders below with your real projects.
     ------------------------------------------------------------------------ */
  fun: {
    hero: { pre: 'Side quests — ', em: 'things I build for the joy of it', post: '.' },
    intro: 'Hackathons, experiments, and small tools — less polished, more play.',
    items: [
      { title: 'Project One', sub: 'Hackathon · 1st place', cap: 'One line on what it is and what you built.', href: '#',
        gradient: 'linear-gradient(135deg, #2f6bff 0%, #1e49c8 100%)' },
      { title: 'Project Two', sub: 'Personal project', cap: 'One line on what it is and what you built.', href: '#',
        gradient: 'linear-gradient(135deg, #1f7a4d 0%, #0e4a2d 100%)' },
      { title: 'Project Three', sub: 'Experiment', cap: 'One line on what it is and what you built.', href: '#',
        gradient: 'linear-gradient(135deg, #f6c177 0%, #e98a8a 55%, #d36f9f 100%)' }
    ]
  },

  /* ---- PROJECTS ----------------------------------------------------------
     Card fields:  slug, title, caption, status, year, gradient, darkTitle?, href
     Optional caseStudy: { eyebrowName?, tagline, heroLabel, meta[], blocks[] }
       eyebrowName  — small uppercase label (defaults to title if omitted)
       blocks[] types: heading | lede | text | image | images | grid2 | list | flows | callout
     Optional next: { slug }  — the "Next project" link target
     ------------------------------------------------------------------------ */
  projects: [
    {
      slug: 'neta-ai',
      title: 'Neta AI',
      caption: 'From regulatory data to clear next actions',
      status: 'Shipped',
      year: '2026',
      gradient: 'linear-gradient(135deg, #1f7a4d 0%, #155f3b 58%, #0e4a2d 100%)',
      cover: '/assets/img/neta/hero.jpg',
      href: '/projects/neta-ai.html',
      caseStudy: {
        eyebrowName: 'Neta AI SKU Page Design',
        tagline: 'From rule logic to triage workflow.',
        heroImage: '/assets/img/neta/hero.jpg',
        heroLabel: 'Neta.ai',
        meta: [
          ['Focus', 'Information Architecture · Enterprise UX · Data-Dense Interface · Compliance Workflow'],
          ['Role', 'Product Designer — detail-page restructure, status-bar system'],
          ['Team', '3 Designers · 1 Engineer · 1 Start-up Founder'],
          ['Timeline', 'March – May 2026']
        ],
        blocks: [
          { type: 'lede', text: 'Reframing Neta AI’s SKU compliance page around how decisions get made — sorted by severity, summarized in user language, structured for action.' },
          { type: 'text', text: 'Three patterns shipped to production within a week of review.' },
          { type: 'image', src: '/assets/img/neta/detail-final.png', label: 'Redesigned SKU Detail Page', caption: 'Redesigned SKU Detail Page.' },

          { type: 'heading', text: 'What Neta Does' },
          { type: 'lede', text: 'An AI-powered packaging-compliance platform.' },
          { type: 'text', text: 'An AI-powered packaging compliance platform used by enterprise consumer brands — including Fortune 50 pilots — to manage regulations like EPR, PFAS, and recyclability rules across thousands of SKUs and jurisdictions. The product is actively used by enterprise teams and supports real compliance workflows.' },
          { type: 'text', text: 'The SKU page was built to expose the full regulatory model — accurate, but difficult to act on.' },
          { type: 'callout', kind: 'main', k: 'The question', text: 'How might the SKU-level compliance experience help users instantly understand status and required action across hundreds or thousands of products?' },
          { type: 'text', text: 'Click-reduction was identified as the central problem in the team’s first design review. The product surfaced every regulation, jurisdiction, and provision a SKU needed — but reaching the answer that mattered required navigating multiple summary tables and detail sections. The diagnosis that follows is the structural read of why that happened.' },

          { type: 'heading', text: 'Problem Diagnosis' },
          { type: 'lede', text: 'The page exposes accurate data through a structure that doesn’t match how users make decisions.' },
          { type: 'image', src: '/assets/img/neta/sku-main.png', label: 'SKU Main Page', caption: 'SKU main page — the list view across all products.' },
          { type: 'image', src: '/assets/img/neta/sku-detail.png', label: 'SKU Detail Page', caption: 'SKU detail page — a single product’s compliance record.' },
          { type: 'list', items: [
            ['Filter bar buries critical data', 'On the main page, the filter bar pushes critical SKU info below the fold.'],
            ['Urgency reads as a neutral number', 'Urgency is buried in neutral data — “4/10” instead of “this is a problem.”'],
            ['Metadata before risk', 'On the detail page, metadata appears before any signal of risk or required action.'],
            ['Rule logic, not interpretation', 'Users get raw rule logic, not interpretation.'],
            ['Fragmented across views', 'A single compliance issue requires navigating between summary and detail.']
          ]},
          { type: 'image', src: '/assets/img/neta/user-flow.png', contain: true, label: 'Current User Flow', caption: 'Current user flow — three phases of unsupported work.' },
          { type: 'text', text: 'The current path: user opens the SKU Compliance page → reviews high-level SKU status cards → scans the SKU table → finds a SKU with flagged jurisdictions → reads a flagged-jurisdiction count like 1/4 or 4/10 → clicks “View Details” → lands on the SKU Detail page → reviews SKU metadata → checks the Compliance-by-Jurisdiction summary → expands a jurisdiction → reads individual provisions/requirements → manually determines which issue matters most → decides what action should happen next.' },
          { type: 'list', items: [
            ['Surface scan', 'User tries to identify risk — the system shows counts without meaning.'],
            ['Drill down', 'User searches for an explanation — the system shows logic without interpretation.'],
            ['Cognitive load', 'User completes the task manually — the system offloads decision-making.']
          ]},

          { type: 'heading', text: 'The Reframe' },
          { type: 'lede', text: 'Reorganized around how decisions get made.' },
          { type: 'flows', items: [
            ['How the system is organized', 'SKU → Jurisdictions → Regulations → Provisions.'],
            ['How the user thinks', 'What is broken? → How urgent is it? → Which jurisdiction or regulation causes it? → What should I do next?']
          ]},
          { type: 'text', text: 'The design problem became how to make the page answer the user’s questions in their order, not the system’s.' },

          { type: 'heading', text: 'Exploration' },
          { type: 'text', text: 'We explored multiple directions as a group — Christina, Jojo, and me. Sketches across status-grouped IA, jurisdiction grouping, a status-forward color-bar approach, and a trend-map view. What follows is the range we considered.' },
          { type: 'image', src: ['/assets/img/neta/exploration-1.png', '/assets/img/neta/exploration-2.png'], label: 'Exploration Sketches', caption: 'Exploration sketches with group members.' },
          { type: 'text', text: 'The team aligned on the status-forward color-bar approach for the list page. The trend map was postponed pending a review workflow another team was developing. The detail-page direction shifted toward full restructuring, where the cognitive load was deepest.' },

          { type: 'heading', text: 'Scope' },
          { type: 'lede', text: 'Scope shaped what each surface needed.' },
          { type: 'list', items: [
            ['On the list page — surgical', 'Minimal change to preserve user familiarity: table redesign, column consolidation (SKU code and name merged), and a color-coded status bar to surface urgency.'],
            ['On the detail page — full restructure', 'Full restructure to align with the user’s question order. Grace called this the team’s biggest ask.']
          ]},

          { type: 'heading', text: 'Final Direction' },
          { type: 'lede', text: 'SKU list page — surgical.' },
          { type: 'image', stack: true, src: ['/assets/img/neta/list-1.png', '/assets/img/neta/list-2.png'], label: 'SKU List Page — redesigned' },
          { type: 'list', items: [
            ['Counts elevated above the fold', 'Filter bar compressed; status counts elevated above the table. Critical SKU data stays above the fold.'],
            ['Severity color-coding', 'Status counts color-coded by severity — Compliant green, Needs Attention amber, Non-Compliant red. Urgency is visible at the top before any scrolling.'],
            ['Proportional jurisdiction bar', 'A Flagged-Jurisdictions bar replaces the “4/10” numeric format with a proportional, color-coded density of urgency. The Status column uses named states with colored dots — what was a neutral number is now a state.']
          ]},
          { type: 'lede', text: 'SKU detail page — full restructure.' },
          { type: 'image', src: '/assets/img/neta/detail-overview.png', label: 'SKU Detail Page — full restructure', caption: 'The restructured SKU detail page.' },
          { type: 'image', src: '/assets/img/neta/frame-1.png', label: 'Detail — Frame 1: Risk before metadata', caption: 'Frame 1 — Risk before metadata.' },
          { type: 'flows', items: [
            ['Header', 'SKU header carries critical metadata only — name, code, status, component count, supplier, last evaluation. Redundant fields are removed.'],
            ['Status overview', 'Color-coded jurisdiction cards using the same proportion bar as the list page. Out-of-scope jurisdictions are surfaced rather than hidden — users know what they’re not seeing.'],
            ['SKU details, collapsible', 'Detailed metadata (brand owner, volume, claims, inheritance) sits below status in an expandable panel. Users see compliance state first; details are one click away — dense metadata no longer arrives before any signal of risk.']
          ]},
          { type: 'image', src: '/assets/img/neta/frame-2.png', label: 'Detail — Frame 2: Severity-sorted jurisdictions', caption: 'Frame 2 — Severity-sorted jurisdictions.' },
          { type: 'flows', items: [
            ['Sorting by severity', 'The list is sorted by severity by default — non-compliant first, then needs attention, then compliant. Users see what requires action before what doesn’t.'],
            ['Inline expansion', 'Jurisdictions expand inline, replacing the original page’s separate “Compliance Details” section. One row, one disclosure — no more jumping between summary and detail.'],
            ['Finding in user-language', 'A plain-language summary of what’s wrong appears at the top of each non-compliant jurisdiction. The reframe applied at the jurisdiction level — rule logic restated as user explanation, with the deadline made explicit.']
          ]},
          { type: 'image', src: '/assets/img/neta/frame-3.png', label: 'Detail — Frame 3: Plain-language regulation drawer', caption: 'Frame 3 — Plain-language regulation drawer.' },
          { type: 'flows', items: [
            ['Sentence-form explanation', 'Regulations appear as plain-language explanation: “The regulation requires…” then “This SKU’s record shows…”. The original UI’s redundant FAIL badges, expected/actual lists, and bold titles — all saying the same thing in three formats — are removed.'],
            ['Recommended next actions', 'For non-compliant regulations, the drawer surfaces AI-generated next steps with owners, due dates, and effort estimates. The page no longer stops at “you have a problem” — it offers concrete remediation paths.'],
            ['Action handoff', 'Three explicit handoffs: draft a remediation plan, assign to a teammate, or surface the AI’s reasoning. Users act on the finding without leaving the regulation context.']
          ]},
          { type: 'video', src: 'https://player.vimeo.com/video/1189614755?title=0&byline=0&portrait=0&dnt=1', label: 'Interaction walkthrough', caption: 'Prototype walkthrough of the redesigned SKU Compliance flow.' },

          { type: 'heading', text: 'What the Team Responded To' },
          { type: 'text', text: 'The team reviewed the redesigned list view and detail page on April 13. Grace approved the status-forward color-bar direction, and the row-level disclosure pattern and column consolidation were accepted into implementation. The trend-map exploration was set aside, pending a review workflow another team was developing.' },
          { type: 'text', text: 'The compliance-page redesign was what Grace called the team’s biggest ask — the most challenging piece of work in the project. The redesign shown here is mine; other directions were explored, but none were carried forward. What landed was the reframe this case study is built on: the list page reorganized so urgency reads before detail, and the detail page restructured around the user’s question order rather than the data model. Both shipped to production.' },
          { type: 'callout', kind: 'alt', k: 'Strategic note', text: 'These decisions tightened the work toward what the team actually needed to ship — not toward what would make for a more visually ambitious case study.' },

          { type: 'heading', text: 'Reflection' },
          { type: 'lede', text: 'This project pushed me to design for information density rather than against it.' },
          { type: 'text', text: 'Sustainability and compliance leads triage hundreds of SKUs across dozens of jurisdictions; the answer wasn’t fewer fields, it was the same data organized around the user’s question order. The hardest work was the reorganization itself — moving from a data-model view (SKUs → components → jurisdictions → regulations) to a workflow-driven triage tool. Questioning a structure that already works is harder than building one from scratch.' }
        ]
      },
      next: { slug: 'bridge-lab' }
    },

    {
      slug: 'bridge-lab',
      title: 'Bridge Lab',
      caption: 'Connecting students with start-ups through project-based work',
      status: 'Concept',
      year: '2025',
      gradient: 'linear-gradient(135deg, #2f6bff 0%, #1e49c8 60%, #16357e 100%)',
      cover: '/assets/img/bridge/hero.png',
      href: '/projects/bridge-lab.html',
      caseStudy: {
        eyebrowName: 'Bridge Lab',
        tagline: 'Bridging students and start-ups through project-based collaboration.',
        heroImage: '/assets/img/bridge/hero.png',
        heroLabel: 'Bridge Lab',
        meta: [
          ['Role', 'Product Designer — end-to-end UX/UI'],
          ['Timeline', 'Fall 2025'],
          ['Context', 'Digital Product Design · Academic'],
          ['Skills', 'UX Research, IA, Branding, UI']
        ],
        blocks: [
          { type: 'lede', text: 'A platform that connects students with innovative start-ups through project-based collaborations.' },
          { type: 'text', text: 'Students gain hands-on experience and a portfolio; start-ups access fresh ideas and dynamic talent to drive their growth.' },

          { type: 'heading', text: 'Problem Statement' },
          { type: 'lede', text: 'Students lack real-world projects; start-ups miss out on fresh talent.' },
          { type: 'text', text: 'Students often lack access to meaningful, real-world projects that allow them to apply their academic knowledge in a professional setting, while start-ups miss out on innovative ideas and perspectives.' },
          { type: 'callout', kind: 'main', k: 'How might we', text: '…design a platform that bridges start-up companies with students through project-based collaborations — providing students with hands-on, practical experience while simultaneously driving growth and innovation within start-ups?' },

          { type: 'heading', text: 'Value Proposition' },
          { type: 'lede', text: 'Our platform connects students with innovative start-ups through project-based collaborations.' },
          { type: 'text', text: 'Students gain invaluable hands-on experience and growth, while start-ups access fresh ideas and dynamic talent to drive their growth.' },

          { type: 'heading', text: 'Key Features' },
          { type: 'image', src: '/assets/img/bridge/key-features.png', label: 'Key features overview', caption: 'Four pillars of the platform.' },
          { type: 'list', items: [
            ['Project Listings & Smart Matching', 'Detailed listings — titles, descriptions, start-up info, required skills, academic backgrounds, scopes, timelines, incentives, and clear application processes. Smart Matching uses algorithms and machine learning to align student profiles (skills, interests, academic pursuits, availability) with project requirements, improving match accuracy and relevance.'],
            ['Project Management & Tracking', 'Tools and frameworks to organize and monitor the progress of collaborative projects, so both students and start-ups manage tasks efficiently and stay aligned with project goals.'],
            ['Community Building & Mentorship', 'Join or create groups based on shared interests, majors, or project types, with member-generated content. Predefined mentorship programs pair mentors and mentees by interests, career goals, skills, and availability.'],
            ['Incentives & Rewards', 'Digital certificates and badges for skills and completed projects, verified experiences and endorsements for resumes and LinkedIn, and priority access to job listings or hiring by collaborating start-ups.']
          ]},

          { type: 'heading', text: 'Competitors' },
          { type: 'flows', items: [
            ['Direct', 'Wellfound, MentorCruise, and Handshake — startup hiring, mentorship marketplaces, and campus recruiting.'],
            ['Indirect', 'LinkedIn and Freelancer — professional networking and freelance gig marketplaces.']
          ]},
          { type: 'image', src: '/assets/img/bridge/competitors.png', label: 'Competitive landscape', caption: 'Direct and indirect competitors.' },

          { type: 'heading', text: 'Personas' },
          { type: 'image', src: ['/assets/img/bridge/persona-echo.png', '/assets/img/bridge/persona-mark.png'], label: 'Personas', caption: 'Echo Zhou (student) and Mark Lee (start-up founder).' },
          { type: 'list', items: [
            ['Echo Zhou — 21, Design & Technology student', 'Wants real-world projects to apply her technical knowledge, build a strong portfolio, and learn new technologies. Worries that projects may not align with her career goals, that project work could overextend her alongside coursework, and about insufficient mentorship and support.'],
            ['Mark Lee — 27, Start-up Founder', 'Needs skilled students (AI, blockchain, mobile, data security) and flexible, project-based collaborations that scale without full-time commitments. Concerned about identifying the right skills, aligning timelines with academic schedules, and student commitment.']
          ]},

          { type: 'heading', text: 'Empathy Maps' },
          { type: 'image', stack: true, src: ['/assets/img/bridge/empathy-echo.png', '/assets/img/bridge/empathy-mark.png'], label: 'Empathy maps', caption: 'Says / Thinks / Does / Feels for Echo and Mark.' },

          { type: 'heading', text: 'User Journey' },
          { type: 'lede', text: 'Echo’s journey from awareness to project completion.' },
          { type: 'image', src: '/assets/img/bridge/user-journey.png', contain: true, label: 'User journey map' },
          { type: 'list', items: [
            ['Awareness', 'Hears about the platform through a university career fair or social media. Curious, hopeful — reached via targeted ads on student channels.'],
            ['Consideration', 'Explores how it works, the benefits, and project types through FAQs, feature explanations, and user reviews. Cautiously optimistic.'],
            ['Browsing & Discovery', 'Filters projects by industry, skills, duration, and location; AI suggests matches from her profile and past interactions. Excited and engaged.'],
            ['Application & Matching', 'Applies through simple forms; Smart Matching suggests aligned projects; a dashboard tracks application status. Hopeful and slightly anxious.'],
            ['Collaboration & Project Management', 'Accepted into a project; uses task assignments, timeline tracking, and milestone setting to collaborate. Motivated and productive.'],
            ['Completion & Feedback', 'Submits final deliverables and receives feedback; earns certificates and badges plus a summary of outcomes and contributions. Accomplished and reflective.']
          ]},

          { type: 'heading', text: 'Business Model' },
          { type: 'image', src: '/assets/img/bridge/business-model.png', contain: true, label: 'Business Model Canvas' },
          { type: 'list', items: [
            ['Key partners', 'Academic institutions, start-up incubators and accelerators, industry experts for mentorship, technology providers, and government / non-profit organizations.'],
            ['Key activities', 'Facilitate collaboration between students and start-ups, remove friction from project processes, and optimize the smart-matching algorithms.'],
            ['Revenue streams', 'Commission on successful projects, subscription fees for premium features (priority matching, dedicated support), and advertising / promoted listings.']
          ]},

          { type: 'heading', text: 'Prioritization' },
          { type: 'lede', text: 'Mapping features by value and effort.' },
          { type: 'image', src: '/assets/img/bridge/prioritization.png', contain: true, label: 'Value vs. effort matrix' },
          { type: 'list', items: [
            ['High value, low effort', 'Smart Matching Algorithm, Basic Project Listings, and Profile Customization — ship first.'],
            ['High value, high effort', 'Integrated Project Management Tools and Mentorship Programs & Networking.'],
            ['Lower priority', 'Basic Communication Tools, Gamification (e.g. leaderboards), and full social-network functionality.']
          ]},

          { type: 'heading', text: 'Information Architecture' },
          { type: 'image', src: '/assets/img/bridge/ia-sitemap.png', contain: true, label: 'Site map', caption: 'Home → Projects, Community, Incentives & Rewards, and Profile — with Smart Matching, Mentorship & Learning, and the project application flow.' },

          { type: 'heading', text: 'Wireframes' },
          { type: 'image', src: '/assets/img/bridge/wireframes.png', contain: true, label: 'Mid-fidelity wireframes', caption: 'Home, project listing, project detail, application flow, community, program, and dashboard.' },

          { type: 'heading', text: 'User Testing' },
          { type: 'lede', text: 'Five participants tested the core flows to refine BridgeLab’s key features.' },
          { type: 'text', text: 'Objectives: understand attitudes and pain points around project collaboration and mentorship; assess Project Application, Mentorship Programs, Smart Matching, and Community Groups; and identify opportunities to improve project initiation, mentorship access, and community building.' },
          { type: 'image', src: '/assets/img/bridge/testing-synthesis.png', label: 'Synthesis, goal & participants', caption: 'User testing & synthesis, the goal, and the five participants — Jojo, Eric, Echo, An, and Mandy.' },
          { type: 'image', src: '/assets/img/bridge/testing-results.png', label: 'Key results', caption: 'Key results — 85% found the application clear, 80% valued mentorship, 70% raised community-group concerns.' },
          { type: 'image', src: '/assets/img/bridge/testing-insights.png', label: 'User research insights', caption: 'Positives and improvements across Project Application, Mentorship, Smart Matching, and Community Groups.' },
          { type: 'image', src: '/assets/img/bridge/testing-learnings.png', label: 'User feedback & revised design goals', caption: 'Three key learnings — enhance visuals, deepen mentor profiles, and personalize large-group notifications.' },

          { type: 'heading', text: 'Brand Strategy' },
          { type: 'flows', items: [
            ['Vision', 'Empower the next generation of talent by bridging academic learning with real-world experience — a future where students and start-ups collaboratively drive innovation and growth.'],
            ['Mission', 'Connect students with meaningful, project-based opportunities in start-ups — a platform for practical experience, skill-building, and mentorship, while start-ups benefit from fresh perspectives and diverse talent.']
          ]},
          { type: 'list', items: [
            ['Brand personality', 'Inspiring, Dynamic, Supportive, Empowering, and Inclusive.'],
            ['Design principles', 'Clarity and simplicity, human-centered, professional yet accessible, and encouraging and motivational.']
          ]},
          { type: 'image', src: '/assets/img/bridge/brand.png', contain: true, label: 'Brand system', caption: 'Logo, color palette, and type — Nimbus Sans + Futura.' },

          { type: 'heading', text: 'Final Designs' },
          { type: 'image', src: '/assets/img/bridge/final-project-listing.png', label: 'Project listing', caption: 'Browse and filter projects, powered by Smart Matching.' },
          { type: 'image', src: '/assets/img/bridge/final-dashboard.png', label: 'Project dashboard', caption: 'Task tracking across To Do, In Progress, and Completed, with a project overview.' }
        ]
      },
      next: { slug: 'lifeband' }
    },

    {
      slug: 'lifeband',
      title: 'LifeBand',
      caption: 'An AI wearable designed to make itself unnecessary',
      status: 'Hackathon',
      year: '2026',
      gradient: 'linear-gradient(140deg, #141414 0%, #2b1d14 55%, #d97706 115%)',
      cover: '/assets/img/lifeband/cover.png',
      href: '/projects/lifeband.html',
      caseStudy: {
        eyebrowName: 'LifeBand',
        tagline: 'The only AI that succeeds by teaching you not to need it.',
        heroImage: '/assets/img/lifeband/hero.png',
        heroLabel: 'LifeBand',
        meta: [
          ['Role', 'Product Design & Prototyping'],
          ['Team', 'Liftlog — with Joyce Jiang & Ifetola Ogunde'],
          ['Timeline', 'Feb 27–28, 2026 · 24 hours'],
          ['Context', 'AI Startup Design Hackathon · Parsons × U. of Arizona']
        ],
        blocks: [
          { type: 'lede', text: 'The brief: design a product system for 2035 — not an app.' },
          { type: 'text', text: 'I was skeptical — 2035 felt far away and vague — but it was a chance to think bigger than I normally would in a class project. This was the 2026 AI Startup Design Hackathon at Parsons, hosted by Designpreneurs Hackathon with the University of Arizona’s Franke Honors College: 14 teams, 29 hackers, 24 hours, judges from IDEO, Microsoft, and BCG, with Innovation & Design weighted at 40%.' },
          { type: 'text', text: 'Our team registered as Liftlog — me and Joyce Jiang (Parsons) on design and prototyping, and Ifetola Ogunde (University of Arizona) on business strategy.' },

          { type: 'heading', text: 'Starting With Something Personal' },
          { type: 'lede', text: 'We picked student burnout because everyone on the team had felt it.' },
          { type: 'text', text: 'The numbers backed us up: over 80% of college seniors report moderate-to-severe burnout, mental-health appointments have 3+ week wait times, and most students can’t even recognize they’re burning out until they’ve already crashed. Their life data is scattered across 5+ apps that don’t talk to each other — and they normalize the struggle because everyone around them looks the same.' },
          { type: 'text', text: 'We ran a quick survey to test our assumptions. The biggest finding: 100% of respondents said they’d experienced burnout during school. Every single person.' },
          { type: 'image', src: '/assets/img/lifeband/burnout-research.png', label: 'Burnout research', caption: 'Survey findings — 100% had experienced burnout; most ignore the early signs until they crash.' },

          { type: 'heading', text: 'The Hardest Part: Figuring Out What to Build' },
          { type: 'text', text: 'This is where we spent about half the hackathon. Everyone had different directions and none of them felt good enough. We went through three distinct concepts before landing on the final idea.' },
          { type: 'image', src: '/assets/img/lifeband/concept-exploration.png', contain: true, label: 'Concept exploration', caption: 'Mapping directions across the team before the idea clicked.' },
          { type: 'list', items: [
            ['Concept 1 — “Life Weather”', 'A personal digital twin that forecasts your burnout trajectory like a weather report. Cool, but still basically an app.'],
            ['Concept 2 — “The Atmosphere”', 'An ambient system where your room responds to your stress — lighting shifts, music adapts, no screens. The philosophy felt right but was too abstract for a 5-minute pitch.'],
            ['Concept 3 — “The Mirror That Fades”', 'A system designed to make itself unnecessary: it maps your patterns, helps you recognize them, then gradually goes quiet. This was the idea that clicked.']
          ]},
          { type: 'text', text: 'After talking with our mentor Sanjana, she pushed us to think about the physical form this system could take. Combining the fading philosophy with a wearable, LifeBand came together.' },
          { type: 'image', src: '/assets/img/lifeband/key-features.png', label: 'Key features', caption: 'Three core features: Cross-Domain Burnout Prediction, Neuro Pulse as Alert, and the Bio-Synced Reward Protocol.' },
          { type: 'flows', items: [
            ['Cross-Domain Burnout Prediction', 'Passive data collection builds a personalized signature that catches your pattern and surfaces your risk before you feel it.'],
            ['Neuro Pulse as Alert', 'When risk escalates, the wristband delivers stimulation directly to the nervous system — calming panic in real time, without a screen or a pill.'],
            ['Bio-Synced Reward Protocol', 'Consistent habits unlock a resonance pulse that guides the body into deep parasympathetic recovery.']
          ]},

          { type: 'heading', text: 'The Solution: LifeBand' },
          { type: 'lede', text: 'A wrist-worn device that detects early burnout and intervenes through vagus-nerve stimulation.' },
          { type: 'image', src: '/assets/img/lifeband/lifeband-system.png', label: 'LifeBand system', caption: 'How the system reads body, behavior, and academic context.' },
          { type: 'text', text: 'LifeBand reads patterns across your body data (heart rate, sleep, skin temperature), your behavior (calendar, spending, messaging), and your academic context (deadlines, exams, course load).' },
          { type: 'text', text: 'The key insight: burnout isn’t caused by one thing. But when sleep drops and spending shifts and your calendar packs and you stop replying to messages — that pattern together is what predicts a crash. The device catches it and responds through your nervous system. No screen, no notification, no effort.' },
          { type: 'callout', kind: 'main', k: 'The Fade Protocol', text: 'A four-year reduction in interventions matched to college. Freshman year it’s fully active; by senior year it’s basically dormant. By graduation you’ve built the self-regulation the device used to provide — you don’t need it anymore.' },
          { type: 'text', text: 'That tagline — “the only AI that succeeds by teaching you not to need it” — became a filter for every design decision. If a feature would increase engagement or create dependency, we cut it.' },

          { type: 'heading', text: 'Designing the Pitch' },
          { type: 'text', text: 'Joyce and I built a visual system for the deck — dark backgrounds, IBM Plex Sans, and a palette tied to five wellness states: amber for Flow, teal for Drift, purple for Strain, coral for Threshold, and green for Recovery.' },
          { type: 'text', text: 'For video and visuals we used ChatGPT for scripting, Motionary for mockups and transitions, Jitter for Figma animations, and Seedance for storyboard-to-video. Claude helped with system architecture and pitch strategy.' },
          { type: 'video', src: 'https://player.vimeo.com/video/1173918695?title=0&byline=0&portrait=0&dnt=1', label: 'Pitch video', caption: 'Concept film for the LifeBand pitch.' },

          { type: 'heading', text: 'The Presentation' },
          { type: 'text', text: 'Five minutes. I covered the product and the Fade Protocol, Joyce covered design and UX, and Ifetola presented the business model.' },
          { type: 'text', text: 'Right before we went up I was nervous — not stage fright, more “I’m not sure our idea is fully ready.” We’d spent so long figuring out the concept that execution felt tight. But once we started, it flowed.' },
          { type: 'text', text: 'We didn’t place in the top three. That stung after going all in for 24 hours.' },
          { type: 'image', src: '/assets/img/lifeband/team-certificates.png', label: 'Team certificates', caption: 'Liftlog with our certificates of achievement.' },

          { type: 'heading', text: 'What I Took Away' },
          { type: 'list', items: [
            ['Working under pressure', 'I found out I’m actually productive when the clock is ticking and there’s no room to overthink — I didn’t know that about myself. 24 hours forced decisions that would have taken weeks in a class project.'],
            ['Pivoting is a design method', 'Three concepts felt chaotic, but each kept the best of the last: “Life Weather” gave us the predictive model, “The Atmosphere” the ambient philosophy, “The Mirror That Fades” the designed-obsolescence principle, and LifeBand gave it a form you can hold. The pivots weren’t wasted — they were the process.'],
            ['Alignment before execution', 'Different tools, working styles, and visual instincts mean coordination eats time you don’t have. The lesson isn’t to only work with people who think like you — it’s that alignment has to happen before execution starts, not during it.']
          ]},
          { type: 'text', text: 'We didn’t place — but the experience was worth more than any placement. Thanks to Sally Chung and Scott for organizing, to our mentors, and to Joyce Jiang and Ifetola Ogunde for 24 hours of messy, ambitious work.' }
        ]
      },
      next: { slug: 'neta-ai' }
    }

    /* Placeholder cards hidden for now — uncomment any (add a comma after the entry
       above) to show them again on the home grid:
    ,{ slug: 'voice-assistant', title: 'Voice Assistant', caption: 'Conversational flows, reimagined', status: 'Shipped', year: '2025',
      href: '#', gradient: 'linear-gradient(160deg, #0b1f4d 0%, #16357e 60%, #2b59c9 100%)' },

    { slug: 'mobile-first-redesign', title: 'Mobile-first Redesign', caption: 'A core surface, rebuilt for mobile', status: 'Handed off', year: '2025',
      href: '#', gradient: 'linear-gradient(135deg, #d7c2ef 0%, #b9c4ef 100%)', darkTitle: true },

    { slug: 'ai-patent-work', title: 'AI Patent Work', caption: 'A patent-pending interaction', status: 'Patent pending', year: '2024',
      href: '#', gradient: 'linear-gradient(135deg, #eef1f4 0%, #e2e7ee 100%)', darkTitle: true },

    { slug: 'pokergpt', title: 'PokerGPT', caption: "The world's first AI poker coach", status: 'Launched', year: '2023',
      href: '#', gradient: 'linear-gradient(135deg, #2f5fff 0%, #6aa0ff 100%)' },

    { slug: 'climate-platform', title: 'Climate Platform', caption: 'Innovation management for climate teams', status: 'Handed off', year: '2023',
      href: '#', gradient: 'linear-gradient(135deg, #f6c177 0%, #e98a8a 55%, #d36f9f 100%)' }
    */
  ]
};
