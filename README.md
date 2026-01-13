# McMinn County Amateur Radio Club Website

Official website for the McMinn County Amateur Radio Club (MCARC) — **KG4FZR**

Built with [Eleventy](https://www.11ty.dev/) and hosted on GitHub Pages.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

The site will be available at `http://localhost:8080`

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment
├── src/
│   ├── _includes/
│   │   ├── base.njk            # Base layout
│   │   ├── header.njk          # Navigation header
│   │   └── footer.njk          # Site footer
│   ├── _data/
│   │   ├── site.json           # Site metadata & contact info
│   │   ├── navigation.json     # Menu structure
│   │   ├── repeaters.json      # Repeater frequencies
│   │   ├── nets.json           # Net schedule
│   │   ├── members.json        # Club roster
│   │   └── hamfests.json       # Hamfest calendar
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css       # Custom styles
│   │   ├── images/             # Logos, photos
│   │   └── js/
│   │       └── nav.js          # Mobile navigation
│   ├── posts/                  # Meeting minutes
│   ├── index.njk               # Homepage
│   ├── about.md                # About page
│   ├── repeaters.njk           # Repeater frequencies
│   ├── nets.njk                # Net schedule
│   ├── skywarn.md              # SkyWARN info
│   ├── events.njk              # Hamfests & events
│   ├── members.njk             # Club roster
│   ├── resources.njk           # Resources hub
│   ├── license.md              # License testing
│   ├── scanner.md              # Scanner info
│   ├── hts.md                  # Handie talkies
│   ├── marine.md               # Marine radio
│   ├── trading.md              # Trading post
│   ├── documents.md            # Downloads
│   └── minutes.njk             # Minutes archive
├── .eleventy.js                # Eleventy configuration
├── package.json                # Node.js dependencies
└── README.md
```

## 📝 Updating Content

### Repeaters, Nets, Members, Events

Edit the JSON files in `src/_data/`:
- `repeaters.json` — Add/update repeater frequencies
- `nets.json` — Update net schedule
- `members.json` — Update club roster
- `hamfests.json` — Add upcoming hamfests

### Meeting Minutes

Add new markdown files to `src/posts/`:
```
2025-02-10-february-minutes.md
```

With front matter:
```yaml
---
layout: base.njk
title: February 2025 Meeting Minutes
date: 2025-02-10
tags: minutes
---
```

### Site Information

Update `src/_data/site.json` for contact info, meeting details, etc.

## 🎨 Styling

Custom CSS is in `src/assets/css/style.css`. The design uses CSS custom properties (variables) for easy theming.

## 📤 Deployment

Push to `main` branch triggers automatic deployment via GitHub Actions.


## 📄 License

Content © McMinn County Amateur Radio Club, Inc.
