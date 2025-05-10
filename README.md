<div align="center">
<img alt="logo" height="120" src="./public/favicon.png" width="120"/>
<<<<<<< HEAD
<h2>Today's Hot List</h2>
<p>Gather all the hot spots on the web, with all popular content at a glance</p>
=======
<h2>今日热榜</h2>
<p>汇聚全网热点，热门尽览无余</p>
>>>>>>> 8b91ad9d35f7dad3b0c2a0b671001a9de9873115
<br />
<img src="./screenshots/main.jpg" style="border-radius: 16px" />
</div>

<<<<<<< HEAD
## Example

> This is the demo site.

- [Today's Hot List - https://hot.imsyy.top/](https://hot.imsyy.top/)

## Deployment

```bash
# Install dependencies
pnpm install

# Development mode
pnpm dev

# Build project
pnpm build
```

### Method One: Installing pnpm via npm (Recommended)

If you have Node.js installed (which comes with npm), you can install pnpm using the following command:
```bash
npm install -g pnpm
```
After installation, run again:
```bash
pnpm install
```

### Method Two: Using Corepack to Use pnpm (For Node 16+)

Enable Corepack:
```bash
corepack enable
```
Then try installing dependencies again:
```bash
pnpm install
```
If Corepack is not available, please update Node.js to v16 or later.

### Method Three: Verify if pnpm Is Installed Correctly

After installing pnpm, you can verify whether it was successfully installed with this command:
```bash
pnpm --version
```
If there is a version number output, the installation was successful.

## Common Issues and Solutions During Deployment

### Issue 1: pnpm Command Not Found / Not an Internal or External Command

**Cause Analysis:**

- pnpm is not correctly installed.
- After installation, it was not added to the system environment variables.
- The wrong command-line tool was used (such as cmd, PowerShell, bash, etc., different paths).

**Solution Steps:**

Check if pnpm is globally installed:
```bash
pnpm --version
```
If the command does not exist, reinstall:
```bash
npm install -g pnpm
```

Check if Node.js and npm are installed:
```bash
node --version
npm --version
```
If not installed, visit the [Node.js official website](https://nodejs.org/) to download and install the LTS version.

For Windows systems, ensure that "Add Node.js to PATH" is checked during installation. Alternatively, manually add `C:\Users\Username\AppData\Roaming\npm` to the system environment variable PATH.

Try using npx pnpm (not recommended for long-term use):
```bash
npx pnpm install
```

### Issue 2: corepack enable Command Not Found

**Cause Analysis:**

The current Node.js version is below v16, while Corepack is a feature introduced from Node.js v16 onwards.

**Solution Steps:**

Check the Node.js version:
```bash
node --version
```
If the version is lower than v16.x, upgrade Node.js to the latest LTS version.

Upgrading Node.js is recommended using nvm (for Windows) or nvm.sh (for macOS/Linux) to manage multiple Node.js versions. Alternatively, uninstall the old version and download and install the new version from the official website.

Enable Corepack:
```bash
corepack enable
```

### Vercel Deployment

Now supports one-click deployment with Vercel, no server required.

> Please note, you need to modify the API address in the environment variables.

[Powered by Vercel](./public/ico/powered-by-vercel.svg)
<!--梁展毓-->
=======

## 示例

> 这里是示例站点

- [今日热榜 - https://hot.imsyy.top/](https://hot.imsyy.top/)


## 部署

```bash
// 安装依赖
pnpm install

// 开发
pnpm dev

// 打包
pnpm build
```

## Vercel 部署

现已支持 Vercel 一键部署，无需服务器

> 请注意，需要修改环境变量中的 API 地址

![Powered by Vercel](./public/ico/powered-by-vercel.svg)
>>>>>>> 8b91ad9d35f7dad3b0c2a0b671001a9de9873115
