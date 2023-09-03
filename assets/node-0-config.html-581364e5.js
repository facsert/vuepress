import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as t,c as l,a as n,b as s,e as o,f as c}from"./app-8da2a3ac.js";const i={},r=n("h2",{id:"download-and-update",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#download-and-update","aria-hidden":"true"},"#"),s(" Download and Update")],-1),m={href:"https://nodejs.org/en",target:"_blank",rel:"noopener noreferrer"},d=c(`<p>nodejs 通过 n 模块更新或切换版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token function">node</span> <span class="token parameter variable">-v</span>                                       <span class="token comment"># node 版本</span>
 <span class="token operator">&gt;</span> v18.15.0
 $ <span class="token function">npm</span> cache clean <span class="token parameter variable">-f</span>                            <span class="token comment"># 清除nodejs的cache：</span>
 $ <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> n                              <span class="token comment"># 使用npm全局安装n模块</span>
 $ <span class="token function">npm</span> view <span class="token function">node</span> versions                        <span class="token comment"># node所有版本</span>
 $ n latest                                      <span class="token comment"># 升级到最新版本</span>
 $ n stable                                      <span class="token comment"># 升级到最新稳定版本</span>
 $ n <span class="token number">18.15</span>.0                                     <span class="token comment"># 升级到 18.15.0 版本, 某个具体版本号</span>

 $ <span class="token function">npm</span> <span class="token parameter variable">-v</span>                                        <span class="token comment"># npm 版本, node 的包管理器</span>
 <span class="token operator">&gt;</span> <span class="token number">9.5</span>.0
 $ <span class="token function">npm</span> <span class="token function">install</span> npm@latest <span class="token parameter variable">-g</span>                     <span class="token comment"># npm 升级到最新版</span>
 $ <span class="token function">npm</span> <span class="token function">install</span> npm@xx <span class="token parameter variable">-g</span>                         <span class="token comment"># npm 升级到指定版本</span>
 $ <span class="token function">npm</span> version                                   <span class="token comment"># 查看当前 npm 版本详情</span>
 $ <span class="token function">npm</span> view <span class="token function">npm</span> version                          <span class="token comment"># 查看 npm 最新版本</span>
 $ <span class="token function">npm</span> view <span class="token function">npm</span> versions                         <span class="token comment"># 查看 npm 所有版本</span>
 $ <span class="token function">npm</span> list                                      <span class="token comment"># 已安装插件清单</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="npm-配置" tabindex="-1"><a class="header-anchor" href="#npm-配置" aria-hidden="true">#</a> npm 配置</h3><p>npm 可用更换默认模块安装位置和缓存位置<br> npm 可更换下载源为国内源</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token function">npm</span> config <span class="token builtin class-name">set</span> prefix <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span>                  <span class="token comment"># 更换全局模块安装位置</span>
 $ <span class="token function">npm</span> get prefix                                <span class="token comment"># 查看 npm 安装全局模块的位置</span>
 <span class="token operator">&gt;</span> /usr/local

 $ <span class="token function">npm</span> config <span class="token builtin class-name">set</span> cache <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span>                   <span class="token comment"># 更换 npm 缓存位置</span>
 $ <span class="token function">npm</span> get cache                                 <span class="token comment"># 查看 npm 缓存存放的位置</span>
 <span class="token operator">&gt;</span> /Users/facsert/.npm

 $ <span class="token function">npm</span> <span class="token function">install</span> nrm <span class="token parameter variable">-g</span>                            <span class="token comment"># 使用资源切换工具 nrm 切换下载源</span>
 $ nrm <span class="token function">ls</span>                                        <span class="token comment"># 列出可用的下载源</span>
 $ nrm use taobao                                <span class="token comment"># 使用 taobao 源</span>

 $ <span class="token function">npm</span> config get registry                       <span class="token comment"># 查看当前 npm 下载源</span>
 <span class="token operator">&gt;</span> https://registry.npmjs.org/                   <span class="token comment"># 官方 npm 下载源</span>

 $ <span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry <span class="token operator">&lt;</span>source<span class="token operator">&gt;</span>              <span class="token comment"># 命令切换 npm 下载源</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>npm 全局安装, 存放在全局模块位置, 所有项目生效<br> npm 本地安装, 在当前目录 node_modules 文件夹下, 仅目录下项目生效</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token function">npm</span> init                                      <span class="token comment"># 初始化项目, 生产 package.json 记录安装的模块及版本</span>
 $ <span class="token function">npm</span> <span class="token function">install</span> vue <span class="token parameter variable">--save</span>                        <span class="token comment"># 更新 package.json 中 vue 版本的版本信息</span>
 $ <span class="token function">npm</span> <span class="token function">install</span>                                   <span class="token comment"># 目录下存在 package.json 会自动根据文件下载依赖包</span>

 $ <span class="token function">npm</span> list                                      <span class="token comment"># 查看当前项目安装的模块</span>

 $ <span class="token function">npm</span> list <span class="token parameter variable">-g</span>                                   <span class="token comment"># 查看全局安装的模块</span>
  /usr/local/lib
  ├── corepack@0.17.1
  ├── n@9.0.1
  ├── npm@9.6.2
  └── yarn@1.22.19
 
 $ <span class="token function">npm</span> <span class="token function">install</span> <span class="token operator">&lt;</span>package<span class="token operator">&gt;</span>                          <span class="token comment"># 本地安装模块 </span>
 $ <span class="token function">npm</span> <span class="token function">install</span> <span class="token operator">&lt;</span>package<span class="token operator">&gt;</span> <span class="token parameter variable">-g</span>                       <span class="token comment"># 全局安装模块</span>
 
 $ <span class="token function">npm</span> uninstall <span class="token operator">&lt;</span>package<span class="token operator">&gt;</span>                        <span class="token comment"># 卸载本地安装的模块</span>
 $ <span class="token function">npm</span> uninstall <span class="token operator">&lt;</span>package<span class="token operator">&gt;</span> <span class="token parameter variable">-g</span>                     <span class="token comment"># 卸载全局安装的模块</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="yarn-配置" tabindex="-1"><a class="header-anchor" href="#yarn-配置" aria-hidden="true">#</a> yarn 配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token function">npm</span> <span class="token function">install</span> <span class="token function">yarn</span> <span class="token parameter variable">-g</span>                           <span class="token comment"># npm 全局安装 yarn</span>
 $ <span class="token function">yarn</span> config <span class="token builtin class-name">set</span> global-folder <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span>          <span class="token comment"># 设置全局安装目录</span>
 $ <span class="token function">yarn</span> config <span class="token builtin class-name">set</span> cache-folder <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span>           <span class="token comment"># 设置全局缓存目录</span>

 $ <span class="token function">yarn</span> global <span class="token function">add</span> yrm                           <span class="token comment"># 安装 yrm 以切换下载源</span>
 $ yrm <span class="token function">ls</span>                                        <span class="token comment"># 列出所有下载源</span>
 $ yrm use taobao                                <span class="token comment"># 使用 taobao 源</span>

 $ <span class="token function">yarn</span> config get registry                      <span class="token comment"># 查看当前 yarn 下载源</span>
 <span class="token operator">&gt;</span> https://registry.yarnpkg.com                  <span class="token comment"># yarn 官方默认源</span>

 $ <span class="token function">yarn</span> config <span class="token builtin class-name">set</span> registry <span class="token operator">&lt;</span>source<span class="token operator">&gt;</span>             <span class="token comment"># 命令更换 yarn 下载源</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>yarn 的使用与 npm 类似</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token function">yarn</span> init                                     <span class="token comment"># yarn 初始化项目, 生成 package.json</span>
 $ <span class="token function">yarn</span> <span class="token function">install</span>                                  <span class="token comment"># 目录下有 package.json 自动下载文件内的包</span>
 
 $ <span class="token function">yarn</span> global <span class="token function">add</span> <span class="token operator">&lt;</span>package<span class="token operator">&gt;</span>                     <span class="token comment"># 全局安装工具包</span>
 $ <span class="token function">yarn</span> <span class="token function">add</span> <span class="token operator">&lt;</span>package<span class="token operator">&gt;</span>                            <span class="token comment"># 本地安装包</span>
 
 $ <span class="token function">yarn</span> global remove <span class="token operator">&lt;</span>package<span class="token operator">&gt;</span>                  <span class="token comment"># 卸载全局包</span>
 $ <span class="token function">yarn</span> remove <span class="token operator">&lt;</span>package<span class="token operator">&gt;</span>                         <span class="token comment"># 卸载项目下的包</span>

 $ <span class="token function">yarn</span> upgrade <span class="token operator">&lt;</span>package<span class="token operator">&gt;</span>                        <span class="token comment"># 更新某个包</span>

 $ <span class="token function">yarn</span> list                                     <span class="token comment"># 显示本地安装的所有包</span>

 $ <span class="token function">yarn</span> global list                              <span class="token comment"># 显示全局安装的所有包</span>
 <span class="token operator">&gt;</span> <span class="token function">yarn</span> global v1.22.19
 <span class="token operator">&gt;</span>   - yrm

 $ <span class="token function">yarn</span> info <span class="token operator">&lt;</span>package<span class="token operator">&gt;</span>                           <span class="token comment"># 查看包的信息</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function v(u,k){const a=p("ExternalLinkIcon");return t(),l("div",null,[r,n("p",null,[n("a",m,[s("nodejs 官网"),o(a)])]),d])}const f=e(i,[["render",v],["__file","node-0-config.html.vue"]]);export{f as default};
