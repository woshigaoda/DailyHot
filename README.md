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

bash
深色版本
npm install -g pnpm

After installation, run:

```bash
pnpm install
Method Two: Using Corepack with pnpm (For Node.js 16+)
Enable Corepack:

bash
深色版本
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
