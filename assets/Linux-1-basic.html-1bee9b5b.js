const n=JSON.parse('{"key":"v-56ad99f4","path":"/Linux/Linux-1-basic.html","title":"Linux 基础","lang":"en-US","frontmatter":{"title":"Linux 基础","icon":"linux","description":"linux 命令 帮助信息 $ man &lt;command&gt; # man (manual) 帮助手册, 查看命令的帮助手册 $ man -f &lt;command&gt; # 显示命令的简短描述 $ man -f date &gt; date (1) - print or set the system date and time $ whatis &lt;command&gt; # 显示命令的简短描述, 等同于 man -f &lt;command&gt; $ whatis date &gt; date (1) - print or set the system date and time $ &lt;command&gt; -h/--help # 命令使用 -h/--help 参数 $ date -h $ date --help &gt; Usage: date [OPTION]... [+FORMAT] &gt; or: date [-u|--utc|--universal] [MMDDhhmm[[CC]YY][.ss]] &gt; Display the current time in the given FORMAT, or set the system date.","date":"2022-07-18T15:02:16.000Z","category":["Linux 教程"],"tag":["Linux"],"head":[["meta",{"property":"og:url","content":"https://facsert.github.io/Linux/Linux-1-basic.html"}],["meta",{"property":"og:site_name","content":"Facsert"}],["meta",{"property":"og:title","content":"Linux 基础"}],["meta",{"property":"og:description","content":"linux 命令 帮助信息 $ man &lt;command&gt; # man (manual) 帮助手册, 查看命令的帮助手册 $ man -f &lt;command&gt; # 显示命令的简短描述 $ man -f date &gt; date (1) - print or set the system date and time $ whatis &lt;command&gt; # 显示命令的简短描述, 等同于 man -f &lt;command&gt; $ whatis date &gt; date (1) - print or set the system date and time $ &lt;command&gt; -h/--help # 命令使用 -h/--help 参数 $ date -h $ date --help &gt; Usage: date [OPTION]... [+FORMAT] &gt; or: date [-u|--utc|--universal] [MMDDhhmm[[CC]YY][.ss]] &gt; Display the current time in the given FORMAT, or set the system date."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-09-03T14:38:24.000Z"}],["meta",{"property":"article:author","content":"Facsert"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:published_time","content":"2022-07-18T15:02:16.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-03T14:38:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux 基础\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-07-18T15:02:16.000Z\\",\\"dateModified\\":\\"2023-09-03T14:38:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Facsert\\",\\"url\\":\\"https://facsert.github.io\\",\\"email\\":\\"facsert@outlook.com\\"}]}"]]},"headers":[{"level":2,"title":"帮助信息","slug":"帮助信息","link":"#帮助信息","children":[]},{"level":2,"title":"文件与路径","slug":"文件与路径","link":"#文件与路径","children":[]},{"level":2,"title":"查看执行过命令","slug":"查看执行过命令","link":"#查看执行过命令","children":[]},{"level":2,"title":"全局变量","slug":"全局变量","link":"#全局变量","children":[]},{"level":2,"title":"系统相关","slug":"系统相关","link":"#系统相关","children":[]},{"level":2,"title":"用户","slug":"用户","link":"#用户","children":[{"level":3,"title":"启用 root 用户","slug":"启用-root-用户","link":"#启用-root-用户","children":[]},{"level":3,"title":"创建用户","slug":"创建用户","link":"#创建用户","children":[]}]},{"level":2,"title":"通配符号","slug":"通配符号","link":"#通配符号","children":[{"level":3,"title":"？ 任意单个字符","slug":"任意单个字符","link":"#任意单个字符","children":[]},{"level":3,"title":"* 任意多个字符","slug":"任意多个字符","link":"#任意多个字符","children":[]},{"level":3,"title":"** 任意多级目录","slug":"任意多级目录","link":"#任意多级目录","children":[]},{"level":3,"title":"[] 匹配范围","slug":"匹配范围","link":"#匹配范围","children":[]}]},{"level":2,"title":"特殊符号","slug":"特殊符号","link":"#特殊符号","children":[{"level":3,"title":"输出重定向","slug":"输出重定向","link":"#输出重定向","children":[]}]},{"level":2,"title":"单词缩写","slug":"单词缩写","link":"#单词缩写","children":[{"level":3,"title":"符号","slug":"符号","link":"#符号","children":[]},{"level":3,"title":"正则表达式","slug":"正则表达式","link":"#正则表达式","children":[]}]}],"git":{"createdTime":1693751904000,"updatedTime":1693751904000,"contributors":[{"name":"facser","email":"facsert@outlook.com","commits":1}]},"readingTime":{"minutes":6.63,"words":1990},"filePathRelative":"Linux/Linux-1-basic.md","localizedDate":"July 18, 2022","excerpt":"<p><a href=\\"https://www.linuxcool.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">linux 命令</a></p>\\n<h2> 帮助信息</h2>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code> $ <span class=\\"token function\\">man</span> <span class=\\"token operator\\">&lt;</span>command<span class=\\"token operator\\">&gt;</span>                                 <span class=\\"token comment\\"># man (manual) 帮助手册, 查看命令的帮助手册</span>\\n $ <span class=\\"token function\\">man</span> <span class=\\"token parameter variable\\">-f</span> <span class=\\"token operator\\">&lt;</span>command<span class=\\"token operator\\">&gt;</span>                              <span class=\\"token comment\\"># 显示命令的简短描述</span>\\n $ <span class=\\"token function\\">man</span> <span class=\\"token parameter variable\\">-f</span> <span class=\\"token function\\">date</span>\\n <span class=\\"token operator\\">&gt;</span> <span class=\\"token function\\">date</span> <span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span>             - print or <span class=\\"token builtin class-name\\">set</span> the system <span class=\\"token function\\">date</span> and <span class=\\"token function\\">time</span>\\n\\n $ whatis <span class=\\"token operator\\">&lt;</span>command<span class=\\"token operator\\">&gt;</span>                              <span class=\\"token comment\\"># 显示命令的简短描述, 等同于 man -f &lt;command&gt;</span>\\n $ whatis <span class=\\"token function\\">date</span>\\n <span class=\\"token operator\\">&gt;</span> <span class=\\"token function\\">date</span> <span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span>             - print or <span class=\\"token builtin class-name\\">set</span> the system <span class=\\"token function\\">date</span> and <span class=\\"token function\\">time</span>\\n\\n $ <span class=\\"token operator\\">&lt;</span>command<span class=\\"token operator\\">&gt;</span> -h/--help                           <span class=\\"token comment\\"># 命令使用 -h/--help 参数</span>\\n $ <span class=\\"token function\\">date</span> <span class=\\"token parameter variable\\">-h</span>\\n $ <span class=\\"token function\\">date</span> <span class=\\"token parameter variable\\">--help</span>\\n <span class=\\"token operator\\">&gt;</span> Usage: <span class=\\"token function\\">date</span> <span class=\\"token punctuation\\">[</span>OPTION<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">..</span>. <span class=\\"token punctuation\\">[</span>+FORMAT<span class=\\"token punctuation\\">]</span>\\n <span class=\\"token operator\\">&gt;</span>   or:  <span class=\\"token function\\">date</span> <span class=\\"token punctuation\\">[</span>-u<span class=\\"token operator\\">|</span>--utc<span class=\\"token operator\\">|</span>--universal<span class=\\"token punctuation\\">]</span> <span class=\\"token punctuation\\">[</span>MMDDhhmm<span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">[</span>CC<span class=\\"token punctuation\\">]</span>YY<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">[</span>.ss<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span>\\n <span class=\\"token operator\\">&gt;</span> Display the current <span class=\\"token function\\">time</span> <span class=\\"token keyword\\">in</span> the given FORMAT, or <span class=\\"token builtin class-name\\">set</span> the system date.\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
