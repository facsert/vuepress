import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as p}from"./app-8da2a3ac.js";const t={},e=p(`<h2 id="eval" tabindex="-1"><a class="header-anchor" href="#eval" aria-hidden="true">#</a> eval</h2><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><p>eval 能评估字符串转换为表达式, 返回表达式的值</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code> <span class="token builtin">eval</span><span class="token punctuation">(</span>string<span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token builtin">globals</span><span class="token punctuation">:</span> <span class="token builtin">dict</span><span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token builtin">locals</span><span class="token punctuation">:</span><span class="token builtin">dict</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>    <span class="token comment"># 后两个参数类型为字典</span>
 <span class="token builtin">eval</span><span class="token punctuation">(</span>string<span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">)</span>                        <span class="token comment"># 后两个默认参数, 默认值为 None</span>

 a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span>
 <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token string">&#39;a + b&#39;</span><span class="token punctuation">)</span>                                   <span class="token comment"># 将字符串转换成表达式</span>
 <span class="token operator">&gt;</span> <span class="token number">3</span>                                             <span class="token comment"># 返回表达式的执行结果</span>

 variable <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">2</span>
 <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token string">&#39;abs(variable)&#39;</span><span class="token punctuation">)</span>                           <span class="token comment"># 使用内置函数</span>
 <span class="token operator">&gt;</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="限定范围" tabindex="-1"><a class="header-anchor" href="#限定范围" aria-hidden="true">#</a> 限定范围</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code> <span class="token builtin">eval</span><span class="token punctuation">(</span>string<span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">,</span> local<span class="token punctuation">:</span><span class="token builtin">dict</span><span class="token punctuation">)</span>                  <span class="token comment"># 所有全局变量可用, 局部变量限定字典内</span>
 <span class="token builtin">eval</span><span class="token punctuation">(</span>string<span class="token punctuation">,</span> <span class="token keyword">global</span><span class="token punctuation">:</span><span class="token builtin">dict</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">)</span>                 <span class="token comment"># 所有局内变量可用, 全局变量限定字典内</span>

 glo_var <span class="token operator">=</span> <span class="token string">&#39;global variable&#39;</span>
 <span class="token keyword">def</span> <span class="token function">eval_test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    loc_val <span class="token operator">=</span> <span class="token string">&#39;local variable&#39;</span>
    <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token string">&#39;print(glo_val + loc_val)&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">)</span>   <span class="token comment"># 全局变量受限, 无法识别 glo_var</span>
 <span class="token operator">&gt;</span> name <span class="token string">&#39;glo_val&#39;</span> <span class="token keyword">is</span> <span class="token keyword">not</span> defined

 glo_var <span class="token operator">=</span> <span class="token string">&#39;global variable&#39;</span>
 <span class="token keyword">def</span> <span class="token function">eval_test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    loc_val <span class="token operator">=</span> <span class="token string">&#39;local variable&#39;</span>
    <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token string">&#39;print(glo_val + loc_val)&#39;</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>   <span class="token comment"># 局内变量受限, 无法识别 loc_val</span>
 <span class="token operator">&gt;</span> name <span class="token string">&#39;loc_val&#39;</span> <span class="token keyword">is</span> <span class="token keyword">not</span> defined

 glo_var <span class="token operator">=</span> <span class="token string">&#39;global variable&#39;</span>
 <span class="token keyword">def</span> <span class="token function">eval_test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    loc_val <span class="token operator">=</span> <span class="token string">&#39;local variable&#39;</span>
    <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token string">&#39;print(glo_val + loc_val)&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>     <span class="token comment"># 局内变量, 全局变量均受限 </span>
 <span class="token operator">&gt;</span> name <span class="token string">&#39;loc_val&#39;</span> <span class="token keyword">is</span> <span class="token keyword">not</span> defined

 glo_var <span class="token operator">=</span> <span class="token string">&#39;global variable&#39;</span>
 <span class="token keyword">def</span> <span class="token function">eval_test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    loc_val <span class="token operator">=</span> <span class="token string">&#39;local variable&#39;</span>
    <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token string">&#39;print(glo_val + loc_val)&#39;</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">)</span> <span class="token comment"># 变量取值不受限制, 正常取值  </span>
 <span class="token operator">&gt;</span> name <span class="token string">&#39;loc_val&#39;</span> <span class="token keyword">is</span> <span class="token keyword">not</span> defined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安全性" tabindex="-1"><a class="header-anchor" href="#安全性" aria-hidden="true">#</a> 安全性</h3><p>全局变量存在一个内置命名空间, 包含很多常用函数和属性(无需导入即可使用)</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
 <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token string">&#39;abs(a)&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>a<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>                     <span class="token comment"># 全局变量和局内变量只提供一个变量, 还是能识别 abs 函数</span>
 <span class="token operator">&gt;</span> <span class="token number">3</span>

 <span class="token builtin">eval</span><span class="token punctuation">(</span>string<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&#39;__builtins__&#39;</span><span class="token punctuation">:</span> <span class="token boolean">None</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

 <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token string">&#39;abs(-3)&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&#39;__builtins__&#39;</span><span class="token punctuation">:</span> <span class="token boolean">None</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">)</span>   <span class="token comment"># global 隐式携带内置命名空间, 必须显式声明, {} 无效</span>
 <span class="token operator">&gt;</span> <span class="token string">&#39;NoneType&#39;</span> <span class="token builtin">object</span> <span class="token keyword">is</span> <span class="token keyword">not</span> subscriptable

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注: 避免将未知字符转换为代码, 需要屏蔽 python 内置函数和属性</p><h2 id="exec" tabindex="-1"><a class="header-anchor" href="#exec" aria-hidden="true">#</a> exec</h2><h3 id="使用-1" tabindex="-1"><a class="header-anchor" href="#使用-1" aria-hidden="true">#</a> 使用</h3><p>exec 将字符串转换为代码块, 返回值为 None</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code> <span class="token keyword">exec</span><span class="token punctuation">(</span>string<span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token builtin">globals</span><span class="token punctuation">:</span> <span class="token builtin">dict</span><span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token builtin">locals</span><span class="token punctuation">:</span><span class="token builtin">dict</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>    <span class="token comment"># 后两个参数类型为字典</span>
 <span class="token keyword">exec</span><span class="token punctuation">(</span>string<span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">)</span>                        <span class="token comment"># 后两个默认参数, 默认值为 None</span>

 <span class="token keyword">exec</span><span class="token punctuation">(</span><span class="token string">&#39;a = 2 + 3&#39;</span><span class="token punctuation">)</span>                               <span class="token comment"># 与正常执行语句一致</span>
 <span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>                                        
 <span class="token operator">&gt;</span> <span class="token number">3</span>

 <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token string">&#39;a = 2 + 3&#39;</span><span class="token punctuation">)</span>                               <span class="token comment"># eval 无法执行语句</span>
         <span class="token operator">^</span>
 SyntaxError<span class="token punctuation">:</span> invalid syntax


 a <span class="token operator">=</span> <span class="token keyword">exec</span><span class="token punctuation">(</span><span class="token string">&#39;2 + 3&#39;</span><span class="token punctuation">)</span>                               <span class="token comment"># exec 也可执行表达式, 但返回值为 None</span>
 <span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>                                        
 <span class="token operator">&gt;</span> <span class="token boolean">None</span>

 a <span class="token operator">=</span> <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token string">&#39;2 + 3&#39;</span><span class="token punctuation">)</span>                               <span class="token comment"># eval 能正常返回表达式结果</span>
 <span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>                                        
 <span class="token operator">&gt;</span> <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="限定范围-1" tabindex="-1"><a class="header-anchor" href="#限定范围-1" aria-hidden="true">#</a> 限定范围</h3><p>与 eval 一致</p><h3 id="安全性-1" tabindex="-1"><a class="header-anchor" href="#安全性-1" aria-hidden="true">#</a> 安全性</h3><p>与 eval 一致</p>`,18),o=[e];function l(c,i){return s(),a("div",null,o)}const r=n(t,[["render",l],["__file","python-eval.html.vue"]]);export{r as default};
