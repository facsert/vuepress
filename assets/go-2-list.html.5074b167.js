import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,a as t}from"./app.8372aa73.js";const p={},e=t(`<p><a href="#%E6%95%B0%E7%BB%84">\u6570\u7EC4</a><a href="#%E5%88%87%E7%89%87">\u5207\u7247</a></p><h2 id="\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4" aria-hidden="true">#</a> \u6570\u7EC4</h2><p>\u6570\u7EC4\u662F<strong>\u786E\u5B9A\u6570\u91CF</strong>\u5143\u7D20\u7684\u96C6\u5408, \u6570\u7EC4\u5143\u7D20\u7C7B\u578B\u53EF\u4EE5\u4E0D\u4E00\u81F4</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code> strList <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;hey&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;you&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">}</span>     <span class="token comment">// \u5B9A\u4E49\u957F\u5EA6\u4E3A 3 , \u5143\u7D20\u4E3A\u5B57\u7B26\u4E32\u7684\u6570\u7EC4</span>
 strList <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;hey&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;you&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">}</span>   <span class="token comment">// \u5B9A\u4E49\u5143\u7D20\u4E3A\u5B57\u7B26\u4E32\u7684\u6570\u7EC4, \u6839\u636E\u503C\u63A8\u65AD\u957F\u5EA6\u548C\u5BB9\u91CF</span>

 intList <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span>                         <span class="token comment">// [1 2 0] \u5B9A\u4E49\u5BB9\u91CF\u957F\u5EA6\u5747\u4E3A 3, \u7C7B\u578B\u4E3A int \u7684\u6570\u7EC4</span>
 intList <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span>                       <span class="token comment">// [1, 2]  \u5BB9\u91CF\u548C\u957F\u5EA6\u5747\u4E3A 2 \u7684 int \u6570\u7EC4</span>

 intArray <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>                        <span class="token comment">// [1 4 0] \u521D\u59CB\u5316\u6570\u7EC4, \u672A\u5B9A\u4E49\u7684\u503C\u53D6 0</span>
 intArray<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> intArray<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span>                 <span class="token comment">// [1 2 3] \u4FEE\u6539\u6570\u7EC4\u7684\u503C</span>

<span class="token comment">// \u6570\u7EC4\u6709\u5BB9\u91CF(cap())\u548C\u957F\u5EA6(len())\u5C5E\u6027</span>
<span class="token comment">// \u6570\u7EC4\u4E2D\u672A\u5B9A\u4E49\u5143\u7D20\u4F1A\u4F7F\u7528\u7C7B\u578B\u9ED8\u8BA4\u503C, \u6570\u7EC4\u5BB9\u91CF\u548C\u957F\u5EA6\u59CB\u7EC8\u4E00\u81F4</span>
<span class="token comment">// \u6570\u7EC4\u4E2D\u5143\u7D20\u503C\u53EF\u4EE5\u4FEE\u6539, \u4F46\u6570\u7EC4\u5BB9\u91CF\u957F\u5EA6\u4E0D\u80FD\u53D8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="any-\u7C7B\u578B\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#any-\u7C7B\u578B\u6570\u7EC4" aria-hidden="true">#</a> any \u7C7B\u578B\u6570\u7EC4</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code> <span class="token keyword">var</span> anyList <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span>any                           <span class="token comment">// [&lt;nil&gt; &lt;nil&gt; &lt;nil&gt;] any \u7C7B\u578B\u521D\u59CB\u503C\u662F nil</span>
 anyList<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> anyList<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;he&quot;</span><span class="token punctuation">,</span> <span class="token number">20000</span>         <span class="token comment">// [he 2 &lt;nil&gt;]</span>
 
 anyList<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> anyList<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; llo&quot;</span>     <span class="token comment">// any \u8F6C\u5B9E\u9645\u7C7B\u578B\u64CD\u4F5C\u9700\u8981\u663E\u793A\u58F0\u660E</span>
 anyList<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> anyList<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span>
  
 <span class="token keyword">for</span> index<span class="token punctuation">,</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> anyList <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;index: %v, value: %v  type: %T\\n&quot;</span><span class="token punctuation">,</span> index<span class="token punctuation">,</span> value<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token operator">&gt;</span> index<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> hello <span class="token keyword">type</span><span class="token punctuation">:</span> <span class="token builtin">string</span> 
 <span class="token operator">&gt;</span> index<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token number">20000</span> <span class="token keyword">type</span><span class="token punctuation">:</span> <span class="token builtin">int</span> 
 <span class="token operator">&gt;</span> index<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token operator">&lt;</span><span class="token boolean">nil</span><span class="token operator">&gt;</span> <span class="token keyword">type</span><span class="token punctuation">:</span> <span class="token operator">&lt;</span><span class="token boolean">nil</span><span class="token operator">&gt;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6570\u7EC4\u503C\u4F20\u9012" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u503C\u4F20\u9012" aria-hidden="true">#</a> \u6570\u7EC4\u503C\u4F20\u9012</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code> array <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
 
 <span class="token keyword">func</span> <span class="token punctuation">(</span>list <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>                            <span class="token comment">// \u6570\u7EC4\u4F5C\u4E3A\u53C2\u6570\u65F6, \u53C2\u6570\u7C7B\u578B\u5FC5\u987B\u5E26\u4E0A\u5BB9\u91CF</span>
     <span class="token keyword">for</span> i<span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span> <span class="token function">len</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span> list<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i <span class="token punctuation">}</span>
     fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span>                           <span class="token comment">// [0 1 2 3] \u4F20\u5165\u51FD\u6570\u7684\u662F\u6570\u7EC4\u7684\u590D\u5236\u4F53, \u4E0D\u6539\u53D8\u539F\u5148\u6570\u7EC4\u5185\u5BB9</span>
 <span class="token punctuation">}</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span>                              <span class="token comment">// [0 0 0 0] \u6570\u7EC4\u8D4B\u503C\u548C\u4F20\u53C2\u90FD\u4F1A\u590D\u5236\u6570\u7EC4\u4F7F\u7528, \u4E0D\u6539\u53D8\u539F\u6570\u7EC4</span>

 <span class="token keyword">func</span> <span class="token punctuation">(</span>list <span class="token operator">*</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">for</span> i<span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span> <span class="token function">len</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span> list<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i <span class="token punctuation">}</span>
     fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span>                           <span class="token comment">// &amp;[0 1 2 3] \u4F20\u5165\u6570\u7EC4\u7684\u5730\u5740, \u4FEE\u6539\u5730\u5740\u5BF9\u5E94\u7684\u503C\u76F8\u5F53\u4E8E\u6539\u53D8\u539F\u6570\u7EC4</span>
 <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>array<span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span>                              <span class="token comment">// [0 1 2 3] \u6570\u7EC4\u5730\u5740\u8D4B\u503C\u548C\u4F20\u53C2\u90FD\u4F1A\u590D\u5236\u6570\u7EC4\u4F7F\u7528, \u4F1A\u6539\u53D8\u539F\u6570\u7EC4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5207\u7247" tabindex="-1"><a class="header-anchor" href="#\u5207\u7247" aria-hidden="true">#</a> \u5207\u7247</h2><p>\u5207\u7247\u662F\u4E00\u7EC4<strong>\u6570\u91CF\u53EF\u53D8</strong>\u7684\u5143\u7D20\u96C6\u5408 \u5207\u7247\u662F\u5F15\u7528\u7C7B\u578B, \u5207\u7247\u8D4B\u503C\u4F20\u9012\u7684\u662F\u5730\u5740</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code> <span class="token keyword">var</span> strSlice <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>                           <span class="token comment">// [] \u5B57\u7B26\u4E32\u5207\u7247\u58F0\u660E, \u4EC5\u58F0\u660E\u4F1A\u521B\u5EFA\u4E00\u4E2A nil \u5207\u7247 </span>
 intSlice <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>                             <span class="token comment">// [] \u6574\u5F62\u5207\u7247\u58F0\u660E\u5E76\u521D\u59CB\u5316, \u521D\u59CB\u5316\u672A\u8D4B\u503C\u521B\u5EFA\u7A7A\u5207\u7247</span>
 boolSlice <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">bool</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>                 <span class="token comment">// [false] \u521D\u59CB\u5316\u5E03\u5C14\u5207\u7247, \u957F\u5EA6\u4E3A 1, \u5BB9\u91CF\u4E3A 2</span>

 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>strSlice <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>                    <span class="token comment">// true nil \u5207\u7247\u4E0E nil \u4E00\u81F4</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>intSlice <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>                    <span class="token comment">// false \u7A7A\u5207\u7247\u4E0E nil \u4E0D\u4E00\u81F4</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>boolSlice <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>                   <span class="token comment">// false \u5207\u7247\u4E4B\u95F4\u65E0\u6CD5\u76F4\u63A5\u6BD4\u8F83</span>
 
<span class="token comment">// \u5207\u7247\u5BB9\u91CF\u968F\u7740\u6570\u636E\u589E\u957F\u800C\u589E\u957F</span>
<span class="token comment">// \u5305\u542B\u957F\u5EA6 len(slice), \u5BB9\u91CF cap(slice) \u5C5E\u6027</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5207\u7247\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#\u5207\u7247\u7279\u6027" aria-hidden="true">#</a> \u5207\u7247\u7279\u6027</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code> intSlice <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">}</span>                      <span class="token comment">// \u6574\u6570\u5207\u7247\u521D\u59CB\u5316</span>
 intArray <span class="token operator">:=</span> intSlice                            <span class="token comment">// \u5207\u7247\u8D4B\u503C, \u4F20\u9012\u7684\u662F\u5730\u5740, \u4E24\u5207\u7247\u6307\u5411\u540C\u4E00\u4E2A\u6570\u7EC4</span>
               
 intArray<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>                                 <span class="token comment">// intArray \u5E8F\u53F7 0 \u91CD\u65B0\u8D4B\u503C, intSlice \u8DDF\u7740\u53D8\u5316</span>
 intArray <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>intArray<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>                  <span class="token comment">// intArray \u6DFB\u52A0\u5143\u7D20, \u5207\u7247\u6307\u5411\u65B0\u7684\u6570\u7EC4</span>
 intArray<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>                                 <span class="token comment">// intArray \u5E8F\u53F7 1 \u91CD\u65B0\u8D4B\u503C, \u4E0E intSlice \u6307\u5411\u6570\u7EC4\u4E0D\u4E00\u81F4</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;intArray: %v intSlice: %v\\n&quot;</span><span class="token punctuation">,</span> intArray<span class="token punctuation">,</span> intSlice<span class="token punctuation">)</span>

 <span class="token operator">&gt;</span> intArray<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">1</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">2</span><span class="token punctuation">]</span> intSlice<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span><span class="token punctuation">]</span>     <span class="token comment">// \u5207\u7247\u6269\u5BB9\u540E, \u4E24\u5207\u7247\u6307\u5B9A\u6570\u7EC4\u4E0D\u540C\uFF0C\u503C\u4E92\u4E0D\u5F71\u54CD</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5207\u7247\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5207\u7247\u64CD\u4F5C" aria-hidden="true">#</a> \u5207\u7247\u64CD\u4F5C</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code> intSlice <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">}</span>
 intSlice <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>intSlice<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>              <span class="token comment">// append \u6DFB\u52A0\u6570\u636E</span>
 intSlice <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>intSlice<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> intSlice<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token comment">// append \u5220\u9664\u6570\u636E</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;intSlice: %v\\n&quot;</span><span class="token punctuation">,</span> intSlice<span class="token punctuation">)</span>
 <span class="token operator">&gt;</span> intSlice<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span>

 intSlice <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>sort<span class="token punctuation">.</span><span class="token function">Ints</span><span class="token punctuation">(</span>intSlice<span class="token punctuation">)</span><span class="token punctuation">)</span>
 <span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">4</span> <span class="token number">6</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","go-2-list.html.vue"]]);export{r as default};