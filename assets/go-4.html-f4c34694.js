import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-8da2a3ac.js";const p={},t=e(`<h2 id="if-else-分支" tabindex="-1"><a class="header-anchor" href="#if-else-分支" aria-hidden="true">#</a> if else 分支</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code> <span class="token keyword">if</span> expression <span class="token punctuation">{</span>
     branch
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> expression <span class="token punctuation">{</span>
     branch
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    branch
 <span class="token punctuation">}</span>
 
 done <span class="token operator">:=</span> <span class="token boolean">false</span>
 <span class="token keyword">if</span> done <span class="token punctuation">{</span>
    <span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;done, goodbye&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;not done, continue&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">if</span> done <span class="token operator">:=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> done <span class="token punctuation">{</span>
    <span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;done, goodbye&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;not done, continue&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="for-循环" tabindex="-1"><a class="header-anchor" href="#for-循环" aria-hidden="true">#</a> for 循环</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code> <span class="token keyword">for</span> initial<span class="token punctuation">;</span> expression<span class="token punctuation">;</span> end <span class="token punctuation">{</span>
    loop
 <span class="token punctuation">}</span>

 <span class="token keyword">for</span> i<span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
    <span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;index: %d\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token operator">&gt;</span> index<span class="token punctuation">:</span> <span class="token number">0</span>
 <span class="token operator">&gt;</span> index<span class="token punctuation">:</span> <span class="token number">1</span>
 <span class="token operator">&gt;</span> index<span class="token punctuation">:</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for-range" tabindex="-1"><a class="header-anchor" href="#for-range" aria-hidden="true">#</a> for range</h3><p>遍历数组, 切片, map</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>
 intSlice <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">}</span>
 <span class="token keyword">for</span> index<span class="token punctuation">,</span> elem <span class="token operator">:=</span> <span class="token keyword">range</span> intSlice <span class="token punctuation">{</span>             <span class="token comment">// 数组和切片会返回索引和值</span>
     <span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d: %d\\n&quot;</span><span class="token punctuation">,</span> index<span class="token punctuation">,</span> elem<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">:</span> <span class="token number">0</span>
 <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">:</span> <span class="token number">1</span>

 intMap <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span>
    <span class="token string">&quot;1st&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token string">&quot;2nd&quot;</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">for</span> key<span class="token punctuation">,</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> intMap <span class="token punctuation">{</span>                <span class="token comment">// map 会返回 key 和 value</span>
    <span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s: %d\\n&quot;</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 <span class="token operator">&gt;</span> 2nd<span class="token punctuation">:</span> <span class="token number">2</span>
 <span class="token operator">&gt;</span> 1st<span class="token punctuation">:</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="continue" tabindex="-1"><a class="header-anchor" href="#continue" aria-hidden="true">#</a> continue</h3><p>提前结束本次循环, 直接进入下一次循环</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code> <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>                                  <span class="token comment">// 当 i == 1， 使用 continue 提前结束</span>
        <span class="token keyword">continue</span>                                 <span class="token comment">// 提前结束本次循环, 进入下一个循环</span>
    <span class="token punctuation">}</span>
    <span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token operator">&gt;</span> <span class="token number">0</span>
 <span class="token operator">&gt;</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="break" tabindex="-1"><a class="header-anchor" href="#break" aria-hidden="true">#</a> break</h3><p>结束最近的一层循环, 一个 break 结束一个 for 循环</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code> <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>                                  <span class="token comment">// 当 i == 1， 使用 break 结束循环</span>
        <span class="token keyword">break</span>                                    <span class="token comment">// break 只能跳出一层循环</span>
    <span class="token punctuation">}</span>
    <span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token operator">&gt;</span> <span class="token number">0</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="goto" tabindex="-1"><a class="header-anchor" href="#goto" aria-hidden="true">#</a> goto</h3><p>设置 tag, 跳出复杂逻辑到 tag 语句</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code> <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> j <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> j <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            <span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;loop over i:%d j:%d\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">)</span>
            <span class="token keyword">goto</span> breakTwoLoop                    <span class="token comment">// 从复杂结构中跳到 tag 对应的语句</span>
        <span class="token punctuation">}</span>
        <span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;i:%d j:%d\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 breakTwoLoop<span class="token punctuation">:</span>                                   <span class="token comment">// 设置 tag 及执行语句, 提供可跳跃点</span>
     <span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Get out of loop&quot;</span><span class="token punctuation">)</span>

 <span class="token operator">&gt;</span> i<span class="token punctuation">:</span><span class="token number">0</span> j<span class="token punctuation">:</span><span class="token number">0</span>
 <span class="token operator">&gt;</span> i<span class="token punctuation">:</span><span class="token number">0</span> j<span class="token punctuation">:</span><span class="token number">1</span>
 <span class="token operator">&gt;</span> i<span class="token punctuation">:</span><span class="token number">0</span> j<span class="token punctuation">:</span><span class="token number">2</span>
 <span class="token operator">&gt;</span> loop over i<span class="token punctuation">:</span><span class="token number">1</span> j<span class="token punctuation">:</span><span class="token number">0</span>
 <span class="token operator">&gt;</span> Get out of loop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="switch-case" tabindex="-1"><a class="header-anchor" href="#switch-case" aria-hidden="true">#</a> switch case</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code> <span class="token keyword">switch</span> expression <span class="token punctuation">{</span>
 <span class="token keyword">case</span> branch<span class="token punctuation">:</span>
     code    
 <span class="token keyword">case</span> branch<span class="token punctuation">:</span>
     code
 <span class="token keyword">case</span> branch<span class="token punctuation">:</span>
     code
 <span class="token keyword">default</span><span class="token punctuation">:</span>
     code
 <span class="token punctuation">}</span>

 <span class="token keyword">switch</span> nun <span class="token operator">:=</span> <span class="token number">3</span><span class="token punctuation">;</span> num <span class="token punctuation">{</span>                          <span class="token comment">// 值选择分支</span>
 <span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">:</span>                                 <span class="token comment">// 单个分支可容纳多个值</span>
     <span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;奇数&quot;</span><span class="token punctuation">)</span>                               
 <span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">:</span>                                   <span class="token comment">// 每个分支自带 break, 执行完分支即退出 switch</span>
     <span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;偶数&quot;</span><span class="token punctuation">)</span>
 <span class="token keyword">default</span><span class="token punctuation">:</span>
     <span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;超出范围&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token operator">&gt;</span> 奇数

 grade <span class="token operator">:=</span> <span class="token number">80</span>
 <span class="token keyword">switch</span>  <span class="token punctuation">{</span>                                       <span class="token comment">// 表达式选择分支, 变量需要在 switch 外初始化</span>
 <span class="token keyword">case</span> grade <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> grade <span class="token operator">&lt;</span> <span class="token number">60</span><span class="token punctuation">:</span>                  
     <span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;不及格, 好好努力&quot;</span><span class="token punctuation">)</span>
 <span class="token keyword">case</span> grade <span class="token operator">&gt;=</span> <span class="token number">60</span> <span class="token operator">&amp;&amp;</span> grade <span class="token operator">&lt;</span> <span class="token number">80</span><span class="token punctuation">:</span>
     <span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;不错的成绩, 继续加油!&quot;</span><span class="token punctuation">)</span> 
 <span class="token keyword">case</span> grade <span class="token operator">&gt;=</span> <span class="token number">80</span> <span class="token operator">&amp;&amp;</span> grade <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">:</span>
     <span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;很棒哦!&quot;</span><span class="token punctuation">)</span> 
 <span class="token keyword">default</span><span class="token punctuation">:</span>
     <span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;分数错误&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 
 <span class="token operator">&gt;</span> 很棒哦<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),o=[t];function c(i,l){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","go-4.html.vue"]]);export{d as default};
