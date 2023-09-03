const t=JSON.parse('{"key":"v-510595f5","path":"/Linux/Linux-2-file.html","title":"Linux 文件","lang":"en-US","frontmatter":{"title":"Linux 文件","description":"特殊目录文件 位置 全称 说明 /etc Configuration Files 系统和软件的配置文件 /usr Unix Software Resource 应用程序默认安装位置 /dev Device Files 系统外围设备 /mnt Mount Directory 空目录, 用于临时挂载文件系统 /bin User Binaries 所有用户可用的基本命令 /home Home Directories 普通用户的主目录 /proc Process Information 虚拟文件系统, 以映射系统与进程在内存中的信息","date":"2022-07-18T22:49:44.000Z","category":["Linux 教程"],"tag":["Linux"],"head":[["meta",{"property":"og:url","content":"https://facsert.github.io/Linux/Linux-2-file.html"}],["meta",{"property":"og:site_name","content":"Facsert"}],["meta",{"property":"og:title","content":"Linux 文件"}],["meta",{"property":"og:description","content":"特殊目录文件 位置 全称 说明 /etc Configuration Files 系统和软件的配置文件 /usr Unix Software Resource 应用程序默认安装位置 /dev Device Files 系统外围设备 /mnt Mount Directory 空目录, 用于临时挂载文件系统 /bin User Binaries 所有用户可用的基本命令 /home Home Directories 普通用户的主目录 /proc Process Information 虚拟文件系统, 以映射系统与进程在内存中的信息"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-09-03T14:38:24.000Z"}],["meta",{"property":"article:author","content":"Facsert"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:published_time","content":"2022-07-18T22:49:44.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-03T14:38:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux 文件\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-07-18T22:49:44.000Z\\",\\"dateModified\\":\\"2023-09-03T14:38:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Facsert\\",\\"url\\":\\"https://facsert.github.io\\",\\"email\\":\\"facsert@outlook.com\\"}]}"]]},"headers":[{"level":2,"title":"特殊目录文件","slug":"特殊目录文件","link":"#特殊目录文件","children":[]},{"level":2,"title":"文件查看","slug":"文件查看","link":"#文件查看","children":[{"level":3,"title":"tree","slug":"tree","link":"#tree","children":[]},{"level":3,"title":"pwd","slug":"pwd","link":"#pwd","children":[]},{"level":3,"title":"dirs","slug":"dirs","link":"#dirs","children":[]},{"level":3,"title":"ls","slug":"ls","link":"#ls","children":[]},{"level":3,"title":"file","slug":"file","link":"#file","children":[]}]},{"level":2,"title":"文件操作","slug":"文件操作","link":"#文件操作","children":[{"level":3,"title":"cd","slug":"cd","link":"#cd","children":[]},{"level":3,"title":"mkdir","slug":"mkdir","link":"#mkdir","children":[]},{"level":3,"title":"touch","slug":"touch","link":"#touch","children":[]},{"level":3,"title":"rm","slug":"rm","link":"#rm","children":[]},{"level":3,"title":"mv","slug":"mv","link":"#mv","children":[]},{"level":3,"title":"cp","slug":"cp","link":"#cp","children":[]}]},{"level":2,"title":"文件查找","slug":"文件查找","link":"#文件查找","children":[{"level":3,"title":"find","slug":"find","link":"#find","children":[]}]},{"level":2,"title":"文件内容","slug":"文件内容","link":"#文件内容","children":[{"level":3,"title":"cat","slug":"cat","link":"#cat","children":[]}]}],"git":{"createdTime":1693751904000,"updatedTime":1693751904000,"contributors":[{"name":"facser","email":"facsert@outlook.com","commits":1}]},"readingTime":{"minutes":5,"words":1501},"filePathRelative":"Linux/Linux-2-file.md","localizedDate":"July 18, 2022","excerpt":"<h2> 特殊目录文件</h2>\\n<table>\\n<thead>\\n<tr>\\n<th style=\\"text-align:center\\">位置</th>\\n<th style=\\"text-align:left\\">全称</th>\\n<th style=\\"text-align:left\\">说明</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td style=\\"text-align:center\\"><code>/etc</code></td>\\n<td style=\\"text-align:left\\">Configuration Files</td>\\n<td style=\\"text-align:left\\">系统和软件的配置文件</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\"><code>/usr</code></td>\\n<td style=\\"text-align:left\\">Unix Software Resource</td>\\n<td style=\\"text-align:left\\">应用程序默认安装位置</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\"><code>/dev</code></td>\\n<td style=\\"text-align:left\\">Device Files</td>\\n<td style=\\"text-align:left\\">系统外围设备</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\"><code>/mnt</code></td>\\n<td style=\\"text-align:left\\">Mount Directory</td>\\n<td style=\\"text-align:left\\">空目录, 用于临时挂载文件系统</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\"><code>/bin</code></td>\\n<td style=\\"text-align:left\\">User Binaries</td>\\n<td style=\\"text-align:left\\">所有用户可用的基本命令</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\"><code>/home</code></td>\\n<td style=\\"text-align:left\\">Home Directories</td>\\n<td style=\\"text-align:left\\">普通用户的主目录</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\"><code>/proc</code></td>\\n<td style=\\"text-align:left\\">Process Information</td>\\n<td style=\\"text-align:left\\">虚拟文件系统, 以映射系统与进程在内存中的信息</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{t as data};