import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,a as t}from"./app.4fbe9141.js";const p={},e=t(`<h2 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> Map</h2><p>map \u662F\u4E00\u7EC4<strong>\u65E0\u5E8F</strong>\u7684\u952E\u503C\u5BF9\u7684\u96C6\u5408 map \u662F\u5F15\u7528\u7C7B\u578B, \u8D4B\u503C\u65F6\u4F20\u9012\u7684\u662F\u5730\u5740</p><h3 id="map-\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#map-\u521D\u59CB\u5316" aria-hidden="true">#</a> map \u521D\u59CB\u5316</h3><p>map \u53EA\u58F0\u660E\u4E0D\u521D\u59CB\u5316\u53D6\u96F6\u503C nil, nil map \u53EA\u80FD\u8BFB\u4E0D\u80FD\u5199\u5165 map \u521D\u59CB\u5316\u672A\u6DFB\u52A0\u503C\u662F empty map, empty map \u4E0D\u7B49\u4E8E nil map</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token operator">&lt;</span>key <span class="token keyword">type</span><span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token operator">&lt;</span>value <span class="token keyword">type</span><span class="token operator">&gt;</span>                     <span class="token comment">// map \u7C7B\u578B</span>

 <span class="token keyword">var</span> strMap <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>         <span class="token comment">// \u58F0\u660E\u5E76\u521D\u59CB\u5316\u4E00\u4E2A empty map, map \u5BB9\u91CF\u4E3A 2</span>
 strMap<span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;a&quot;</span>                               <span class="token comment">// \u5DF2\u521D\u59CB\u5316\u7684 map \u8D4B\u503C</span>
 strMap<span class="token punctuation">[</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;b&quot;</span>

 intMap <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>                      <span class="token comment">// intMap \u58F0\u660E\u5E76\u521D\u59CB\u5316, \u5E76\u8D4B\u503C</span>
     <span class="token string">&quot;one&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
     <span class="token string">&quot;two&quot;</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span>

 <span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;int map %#v\\n&quot;</span><span class="token punctuation">,</span> intMap<span class="token punctuation">)</span>
 <span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;str map %#v\\n&quot;</span><span class="token punctuation">,</span> strMap<span class="token punctuation">)</span>
 <span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;str map length %v\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>strMap<span class="token punctuation">)</span><span class="token punctuation">)</span>

 <span class="token operator">&gt;</span> <span class="token builtin">int</span> <span class="token keyword">map</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token string">&quot;one&quot;</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;two&quot;</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">}</span>      
 <span class="token operator">&gt;</span> str <span class="token keyword">map</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">}</span>   <span class="token comment">// map \u53EF\u6DFB\u52A0\u6570\u636E, \u5141\u8BB8\u8D85\u8FC7\u5BB9\u91CF</span>
 <span class="token operator">&gt;</span> str <span class="token keyword">map</span> length <span class="token number">3</span>                              <span class="token comment">// \u65E0\u6CD5\u4F7F\u7528 cap \u67E5\u770B map \u5BB9\u91CF, \u53EF\u4EE5\u4F7F\u7528 len \u67E5\u770B\u957F\u5EA6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="map-\u4F20\u9012" tabindex="-1"><a class="header-anchor" href="#map-\u4F20\u9012" aria-hidden="true">#</a> map \u4F20\u9012</h3><p>map \u5C06\u5F15\u7528\u62F7\u8D1D\u4E86\u4E00\u4EFD\u7ED9\u8D4B\u503C\u53D8\u91CF, \u4E24\u4E2A\u5F15\u7528\u6307\u5411\u540C\u4E00\u4E2A\u6570\u636E map \u4F5C\u4E3A\u51FD\u6570\u53C2\u6570\u4F20\u9012\u65F6\u4E5F\u662F\u62F7\u8D1D\u4E00\u4EFD\u5F15\u7528\u8FDB\u5165\u51FD\u6570</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code> intMap <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
     <span class="token string">&quot;1st&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span>
 
 copyMap <span class="token operator">:=</span> intMap                               <span class="token comment">// map \u662F\u5F15\u7528\u7C7B\u578B, \u4F20\u9012\u7684\u662F\u5F15\u7528\u5E76\u975E\u6570\u636E\u7684\u62F7\u8D1D</span>
 copyMap<span class="token punctuation">[</span><span class="token string">&quot;2nd&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span>                                                  
 intMap<span class="token punctuation">[</span><span class="token string">&quot;1st&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">4</span>                               
 
 <span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;intMap %#v\\n&quot;</span><span class="token punctuation">,</span> intMap<span class="token punctuation">)</span>
 <span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;copyMap %#v\\n&quot;</span><span class="token punctuation">,</span> copyMap<span class="token punctuation">)</span>

 <span class="token operator">&gt;</span> intMap <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token string">&quot;1st&quot;</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&quot;2nd&quot;</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">}</span>       <span class="token comment">// \u4EFB\u610F\u4E00\u4E2A\u53D8\u91CF\u4FEE\u6539\u6570\u636E, \u4E24\u4E2A\u53D8\u91CF\u90FD\u4F1A\u540C\u6B65\u4FEE\u6539</span>
 <span class="token operator">&gt;</span> copyMap <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token string">&quot;1st&quot;</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&quot;2nd&quot;</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">}</span>      <span class="token comment">// \u4E24\u4E2A\u53D8\u91CF\u6307\u5411\u540C\u4E00\u4E2A\u503C, \u7ED3\u679C\u4E00\u81F4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="map-\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#map-\u904D\u5386" aria-hidden="true">#</a> map \u904D\u5386</h3><p>map \u4F7F\u7528 range \u904D\u5386 map map \u503C\u62F7\u8D1D\u4E5F\u9700\u8981\u4F7F\u7528 range \u904D\u5386</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code> intMap <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;1st&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token string">&quot;2nd&quot;</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token string">&quot;3rd&quot;</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span> 

 copyMap <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>

 <span class="token keyword">for</span> key<span class="token punctuation">,</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> intMap <span class="token punctuation">{</span>
    copyMap<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value
    <span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%v: %v\\n&quot;</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token operator">&gt;</span> 1st<span class="token punctuation">:</span> <span class="token number">1</span>
 <span class="token operator">&gt;</span> 2nd<span class="token punctuation">:</span> <span class="token number">2</span>
 <span class="token operator">&gt;</span> 3rd<span class="token punctuation">:</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="map-\u53D6\u503C" tabindex="-1"><a class="header-anchor" href="#map-\u53D6\u503C" aria-hidden="true">#</a> map \u53D6\u503C</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code> intMap <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;1st&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token string">&quot;2nd&quot;</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span> 

 value<span class="token punctuation">,</span> ok <span class="token operator">:=</span> intMap<span class="token punctuation">[</span><span class="token string">&quot;3rd&quot;</span><span class="token punctuation">]</span>                      <span class="token comment">// map \u53D6\u503C</span>

 <span class="token keyword">if</span> ok <span class="token operator">==</span> <span class="token boolean">true</span> <span class="token punctuation">{</span>                                 <span class="token comment">// ok \u4E3A true, vaule \u4E3A\u5BF9\u5E94 key \u7684\u503C</span>
    <span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;value: %v\\n&quot;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">if</span> ok <span class="token operator">==</span> <span class="token boolean">false</span> <span class="token punctuation">{</span>                                <span class="token comment">// ok \u4E3A false, map \u4E0D\u5B58\u5728 key, value \u4E3A\u7C7B\u578B\u96F6\u503C</span>
    <span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;key not in map&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="map-\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#map-\u5220\u9664" aria-hidden="true">#</a> map \u5220\u9664</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code> intMap <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span>
    <span class="token string">&quot;1st&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token string">&quot;2nd&quot;</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span>

 <span class="token function">delete</span><span class="token punctuation">(</span>intMap<span class="token punctuation">,</span> <span class="token string">&quot;1st&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","go-3-map.html.vue"]]);export{r as default};
