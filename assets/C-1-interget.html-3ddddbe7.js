import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-8da2a3ac.js";const t={},p=e(`<h2 id="整形" tabindex="-1"><a class="header-anchor" href="#整形" aria-hidden="true">#</a> 整形</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">short</span> <span class="token keyword">int</span> short_int <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> normal_int <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">long</span> <span class="token keyword">int</span> long_int <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
     
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;size of short int : %zu\\n&quot;</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>short_int<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;size of normal int: %zu\\n&quot;</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>normal_int<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;size of long int  : %zu\\n&quot;</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>long_int<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

size of <span class="token keyword">short</span> <span class="token keyword">int</span> <span class="token operator">:</span> <span class="token number">2</span>
size of normal <span class="token keyword">int</span><span class="token operator">:</span> <span class="token number">4</span>
size of <span class="token keyword">long</span> <span class="token keyword">int</span>  <span class="token operator">:</span> <span class="token number">8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>sizeof : 返回变量占用的存储大小(单位: 字节)</p><table><thead><tr><th style="text-align:center;">关键字</th><th style="text-align:center;">signed</th><th style="text-align:center;">unsigned</th></tr></thead><tbody><tr><td style="text-align:center;">含义</td><td style="text-align:center;">有符号(包含负数, 默认值)</td><td style="text-align:center;">无符号(从 0 开始, 不包含负数)</td></tr></tbody></table><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>                                     <span class="token comment">// 省略 signed, 默认有符号</span>
<span class="token keyword">signed</span> num <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>                                  <span class="token comment">// 省略 int, int 可以省略</span>
<span class="token keyword">signed</span> <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>                              <span class="token comment">// 全写, 与上述两种声明效果一致</span>

<span class="token keyword">unsigned</span> <span class="token keyword">short</span> x<span class="token punctuation">;</span>                                <span class="token comment">// unsigned short int; 省略 int</span>
<span class="token keyword">long</span> y<span class="token punctuation">;</span>                                          <span class="token comment">// unsigned long int; 省略 signed 和 int</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:left;">类型</th><th style="text-align:left;">大小</th><th style="text-align:left;">范围</th></tr></thead><tbody><tr><td style="text-align:left;"><code>signed short int</code></td><td style="text-align:left;">2 个字节 (16 位)</td><td style="text-align:left;">-(2^15) ~ (2^15)-1</td></tr><tr><td style="text-align:left;"><code>unsigned short int</code></td><td style="text-align:left;">2 个字节 (16 位)</td><td style="text-align:left;">0 ~ (2^16)-1</td></tr><tr><td style="text-align:left;"><code>signed int</code></td><td style="text-align:left;">4 个字节 (32 位)</td><td style="text-align:left;">-(2^31) ~ (2^31)-1</td></tr><tr><td style="text-align:left;"><code>unsigned int</code></td><td style="text-align:left;">4 个字节 (32 位)</td><td style="text-align:left;">0 ~ (2^32)-1</td></tr><tr><td style="text-align:left;"><code>signed long int</code></td><td style="text-align:left;">8 个字节 (64 位)</td><td style="text-align:left;">-(2^63) ~ (2^63)-1</td></tr><tr><td style="text-align:left;"><code>unsigned long int</code></td><td style="text-align:left;">8 个字节 (64 位)</td><td style="text-align:left;">0 ~ (2^64)-1</td></tr></tbody></table><h3 id="最值" tabindex="-1"><a class="header-anchor" href="#最值" aria-hidden="true">#</a> 最值</h3><p>C 语言最值的定义 /usr/include/limits.h</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/* Minimum and maximum values a \`signed short int&#39; can hold.  */</span>
<span class="token macro property"><span class="token directive-hash">#</span>  <span class="token directive keyword">define</span> <span class="token macro-name">SHRT_MIN</span>      <span class="token expression"><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">32768</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span>  <span class="token directive keyword">define</span> <span class="token macro-name">SHRT_MAX</span>      <span class="token expression"><span class="token number">32767</span></span></span>

<span class="token comment">/* Maximum value an \`unsigned short int&#39; can hold.  (Minimum is 0.)  */</span>
<span class="token macro property"><span class="token directive-hash">#</span>  <span class="token directive keyword">define</span> <span class="token macro-name">USHRT_MAX</span>     <span class="token expression"><span class="token number">65535</span></span></span>

<span class="token comment">/* Minimum and maximum values a \`signed int&#39; can hold.  */</span>
<span class="token macro property"><span class="token directive-hash">#</span>  <span class="token directive keyword">define</span> <span class="token macro-name">INT_MIN</span>       <span class="token expression"><span class="token punctuation">(</span><span class="token operator">-</span>INT_MAX <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span>  <span class="token directive keyword">define</span> <span class="token macro-name">INT_MAX</span>       <span class="token expression"><span class="token number">2147483647</span></span></span>

<span class="token comment">/* Maximum value an \`unsigned int&#39; can hold.  (Minimum is 0.)  */</span>
<span class="token macro property"><span class="token directive-hash">#</span>  <span class="token directive keyword">define</span> <span class="token macro-name">UINT_MAX</span>      <span class="token expression"><span class="token number">4294967295U</span></span></span>

<span class="token comment">/* Minimum and maximum values a \`signed long int&#39; can hold.  */</span>
<span class="token macro property"><span class="token directive-hash">#</span>  <span class="token directive keyword">if</span> <span class="token expression">__WORDSIZE <span class="token operator">==</span> <span class="token number">64</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span>   <span class="token directive keyword">define</span> <span class="token macro-name">LONG_MAX</span>     <span class="token expression"><span class="token number">9223372036854775807L</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span>  <span class="token directive keyword">else</span></span>
<span class="token macro property"><span class="token directive-hash">#</span>   <span class="token directive keyword">define</span> <span class="token macro-name">LONG_MAX</span>     <span class="token expression"><span class="token number">2147483647L</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span>  <span class="token directive keyword">endif</span></span>
<span class="token macro property"><span class="token directive-hash">#</span>  <span class="token directive keyword">define</span> <span class="token macro-name">LONG_MIN</span>      <span class="token expression"><span class="token punctuation">(</span><span class="token operator">-</span>LONG_MAX <span class="token operator">-</span> <span class="token number">1L</span><span class="token punctuation">)</span></span></span>

<span class="token comment">/* Maximum value an \`unsigned long int&#39; can hold.  (Minimum is 0.)  */</span>
<span class="token macro property"><span class="token directive-hash">#</span>  <span class="token directive keyword">if</span> <span class="token expression">__WORDSIZE <span class="token operator">==</span> <span class="token number">64</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span>   <span class="token directive keyword">define</span> <span class="token macro-name">ULONG_MAX</span>    <span class="token expression"><span class="token number">18446744073709551615UL</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span>  <span class="token directive keyword">else</span></span>
<span class="token macro property"><span class="token directive-hash">#</span>   <span class="token directive keyword">define</span> <span class="token macro-name">ULONG_MAX</span>    <span class="token expression"><span class="token number">4294967295UL</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span>  <span class="token directive keyword">endif</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引入头文件, 通过变量名使用最值</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;limits.h&gt;</span></span>

<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;signed short int min  : %d \\n&quot;</span><span class="token punctuation">,</span> SHRT_MIN<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;signed short int max  : %d \\n&quot;</span><span class="token punctuation">,</span> SHRT_MAX<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;signed int min        : %d \\n&quot;</span><span class="token punctuation">,</span> INT_MIN<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;signed int max        : %d \\n&quot;</span><span class="token punctuation">,</span> INT_MAX<span class="token punctuation">)</span><span class="token punctuation">;</span>          
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;signed long int min   : %ld \\n&quot;</span><span class="token punctuation">,</span> LONG_MIN<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;signed long int max   : %ld \\n&quot;</span><span class="token punctuation">,</span> LONG_MAX<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;unsigned short int max: %d \\n&quot;</span><span class="token punctuation">,</span> USHRT_MAX<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;unsigned int       max: %u \\n&quot;</span><span class="token punctuation">,</span> UINT_MAX<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;unsigned long int  max: %lu \\n&quot;</span><span class="token punctuation">,</span> ULONG_MAX<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">&gt;</span> <span class="token keyword">signed</span> <span class="token keyword">short</span> <span class="token keyword">int</span> min  <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">32768</span> 
<span class="token operator">&gt;</span> <span class="token keyword">signed</span> <span class="token keyword">short</span> <span class="token keyword">int</span> max  <span class="token operator">:</span> <span class="token number">32767</span> 
<span class="token operator">&gt;</span> <span class="token keyword">signed</span> <span class="token keyword">int</span> min        <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">2147483648</span>            <span class="token comment">// 占位符对应类型，也有范围</span>
<span class="token operator">&gt;</span> <span class="token keyword">signed</span> <span class="token keyword">int</span> max        <span class="token operator">:</span> <span class="token number">2147483647</span>             <span class="token comment">// 变量只超出占位符范围会溢出，打印错误值</span>
<span class="token operator">&gt;</span> <span class="token keyword">signed</span> <span class="token keyword">long</span> <span class="token keyword">int</span> min   <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">9223372036854775808</span>   <span class="token comment">// long 超出 %d 范围，需要使用 long 整形占位符 %ld</span>
<span class="token operator">&gt;</span> <span class="token keyword">signed</span> <span class="token keyword">long</span> <span class="token keyword">int</span> max   <span class="token operator">:</span> <span class="token number">9223372036854775807</span>    <span class="token comment">// %d 的范围即为 signed int 的范围</span>

<span class="token operator">&gt;</span> <span class="token keyword">unsigned</span> <span class="token keyword">short</span> <span class="token keyword">int</span> max<span class="token operator">:</span> <span class="token number">65535</span> 
<span class="token operator">&gt;</span> <span class="token keyword">unsigned</span> <span class="token keyword">int</span>       max<span class="token operator">:</span> <span class="token number">4294967295</span>             <span class="token comment">// 超出 signed 范围, 使用 %u 无符号整型</span>
<span class="token operator">&gt;</span> <span class="token keyword">unsigned</span> <span class="token keyword">long</span> <span class="token keyword">int</span>  max<span class="token operator">:</span> <span class="token number">18446744073709551615</span>   <span class="token comment">// 超出 signed long 范围, 使用 %lu 无符号长整型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;long int: %d \\n&quot;</span><span class="token punctuation">,</span> LONG_MAX<span class="token punctuation">)</span><span class="token punctuation">;</span>             <span class="token comment">// long 范围超出 %d 范围</span>
<span class="token operator">&gt;</span> <span class="token keyword">long</span> <span class="token keyword">int</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span>                                   <span class="token comment">// 溢出, 打印错误</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="进制" tabindex="-1"><a class="header-anchor" href="#进制" aria-hidden="true">#</a> 进制</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> bin <span class="token operator">=</span> <span class="token number">0</span>b10<span class="token punctuation">;</span>                                  <span class="token comment">// 二进制 (低版本编译器不支持)</span>
<span class="token keyword">int</span> oct <span class="token operator">=</span> <span class="token number">010</span><span class="token punctuation">;</span>                                   <span class="token comment">// 八进制, 0 开头</span>
<span class="token keyword">int</span> ten <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>                                    <span class="token comment">// 十进制</span>
<span class="token keyword">int</span> hex <span class="token operator">=</span> <span class="token number">0x10</span><span class="token punctuation">;</span>                                  <span class="token comment">// 十六进制</span>

<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;    oct  dec  hex \\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;bin %2o  %2d  %2x \\n&quot;</span><span class="token punctuation">,</span> bin<span class="token punctuation">,</span> bin<span class="token punctuation">,</span> bin<span class="token punctuation">)</span><span class="token punctuation">;</span>   
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;oct %2o  %2d  %2x \\n&quot;</span><span class="token punctuation">,</span> oct<span class="token punctuation">,</span> oct<span class="token punctuation">,</span> oct<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// %o  八进制形式打印</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;dec %2o  %2d  %2x \\n&quot;</span><span class="token punctuation">,</span> ten<span class="token punctuation">,</span> ten<span class="token punctuation">,</span> ten<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// %d 十进制形式打印</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;hex %2o  %2d  %2x \\n&quot;</span><span class="token punctuation">,</span> hex<span class="token punctuation">,</span> hex<span class="token punctuation">,</span> hex<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// %x 十六进制形式打印</span>

<span class="token operator">&gt;</span>     oct  dec  hex
<span class="token operator">&gt;</span> bin  <span class="token number">2</span>   <span class="token number">2</span>   <span class="token number">2</span> 
<span class="token operator">&gt;</span> oct <span class="token number">10</span>   <span class="token number">8</span>   <span class="token number">8</span> 
<span class="token operator">&gt;</span> dec <span class="token number">12</span>  <span class="token number">10</span>   a 
<span class="token operator">&gt;</span> hex <span class="token number">20</span>  <span class="token number">16</span>  <span class="token number">10</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="浮点数" tabindex="-1"><a class="header-anchor" href="#浮点数" aria-hidden="true">#</a> 浮点数</h2><p>浮点数的存储方式与整数不一致，浮点数采用科学计数法存储浮点数</p><p><code>float = (+/-) (1 + 尾数) * (2^指数)</code></p><table><thead><tr><th style="text-align:center;">类型</th><th style="text-align:center;">符号位</th><th style="text-align:center;">指数位</th><th style="text-align:center;">尾数</th></tr></thead><tbody><tr><td style="text-align:center;">float</td><td style="text-align:center;">1 位(31)</td><td style="text-align:center;">8 位(23-30)</td><td style="text-align:center;">23 位(0-22)</td></tr><tr><td style="text-align:center;">double</td><td style="text-align:center;">1 位(63)</td><td style="text-align:center;">11 位(52-62)</td><td style="text-align:center;">52 位(0-52)</td></tr></tbody></table><p>指数(8 位): 2 的指数(-128 ~ 127), 决定范围<br> 尾数(23位): 小数点后的数值(0 ~ 1), 决定精度</p><p>最大值(符号取正, 尾数接近 1, 指数 127): (+1)(1+1) 2^127 = 2^128<br> 精度: 8388608(2^23), 共 7 位, 第 7 位未能覆盖, 所以仅能保证 6 位</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">float</span> f <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;float %f size: %zu \\n&quot;</span><span class="token punctuation">,</span> f<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&gt;</span> <span class="token keyword">float</span> <span class="token number">3.000000</span> size<span class="token operator">:</span> <span class="token number">4</span> 

<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;float %.20f \\n&quot;</span><span class="token punctuation">,</span> <span class="token number">0.1</span><span class="token operator">+</span><span class="token number">0.2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>               <span class="token comment">// 打印浮点数小数点后 20 位 </span>
<span class="token operator">&gt;</span> <span class="token keyword">float</span> <span class="token number">0.30000000000000004441</span>                   <span class="token comment">// 浮点数精度问题, 0.1+0.2 != 0.3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类型转换" tabindex="-1"><a class="header-anchor" href="#类型转换" aria-hidden="true">#</a> 类型转换</h2><p>数字类型之间可以互相转换, 转换的前后类型包含关系可能会导致精度损失或类型溢出</p><h3 id="隐式转换" tabindex="-1"><a class="header-anchor" href="#隐式转换" aria-hidden="true">#</a> 隐式转换</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">float</span> e <span class="token operator">=</span> <span class="token number">2.718</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> num <span class="token operator">=</span> e<span class="token punctuation">;</span>                                     <span class="token comment">// 浮点型转整形</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;num: %d\\n&quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>                        
<span class="token operator">&gt;</span> num<span class="token operator">:</span> <span class="token number">2</span>                                         <span class="token comment">// 小数部分丢失</span>

<span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">32768</span><span class="token punctuation">;</span>
<span class="token keyword">short</span> s_num <span class="token operator">=</span> num<span class="token punctuation">;</span>                               <span class="token comment">// int 转 short int, signed short int (-32768, 32767)</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;num: %d\\n&quot;</span><span class="token punctuation">,</span> s_num<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&gt;</span> num<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">32768</span>                                    <span class="token comment">// 数值溢出, 可能导致意想不到的问题</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="显式转换" tabindex="-1"><a class="header-anchor" href="#显式转换" aria-hidden="true">#</a> 显式转换</h3><p>显式转换: (type)variable</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;num: %f\\n&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">float</span><span class="token punctuation">)</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>                 <span class="token comment">// num 强制转为 float 类型 </span>
<span class="token operator">&gt;</span> num<span class="token operator">:</span> <span class="token number">3.000000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="布尔值" tabindex="-1"><a class="header-anchor" href="#布尔值" aria-hidden="true">#</a> 布尔值</h2><p>C99 标准开始添加 stdbool.h 引入了 _Bool 类型<br> 布尔类型本质还是 0 和 1</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">bool</span> <span class="token expression"><span class="token keyword">_Bool</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">true</span> <span class="token expression"><span class="token number">1</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">false</span> <span class="token expression"><span class="token number">0</span></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>bool normal<span class="token punctuation">;</span>
bool flag <span class="token operator">=</span> true<span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;bool normal: %d \\n&quot;</span><span class="token punctuation">,</span> normal<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;bool flag  : %d \\n&quot;</span><span class="token punctuation">,</span> flag<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">&gt;</span> bool normal<span class="token operator">:</span> <span class="token number">0</span> 
<span class="token operator">&gt;</span> bool flag  <span class="token operator">:</span> <span class="token number">1</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32),o=[p];function c(l,i){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","C-1-interget.html.vue"]]);export{u as default};
