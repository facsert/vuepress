const n=JSON.parse('{"key":"v-17bffbba","path":"/Node/node-0-config.html","title":"Node 配置","lang":"en-US","frontmatter":{"title":"Node 配置","description":"Download and Update nodejs 官网 nodejs 通过 n 模块更新或切换版本 $ node -v # node 版本 &gt; v18.15.0 $ npm cache clean -f # 清除nodejs的cache： $ npm install -g n # 使用npm全局安装n模块 $ npm view node versions # node所有版本 $ n latest # 升级到最新版本 $ n stable # 升级到最新稳定版本 $ n 18.15.0 # 升级到 18.15.0 版本, 某个具体版本号 $ npm -v # npm 版本, node 的包管理器 &gt; 9.5.0 $ npm install npm@latest -g # npm 升级到最新版 $ npm install npm@xx -g # npm 升级到指定版本 $ npm version # 查看当前 npm 版本详情 $ npm view npm version # 查看 npm 最新版本 $ npm view npm versions # 查看 npm 所有版本 $ npm list # 已安装插件清单","date":"2022-07-18T15:02:16.000Z","category":["Node 教程"],"tag":["Node","Web"],"head":[["meta",{"property":"og:url","content":"https://facsert.github.io/Node/node-0-config.html"}],["meta",{"property":"og:site_name","content":"Facsert"}],["meta",{"property":"og:title","content":"Node 配置"}],["meta",{"property":"og:description","content":"Download and Update nodejs 官网 nodejs 通过 n 模块更新或切换版本 $ node -v # node 版本 &gt; v18.15.0 $ npm cache clean -f # 清除nodejs的cache： $ npm install -g n # 使用npm全局安装n模块 $ npm view node versions # node所有版本 $ n latest # 升级到最新版本 $ n stable # 升级到最新稳定版本 $ n 18.15.0 # 升级到 18.15.0 版本, 某个具体版本号 $ npm -v # npm 版本, node 的包管理器 &gt; 9.5.0 $ npm install npm@latest -g # npm 升级到最新版 $ npm install npm@xx -g # npm 升级到指定版本 $ npm version # 查看当前 npm 版本详情 $ npm view npm version # 查看 npm 最新版本 $ npm view npm versions # 查看 npm 所有版本 $ npm list # 已安装插件清单"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-09-03T14:38:24.000Z"}],["meta",{"property":"article:author","content":"Facsert"}],["meta",{"property":"article:tag","content":"Node"}],["meta",{"property":"article:tag","content":"Web"}],["meta",{"property":"article:published_time","content":"2022-07-18T15:02:16.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-03T14:38:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Node 配置\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-07-18T15:02:16.000Z\\",\\"dateModified\\":\\"2023-09-03T14:38:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Facsert\\",\\"url\\":\\"https://facsert.github.io\\",\\"email\\":\\"facsert@outlook.com\\"}]}"]]},"headers":[{"level":2,"title":"Download and Update","slug":"download-and-update","link":"#download-and-update","children":[{"level":3,"title":"npm 配置","slug":"npm-配置","link":"#npm-配置","children":[]},{"level":3,"title":"yarn 配置","slug":"yarn-配置","link":"#yarn-配置","children":[]}]}],"git":{"createdTime":1693751904000,"updatedTime":1693751904000,"contributors":[{"name":"facser","email":"facsert@outlook.com","commits":1}]},"readingTime":{"minutes":2.49,"words":747},"filePathRelative":"Node/node-0-config.md","localizedDate":"July 18, 2022","excerpt":"<h2> Download and Update</h2>\\n<p><a href=\\"https://nodejs.org/en\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">nodejs 官网</a></p>\\n<p>nodejs 通过 n 模块更新或切换版本</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code> $ <span class=\\"token function\\">node</span> <span class=\\"token parameter variable\\">-v</span>                                       <span class=\\"token comment\\"># node 版本</span>\\n <span class=\\"token operator\\">&gt;</span> v18.15.0\\n $ <span class=\\"token function\\">npm</span> cache clean <span class=\\"token parameter variable\\">-f</span>                            <span class=\\"token comment\\"># 清除nodejs的cache：</span>\\n $ <span class=\\"token function\\">npm</span> <span class=\\"token function\\">install</span> <span class=\\"token parameter variable\\">-g</span> n                              <span class=\\"token comment\\"># 使用npm全局安装n模块</span>\\n $ <span class=\\"token function\\">npm</span> view <span class=\\"token function\\">node</span> versions                        <span class=\\"token comment\\"># node所有版本</span>\\n $ n latest                                      <span class=\\"token comment\\"># 升级到最新版本</span>\\n $ n stable                                      <span class=\\"token comment\\"># 升级到最新稳定版本</span>\\n $ n <span class=\\"token number\\">18.15</span>.0                                     <span class=\\"token comment\\"># 升级到 18.15.0 版本, 某个具体版本号</span>\\n\\n $ <span class=\\"token function\\">npm</span> <span class=\\"token parameter variable\\">-v</span>                                        <span class=\\"token comment\\"># npm 版本, node 的包管理器</span>\\n <span class=\\"token operator\\">&gt;</span> <span class=\\"token number\\">9.5</span>.0\\n $ <span class=\\"token function\\">npm</span> <span class=\\"token function\\">install</span> npm@latest <span class=\\"token parameter variable\\">-g</span>                     <span class=\\"token comment\\"># npm 升级到最新版</span>\\n $ <span class=\\"token function\\">npm</span> <span class=\\"token function\\">install</span> npm@xx <span class=\\"token parameter variable\\">-g</span>                         <span class=\\"token comment\\"># npm 升级到指定版本</span>\\n $ <span class=\\"token function\\">npm</span> version                                   <span class=\\"token comment\\"># 查看当前 npm 版本详情</span>\\n $ <span class=\\"token function\\">npm</span> view <span class=\\"token function\\">npm</span> version                          <span class=\\"token comment\\"># 查看 npm 最新版本</span>\\n $ <span class=\\"token function\\">npm</span> view <span class=\\"token function\\">npm</span> versions                         <span class=\\"token comment\\"># 查看 npm 所有版本</span>\\n $ <span class=\\"token function\\">npm</span> list                                      <span class=\\"token comment\\"># 已安装插件清单</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
