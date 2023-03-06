import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as t,b as n,d as l,e as o,a as c,r as p}from"./app.38244e4c.js";const i={},r={href:"https://www.linuxcool.com/",target:"_blank",rel:"noopener noreferrer"},d=o("linux \u547D\u4EE4"),m=c(`<h2 id="\u57FA\u7840\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u547D\u4EE4" aria-hidden="true">#</a> \u57FA\u7840\u547D\u4EE4</h2><h3 id="\u67E5\u770B\u5E2E\u52A9\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u5E2E\u52A9\u4FE1\u606F" aria-hidden="true">#</a> \u67E5\u770B\u5E2E\u52A9\u4FE1\u606F</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> $ <span class="token function">man</span> <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span>                                 <span class="token comment"># man (manual) \u5E2E\u52A9\u624B\u518C, \u67E5\u770B\u547D\u4EE4\u7684\u5E2E\u52A9\u624B\u518C</span>
 $ <span class="token function">man</span> <span class="token parameter variable">-f</span> <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span>                              <span class="token comment"># \u663E\u793A\u547D\u4EE4\u7684\u7B80\u77ED\u63CF\u8FF0</span>
 $ <span class="token function">man</span> <span class="token parameter variable">-f</span> <span class="token function">date</span>
 <span class="token operator">&gt;</span> <span class="token function">date</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>             - print or <span class="token builtin class-name">set</span> the system <span class="token function">date</span> and <span class="token function">time</span>

 $ whatis <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span>                              <span class="token comment"># \u663E\u793A\u547D\u4EE4\u7684\u7B80\u77ED\u63CF\u8FF0, \u7B49\u540C\u4E8E man -f &lt;command&gt;</span>
 $ whatis <span class="token function">date</span>
 <span class="token operator">&gt;</span> <span class="token function">date</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>             - print or <span class="token builtin class-name">set</span> the system <span class="token function">date</span> and <span class="token function">time</span>

 $ <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span> -h/--help                           <span class="token comment"># \u547D\u4EE4\u4F7F\u7528 -h/--help \u53C2\u6570</span>
 $ <span class="token function">date</span> <span class="token parameter variable">-h</span>
 $ <span class="token function">date</span> <span class="token parameter variable">--help</span>
 <span class="token operator">&gt;</span> Usage: <span class="token function">date</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span>+FORMAT<span class="token punctuation">]</span>
 <span class="token operator">&gt;</span>   or:  <span class="token function">date</span> <span class="token punctuation">[</span>-u<span class="token operator">|</span>--utc<span class="token operator">|</span>--universal<span class="token punctuation">]</span> <span class="token punctuation">[</span>MMDDhhmm<span class="token punctuation">[</span><span class="token punctuation">[</span>CC<span class="token punctuation">]</span>YY<span class="token punctuation">]</span><span class="token punctuation">[</span>.ss<span class="token punctuation">]</span><span class="token punctuation">]</span>
 <span class="token operator">&gt;</span> Display the current <span class="token function">time</span> <span class="token keyword">in</span> the given FORMAT, or <span class="token builtin class-name">set</span> the system date.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6587\u4EF6\u76EE\u5F55\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u76EE\u5F55\u64CD\u4F5C" aria-hidden="true">#</a> \u6587\u4EF6\u76EE\u5F55\u64CD\u4F5C</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> $ <span class="token builtin class-name">pwd</span>                                           <span class="token comment"># \u67E5\u770B\u5F53\u524D\u76EE\u5F55</span>
 <span class="token operator">&gt;</span> /root/Desktop

 $ <span class="token function">ls</span>                                            <span class="token comment"># \u67E5\u770B\u5F53\u524D\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\u53CA\u6587\u4EF6\u5939</span>
 <span class="token operator">&gt;</span> source.sh  target.tar.gz

 $ <span class="token builtin class-name">cd</span> <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span>                                     <span class="token comment"># \u5207\u6362\u5230 path \u76EE\u5F55(\u65E0\u8FD4\u56DE\u503C), path \u4E0D\u5B58\u5728\u5219\u62A5\u9519</span>
 ~/Desktop/Zip$                                  <span class="token comment"># \u547D\u4EE4\u884C $ \u5DE6\u8FB9\u5373\u4E3A\u5F53\u524D\u76EE\u5F55</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> $ <span class="token function">cp</span> <span class="token operator">&lt;</span>source<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>destination<span class="token operator">&gt;</span>                     <span class="token comment"># \u6587\u4EF6\u590D\u5236</span>
 $ <span class="token function">mv</span> <span class="token operator">&lt;</span>source<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>destination<span class="token operator">&gt;</span>                     <span class="token comment"># \u6587\u4EF6\u79FB\u52A8\u6216\u91CD\u547D\u540D</span>
 $ <span class="token function">rm</span> <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>                                     <span class="token comment"># \u5220\u9664\u6587\u4EF6</span>
 $ <span class="token function">mkdir</span> <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span>                                  <span class="token comment"># \u521B\u5EFA\u6587\u4EF6\u5939</span>
 $ <span class="token function">touch</span> <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>                                  <span class="token comment"># \u521B\u5EFA\u6587\u4EF6</span>
 $ <span class="token function">cat</span> <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>                                    <span class="token comment"># \u67E5\u770B\u6587\u4EF6\u5185\u5BB9</span>

 $ <span class="token function">touch</span> learn.log                               <span class="token comment"># \u521B\u5EFA\u6587\u4EF6 learn.log</span>
 $ <span class="token function">mkdir</span> seeds                                   <span class="token comment"># \u521B\u5EFA\u6587\u4EF6\u5939 seeds  </span>
 $ <span class="token function">cp</span> learn.log seeds/                           <span class="token comment"># learn.log \u590D\u5236\u5230 seeds \u6587\u4EF6\u5939\u4E0B</span>
 $ <span class="token function">rm</span> learn.log                                  <span class="token comment"># \u5220\u9664\u5F53\u524D\u76EE\u5F55\u4E0B\u7684 learn.log</span>
 $ <span class="token function">mv</span> seeds/learn.log study.log                  <span class="token comment"># \u5C06 seeds \u4E0B\u7684 learn.log \u79FB\u52A8\u5230\u5F53\u524D\u76EE\u5F55\u5E76\u91CD\u547D\u540D</span>
 $ <span class="token function">rm</span> <span class="token parameter variable">-r</span> seeds                                   <span class="token comment"># \u5220\u9664 seeds \u6587\u4EF6\u5939\u53CA\u6587\u4EF6\u5939\u4E0B\u7684\u6240\u6709\u6587\u4EF6</span>

 <span class="token operator">&gt;</span> <span class="token string">&#39;learn.log&#39;</span>       -<span class="token operator">&gt;</span> crteate
 <span class="token operator">&gt;</span> <span class="token string">&#39;seed/&#39;</span>           -<span class="token operator">&gt;</span> crteate
 <span class="token operator">&gt;</span> <span class="token string">&#39;learn.log&#39;</span>       -<span class="token operator">&gt;</span> <span class="token string">&#39;seed/learn.log&#39;</span>
 <span class="token operator">&gt;</span> <span class="token string">&#39;learn.log&#39;</span>       -<span class="token operator">&gt;</span> delete
 <span class="token operator">&gt;</span> <span class="token string">&#39;seeds/learn.log&#39;</span> -<span class="token operator">&gt;</span> <span class="token string">&#39;study.log&#39;</span>
 <span class="token operator">&gt;</span> <span class="token string">&#39;seed/&#39;</span>           -<span class="token operator">&gt;</span> delete
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u67E5\u770B\u6267\u884C\u8FC7\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6267\u884C\u8FC7\u547D\u4EE4" aria-hidden="true">#</a> \u67E5\u770B\u6267\u884C\u8FC7\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> $ <span class="token function">history</span>                                       <span class="token comment"># \u67E5\u770B\u6267\u884C\u7684\u547D\u4EE4\u5386\u53F2</span>
 <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token function">ls</span>
 <span class="token operator">&gt;</span> <span class="token number">2</span> <span class="token function">date</span>

 $ <span class="token operator">!</span><span class="token operator">!</span>                                            <span class="token comment"># \u6267\u884C\u4E0A\u4E00\u6761\u547D\u4EE4</span>
 $ <span class="token operator">!</span><span class="token operator">&lt;</span>command key<span class="token operator">&gt;</span> + enter                        <span class="token comment"># \u901A\u8FC7\u547D\u4EE4\u5173\u952E\u5B57\u548C enter \u6267\u884C\u4E0A\u4E00\u4E2A\u5305\u542B\u5173\u952E\u5B57\u7684\u547D\u4EE4</span>
 $ control + r + <span class="token operator">&lt;</span>command key<span class="token operator">&gt;</span>                   <span class="token comment"># \u5FEB\u6377\u952E\u8FDB\u5165\u5386\u53F2\u5217\u8868, \u901A\u8FC7\u5173\u952E\u5B57\u67E5\u627E, \u65B9\u5411\u952E\u548C enter \u9009\u62E9\u547D\u4EE4  </span>

 $ <span class="token operator">&lt;</span>up<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token operator">&lt;</span>down<span class="token operator">&gt;</span>                                 <span class="token comment"># \u4E0A \u4E0B \u65B9\u5411\u952E\u5BFB\u627E\u6267\u884C\u8FC7\u7684\u547D\u4EE4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7CFB\u7EDF\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#\u7CFB\u7EDF\u76F8\u5173" aria-hidden="true">#</a> \u7CFB\u7EDF\u76F8\u5173</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> $ <span class="token function">shutdown</span> <span class="token parameter variable">-h</span> now                               <span class="token comment"># \u5173\u673A</span>
 $ <span class="token function">shutdown</span> <span class="token parameter variable">-r</span> now                               <span class="token comment"># \u91CD\u542F</span>

 $ <span class="token function">date</span>                                          <span class="token comment"># \u7CFB\u7EDF\u65F6\u95F4</span>
 <span class="token operator">&gt;</span> Sat Feb <span class="token number">25</span> <span class="token number">20</span>:34:10 CST <span class="token number">2023</span>

 $ unmae <span class="token parameter variable">-a</span>                                      <span class="token comment"># \u67E5\u770B\u7CFB\u7EDF\u5185\u6838\u4FE1\u606F</span>
 <span class="token operator">&gt;</span> inux facser <span class="token number">5.15</span>.79.1-microsoft-standard-WSL2 <span class="token comment">#1 SMP Wed Nov 23 01:01:46 UTC 2022 x86_64 x86_64 x86_64 GNU/Linux</span>

 $ <span class="token function">ps</span> <span class="token parameter variable">-af</span>                                        <span class="token comment"># \u67E5\u770B\u5F53\u524D\u6B63\u5728\u8FD0\u884C\u7684\u6240\u6709\u8FDB\u7A0B</span>
 <span class="token operator">&gt;</span> <span class="token environment constant">UID</span>        PID  <span class="token environment constant">PPID</span>  C STIME TTY          TIME CMD
 <span class="token operator">&gt;</span> root      <span class="token number">1399</span>    <span class="token number">71</span>  <span class="token number">0</span> <span class="token number">19</span>:08 pts/4    00:00:00 /bin/zsh <span class="token parameter variable">-i</span>
 <span class="token operator">&gt;</span> root      <span class="token number">9481</span>   <span class="token number">490</span>  <span class="token number">0</span> <span class="token number">20</span>:24 pts/4    00:00:00 <span class="token function">bash</span> <span class="token parameter variable">-x</span> a.sh

 $ <span class="token function">kill</span> <span class="token operator">&lt;</span>pid<span class="token operator">&gt;</span>                                    <span class="token comment"># \u6839\u636E pid \u5173\u6389\u6307\u5B9A\u8FDB\u7A0B</span>
 $ <span class="token function">kill</span> <span class="token number">9481</span>
 <span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>  + <span class="token number">9481</span> terminated  <span class="token function">bash</span> <span class="token parameter variable">-x</span> a.sh  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u542F\u7528-root-\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#\u542F\u7528-root-\u7528\u6237" aria-hidden="true">#</a> \u542F\u7528 Root \u7528\u6237</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> $ <span class="token function">sudo</span> <span class="token function">passwd</span> root
 <span class="token operator">&gt;</span> Enter new UNIX password:                      <span class="token comment"># \u8BBE\u7F6E root \u7528\u6237\u5BC6\u7801</span>
 <span class="token operator">&gt;</span> Retype new UNIX password:                     <span class="token comment"># \u91CD\u590D\u8F93\u5165 root \u5BC6\u7801</span>
 <span class="token operator">&gt;</span> passwd: password updated successfully         <span class="token comment"># \u8BBE\u7F6E\u6210\u529F</span>

 $ <span class="token function">su</span> root                                       <span class="token comment"># \u5207\u6362 root \u7528\u6237</span>
 <span class="token comment"># exit                                          # \u9000\u51FA root, \u666E\u901A\u7528\u6237 $ \u5F00\u5934, root \u7528\u6237 # \u5F00\u5934</span>

 $ <span class="token function">su</span> <span class="token operator">&lt;</span>user<span class="token operator">&gt;</span>                                     <span class="token comment"># \u5207\u6362\u7528\u6237</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>sudo \u514D\u5BC6\u7801</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> $ <span class="token function">sudo</span> <span class="token function">vi</span> /etc/sudoers                          <span class="token comment"># \u7F16\u8F91\u914D\u7F6E\u6587\u4EF6</span>

 <span class="token operator">&gt;</span> %sudo <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL:ALL<span class="token punctuation">)</span> ALL                       <span class="token comment"># \u627E\u5230\u8FD9\u4E00\u680F, \u5EFA\u8BAE\u6CE8\u91CA\u6389\u590D\u5236\u4E00\u884C\u4FEE\u6539</span>
 <span class="token operator">&gt;</span> %sudo <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL:ALL<span class="token punctuation">)</span> NOPASSWD:ALL              <span class="token comment"># \u4FEE\u6539\u540E, \u5F3A\u5236\u4FDD\u5B58\u9000\u51FA</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8: \u8BE5\u6587\u4EF6\u5FC5\u987B\u5F3A\u5236\u5199\u5165, \u4E0D\u80FD\u4FEE\u6539\u6587\u4EF6\u6743\u9650, \u5426\u5219\u62A5\u9519</p><h2 id="\u901A\u914D\u7B26\u53F7" tabindex="-1"><a class="header-anchor" href="#\u901A\u914D\u7B26\u53F7" aria-hidden="true">#</a> \u901A\u914D\u7B26\u53F7</h2><h3 id="\u4EFB\u610F\u5355\u4E2A\u5B57\u7B26" tabindex="-1"><a class="header-anchor" href="#\u4EFB\u610F\u5355\u4E2A\u5B57\u7B26" aria-hidden="true">#</a> <code>\uFF1F</code> \u4EFB\u610F\u5355\u4E2A\u5B57\u7B26</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> $ <span class="token function">touch</span> ab a <span class="token function">bc</span> abc                             <span class="token comment"># \u751F\u6210 ab a ba abc 4 \u4E2A\u6587\u4EF6</span>
 
 $ <span class="token function">ls</span> ?b                                         <span class="token comment"># ? \u53EF\u4EE5\u6307\u4EE3\u4EFB\u610F\u5355\u4E2A\u5B57\u7B26</span>
 <span class="token operator">&gt;</span> ab

 $ <span class="token function">ls</span> b?
 <span class="token operator">&gt;</span> <span class="token function">bc</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4EFB\u610F\u591A\u4E2A\u5B57\u7B26" tabindex="-1"><a class="header-anchor" href="#\u4EFB\u610F\u591A\u4E2A\u5B57\u7B26" aria-hidden="true">#</a> <code>*</code> \u4EFB\u610F\u591A\u4E2A\u5B57\u7B26</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> $ <span class="token function">touch</span> ab a <span class="token function">bc</span> abc                             <span class="token comment"># \u751F\u6210 ab a ba abc 4 \u4E2A\u6587\u4EF6</span>
 
 $ <span class="token function">ls</span> *                                          <span class="token comment"># * \u53EF\u4EE5\u6307\u4EE3\u4EFB\u610F\u591A\u4E2A\u5B57\u7B26</span>
 <span class="token operator">&gt;</span> a  ab  abc  <span class="token function">bc</span>

 $ <span class="token function">ls</span> a*                                      
 <span class="token operator">&gt;</span> a  ab  abc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4EFB\u610F\u591A\u7EA7\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u4EFB\u610F\u591A\u7EA7\u76EE\u5F55" aria-hidden="true">#</a> <code>**</code> \u4EFB\u610F\u591A\u7EA7\u76EE\u5F55</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> $ <span class="token function">cat</span> /etc/**/word                               <span class="token comment"># /etc/ \u6587\u4EF6\u5939\u4E0B\u6240\u6709 word \u6587\u4EF6</span>

 $ <span class="token function">ls</span> learn/**/*.md                               <span class="token comment"># \u663E\u793A learn \u76EE\u5F55\u4E0B\u6240\u6709 markdown \u6587\u4EF6 </span>
 <span class="token operator">&gt;</span> a.md b.md c.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5339\u914D\u8303\u56F4" tabindex="-1"><a class="header-anchor" href="#\u5339\u914D\u8303\u56F4" aria-hidden="true">#</a> <code>[]</code> \u5339\u914D\u8303\u56F4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> $ <span class="token function">touch</span> aa ab ac aab                            <span class="token comment"># \u751F\u6210 ab a ba abc 4 \u4E2A\u6587\u4EF6</span>

 $ <span class="token function">ls</span> a<span class="token punctuation">[</span>ab<span class="token punctuation">]</span>                                      <span class="token comment"># \u5339\u914D [] \u5185\u4EFB\u610F\u4E00\u4E2A\u5B57\u7B26</span>
 <span class="token operator">&gt;</span> aa ab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7279\u6B8A\u7B26\u53F7" tabindex="-1"><a class="header-anchor" href="#\u7279\u6B8A\u7B26\u53F7" aria-hidden="true">#</a> \u7279\u6B8A\u7B26\u53F7</h2><h3 id="\u91CD\u5B9A\u5411\u7B26\u53F7" tabindex="-1"><a class="header-anchor" href="#\u91CD\u5B9A\u5411\u7B26\u53F7" aria-hidden="true">#</a> \u91CD\u5B9A\u5411\u7B26\u53F7</h3><p>|\u7B26\u53F7|\u542B\u4E49| |<code>&gt;</code>|\u8F93\u51FA\u91CD\u5B9A\u5411| |<code>&gt;&gt;</code>|\u8F93\u51FA\u91CD\u5B9A\u5411\u8FFD\u52A0\u5199\u5165| |<code>&lt;</code>|\u8F93\u5165\u91CD\u5B9A\u5411| |<code>&lt;&lt;</code>|\u8BFB\u53D6\u6807\u51C6\u8F93\u5165\u76F4\u81F3\u5206\u754C\u7B26\u53F7|</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> $ <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span> <span class="token operator">&gt;</span> <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>                            <span class="token comment"># \u5C06\u547D\u4EE4\u8FD4\u56DE\u503C\u8986\u76D6\u5199\u5165\u6587\u4EF6(\u539F\u6587\u4EF6\u6E05\u7A7A\u540E\u5199\u5165)</span>
 $ <span class="token function">date</span> <span class="token operator">&gt;</span> file.log                               <span class="token comment"># \u5C06 date \u547D\u4EE4\u8FD4\u56DE\u503C\u5199\u5165 file.log \u6587\u4EF6, \u547D\u4EE4\u884C\u4E0D\u663E\u793A\u7ED3\u679C</span>
 <span class="token operator">&gt;</span> Sat Feb <span class="token number">25</span> <span class="token number">20</span>:39:56 CST <span class="token number">2023</span>

 $ <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span> <span class="token operator">&gt;&gt;</span> <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>                           <span class="token comment"># \u5C06\u8F93\u51FA\u8FFD\u52A0\u5199\u5165\u6587\u4EF6(\u539F\u6587\u4EF6\u5185\u5BB9\u4FDD\u7559)</span>
 $ <span class="token function">date</span> <span class="token operator">&gt;&gt;</span> file.log                              <span class="token comment"># \u5C06 date \u547D\u4EE4\u8FD4\u56DE\u503C\u8FFD\u52A0\u5199\u5165 file.log \u5185\u5BB9\u7ED3\u5C3E, \u547D\u4EE4\u884C\u4E0D\u663E\u793A\u7ED3\u679C</span>
 <span class="token operator">&gt;</span> Sat Feb <span class="token number">25</span> <span class="token number">20</span>:39:56 CST <span class="token number">2023</span>
 <span class="token operator">&gt;</span> Sat Feb <span class="token number">25</span> <span class="token number">20</span>:40:51 CST <span class="token number">2023</span>

 $ <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span> <span class="token operator">&lt;</span> <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>                            <span class="token comment"># \u5C06\u6587\u4EF6\u5185\u5BB9\u91CD\u5B9A\u5411\u4E3A\u6807\u51C6\u8F93\u5165</span>
 $ <span class="token function">cat</span> <span class="token operator">&lt;</span> file.log                                <span class="token comment"># \u8BFB\u53D6 file.log \u5E76\u6253\u5370</span>
 <span class="token operator">&gt;</span> Sat Feb <span class="token number">25</span> <span class="token number">20</span>:39:56 CST <span class="token number">2023</span>
 <span class="token operator">&gt;</span> Sat Feb <span class="token number">25</span> <span class="token number">20</span>:40:51 CST <span class="token number">2023</span>

 $ <span class="token function">touch</span> <span class="token variable"><span class="token variable">$(</span><span class="token operator">&lt;</span> fileName.log<span class="token variable">)</span></span>                       <span class="token comment"># \u6839\u636E\u6587\u4EF6\u5185\u7684\u6587\u4EF6\u5217\u8868\u751F\u6210\u6587\u4EF6</span>

 $ <span class="token function">cat</span> <span class="token operator">&lt;&lt;</span> EOF                                    <span class="token comment"># \u5B9E\u73B0\u591A\u884C\u8F93\u5165, \u5206\u754C\u7B26\u53F7 EOF \u53EF\u81EA\u5B9A\u4E49</span>
 <span class="token operator">&gt;</span> line
 <span class="token operator">&gt;</span> line
 <span class="token operator">&gt;</span> EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-dev-null-\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#_1-2-dev-null-\u8F93\u51FA" aria-hidden="true">#</a> <code>&amp;1</code> <code>&amp;2</code> <code>/dev/null</code> \u8F93\u51FA</h3><p>|\u7B26\u53F7|\u542B\u4E49| |<code>&amp;1</code>|\u6807\u51C6\u8F93\u51FA, \u547D\u4EE4\u884C\u8F93\u51FA, \u80FD\u76F4\u63A5\u91CD\u5B9A\u5411\u81F3\u6587\u4EF6| |<code>&amp;2</code>|\u6807\u51C6\u9519\u8BEF, \u547D\u4EE4\u6267\u884C\u9519\u8BEF\u8F93\u51FA, \u9700\u8981\u5C06\u9519\u8BEF\u91CD\u5B9A\u5411\u81F3\u6807\u51C6\u8F93\u51FA\u518D\u6307\u5411\u6587\u4EF6| |<code>/dev/null</code>|\u7A7A, \u6307\u4EE3\u5783\u573E\u6876\u6216\u56DE\u6536\u7AD9|</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> $ mian                                          <span class="token comment"># \u9519\u8BEF\u547D\u4EE4,\u663E\u793A\u9519\u8BEF\u8F93\u51FA</span>
 <span class="token operator">&gt;</span> Command <span class="token string">&#39;mian&#39;</span> not found

 $ data <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/dev/null                              <span class="token comment"># \u9519\u8BEF\u547D\u4EE4, \u9519\u8BEF\u8F93\u51FA\u91CD\u5B9A\u5411\u81F3\u56DE\u6536\u7AD9, \u4E0D\u663E\u793A\u9519\u8BEF       </span>
 $ <span class="token function">date</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/dev/null                              <span class="token comment"># \u6B63\u786E\u547D\u4EE4, \u6807\u51C6\u8F93\u51FA\u91CD\u5B9A\u5411\u81F3\u56DE\u6536\u7AD9, \u4E0D\u663E\u793A\u8FD4\u56DE\u503C</span>

 $ data <span class="token number">2</span> <span class="token operator">&gt;</span> date.log                             <span class="token comment"># \u547D\u4EE4\u884C\u663E\u793A\u9519\u8BEF, \u6587\u4EF6\u4E0D\u663E\u793A, \u9519\u8BEF\u8F93\u51FA\u65E0\u6CD5\u76F4\u63A5\u91CD\u5B9A\u5411\u6587\u4EF6</span>
 $ data <span class="token operator">&gt;</span> date.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>                          <span class="token comment"># \u547D\u4EE4\u884C\u4E0D\u663E\u793A\u9519\u8BEF, \u6587\u4EF6\u5185\u663E\u793A, \u9519\u8BEF\u8F93\u51FA\u91CD\u5B9A\u5411\u81F3\u6587\u4EF6</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5355\u8BCD\u7F29\u5199" tabindex="-1"><a class="header-anchor" href="#\u5355\u8BCD\u7F29\u5199" aria-hidden="true">#</a> \u5355\u8BCD\u7F29\u5199</h2><table><thead><tr><th style="text-align:center;">\u7F29\u5199</th><th style="text-align:center;">\u5168\u79F0</th><th style="text-align:center;">\u7FFB\u8BD1</th></tr></thead><tbody><tr><td style="text-align:center;">h</td><td style="text-align:center;"><code>help</code></td><td style="text-align:center;">\u5E2E\u52A9</td></tr><tr><td style="text-align:center;">a</td><td style="text-align:center;"><code>all</code></td><td style="text-align:center;">\u5168\u90E8</td></tr><tr><td style="text-align:center;">f</td><td style="text-align:center;"><code>force</code></td><td style="text-align:center;">\u5F3A\u5236</td></tr><tr><td style="text-align:center;">i</td><td style="text-align:center;"><code>interactive</code></td><td style="text-align:center;">\u4EA4\u4E92\u7684</td></tr><tr><td style="text-align:center;">b</td><td style="text-align:center;"><code>backup</code></td><td style="text-align:center;">\u5907\u4EFD</td></tr><tr><td style="text-align:center;">v</td><td style="text-align:center;"><code>version / verbose</code></td><td style="text-align:center;">\u7248\u672C/\u8BE6\u7EC6\u7684</td></tr><tr><td style="text-align:center;">c</td><td style="text-align:center;"><code>count / command</code></td><td style="text-align:center;">\u8BA1\u6570/\u547D\u4EE4</td></tr><tr><td style="text-align:center;">r / R</td><td style="text-align:center;"><code>recursive</code></td><td style="text-align:center;">\u9012\u5F52</td></tr><tr><td style="text-align:center;">s / S</td><td style="text-align:center;"><code>sort</code></td><td style="text-align:center;">\u6392\u5E8F</td></tr></tbody></table><h3 id="\u7B26\u53F7" tabindex="-1"><a class="header-anchor" href="#\u7B26\u53F7" aria-hidden="true">#</a> \u7B26\u53F7</h3><table><thead><tr><th style="text-align:center;">\u7B26\u53F7</th><th style="text-align:left;">\u542B\u4E49</th></tr></thead><tbody><tr><td style="text-align:center;">\`</td><td style="text-align:left;">\`</td></tr><tr><td style="text-align:center;"><code>&gt;</code></td><td style="text-align:left;">\u8F93\u51FA\u91CD\u5B9A\u5411, \u8986\u76D6</td></tr><tr><td style="text-align:center;"><code>&gt;&gt;</code></td><td style="text-align:left;">\u8F93\u51FA\u91CD\u5B9A\u5411, \u8FFD\u52A0</td></tr><tr><td style="text-align:center;"><code>&amp;</code></td><td style="text-align:left;">\u7A0B\u5E8F\u653E\u5165\u540E\u53F0\u6267\u884C</td></tr><tr><td style="text-align:center;"><code>#</code></td><td style="text-align:left;">\u6CE8\u91CA</td></tr><tr><td style="text-align:center;"><code>&amp;&amp;</code></td><td style="text-align:left;">\u4E14, \u5DE6\u8FB9\u6210\u529F\u624D\u6267\u884C\u53F3\u8FB9</td></tr><tr><td style="text-align:center;">\`</td><td style="text-align:left;"></td></tr></tbody></table><h3 id="\u6B63\u5219\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6B63\u5219\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> \u6B63\u5219\u8868\u8FBE\u5F0F</h3><table><thead><tr><th style="text-align:center;">\u7B26\u53F7</th><th style="text-align:left;">\u6A21\u5F0F</th></tr></thead><tbody><tr><td style="text-align:center;"><code>^</code></td><td style="text-align:left;">\u951A\u5B9A\u884C\u9996</td></tr><tr><td style="text-align:center;"><code>$</code></td><td style="text-align:left;">\u951A\u5B9A\u884C\u5C3E</td></tr><tr><td style="text-align:center;"><code>()</code></td><td style="text-align:left;">\u6346\u7ED1\u6210\u4E00\u4E2A\u6574\u4F53</td></tr><tr><td style="text-align:center;"><code>.</code></td><td style="text-align:left;">\u4EFB\u610F\u4E00\u4E2A\u5B57\u7B26</td></tr><tr><td style="text-align:center;"><code>?</code></td><td style="text-align:left;">\u524D\u9762\u5B57\u7B26\u6216\u6A21\u5F0F 0 \u6216 1 \u6B21</td></tr><tr><td style="text-align:center;"><code>{m}</code></td><td style="text-align:left;">\u524D\u9762\u5B57\u7B26\u6216\u6A21\u5F0F m \u6B21</td></tr><tr><td style="text-align:center;"><code>{m, n}</code></td><td style="text-align:left;">\u524D\u9762\u5B57\u7B26\u6216\u6A21\u5F0F\u6B21\u6570\u5728 m n \u4E4B\u95F4</td></tr><tr><td style="text-align:center;"><code>+</code></td><td style="text-align:left;">\u524D\u9762\u5B57\u7B26\u6216\u6A21\u5F0F 1 \u6B21\u6216\u591A\u6B21</td></tr><tr><td style="text-align:center;"><code>*</code></td><td style="text-align:left;">\u524D\u9762\u5B57\u7B26\u6216\u6A21\u5F0F\u4EFB\u610F\u6B21</td></tr><tr><td style="text-align:center;">\`</td><td style="text-align:left;">\`</td></tr><tr><td style="text-align:center;"><code>[]</code></td><td style="text-align:left;">\u62EC\u53F7\u8303\u56F4\u5185\u5747\u53EF</td></tr><tr><td style="text-align:center;"><code>[^]</code></td><td style="text-align:left;">\u62EC\u53F7\u8303\u56F4\u4E4B\u5916\u5747\u53EF</td></tr></tbody></table>`,37);function u(k,v){const s=p("ExternalLinkIcon");return e(),t("div",null,[n("p",null,[n("a",r,[d,l(s)])]),m])}const h=a(i,[["render",u],["__file","Linux-1-basic.html.vue"]]);export{h as default};
