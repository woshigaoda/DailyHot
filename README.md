<div align="center">
  <img alt="logo" height="120" src="./public/favicon.png" width="120"/>
  <h2>Today's Hot List</h2>
  <p>Aggregating hot topics from across the web, all in one place.</p>
  <br />
  <img src="./screenshots/main.jpg" style="border-radius: 16px" />
</div>
<!-- by 黄祥宝 -->

# Today's Hot List Project Introduction

## Website URL
[https://hot.imsyy.top/](https://hot.imsyy.top/)

## Project Overview
Today's Hot List is a real-time updated platform that aggregates trending news and topics from various platforms across the internet. The project aims to provide users with a comprehensive and timely source of trending information, helping them quickly understand the most popular events and discussions.

## Platform Features
- **Multi-platform Coverage**: Covers multiple well-known platforms including Weibo, Douyin, Zhihu, Bilibili, 36Kr, etc.
- **Real-Time Updates**: Automatically updates every 24 minutes to ensure timeliness of information.
- **Clear Categorization**: Organized by different platforms and categories for easy browsing of interesting content.

## Main Content Sections
### Bilibili
- Global top influencer vs Chinese snacks! A bit of China shock for MrBeast!
- Fujifilm responds to a single roll of film being sold for over $300
- Seeing a bigger world from Moscow

### Weibo
- Bill Gates announces he will donate almost all his wealth
- Fujifilm responds to a single roll of film being sold for over $300
- Single player wolf game

### Douyin
- Oil prices may return to $6 era
- UK and US reach agreement on tariff trade agreement terms
- Four historical codes behind Victory Day Parade

### Zhihu
- Life always has its ups and downs
- Firmly rejecting US accusations and smears
- Zhao Xintong: Lost genius and rebirth

### 36Kr
- 8 AM Kr | Li Auto responds to rumors about Li Xiang's annual salary; Housing fund loan interest rate drops 0.25%; Maotai Tourism announces celebrity endorser Zhang Yixing
- First HarmonyOS computer review: Full of HarmonyOS, are 3000 apps enough?
- Why SKP's astonishing revenue can't win capital confidence?

### Baidu
- Geng Shuang's statement continues to gain weight
- Heavy rainstorm is coming
- Citywalk takes you to explore Moscow

### Smaller Parties
- Ten years of companionship, wrist health protection: Apple Watch's health story
- What to watch this week | 9 works worth watching recently
- What to watch this week | 9 works worth watching recently

### IT Home
- Xiaomi apologizes for controversy over SU7 Ultra's dual-channel front hood; orders not yet delivered will be changed back to aluminum
- Huawei's first HarmonyOS computer officially launched
- Geely Auto suggests privatizing Zeekr

### The Paper
- Xi Jinping meets Russian President Putin
- Ministry of Commerce responds again to high-level economic talks between China and the US: The US needs to show sincerity and action
- Roundtable | Insights from authoritative experts on bilateral relations: Jointly facing challenges and creating opportunities in the new situation

### Toutiao
- India's Baglihar hydropower station reopens
- Woman without parents accused; husband takes child away
- Why this memorial cannot be forgotten

### Baidu Tieba
- Dozens of fighter jets clash in mid-air for hours between India and Pakistan
- Korean Chess Association changes rules due to Ke Jie incident
- 369 becomes more adept at pulling strings

### Rare Metal Mining
- Evan You announces: Vue ecosystem officially introduces AI! Major benefit: Cursor offers free access for students for one year!
- Asked about tsconfig.json and tsconfig.node.json, I was confused...
- Such small tools can also sell money on some platforms? I can write 100+ pure whites with Python in a day!

### Tencent News
- Witness history and future, a key handshake spanning ten years
- Sudanese embassy advises Chinese citizens in Sudan to evacuate as soon as possible
- Xi'an experiences unexpected hailstorms in May, local residents report hands reddened by hailstones while riding bikes

### Douban Movies
- [8.4] Hellbreak
- [6.9] Burning City
- [5.1] Monster

### Genshin Impact
- [Harmony Dance Festival] Participate to get exclusive event weapon 'Bow·Cold Silence'
- [Paradox] Feedback on version 5.6 game issues - Updated on May 8th
- [Seven Saints Summon] Mirror Refinement: Clever Tactics

## Usage Instructions
Users can visit [https://hot.imsyy.top/](https://hot.imsyy.top/) to view the latest trending topics and news from various platforms. The page automatically updates every 24 minutes to ensure users receive the latest information. Users can browse based on their interests by selecting different platforms and categories.

## Notes
Some platforms may experience loading failures, as shown in the Zhihu section image. In such cases, users can click the "Retry" button to refresh.

<!-- by 黄祥宝 -->

# Project Technical Highlights

## 1. Frontend Frameworks and Libraries
- **Vue.js**: According to the provided GitHub repository information, this site uses Vue.js as the primary frontend framework.
- **Vite**: Used for development and build tooling, providing fast hot module replacement (HMR) and optimized build outputs.

## 2. HTTPS Secure Transmission and SSL Certificate Management
- **Automatic SSL Certificates**: Vercel automatically provides free SSL certificates for all custom domains, simplifying the setup process for HTTPS.
- **Forced HTTPS Redirect**: Can easily implement HTTP to HTTPS redirection via the `vercel.json` configuration file.

## 3. Frontend Performance Optimization and Resource Management
- **CDN Acceleration**: Vercel’s global CDN automatically distributes static resources, reducing load times and improving user experience.
- **Caching Strategy**:
  - Use `Cache-Control` and `ETag` headers to manage browser caching.
  - Leverage Vercel’s edge network caching capabilities to further optimize static resource loading speeds.
- **Lazy Loading**: Implement lazy loading for images or resources using HTML5’s `loading="lazy"` attribute to improve initial load performance.

## 4. Backend Architecture and Real-Time Communication
- **API Calls**: Although primarily used for frontend deployment, Vercel can integrate API gateways or serverless functions (such as AWS Lambda or Vercel’s own Serverless Functions) to handle dynamic data requests.
- **WebSocket Support**: If WebSocket support is needed, additional services (like Upstash Redis or third-party services) are typically required since Vercel does not natively support WebSockets.

## 5. Development Debugging and Security Enhancements
- **Development Environment**: Use Vite’s development server for local development, allowing rapid iteration and testing of new features.
- **Security Enhancements**: Utilize Vercel’s built-in security features (such as automatic HTTPS and DDoS protection) along with input validation and token verification mechanisms in frontend code to secure the application.

## 6. Server Operations and Monitoring
- **Vercel Dashboard**: Provides detailed deployment logs, performance metrics, and error tracking, assisting developers in monitoring application status.
- **Seamless Scaling**: Thanks to Vercel’s serverless architecture, applications can scale automatically based on traffic without manual intervention.
<!-- by 黄祥宝 -->

<!-- by 梁展毓 -->
## Deployment

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
Method One: Using npm to Install pnpm (Recommended)
If you have Node.js installed (which includes npm), you can install pnpm with:


npm install -g pnpm

After installation, run:

```bash
pnpm install
Method Two: Using Corepack with pnpm (For Node.js 16+)
Enable Corepack:


corepack enable

Then try installing dependencies again:

```bash
pnpm install

If Corepack is unavailable, update Node.js to v16 or higher.

### Method Three: Verify pnpm Installation
After installing pnpm, verify the installation with:

```bash
pnpm --version

If a version number is displayed, the installation was successful.

#### Troubleshooting Deployment Issues
##### Issue 1: pnpm command not found / not an internal or external command
**Possible Causes**:
- pnpm not correctly installed.
- Not added to system environment variables.
- Incorrect command line tool usage (e.g., cmd, PowerShell, bash paths differ).

**Resolution Steps**:

Confirm if pnpm is globally installed:

```bash
pnpm --version

If the command does not exist, reinstall:

```bash
npm install -g pnpm

Check if Node.js and npm are installed:

```bash
node --version
npm --version

If not installed, download and install the LTS version from the [Node.js Official Website](https://nodejs.org/).

Ensure “Add Node.js to PATH” option is selected during installation on Windows systems. Alternatively, manually add `C:\Users\Username\AppData\Roaming\npm` to the system environment variable PATH.

Try using `npx pnpm install` temporarily (not recommended for long-term use).

##### Issue 2: corepack enable command not found
**Possible Cause**: Current Node.js version is below v16, while Corepack is introduced starting from Node.js v16.

**Resolution Steps**:

Check Node.js version:

```bash
node --version

If below v16.x, upgrade Node.js to the latest LTS version using nvm (Windows) or nvm.sh (macOS/Linux). Alternatively, uninstall the old version and download/install the latest version from the official website.

Enable Corepack:

```bash
corepack enable

### Vercel Deployment
Now supports one-click deployment via Vercel without needing a server.

>Note: Modify the API address in environment variables.

[Powered by Vercel](./public/ico/powered-by-vercel.svg)

<!-- by 梁展毓 -->

<!-- by 沈家昊 -->
# Development Guide

## Code Structure Overview

Below is the project directory structure and a description of each folder/file:

### Project Structure

**Project Root Directory**

- **public/**
  - favicon.png # Website icon, displayed in browser tabs.
  - index.html # Main HTML file, serves as the entry point of the application.
  - other static assets/ # Static resources that do not require processing (e.g., images, icons).

- **src/**
  - assets # Folder for static assets such as images, fonts, and style sheets.
  - components/ # Reusable Vue.js components.
    - Header.vue # Header component, handles the top navigation bar.
    - Footer.vue # Footer component, displays page footer content.
    - ... # Other shared components.
  - views/ # Contains main pages shown to users.
    - Home.vue # Homepage view.
    - Topic.vue # Page showing trending topics from specific platforms.
    - ... # Other page views.
  - services/ # Files handling backend communication and API services.
    - api.js # Contains HTTP request logic for fetching data from the server.
    - utils.js # Utility functions for processing API responses.
  - App.vue # Root Vue.js component, entry point of the application.
  - main.js # Main JavaScript file, initializes the Vue app.
  - router.js # Handles routing and navigation within the app.

- **tests/** # Unit and integration tests for the project.
  - components/ # Tests for individual components.
  - views/ # Tests for main page views.
  - ... # Other test files.

- **.github/** # GitHub configuration files.
  - ISSUE_TEMPLATE/ # Templates for GitHub issues.
  - workflows/ # CI/CD automation workflows for testing and deployment.
  - ... # Other GitHub-related files.

- package.json # Project metadata and dependency management.
- pnpm-lock.yaml # Lockfile to ensure consistent dependency versions.
- README.md # Main project documentation.

This structure ensures separation of concerns, making the project easier to maintain and scale.

<!-- by 沈家昊 -->


<!-- by 程俊豪 -->
# DailyHot User Guide (User Guide)

## I. Feature Modules

### 1. Multi-source Content Aggregation

The system integrates real-time trending data from multiple major platforms using a backend crawler scheduler that periodically fetches and caches content. The frontend loads and displays this content through a unified interface (RESTful API). Currently supported data sources include but are not limited to:

- **Bilibili**: Popular video comments and play count rankings;
- **Weibo**: Trending topics and popularity trends;
- **Douyin**: Short video topics and热度;
- **Zhihu**: High-engagement questions (supports abnormal state feedback);
- **Other Platforms**: Baidu Hot Search, 36Kr News, Xiaohongshu Notes, IT Home Express,少数派 Recommendations, etc.

### 2. Live Refresh Logic

Each data module displays "Last Updated Time" at the bottom to indicate the latest data fetching timestamp. Data is refreshed via both automatic and manual controls:

- Backend scheduled tasks (`cron jobs`) update the cache every 10 minutes by default;
- Frontend can manually trigger an HTTP request to force UI refresh using the Refresh button.

### 3. User Interface and System Controls (UI Controls)

- **Manual Refresh Button**: Immediately initiates a frontend request and refreshes all module data;
- **Theme Toggle**: Switch between dark mode and light mode, storing user preferences in `localStorage`;
- **Settings Panel**: Opens the configuration panel where users can customize which platform modules to display;
- **Retry Mechanism**: If an API call fails for a module, it enters an error state. Clicking the "Retry" button triggers a re-fetch.

## II. Frequently Asked Questions (FAQ)

### Q1: Why does some module show "Failed to Load"?

**Answer:** Possible causes include:

- Changes in the target platform's API structure (HTML/JSON format changes);
- Network anomalies causing timeouts or DNS errors;
- Target domain being blocked.

**Recommendations**:
- Check your network environment;
- Click the "Retry" button inside the module;
- If still unable to load, check the browser console log (F12) and report the specific error.

### Q2: How to troubleshoot if the trend list hasn't updated for a long time?

**Answer**:
- Check whether browser caching is enabled (recommended to use Ctrl+F5 for a hard refresh);
- If the server-side cache has not expired, the data may be outdated;
- Enable "Developer Mode" in settings to see the original API response timestamps for each module.

### Q3: Why is the time display inaccurate?

**Answer**: The client timestamp is calculated based on `Date.now()` in the local browser. If the device system time is incorrect, the "X minutes ago" prompt will also be off. It is recommended to synchronize the system time.

### Q4: Does it support clicking hotwords to jump to the original article?

**Answer**: Currently supports partial platform hotword jumps (e.g., Weibo, Zhihu), but you need to enable the "Link Jump" option in settings. Some platforms may have restrictions due to anti-scraping measures or incomplete data structures.

## III. Best Practices

- It is recommended to check the trend list daily, especially during morning rush hours (7–9 AM) and lunchtime (12–1 PM) to get the latest content trends;
- If a certain module frequently fails to load, temporarily disable it in settings to improve performance;
- Use modern browsers (Chrome 90+, Edge, Firefox) to avoid compatibility issues;
- To embed into other platforms, the webpage can be encapsulated as an iFrame or modularized for secondary development;
- Encourage submitting bug reports and feature suggestions through the "Feedback" section under "Settings" to help continuously optimize the system.

<!-- by 程俊豪 -->


<!-- by 李如欣 -->
## Key Features

- **Aggregated Trending Content Across Platforms**  
  DailyHot tracks and aggregates trending content from multiple popular websites so users don’t need to visit each platform individually to stay informed.

- **Multi-platform Support**  
  Supports various content sources, including but not limited to 51CTO and other professional websites. Users can directly access specific platform trending lists by entering URLs like `http://synology-ip:6688/51cto`.

- **RSS Subscription Functionality**  
  Users can append `?rss=true` to URLs to receive RSS-formatted data, making it easy to subscribe to favorite trending content in RSS readers.

- **Clean and Intuitive Interface**  
  The front-end design is clean and well-organized, allowing users to quickly browse trending content across different categories.

---

## Technical Features

- **Fast and Responsive APIs**  
  The backend APIs are optimized for performance and fast response times, making them easy to integrate for developers.

- **Flexible Deployment Options**  
  Supports various deployment methods, including Docker-based deployment. Users can set up the service on devices such as Synology NAS.

- **Environment Variable Configuration**  
  API address and ICP filing information can be configured flexibly via environment variables.

- **Frontend-Backend Separated Architecture**  
  The project adopts a frontend-backend decoupled architecture, with frontend deployable via Vercel (serverless) and backend available as a Docker image.

---

## User Experience

- **Cross-device Compatibility**  
  The platform provides good display effects on both mobile phones and computers, with responsive design ensuring optimal browsing experience across devices.

- **Ad-free Interface**  
  Compared to platforms with heavy ads, DailyHot offers a clean and distraction-free browsing experience.

- **Real-time Updates**  
  Trending content is updated in real-time, allowing users to access the latest trending news promptly.

---

## Deployment Options

For users who wish to self-host, DailyHot provides full deployment instructions:

- **Backend Deployment**  
  The API service can be rapidly deployed using Docker with the image `imsyy/dailyhot-api`.

- **Frontend Deployment**  
  While no official frontend image is provided, users can refer to the project documentation and deploy via Vercel or build a custom Dockerfile.

- **Docker Compose One-click Deployment**  
  A sample `docker-compose.yml` file is provided in the project for quick full-stack setup.

---

## Open Source and Extensibility

DailyHot is an open-source project hosted on GitHub, allowing developers to perform secondary development or extend functionality as needed. For users who want to keep track of trending content without being overwhelmed by algorithm-recommended feeds, DailyHot offers a simple and efficient solution.
<!-- by 李如欣 -->

<!-- by 廖天宇 -->
# DailyHot Security and Privacy Architecture Plan

## Comprehensive Security Defense System

### 1. Multi-layer XSS Defense Matrix

#### Input Layer Protection
- HMAC signature verification mechanism for content sources
- Machine learning-based content threat scoring system using TensorFlow.js

#### Processing Layer Sanitization

```javascript
// Multi-stage content sanitization workflow
const purifiedContent = DOMPurify.sanitize(
  unescapeHtml(
    decodeURIComponent(rawContent)
  ), 
  {
    SANITIZE_DOM: false,   // Disable DOM node sanitization
    RETURN_TRUSTED_TYPE: true  // Return trusted type object
  }
);
Output Layer Control
Dynamic Content Security Policy Configuration

Content-Security-Policy: 
  default-src 'self';
  script-src 'self' 'wasm-unsafe-eval' 'strict-dynamic' 'nonce-{random-value}';
  style-src 'self' 'unsafe-inline';
  object-src 'none';
  base-uri 'none';
  require-trusted-types-for 'script'
2. Advanced CSRF Protection Framework
Dual-token Architecture:
Static Token (embedded in page meta tags)
Dynamic JWT Token (refreshed per request)
Enhanced Same-Origin Policy Configuration

app.use(helmet({
  crossOriginEmbedderPolicy: true,         // Cross-origin embedding policy
  crossOriginOpenerPolicy: "same-origin", // Window opening restriction
  crossOriginResourcePolicy: "same-site"  // Resource loading restriction
}));
3. Dependency Security Governance
Lifecycle Stage	Security Measures	Toolchain
Procurement Phase	SBOM generation / License scanning	syft + FOSSA
Build Phase	Container signing / Immutable builds	cosign + Bazel
Runtime Phase	Behavior monitoring / Memory protection	eBPF + NX technology
4. API Security Gateway

User Request → Cloudflare WAF → Kong Gateway (JWT validation) → Business Logic
↓
OPA Policy Engine
Request body validation based on OpenAPI spec
Three-dimensional rate limiting (by user/IP/endpoint)
Privacy Enhancement Implementation Plan
1. Data Minimization Architecture
Differential privacy data processing

from pydifferential_privacy import LaplaceMechanism

def process_data():
    raw = collect_metrics()
    return LaplaceMechanism(raw, epsilon=0.5)  # ε=0.5 privacy budget
2. GDPR Compliance Automation
Data flow mapping example

data_flow:
  - Source: User Registration
    Processors: [Analytics Service, CRM]
    Legal Basis: Explicit Consent
    Retention Period: 180 days
    Cross-border Transfer: [AWS Frankfurt]
Implementation Roadmap
Phase	Timeline	Milestone	KPI
Foundation Strengthening	Week 1–2	CSP Deployment Completed	XSS Attack Block Rate ≥99%
Enhanced Protection	Week 3–4	API Gateway Launch	CSRF Defense Success Rate 100%
Privacy Engineering	Week 5–6	DSAR Portal Delivered	GDPR Request Response Time <24h
Advanced Protection	Week 7–8	TEE Environment Deployed	Zero Data Breach Incidents
Best Practices
Adopt blue-green deployment for gradual rollout
Conduct red team penetration testing at each stage
Establish a Security Champion program
Maintain automated security test coverage ≥80%
Technology Stack Overview
Layer	Technology
Frontend Security	Trusted Types + CSP Level 3
Backend Security	JWT + HMAC dual-factor authentication
Privacy Computing	Microsoft SEAL homomorphic encryption library
Compliance Audit	OneTrust automated assessment platform

<! by -- 廖天宇 -- >