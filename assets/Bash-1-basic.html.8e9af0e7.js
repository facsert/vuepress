import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as o,e as s,d as e,f as a,a as t,r as c}from"./app.f41c617f.js";const r={},p=s("h1",{id:"bash",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#bash","aria-hidden":"true"},"#"),a(" BASH")],-1),d=s("p",null,[a("\u5BF9\u4E8E\u811A\u672C\u8BED\u8A00\u8FD8\u662F\u6BD4\u8F83\u559C\u6B22 "),s("code",null,"python"),a(" \u4F46\u662F\u65F6\u4E0D\u65F6\u8981\u7528\u5230 "),s("code",null,"shell"),a(", \u6BCF\u6B21\u770B\u4E00\u70B9\u6CA1\u591A\u4E45\u53C8\u5FD8\u4E86, \u6240\u4EE5\u60F3\u7CFB\u7EDF\u6027\u5B66\u4E60\u4E00\u4E0B, \u907F\u514D\u6D6A\u8D39\u65F6\u95F4.")],-1),m={href:"https://wangdoc.com/bash/",target:"_blank",rel:"noopener noreferrer"},u=a("BASH \u6559\u7A0B"),v=t(`<h2 id="bash-basic" tabindex="-1"><a class="header-anchor" href="#bash-basic" aria-hidden="true">#</a> Bash Basic</h2><p>BASH \u57FA\u7840\u8BED\u6CD5</p><h3 id="\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4" aria-hidden="true">#</a> \u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> $ <span class="token builtin class-name">command</span> <span class="token operator">&lt;</span>opt<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>args<span class="token operator">&gt;</span>                          <span class="token comment"># shell \u547D\u4EE4\u4E00\u822C\u683C\u5F0F</span>

 $ <span class="token function">cat</span> <span class="token parameter variable">-n</span> log.txt                                <span class="token comment"># \u547D\u4EE4 cat, \u9009\u9879 -n, \u53C2\u6570 log.txt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>shell \u547D\u4EE4\u57FA\u672C\u6309\u7167\u4E0A\u8FF0\u683C\u5F0F, \u547D\u4EE4\u4E0E\u9009\u9879, \u53C2\u6570\u4E4B\u95F4\u4EE5\u7A7A\u683C\u5206\u5272</p><h3 id="\u6253\u5370\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u6253\u5370\u8F93\u51FA" aria-hidden="true">#</a> \u6253\u5370\u8F93\u51FA</h3>`,6),b={id:"echo",tabindex:"-1"},h=s("a",{class:"header-anchor",href:"#echo","aria-hidden":"true"},"#",-1),k=a(),g={href:"https://linux.alianga.com/c/echo.html",target:"_blank",rel:"noopener noreferrer"},f=a("echo"),x=t(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> $ <span class="token builtin class-name">echo</span> <span class="token operator">&lt;</span>opt<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>string<span class="token operator">&gt;</span>                           <span class="token comment"># \u6253\u5370 string \u5185\u5BB9, \u4E0D\u6FC0\u6D3B\u8F6C\u4E49\u7B26\u53F7</span>
 $ <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token operator">&lt;</span>string<span class="token operator">&gt;</span>                              <span class="token comment"># \u6FC0\u6D3B\u5B57\u7B26\u4E2D\u7684\u8F6C\u4E49\u5B57\u7B26</span>

 $ <span class="token builtin class-name">echo</span> <span class="token string">&quot;first <span class="token entity" title="\\n">\\n</span>second&quot;</span>                        
 <span class="token operator">&gt;</span> first <span class="token punctuation">\\</span>nsecond

 $ <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;first <span class="token entity" title="\\n">\\n</span>second&quot;</span>                        
 <span class="token operator">&gt;</span> first 
 <span class="token operator">&gt;</span> second
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8: \u66F4\u591A\u8F6C\u4E49\u7B26\u53F7\u6D4F\u89C8 <a href="#%E5%B8%B8%E7%94%A8%E8%BD%AC%E4%B9%89%E7%AC%A6%E5%8F%B7">\u8F6C\u4E49\u7B26\u53F7</a></p>`,2),$={id:"printf",tabindex:"-1"},_=s("a",{class:"header-anchor",href:"#printf","aria-hidden":"true"},"#",-1),y=a(),q={href:"https://linux.alianga.com/c/printf.html",target:"_blank",rel:"noopener noreferrer"},E=a("printf"),B=t(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> $ <span class="token builtin class-name">printf</span> <span class="token operator">&lt;</span>format string<span class="token operator">&gt;</span>                        <span class="token comment"># \u683C\u5F0F\u5316\u8F93\u51FA\u5B57\u7B26\u4E32</span>

 $ <span class="token builtin class-name">printf</span> <span class="token string">&quot;%s length is %.3f&quot;</span> <span class="token string">&quot;line&quot;</span> <span class="token string">&quot;4.53245&quot;</span>   <span class="token comment"># \u5B57\u7B26\u4E32\u683C\u5F0F\u5316 </span>
 <span class="token operator">&gt;</span> line length is <span class="token number">4.523</span>

 $ <span class="token builtin class-name">printf</span> <span class="token string">&quot;%-6s_%s&quot;</span> <span class="token string">&quot;left&quot;</span> <span class="token string">&quot;right&quot;</span>               <span class="token comment"># \u9ED8\u8BA4\u53F3\u5BF9\u9F50, \u5E26 - \u5DE6\u5BF9\u9F50, \u6570\u5B57\u8868\u793A\u5360\u4F4D</span>
 <span class="token operator">&gt;</span> left  _rightf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u53D8\u91CF\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u5F15\u7528" aria-hidden="true">#</a> \u53D8\u91CF\u5F15\u7528</h3><p>BASH \u53EA\u6709\u5B57\u7B26\u4E32\u4E00\u79CD\u6570\u636E\u7C7B\u578B, \u60F3\u8981\u64CD\u4F5C\u5B57\u7B26\u4E32\u6216\u8005\u5F15\u7528\u53D8\u91CF\u9700\u8981\u4F7F\u7528\u7279\u6B8A\u7B26\u53F7</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> $ <span class="token assign-left variable">varibal</span><span class="token operator">=</span><span class="token string">&quot;hellow world&quot;</span>                        <span class="token comment"># \u53D8\u91CF\u8D4B\u503C, &#39;=&#39; \u53F7\u524D\u540E\u4E0D\u5141\u8BB8\u7A7A\u683C</span>
 $ <span class="token assign-left variable">temp</span><span class="token operator">=</span>hellow_world                             <span class="token comment"># \u5B57\u7B26\u4E32\u65E0\u5F15\u53F7\u8D4B\u503C\u65F6\u4E0D\u5141\u8BB8\u7A7A\u683C</span>

 $ <span class="token builtin class-name">echo</span> varibal                                  <span class="token comment"># \u628A\u6253\u5370\u5185\u5BB9\u5F53\u505A\u5B57\u7B26\u4E32\u76F4\u63A5\u6253\u5370 </span>
 <span class="token operator">&gt;</span> varibal

 $ <span class="token builtin class-name">echo</span> <span class="token variable">$varibal</span>                                 <span class="token comment"># \u6253\u5370\u53D8\u91CF\u7684\u503C </span>
 <span class="token operator">&gt;</span> hellow world                

 $ <span class="token builtin class-name">echo</span> facser <span class="token function">write</span> <span class="token variable">\${temp}</span>_baba                <span class="token comment"># \u5B57\u7B26\u8FDE\u7528\u65F6, \u7528 {} \u533A\u5206\u53D8\u91CF</span>
 <span class="token operator">&gt;</span> facser <span class="token function">write</span> hellow_world_baba
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5EFA\u8BAE\u5B57\u7B26\u4E32\u64CD\u4F5C\u65F6, \u6DFB\u52A0\u5F15\u53F7\u4F7F\u53D8\u91CF\u64CD\u4F5C\u66F4\u52A0\u660E\u786E(\u6613\u4E8E\u533A\u5206\u7F16\u8F91\u5668\u4E2D\u5B57\u7B26\u4E32\u4E0E\u53D8\u91CF)</p><h3 id="\u5F15\u53F7" tabindex="-1"><a class="header-anchor" href="#\u5F15\u53F7" aria-hidden="true">#</a> \u5F15\u53F7</h3><h4 id="\u5355\u5F15\u53F7\u4E0E\u53CC\u5F15\u53F7" tabindex="-1"><a class="header-anchor" href="#\u5355\u5F15\u53F7\u4E0E\u53CC\u5F15\u53F7" aria-hidden="true">#</a> \u5355\u5F15\u53F7\u4E0E\u53CC\u5F15\u53F7</h4><p>BASH \u533A\u5206\u5355\u5F15\u53F7\u548C\u53CC\u5F15\u53F7, \u5355\u5F15\u53F7\u5185\u5168\u90E8\u4E3A\u5F53\u505A\u5B57\u7B26(\u8F6C\u4E49\u7B26\u6709\u6548), \u53CC\u5F15\u53F7\u4F1A\u6FC0\u6D3B\u53D8\u91CF\u5F15\u7528</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> $ <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;facser&quot;</span>

 $ <span class="token builtin class-name">echo</span> <span class="token string">&#39;hellow\\t$name&#39;</span>                          <span class="token comment"># \u5355\u5F15\u53F7\u7981\u6B62\u53D8\u91CF\u540D\u6269\u5C55, \u539F\u6837\u6253\u5370</span>
 <span class="token operator">&gt;</span> hellow  <span class="token variable">$name</span>

 $ <span class="token builtin class-name">echo</span> <span class="token string">&quot;hellow<span class="token entity" title="\\t">\\t</span><span class="token variable">$name</span>&quot;</span>                          <span class="token comment"># \u53CC\u5F15\u53F7\u5141\u8BB8\u53D8\u91CF\u540D\u6269\u5C55</span>
 <span class="token operator">&gt;</span> hellow  facser
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u53CD\u5F15\u53F7" tabindex="-1"><a class="header-anchor" href="#\u53CD\u5F15\u53F7" aria-hidden="true">#</a> \u53CD\u5F15\u53F7</h4><p>\u53CD\u5F15\u53F7\u7528\u4E8E\u6267\u884C\u547D\u4EE4, \u4E00\u822C\u7528\u4E8E\u5C06\u547D\u4EE4\u7ED3\u679C\u8D4B\u503C\u7ED9\u53D8\u91CF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> $ <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span><span class="token variable">\`</span></span>                                   <span class="token comment"># \u5C06 data \u547D\u4EE4\u7ED3\u679C\u8D4B\u503C\u7ED9 time</span>
 $ <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$time</span>&quot;</span>                                  <span class="token comment"># \u6253\u5370\u53D8\u91CF\u503C</span>
 <span class="token operator">&gt;</span> Wed Aug <span class="token number">10</span> <span class="token number">21</span>:49:38 HKT <span class="token number">2022</span>

 $ <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span><span class="token variable">)</span></span>                                  <span class="token comment"># \u4E0E\u53CD\u5F15\u53F7\u6548\u679C\u4E00\u81F4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7531\u4E8E\u53CD\u5F15\u53F7\u6613\u4E8E\u4E0E\u5355\u5F15\u53F7\u6DF7\u6DC6, \u5EFA\u8BAE\u4F7F\u7528 <code>$()</code> \u65B9\u5F0F, \u4FBF\u4E8E\u533A\u5206</p><h3 id="\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF" aria-hidden="true">#</a> \u53D8\u91CF</h3><h4 id="\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u73AF\u5883\u53D8\u91CF</h4><p>BASH \u73AF\u5883\u4E2D\u7684\u53D8\u91CF, \u7CFB\u7EDF\u81EA\u5B9A\u4E49\u7684\u5168\u5C40\u53D8\u91CF, \u53D8\u91CF\u540D\u5168\u4E3A\u5927\u5199, \u7528\u4E8E\u4FDD\u5B58\u73AF\u5883\u4FE1\u606F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> $ <span class="token function">env</span>                                           <span class="token comment"># \u663E\u793A\u6240\u6709\u73AF\u5883\u53D8\u91CF</span>

 $ <span class="token builtin class-name">echo</span> <span class="token environment constant">$HOME</span>                                    <span class="token comment"># \u6253\u5370\u7528\u6237\u76EE\u5F55</span>
 <span class="token operator">&gt;</span> /home/facser

 $ <span class="token builtin class-name">echo</span> <span class="token environment constant">$PATH</span>                                    <span class="token comment"># \u8FD0\u884C\u73AF\u5883\u76EE\u5F55\u7EC4\u6210\u7684\u5217\u8868</span>

 $ <span class="token builtin class-name">export</span> <span class="token operator">&lt;</span>var<span class="token operator">&gt;=</span><span class="token operator">&lt;</span>val<span class="token operator">&gt;</span>                            <span class="token comment"># \u81EA\u5B9A\u4E49\u73AF\u5883\u53D8\u91CF, \u65B0\u5F00\u7A97\u53E3\u6216\u91CD\u542F\u5931\u6548</span>
 $ <span class="token builtin class-name">unset</span> <span class="token operator">&lt;</span>var<span class="token operator">&gt;</span>                                   <span class="token comment"># \u5220\u9664\u53D8\u91CF, \u73AF\u5883\u53D8\u91CF\u548C\u81EA\u5B9A\u4E49\u53D8\u91CF\u5747\u53EF</span>
 $ <span class="token builtin class-name">set</span> <span class="token operator">&lt;</span>var<span class="token operator">&gt;</span>                                     <span class="token comment"># \u663E\u793A\u6240\u6709 shell \u53D8\u91CF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8: \u66F4\u591A\u73AF\u5883\u53D8\u91CF\u6D4F\u89C8 <a href="#%E5%B8%B8%E7%94%A8%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F">\u73AF\u5883\u53D8\u91CF</a></p><h4 id="\u81EA\u5B9A\u4E49\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u53D8\u91CF" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u53D8\u91CF</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> $ <span class="token operator">&lt;</span>var<span class="token operator">&gt;=</span><span class="token operator">&lt;</span>val<span class="token operator">&gt;</span>                                   <span class="token comment"># \u53D8\u91CF\u5B9A\u4E49, \u7B49\u53F7\u4E24\u8FB9\u4E0D\u5141\u8BB8\u7A7A\u683C</span>
 
 $ $<span class="token operator">&lt;</span>char<span class="token operator">&gt;</span>                                       <span class="token comment"># \u5982 $? #! \u7B49\u7279\u6B8A\u542B\u4E49\u53D8\u91CF</span>
 $ <span class="token builtin class-name">echo</span> <span class="token variable">$?</span>                                       <span class="token comment"># \u4E0A\u4E2A\u547D\u4EE4\u8FD4\u56DE\u503C</span>
 <span class="token operator">&gt;</span> <span class="token number">0</span>                                             <span class="token comment"># 0 \u8868\u793A\u547D\u4EE4\u6267\u884C\u6210\u529F, \u5176\u5B83\u53EA\u8868\u793A\u5931\u8D25\u6216\u9519\u8BEF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8: \u66F4\u591A\u7279\u6B8A\u53D8\u91CF <a href="#%E7%89%B9%E6%AE%8A%E5%8F%98%E9%87%8F">\u7279\u6B8A\u53D8\u91CF</a></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> $ <span class="token variable">\${variable<span class="token operator">:-</span>value}</span>                            <span class="token comment"># \u53D8\u91CF\u4E3A\u7A7A\u6216\u4E0D\u5B58\u5728\u8FD4\u56DE value</span>
 $ <span class="token variable">\${variable<span class="token operator">:+</span>value}</span>                            <span class="token comment"># \u53D8\u91CF\u5B58\u5728\u4E14\u4E0D\u4E3A\u7A7A\u8FD4\u56DE value</span>

 $ <span class="token variable">\${variable<span class="token operator">:=</span>value}</span>                            <span class="token comment"># \u53D8\u91CF\u4E3A\u7A7A\u6216\u4E0D\u5B58\u5728\u8BBE\u7F6E\u53D8\u91CF\u4E3A value, \u8FD4\u56DE values</span>
 $ <span class="token variable">\${variable<span class="token operator">:?</span>message}</span>                          <span class="token comment"># \u53D8\u91CF\u4E3A\u7A7A\u6216\u4E0D\u5B58\u5728\u6253\u5370 message, \u5E76\u9000\u51FA</span>

 $ <span class="token builtin class-name">echo</span> <span class="token string">&quot;hellow <span class="token variable">\${name<span class="token operator">:-</span>facser}</span>&quot;</span>
 <span class="token operator">&gt;</span> hellow facser
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> $ <span class="token builtin class-name">declare</span> <span class="token operator">&lt;</span>opt<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>var<span class="token operator">&gt;=</span><span class="token operator">&lt;</span>val<span class="token operator">&gt;</span>                     <span class="token comment"># \u5B9A\u4E49\u7279\u6B8A\u7C7B\u578B\u53D8\u91CF</span>

 $ <span class="token builtin class-name">declare</span> <span class="token parameter variable">-i</span> <span class="token assign-left variable">int1</span><span class="token operator">=</span><span class="token number">8</span> <span class="token assign-left variable">int2</span><span class="token operator">=</span><span class="token number">6</span> <span class="token function">sum</span>                  <span class="token comment"># \u5B9A\u4E49\u6574\u6570\u53D8\u91CF, \u53EF\u76F4\u63A5\u6570\u5B66\u8FD0\u7B97</span>
 $ <span class="token assign-left variable">sum</span><span class="token operator">=</span>int1*int2<span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$sum</span>                      <span class="token comment"># \u58F0\u660E\u6574\u6570\u53D8\u91CF\u53EF\u76F4\u63A5\u6570\u5B66\u8FD0\u7B97</span>
 <span class="token operator">&gt;</span> <span class="token number">14</span>
 
 $ <span class="token builtin class-name">declare</span> <span class="token parameter variable">-a</span> <span class="token assign-left variable">arr</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">)</span>                        <span class="token comment"># \u5B9A\u4E49\u6570\u7EC4\u53D8\u91CF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> $ <span class="token builtin class-name">let</span> <span class="token operator">&lt;</span>var<span class="token operator">&gt;=</span><span class="token operator">&lt;</span>expression<span class="token operator">&gt;</span>                        <span class="token comment"># \u58F0\u660E\u542B\u7B97\u672F\u8868\u8FBE\u5F0F\u7684\u53D8\u91CF</span>

 $ <span class="token builtin class-name">let</span> <span class="token string">&quot;sum = 7 + 8&quot;</span>                                 
 $ <span class="token builtin class-name">let</span> <span class="token string">&quot;add = sum++&quot;</span>
 $ <span class="token builtin class-name">echo</span> <span class="token string">&quot;sum: <span class="token variable">$sum</span>  add: <span class="token variable">$add</span>&quot;</span>
 <span class="token operator">&gt;</span> sum: <span class="token number">15</span> add: <span class="token number">16</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8F93\u51FA\u91CD\u5B9A\u5411" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA\u91CD\u5B9A\u5411" aria-hidden="true">#</a> \u8F93\u51FA\u91CD\u5B9A\u5411</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> $ <span class="token builtin class-name">command</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>                                  <span class="token comment"># 1 \u8868\u793A\u6807\u51C6\u8F93\u51FA 2 \u8868\u793A\u6807\u51C6\u9519\u8BEF\u8F93\u51FA</span>
 $ <span class="token builtin class-name">command</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/dev/null                           <span class="token comment"># \u5C06\u9519\u8BEF\u5199\u5165 null, \u5373\u4E0D\u663E\u793A\u9519\u8BEF</span>

 $ <span class="token builtin class-name">command</span> <span class="token operator">&gt;</span> <span class="token function">file</span>                                <span class="token comment"># \u6E05\u7A7A\u6587\u4EF6\u5185\u5BB9, \u547D\u4EE4\u6807\u51C6\u8F93\u51FA\u5199\u5165\u6587\u4EF6</span>
 $ <span class="token builtin class-name">command</span> <span class="token operator">&gt;&gt;</span> <span class="token function">file</span>                               <span class="token comment"># \u4FDD\u7559\u6587\u4EF6\u5185\u5BB9, \u547D\u4EE4\u6807\u51C6\u8F93\u51FA\u8FFD\u52A0\u5165\u6587\u4EF6</span>

 $ <span class="token builtin class-name">command</span> <span class="token operator">&gt;</span> /dev/null                           <span class="token comment"># \u547D\u4EE4\u6807\u51C6\u8F93\u51FA\u5199\u5165 null, \u5373\u4E0D\u663E\u793A\u6B63\u5E38\u7ED3\u679C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5E38\u7528\u8F6C\u4E49\u7B26\u53F7" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u8F6C\u4E49\u7B26\u53F7" aria-hidden="true">#</a> \u5E38\u7528\u8F6C\u4E49\u7B26\u53F7</h2><table><thead><tr><th style="text-align:center;">\u7B26\u53F7</th><th style="text-align:center;">\u542B\u4E49</th></tr></thead><tbody><tr><td style="text-align:center;"><code>\\n</code></td><td style="text-align:center;">\u6362\u884C\u7B26</td></tr><tr><td style="text-align:center;"><code>\\r</code></td><td style="text-align:center;">\u56DE\u8F66, \u56DE\u5230\u884C\u9996</td></tr><tr><td style="text-align:center;"><code>\\t</code></td><td style="text-align:center;">Tab \u952E</td></tr><tr><td style="text-align:center;"><code>\\b</code></td><td style="text-align:center;">\u5149\u6807\u5DE6\u79FB 1 \u4F4D</td></tr></tbody></table><h2 id="\u5E38\u7528\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u5E38\u7528\u73AF\u5883\u53D8\u91CF</h2><table><thead><tr><th style="text-align:center;">\u53D8\u91CF</th><th style="text-align:center;">\u542B\u4E49</th></tr></thead><tbody><tr><td style="text-align:center;"><code>HOME</code></td><td style="text-align:center;">\u5F53\u524D\u7528\u6237\u76EE\u5F55</td></tr><tr><td style="text-align:center;"><code>USER</code></td><td style="text-align:center;">\u5F53\u524D\u7528\u6237</td></tr><tr><td style="text-align:center;"><code>SHELL</code></td><td style="text-align:center;">\u5F53\u524D\u4F7F\u7528\u7684 shell</td></tr><tr><td style="text-align:center;"><code>PATH</code></td><td style="text-align:center;">\u73AF\u5883\u53D8\u91CF</td></tr><tr><td style="text-align:center;"><code>PWD</code></td><td style="text-align:center;">\u5F53\u524D\u76EE\u5F55</td></tr></tbody></table><h2 id="\u7279\u6B8A\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u7279\u6B8A\u53D8\u91CF" aria-hidden="true">#</a> \u7279\u6B8A\u53D8\u91CF</h2><table><thead><tr><th style="text-align:center;">\u53D8\u91CF</th><th style="text-align:center;">\u542B\u4E49</th></tr></thead><tbody><tr><td style="text-align:center;"><code>$?</code></td><td style="text-align:center;">\u4E0A\u4E00\u4E2A\u547D\u4EE4\u7684\u8FD4\u56DE\u503C</td></tr><tr><td style="text-align:center;"><code>$!</code></td><td style="text-align:center;">\u4E0A\u4E00\u4E2A\u547D\u4EE4\u7684 pid</td></tr><tr><td style="text-align:center;"><code>$$</code></td><td style="text-align:center;">\u5F53\u524D shell \u8FDB\u7A0B</td></tr><tr><td style="text-align:center;"><code>$@</code></td><td style="text-align:center;">\u5F53\u524D\u51FD\u6570\u6216\u811A\u672C\u7684\u6240\u6709\u53C2\u6570</td></tr></tbody></table>`,32);function A(w,H){const n=c("ExternalLinkIcon");return i(),o("div",null,[p,d,s("p",null,[s("a",m,[u,e(n)])]),v,s("h4",b,[h,k,s("a",g,[f,e(n)])]),x,s("h4",$,[_,y,s("a",q,[E,e(n)])]),B])}const T=l(r,[["render",A],["__file","Bash-1-basic.html.vue"]]);export{T as default};
