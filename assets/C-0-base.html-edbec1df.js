import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-8da2a3ac.js";const t={},p=e(`<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>创建 main.c 文件，写入代码</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span>                               <span class="token comment">// 引入标准库 stdio.h (/usr/include/)</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>                                 <span class="token comment">// 定义执行入口, 入口函数名称固定为 main</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;hello world!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                      <span class="token comment">// 使用 stdio.h 中的 printf 函数</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 GCC 编译</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gcc main.c <span class="token parameter variable">-o</span> main                             <span class="token comment"># 编译 main.c 文件成可执行文件 main </span>
$ ./main                                         <span class="token comment"># 执行 main </span>
<span class="token operator">&gt;</span> hello world<span class="token operator">!</span>                                   <span class="token comment"># 显示执行结果</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>C 是编译性语言, C 代码需要编译成可执行文件之后才能运行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>main.c  --1--<span class="token operator">&gt;</span> main.i --2--<span class="token operator">&gt;</span> main.s --3--<span class="token operator">&gt;</span> main.o --4--<span class="token operator">&gt;</span> main

<span class="token comment"># main.c -&gt; main.i 预处理, 展开头文件，宏替换，全掉注释，条件编译</span>
<span class="token comment"># main.i -&gt; main.s 编译 优化转化成汇编代码</span>
<span class="token comment"># main.s -&gt; main.o 汇编转成机器码</span>
<span class="token comment"># main.o -&gt; main   链接到一起生产可执行文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="版本" tabindex="-1"><a class="header-anchor" href="#版本" aria-hidden="true">#</a> 版本</h2><p>C 版本按照发布时间定义: C89/C90, C99, C11, C17, C2X<br> C 使用 gcc 编译, 不同 gcc 版本默认使用不同标准编译</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gcc <span class="token parameter variable">-dM</span> <span class="token parameter variable">-E</span> - <span class="token operator">&lt;</span> /dev/null <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;STDC_VERSION&quot;</span> <span class="token comment"># 查看默认使用的 C 标准</span>

<span class="token operator">&gt;</span> <span class="token comment">#define __STDC_VERSION__ 199901L               # 默认使用 C99 标准编译</span>
<span class="token operator">&gt;</span> <span class="token comment">#define __STDC_VERSION__ 201112L               # 默认使用 C11 标准编译</span>
<span class="token operator">&gt;</span> <span class="token comment">#define __STDC_VERSION__ 201710L               # 默认使用 C17 标准编译</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>强制使用 <code>-std=&lt;cxx&gt;</code> 标准编译</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> <span class="token parameter variable">-n</span> main.c                                  <span class="token comment"># 写一个 for 循环</span>
<span class="token operator">&gt;</span> <span class="token number">1</span>  <span class="token comment">#include &lt;stdio.h&gt;</span>
<span class="token operator">&gt;</span> <span class="token number">2</span>
<span class="token operator">&gt;</span> <span class="token number">3</span>  int <span class="token function-name function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token operator">&gt;</span> <span class="token number">4</span>      for<span class="token punctuation">(</span>int <span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i++<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token operator">&gt;</span> <span class="token number">5</span>          printf<span class="token punctuation">(</span><span class="token string">&quot;index: %d <span class="token entity" title="\\n">\\n</span>&quot;</span>, i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&gt;</span> <span class="token number">6</span>      <span class="token punctuation">}</span>
<span class="token operator">&gt;</span> <span class="token number">7</span>  <span class="token punctuation">}</span>

$ gcc main.c <span class="token parameter variable">-o</span> main <span class="token parameter variable">-std</span><span class="token operator">=</span>c89                    <span class="token comment"># 强制使用 C89/C90(同一标准不同叫法) 编译</span>
<span class="token operator">&gt;</span> main.c: In <span class="token keyword">function</span> ‘main’:
<span class="token operator">&gt;</span> main.c:5:5: error: ‘for’ loop initial declarations are only allowed <span class="token keyword">in</span> C99 or C11 mode
<span class="token operator">&gt;</span>    for<span class="token punctuation">(</span>int <span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i++<span class="token punctuation">)</span> <span class="token punctuation">{</span>                  <span class="token comment"># C89/C90 标准不支持在 for 循环内定义变量</span>
<span class="token operator">&gt;</span>    ^~~                                         <span class="token comment"># 提示使用 C99 或以上的标准编译</span>
<span class="token operator">&gt;</span> main.c:5:5: note: use option <span class="token parameter variable">-std</span><span class="token operator">=</span>c99, <span class="token parameter variable">-std</span><span class="token operator">=</span>gnu99, <span class="token parameter variable">-std</span><span class="token operator">=</span>c11 or <span class="token parameter variable">-std</span><span class="token operator">=</span>gnu11 to compile your code
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="格式" tabindex="-1"><a class="header-anchor" href="#格式" aria-hidden="true">#</a> 格式</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> num<span class="token punctuation">;</span>                                         <span class="token comment">// 声明变量 &lt;类型&gt; &lt;变量名&gt;; 分号是必须的</span>
num <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>                                         <span class="token comment">// 变量必须声明后才可以赋值</span>

<span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>                                     <span class="token comment">// 变量声明并赋值, 等号两边空格不是必须</span>

<span class="token keyword">int</span>                                              <span class="token comment">// 语句以分号结尾, 编译器会忽略换行</span>
num
<span class="token operator">=</span>
<span class="token number">3</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">add</span> <span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>                         <span class="token comment">// &lt;return type&gt; &lt;function name&gt; (&lt;arg type&gt; &lt;arg name&gt;) {  </span>
    <span class="token keyword">int</span> sum <span class="token operator">=</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>                             <span class="token comment">// code block</span>
    <span class="token keyword">return</span> sum<span class="token punctuation">;</span>                                  <span class="token comment">// code block</span>
<span class="token punctuation">}</span>                                                <span class="token comment">// }  function end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关键字" tabindex="-1"><a class="header-anchor" href="#关键字" aria-hidden="true">#</a> 关键字</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>branch<span class="token operator">:</span>    <span class="token keyword">if</span>     <span class="token keyword">else</span>  <span class="token keyword">switch</span>  <span class="token keyword">case</span>  <span class="token keyword">default</span>
loop<span class="token operator">:</span>      <span class="token keyword">for</span>    <span class="token keyword">do</span>    <span class="token keyword">while</span>
jump<span class="token operator">:</span>      <span class="token keyword">break</span>  <span class="token keyword">goto</span>  <span class="token keyword">return</span>  <span class="token keyword">continue</span> 

Functions<span class="token operator">:</span> <span class="token keyword">sizeof</span> <span class="token keyword">typedef</span> 
Type<span class="token operator">:</span>      <span class="token keyword">void</span>   <span class="token keyword">int</span>    <span class="token keyword">char</span>   <span class="token keyword">float</span>    <span class="token keyword">double</span> 
           <span class="token keyword">union</span>  <span class="token keyword">enum</span>   <span class="token class-name">struct</span>   
Modifiers<span class="token operator">:</span> <span class="token keyword">short</span>  <span class="token keyword">long</span>   <span class="token keyword">signed</span> <span class="token keyword">unsigned</span> 
           <span class="token keyword">const</span>  <span class="token keyword">static</span> <span class="token keyword">auto</span>   <span class="token keyword">register</span> <span class="token keyword">extern</span>  <span class="token keyword">volatile</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),o=[p];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","C-0-base.html.vue"]]);export{k as default};
