import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as p,c as i,a as s,b as a,e,f as t}from"./app-8da2a3ac.js";const c={},r={href:"https://wangdoc.com/bash/",target:"_blank",rel:"noopener noreferrer"},d=t(`<p>BASH 基础语法</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token builtin class-name">command</span> <span class="token operator">&lt;</span>option<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>args<span class="token operator">&gt;</span>                       <span class="token comment"># shell 命令一般格式</span>

 $ <span class="token function">cat</span> <span class="token parameter variable">-n</span> log.txt                                <span class="token comment"># 读取 log.txt 文件, 命令 cat, 选项 -n, 参数 log.txt</span>
 <span class="token operator">&gt;</span> <span class="token number">1</span> 1st 
 <span class="token operator">&gt;</span> <span class="token number">2</span> 2nd
 <span class="token operator">&gt;</span> <span class="token number">3</span> 3rd

 $ <span class="token builtin class-name">command</span> <span class="token operator">|</span> <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span>               <span class="token comment"># 命令管道</span>
 $ <span class="token function">cat</span> log.txt <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;3rd&quot;</span>                      <span class="token comment"># 管道前的值作为管道后命令的参数</span>
 <span class="token operator">&gt;</span> 3rd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="打印输出" tabindex="-1"><a class="header-anchor" href="#打印输出" aria-hidden="true">#</a> 打印输出</h2>`,3),m={id:"echo",tabindex:"-1"},u=s("a",{class:"header-anchor",href:"#echo","aria-hidden":"true"},"#",-1),v={href:"https://linux.alianga.com/c/echo.html",target:"_blank",rel:"noopener noreferrer"},b=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token builtin class-name">echo</span> <span class="token operator">&lt;</span>opt<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>string<span class="token operator">&gt;</span>                           <span class="token comment"># 打印 string 内容, 不激活转义符号</span>
 $ <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token operator">&lt;</span>string<span class="token operator">&gt;</span>                              <span class="token comment"># 激活字符中的转义字符</span>

 $ <span class="token builtin class-name">echo</span> <span class="token string">&quot;first <span class="token entity" title="\\n">\\n</span>second&quot;</span>                        
 <span class="token operator">&gt;</span> first <span class="token punctuation">\\</span>nsecond

 $ <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;first <span class="token entity" title="\\n">\\n</span>second&quot;</span>                        
 <span class="token operator">&gt;</span> first 
 <span class="token operator">&gt;</span> second
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注: 更多转义符号浏览 <a href="#%E5%B8%B8%E7%94%A8%E8%BD%AC%E4%B9%89%E7%AC%A6%E5%8F%B7">转义符号</a></p>`,2),k={id:"printf",tabindex:"-1"},h=s("a",{class:"header-anchor",href:"#printf","aria-hidden":"true"},"#",-1),g={href:"https://linux.alianga.com/c/printf.html",target:"_blank",rel:"noopener noreferrer"},f=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token builtin class-name">printf</span> <span class="token operator">&lt;</span>format string<span class="token operator">&gt;</span>                        <span class="token comment"># 格式化输出字符串</span>

 $ <span class="token builtin class-name">printf</span> <span class="token string">&quot;%s length is %.3f&quot;</span> <span class="token string">&quot;line&quot;</span> <span class="token string">&quot;4.53245&quot;</span>   <span class="token comment"># 字符串格式化 </span>
 <span class="token operator">&gt;</span> line length is <span class="token number">4.523</span>

 $ <span class="token builtin class-name">printf</span> <span class="token string">&quot;%-6s_%s&quot;</span> <span class="token string">&quot;left&quot;</span> <span class="token string">&quot;right&quot;</span>               <span class="token comment"># 默认右对齐, 带 - 左对齐, 数字表示占位</span>
 <span class="token operator">&gt;</span> left  _rightf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变量引用" tabindex="-1"><a class="header-anchor" href="#变量引用" aria-hidden="true">#</a> 变量引用</h2><p>BASH 只有字符串一种数据类型, 想要操作字符串或者引用变量需要使用特殊符号</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token assign-left variable">variable</span><span class="token operator">=</span><span class="token string">&quot;hello world&quot;</span>                        <span class="token comment"># 变量赋值, &#39;=&#39; 号前后不允许空格</span>
 $ <span class="token assign-left variable">temp</span><span class="token operator">=</span>hello_world                              <span class="token comment"># 字符串无引号赋值时不允许空格</span>

 $ <span class="token builtin class-name">echo</span> variable                                 <span class="token comment"># 把打印内容当做字符串直接打印 </span>
 <span class="token operator">&gt;</span> variable

 $ <span class="token builtin class-name">echo</span> <span class="token variable">$variable</span>                                <span class="token comment"># 打印变量的值 </span>
 <span class="token operator">&gt;</span> hello world                

 $ <span class="token builtin class-name">echo</span> say_<span class="token variable">\${temp}</span>_to_code                      <span class="token comment"># 字符连用时, 用 {} 区分变量</span>
 <span class="token operator">&gt;</span> say_hello_world_to_code
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>建议字符串操作时, 添加引号使变量操作更加明确(易于区分编辑器中字符串与变量)</p><h2 id="引号" tabindex="-1"><a class="header-anchor" href="#引号" aria-hidden="true">#</a> 引号</h2><h3 id="单引号与双引号" tabindex="-1"><a class="header-anchor" href="#单引号与双引号" aria-hidden="true">#</a> 单引号与双引号</h3><p>BASH 区分单引号和双引号, 单引号内全部为当做字符(转义符有效), 双引号会激活变量引用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;petter&quot;</span>

 $ <span class="token builtin class-name">echo</span> <span class="token string">&#39;hello\\t$name&#39;</span>                           <span class="token comment"># 单引号禁止变量名扩展, 原样打印</span>
 <span class="token operator">&gt;</span> hello  <span class="token variable">$name</span>

 $ <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello<span class="token entity" title="\\t">\\t</span><span class="token variable">$name</span>&quot;</span>                           <span class="token comment"># 双引号允许变量名扩展</span>
 <span class="token operator">&gt;</span> hello  petter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="反引号" tabindex="-1"><a class="header-anchor" href="#反引号" aria-hidden="true">#</a> 反引号</h3><p>反引号用于执行命令, 一般用于将命令结果赋值给变量</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span><span class="token variable">\`</span></span>                                   <span class="token comment"># 将 data 命令结果赋值给 time</span>
 $ <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$time</span>&quot;</span>                                  <span class="token comment"># 打印变量值</span>
 <span class="token operator">&gt;</span> Wed Aug <span class="token number">10</span> <span class="token number">21</span>:49:38 HKT <span class="token number">2022</span>

 $ <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span><span class="token variable">)</span></span>                                  <span class="token comment"># 与反引号效果一致</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于反引号易于与单引号混淆, 建议使用 <code>$()</code> 方式, 便于区分</p><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><h3 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h3><p>BASH 环境中的变量, 系统自定义的全局变量, 变量名全为大写, 用于保存环境信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token function">env</span>                                           <span class="token comment"># 显示所有环境变量</span>

 $ <span class="token builtin class-name">echo</span> <span class="token environment constant">$HOME</span>                                    <span class="token comment"># 打印用户目录</span>
 <span class="token operator">&gt;</span> /home/facser

 $ <span class="token builtin class-name">echo</span> <span class="token environment constant">$PATH</span>                                    <span class="token comment"># 运行环境目录组成的列表</span>

 $ <span class="token builtin class-name">export</span> <span class="token operator">&lt;</span>var<span class="token operator">&gt;=</span><span class="token operator">&lt;</span>val<span class="token operator">&gt;</span>                            <span class="token comment"># 自定义环境变量, 新开窗口或重启失效</span>
 $ <span class="token builtin class-name">unset</span> <span class="token operator">&lt;</span>var<span class="token operator">&gt;</span>                                   <span class="token comment"># 删除变量, 环境变量和自定义变量均可</span>
 $ <span class="token builtin class-name">set</span> <span class="token operator">&lt;</span>var<span class="token operator">&gt;</span>                                     <span class="token comment"># 显示所有 shell 变量</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注: 更多环境变量浏览 <a href="#%E5%B8%B8%E7%94%A8%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F">环境变量</a></p><h3 id="自定义变量" tabindex="-1"><a class="header-anchor" href="#自定义变量" aria-hidden="true">#</a> 自定义变量</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token operator">&lt;</span>var<span class="token operator">&gt;=</span><span class="token operator">&lt;</span>val<span class="token operator">&gt;</span>                                   <span class="token comment"># 变量定义, 等号两边不允许空格</span>
 
 $ $<span class="token operator">&lt;</span>char<span class="token operator">&gt;</span>                                       <span class="token comment"># 如 $? #! 等特殊含义变量</span>
 $ <span class="token builtin class-name">echo</span> <span class="token variable">$?</span>                                       <span class="token comment"># 上个命令返回值</span>
 <span class="token operator">&gt;</span> <span class="token number">0</span>                                             <span class="token comment"># 0 表示命令执行成功, 其它只表示失败或错误</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注: 更多特殊变量 <a href="#%E7%89%B9%E6%AE%8A%E5%8F%98%E9%87%8F">特殊变量</a></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token variable">\${variable<span class="token operator">:-</span>value}</span>                            <span class="token comment"># 变量为空或不存在返回 value</span>
 $ <span class="token variable">\${variable<span class="token operator">:+</span>value}</span>                            <span class="token comment"># 变量存在且不为空返回 value</span>

 $ <span class="token variable">\${variable<span class="token operator">:=</span>value}</span>                            <span class="token comment"># 变量为空或不存在设置变量为 value, 返回 values</span>
 $ <span class="token variable">\${variable<span class="token operator">:?</span>message}</span>                          <span class="token comment"># 变量为空或不存在打印 message, 并退出</span>

 $ <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello <span class="token variable">\${name<span class="token operator">:-</span>petter}</span>&quot;</span>
 <span class="token operator">&gt;</span> hello petter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token builtin class-name">declare</span> <span class="token operator">&lt;</span>opt<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>var<span class="token operator">&gt;=</span><span class="token operator">&lt;</span>val<span class="token operator">&gt;</span>                     <span class="token comment"># 定义特殊类型变量</span>

 $ <span class="token builtin class-name">declare</span> <span class="token parameter variable">-i</span> <span class="token assign-left variable">int1</span><span class="token operator">=</span><span class="token number">8</span> <span class="token assign-left variable">int2</span><span class="token operator">=</span><span class="token number">6</span> <span class="token function">sum</span>                  <span class="token comment"># 定义整数变量, 可直接数学运算</span>
 $ <span class="token assign-left variable">sum</span><span class="token operator">=</span>int1*int2<span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$sum</span>                      <span class="token comment"># 声明整数变量可直接数学运算</span>
 <span class="token operator">&gt;</span> <span class="token number">14</span>
 
 $ <span class="token builtin class-name">declare</span> <span class="token parameter variable">-a</span> <span class="token assign-left variable">arr</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">)</span>                        <span class="token comment"># 定义数组变量</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token builtin class-name">let</span> <span class="token operator">&lt;</span>var<span class="token operator">&gt;=</span><span class="token operator">&lt;</span>expression<span class="token operator">&gt;</span>                        <span class="token comment"># 声明含算术表达式的变量</span>

 $ <span class="token builtin class-name">let</span> <span class="token string">&quot;sum = 7 + 8&quot;</span>                                 
 $ <span class="token builtin class-name">let</span> <span class="token string">&quot;add = sum++&quot;</span>
 $ <span class="token builtin class-name">echo</span> <span class="token string">&quot;sum: <span class="token variable">$sum</span>  add: <span class="token variable">$add</span>&quot;</span>
 <span class="token operator">&gt;</span> sum: <span class="token number">15</span> add: <span class="token number">16</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="输出重定向" tabindex="-1"><a class="header-anchor" href="#输出重定向" aria-hidden="true">#</a> 输出重定向</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token builtin class-name">command</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>                                  <span class="token comment"># 1 表示标准输出 2 表示标准错误输出</span>
 <span class="token operator">&gt;</span> zsh: <span class="token builtin class-name">command</span> not found: data

 $ <span class="token builtin class-name">command</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/dev/null                           <span class="token comment"># 将错误写入 null, 即不显示错误</span>
 <span class="token operator">&gt;</span>

 $ <span class="token builtin class-name">command</span> <span class="token operator">&gt;</span> <span class="token function">file</span>                                <span class="token comment"># 清空文件内容, 命令标准输出写入文件</span>
 $ <span class="token function">date</span> <span class="token operator">&gt;</span> log.txt<span class="token punctuation">;</span> <span class="token function">cat</span> log.txt
 <span class="token operator">&gt;</span> Mon Jul  <span class="token number">3</span> <span class="token number">23</span>:05:14 CST <span class="token number">2023</span>

 $ <span class="token builtin class-name">command</span> <span class="token operator">&gt;&gt;</span> <span class="token function">file</span>                               <span class="token comment"># 保留文件内容, 命令标准输出追加入文件</span>
 $ <span class="token function">date</span> <span class="token operator">&gt;&gt;</span> log.txt<span class="token punctuation">;</span> <span class="token function">cat</span> log.txt
 <span class="token operator">&gt;</span> Mon Jul  <span class="token number">3</span> <span class="token number">23</span>:05:14 CST <span class="token number">2023</span>
 <span class="token operator">&gt;</span> Mon Jul  <span class="token number">3</span> <span class="token number">23</span>:05:38 CST <span class="token number">2023</span>

 $ <span class="token builtin class-name">command</span> <span class="token operator">&gt;</span> /dev/null                           <span class="token comment"># 命令标准输出写入 null, 即不显示正常结果</span>
 <span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用转义符号" tabindex="-1"><a class="header-anchor" href="#常用转义符号" aria-hidden="true">#</a> 常用转义符号</h2><table><thead><tr><th style="text-align:left;">符号</th><th style="text-align:left;">含义</th></tr></thead><tbody><tr><td style="text-align:left;"><code>\\n</code></td><td style="text-align:left;">换行符</td></tr><tr><td style="text-align:left;"><code>\\r</code></td><td style="text-align:left;">回车, 回到行首</td></tr><tr><td style="text-align:left;"><code>\\t</code></td><td style="text-align:left;">Tab 键</td></tr><tr><td style="text-align:left;"><code>\\b</code></td><td style="text-align:left;">光标左移 1 位</td></tr></tbody></table><h2 id="常用环境变量" tabindex="-1"><a class="header-anchor" href="#常用环境变量" aria-hidden="true">#</a> 常用环境变量</h2><table><thead><tr><th style="text-align:left;">变量</th><th style="text-align:left;">含义</th></tr></thead><tbody><tr><td style="text-align:left;"><code>HOME</code></td><td style="text-align:left;">当前用户目录</td></tr><tr><td style="text-align:left;"><code>USER</code></td><td style="text-align:left;">当前用户</td></tr><tr><td style="text-align:left;"><code>SHELL</code></td><td style="text-align:left;">当前使用的 shell</td></tr><tr><td style="text-align:left;"><code>PATH</code></td><td style="text-align:left;">环境变量</td></tr><tr><td style="text-align:left;"><code>PWD</code></td><td style="text-align:left;">当前目录</td></tr></tbody></table><h2 id="特殊变量" tabindex="-1"><a class="header-anchor" href="#特殊变量" aria-hidden="true">#</a> 特殊变量</h2><table><thead><tr><th style="text-align:left;">变量</th><th style="text-align:left;">含义</th></tr></thead><tbody><tr><td style="text-align:left;"><code>$?</code></td><td style="text-align:left;">上一个命令的返回值</td></tr><tr><td style="text-align:left;"><code>$!</code></td><td style="text-align:left;">上一个命令的 pid</td></tr><tr><td style="text-align:left;"><code>$$</code></td><td style="text-align:left;">当前 shell 进程</td></tr><tr><td style="text-align:left;"><code>$@</code></td><td style="text-align:left;">当前函数或脚本的所有参数</td></tr></tbody></table>`,32);function $(x,_){const n=o("ExternalLinkIcon");return p(),i("div",null,[s("p",null,[s("a",r,[a("BASH 教程"),e(n)])]),d,s("h3",m,[u,a(),s("a",v,[a("echo"),e(n)])]),b,s("h3",k,[h,a(),s("a",g,[a("printf"),e(n)])]),f])}const E=l(c,[["render",$],["__file","Bash-1-basic.html.vue"]]);export{E as default};
