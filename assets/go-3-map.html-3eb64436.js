const n=JSON.parse('{"key":"v-5faeea79","path":"/Go/tutorial/go-3-map.html","title":"Go Map","lang":"en-US","frontmatter":{"title":"Go Map","description":"Map map 是一组无序的键值对的集合 map 是引用类型, 赋值时传递的是地址 map 初始化 map 只声明不初始化取零值 nil, nil map 只能读不能写入 map 初始化未添加值是 empty map, empty map 不等于 nil map map[&lt;key type&gt;]&lt;value type&gt; // map 类型 var strMap = make(map[string]string, 1) // 声明并初始化一个 empty map, map 容量为 2 strMap[\\"a\\"] = \\"a\\" // 已初始化的 map 赋值 strMap[\\"b\\"] = \\"b\\" intMap := map[string]int { // intMap 声明并初始化, 并赋值 \\"one\\": 1, \\"two\\": 2, } Printf(\\"int map %#v\\\\n\\", intMap) Printf(\\"str map %#v\\\\n\\", strMap) Printf(\\"str map length %v\\\\n\\", len(strMap)) &gt; int map map[string]int{\\"one\\":1, \\"two\\":2} &gt; str map map[string]string{\\"a\\":\\"a\\", \\"b\\":\\"b\\"} // map 可添加数据, 允许超过容量 &gt; str map length 3 // 无法使用 cap 查看 map 容量, 可以使用 len 查看长度","date":"2023-03-23T19:21:24.000Z","category":["Go 教程"],"tag":["Go"],"head":[["meta",{"property":"og:url","content":"https://facsert.github.io/Go/tutorial/go-3-map.html"}],["meta",{"property":"og:site_name","content":"Facsert"}],["meta",{"property":"og:title","content":"Go Map"}],["meta",{"property":"og:description","content":"Map map 是一组无序的键值对的集合 map 是引用类型, 赋值时传递的是地址 map 初始化 map 只声明不初始化取零值 nil, nil map 只能读不能写入 map 初始化未添加值是 empty map, empty map 不等于 nil map map[&lt;key type&gt;]&lt;value type&gt; // map 类型 var strMap = make(map[string]string, 1) // 声明并初始化一个 empty map, map 容量为 2 strMap[\\"a\\"] = \\"a\\" // 已初始化的 map 赋值 strMap[\\"b\\"] = \\"b\\" intMap := map[string]int { // intMap 声明并初始化, 并赋值 \\"one\\": 1, \\"two\\": 2, } Printf(\\"int map %#v\\\\n\\", intMap) Printf(\\"str map %#v\\\\n\\", strMap) Printf(\\"str map length %v\\\\n\\", len(strMap)) &gt; int map map[string]int{\\"one\\":1, \\"two\\":2} &gt; str map map[string]string{\\"a\\":\\"a\\", \\"b\\":\\"b\\"} // map 可添加数据, 允许超过容量 &gt; str map length 3 // 无法使用 cap 查看 map 容量, 可以使用 len 查看长度"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-09-03T14:38:24.000Z"}],["meta",{"property":"article:author","content":"Facsert"}],["meta",{"property":"article:tag","content":"Go"}],["meta",{"property":"article:published_time","content":"2023-03-23T19:21:24.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-03T14:38:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Go Map\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-23T19:21:24.000Z\\",\\"dateModified\\":\\"2023-09-03T14:38:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Facsert\\",\\"url\\":\\"https://facsert.github.io\\",\\"email\\":\\"facsert@outlook.com\\"}]}"]]},"headers":[{"level":2,"title":"Map","slug":"map","link":"#map","children":[{"level":3,"title":"map 初始化","slug":"map-初始化","link":"#map-初始化","children":[]},{"level":3,"title":"map 传递","slug":"map-传递","link":"#map-传递","children":[]},{"level":3,"title":"map 遍历","slug":"map-遍历","link":"#map-遍历","children":[]},{"level":3,"title":"map 取值","slug":"map-取值","link":"#map-取值","children":[]},{"level":3,"title":"map 删除","slug":"map-删除","link":"#map-删除","children":[]}]}],"git":{"createdTime":1693751904000,"updatedTime":1693751904000,"contributors":[{"name":"facser","email":"facsert@outlook.com","commits":1}]},"readingTime":{"minutes":1.76,"words":527},"filePathRelative":"Go/tutorial/go-3-map.md","localizedDate":"March 23, 2023","excerpt":"<h2> Map</h2>\\n<p>map 是一组<strong>无序</strong>的键值对的集合<br>\\nmap 是引用类型, 赋值时传递的是地址</p>\\n<h3> map 初始化</h3>\\n<p>map 只声明不初始化取零值 nil, nil map 只能读不能写入<br>\\nmap 初始化未添加值是 empty map, empty map 不等于 nil map</p>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token keyword\\">map</span><span class=\\"token punctuation\\">[</span><span class=\\"token operator\\">&lt;</span>key <span class=\\"token keyword\\">type</span><span class=\\"token operator\\">&gt;</span><span class=\\"token punctuation\\">]</span><span class=\\"token operator\\">&lt;</span>value <span class=\\"token keyword\\">type</span><span class=\\"token operator\\">&gt;</span>                      <span class=\\"token comment\\">// map 类型</span>\\n\\n<span class=\\"token keyword\\">var</span> strMap <span class=\\"token operator\\">=</span> <span class=\\"token function\\">make</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">map</span><span class=\\"token punctuation\\">[</span><span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">]</span><span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span>          <span class=\\"token comment\\">// 声明并初始化一个 empty map, map 容量为 2</span>\\nstrMap<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"a\\"</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"a\\"</span>                                <span class=\\"token comment\\">// 已初始化的 map 赋值</span>\\nstrMap<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"b\\"</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"b\\"</span>\\n\\nintMap <span class=\\"token operator\\">:=</span> <span class=\\"token keyword\\">map</span><span class=\\"token punctuation\\">[</span><span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">]</span><span class=\\"token builtin\\">int</span> <span class=\\"token punctuation\\">{</span>                       <span class=\\"token comment\\">// intMap 声明并初始化, 并赋值</span>\\n   <span class=\\"token string\\">\\"one\\"</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span>\\n   <span class=\\"token string\\">\\"two\\"</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token function\\">Printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"int map %#v\\\\n\\"</span><span class=\\"token punctuation\\">,</span> intMap<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token function\\">Printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"str map %#v\\\\n\\"</span><span class=\\"token punctuation\\">,</span> strMap<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token function\\">Printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"str map length %v\\\\n\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token function\\">len</span><span class=\\"token punctuation\\">(</span>strMap<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token operator\\">&gt;</span> <span class=\\"token builtin\\">int</span> <span class=\\"token keyword\\">map</span> <span class=\\"token keyword\\">map</span><span class=\\"token punctuation\\">[</span><span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">]</span><span class=\\"token builtin\\">int</span><span class=\\"token punctuation\\">{</span><span class=\\"token string\\">\\"one\\"</span><span class=\\"token punctuation\\">:</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"two\\"</span><span class=\\"token punctuation\\">:</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">}</span>      \\n<span class=\\"token operator\\">&gt;</span> str <span class=\\"token keyword\\">map</span> <span class=\\"token keyword\\">map</span><span class=\\"token punctuation\\">[</span><span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">]</span><span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">{</span><span class=\\"token string\\">\\"a\\"</span><span class=\\"token punctuation\\">:</span><span class=\\"token string\\">\\"a\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"b\\"</span><span class=\\"token punctuation\\">:</span><span class=\\"token string\\">\\"b\\"</span><span class=\\"token punctuation\\">}</span>    <span class=\\"token comment\\">// map 可添加数据, 允许超过容量</span>\\n<span class=\\"token operator\\">&gt;</span> str <span class=\\"token keyword\\">map</span> length <span class=\\"token number\\">3</span>                               <span class=\\"token comment\\">// 无法使用 cap 查看 map 容量, 可以使用 len 查看长度</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};