Today's Hot List Project Introduction
Website
https://hot.imsyy.top/
Project Overview
Today's Hot List is a real-time updated aggregation platform for hot topics. It brings together the hot news and topics from major platforms across the network. This project aims to provide users with a comprehensive and timely source of hot information, helping them quickly understand the most popular events and discussions currently.
Platform Features
Multi-platform Coverage: Covers multiple well-known platforms such as Weibo, Douyin, Zhihu, Bilibili, 36Kr, etc.
Real-time Update: Automatically updates every 24 minutes to ensure the timeliness of information.
Clear Classification: Classified according to different platforms and categories for users to easily find the content they are interested in.
Main Content Sections
Bilibili
The world's first internet celebrity vs Chinese snacks! Giving MrBeast a little bit of Chinese shock!
Fuji responds to a polaroid being 炒至 300 多元
Seeing a bigger world from Moscow
Weibo
Bill Gates announces that he will donate almost all of his wealth
Fuji responds to a polaroid being 炒至 300 多元
Panbao Rabbit Single Werewolf Killing
Douyin
The oil price may return to the 6 yuan era
The UK and the US reach an agreement on the terms of the tariff trade agreement
Four historical passwords of the Victory Day military parade
Zhihu
Life will always encounter unsatisfactory things
Resolutely reject the accusations and smears from the US side
Zhao Xintong: The loss and rebirth of a genius
36Kr
8:01 Kr | Ideal Auto responds to the rumored annual salary of Li Xiang being 639 million; The housing provident fund loan interest rate is reduced by 0.25 percentage points; Moutai Culture and Tourism officially announces Zhang Yixing as the spokesperson
The first evaluation of the first Hongmeng computer is released: Full of Hongmeng, are 3000 applications enough?
Why can't SKP's astonishing revenue win capital confidence?
Baidu
The value of Geng Shuang's words is still soaring
A 特大暴雨 is coming
Citywalk takes you to explore Moscow
Minority Report
Ten years of companionship, protection on the wrist: The health story of Apple Watch
What to watch this week | 9 works worth watching recently
What to watch this week | 9 works worth watching recently
IT Home
Xiaomi apologizes for the controversy of the SU7 Ultra's broken fiber double-air duct front hood, and allows un-delivered orders to be changed back to an aluminum front hood within a limited time
Huawei's first Hongmeng computer is officially unveiled
Geely Automobile: Suggests the privatization of Zeekr
The Paper
Xi Jinping holds talks with Russian President Vladimir Putin
The Ministry of Commerce responds again to the high-level Sino-US economic and trade talks: The US side needs to show sincerity and take action
Roundtable | Authoritative Chinese and Russian experts explain the bilateral relations in detail: jointly respond to challenges and create development opportunities under the new situation
Usage Instructions
Users can access https://hot.imsyy.top/ to view the latest hot topics and news from various platforms. The page will be automatically updated every 24 minutes to ensure that users can obtain the latest information. Users can choose different platforms and categories to browse according to their interests.
Notes
There may be situations where some platforms fail to load, as shown in the Zhihu section in the picture. In this case, you can click the "Retry" button to refresh.
Project Technical Points
1. Front-end Framework and Libraries
Vue.js: According to the information of the GitHub repository, this website uses Vue.js as the main front-end framework.
Vite: Used as a development and build tool, providing fast hot module replacement (HMR) and optimized build output.
2. HTTPS Secure Transmission and SSL Certificate Management
Automatic SSL Certificate: Vercel automatically provides free SSL certificates for all custom domains, simplifying the HTTPS setup process.
Forced HTTPS Redirection: It can be easily achieved by configuring the vercel.json file in Vercel to redirect HTTP to HTTPS.
3. Front-end Performance Optimization and Resource Management
CDN Acceleration: Vercel comes with a global CDN, which can automatically distribute static resources, reducing the loading time and improving the user experience.
Caching Strategy:
Use the Cache-Control and ETag headers to control browser caching.
Utilize Vercel's edge network caching function to further optimize the loading speed of static resources.
Lazy Loading of Images: Implement lazy loading of images through the loading="lazy" attribute in HTML5 to reduce the initial screen loading time.
4. Back-end Architecture and Real-time Communication
API Calls: Although Vercel is mainly used for front-end deployment, it can also integrate API gateways or serverless functions (such as AWS Lambda or Vercel's own Serverless Functions) to handle dynamic data requests.
WebSocket Support: If WebSocket support is required, additional services (such as Upstash Redis or third-party services) are usually needed, because Vercel does not directly support WebSocket by default.
5. Development Debugging and Security Protection
Development Environment: Use the development server provided by Vite for local development, which allows for rapid iteration and testing of new features.
Enhanced Security: Ensure the security of the application through Vercel's built-in security features (such as automatic HTTPS and DDoS protection), as well as input validation and token verification mechanisms in the front-end code.
6. Server Operation and Maintenance and Monitoring
Vercel Dashboard: Provides detailed deployment logs, performance indicators, and error tracking to help developers monitor the application status.
Seamless Scalability: Thanks to Vercel's serverless architecture, the application can automatically scale according to traffic without manual intervention.
<!-- by huang xiang bao -->
Deployment
bash
# Install dependencies
pnpm install

# Development
pnpm dev

# Packaging
pnpm build
Method 1: Install pnpm using npm (recommended)
If you have already installed Node.js (with npm included), you can install pnpm through the following command:

bash
npm install -g pnpm

After installation, run again:

bash
pnpm install
Method 2: Use pnpm through Corepack (applicable to Node 16+)
Enable Corepack:

bash
corepack enable

Then try to install the dependencies again:

bash
pnpm install

If it prompts that corepack is not available, please update Node.js to version v16 or higher first.
Method 3: Check if pnpm is really installed
After installing pnpm, you can verify whether the installation is successful through the following command:

bash
pnpm --version

If the version number is output, it means the installation is successful.
Problems and Solutions During Deployment
Problem 1: The pnpm command was not found / is not an internal or external command
Cause Analysis:

pnpm is not installed correctly.
After installation, it was not added to the system environment variables.
An incorrect command-line tool was used (such as cmd, PowerShell, bash, etc. with different paths).

Solution Steps:

Confirm whether pnpm is installed globally:

bash
pnpm --version

If it prompts that the command does not exist, reinstall it:

bash
npm install -g pnpm

Check if Node.js and npm are installed:

bash
node --version
npm --version

If not installed, please go to the Node.js official website to download and install the LTS version.

For the Windows system, make sure to check the option "Add Node.js to the system path" during installation. Or manually add C:\Users\username\AppData\Roaming\npm to the system environment variable PATH.

Try to use npx pnpm (not recommended for long-term use):

bash
npx pnpm install
Problem 2: The corepack enable command is not found
Cause Analysis:

The current Node.js version is lower than v16, and Corepack is a feature introduced starting from Node.js v16.

Solution Steps:

Check the Node.js version:

bash
node --version

If the version is lower than v16.x, please upgrade Node.js to the latest LTS version.

It is recommended to use nvm (for Windows) or nvm.sh (for macOS/Linux) to manage multiple Node.js versions when upgrading Node.js. Or uninstall the old version and download and install the new version from the official website.

Enable Corepack:

bash
corepack enable

Vercel Deployment
Now supports one-click deployment on Vercel without the need for a server.

Please note that you need to modify the API address in the environment variables.

Powered by Vercel
<!-- by Liang Zhanyu -->