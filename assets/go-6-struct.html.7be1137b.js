import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,a as t}from"./app.e4fef44a.js";const e={},p=t(`<h2 id="struct" tabindex="-1"><a class="header-anchor" href="#struct" aria-hidden="true">#</a> Struct</h2><h3 id="struct-\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#struct-\u521D\u59CB\u5316" aria-hidden="true">#</a> struct \u521D\u59CB\u5316</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code> <span class="token keyword">type</span> <span class="token operator">&lt;</span><span class="token keyword">struct</span> name<span class="token operator">&gt;</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>                     <span class="token comment">// \u5B9A\u4E49\u7ED3\u6784\u4F53, \u7ED3\u6784\u4F53\u53EF\u4EE5\u8BA4\u4E3A\u662F\u81EA\u5B9A\u4E49\u7684\u6570\u636E\u7C7B\u578B</span>
   <span class="token operator">&lt;</span>attribute name<span class="token operator">&gt;</span>  <span class="token operator">&lt;</span><span class="token keyword">type</span><span class="token operator">&gt;</span>                      <span class="token comment">// \u5B9A\u4E49\u7ED3\u6784\u4F53\u5C5E\u6027\u53CA\u5176\u7C7B\u578B</span>
   <span class="token operator">&lt;</span>attribute name<span class="token operator">&gt;</span>  <span class="token operator">&lt;</span><span class="token keyword">type</span><span class="token operator">&gt;</span>                      <span class="token comment">// \u6BCF\u4E2A\u5C5E\u6027\u540D\u552F\u4E00, \u4E0D\u80FD\u91CD\u590D</span>
   <span class="token operator">...</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>                           <span class="token comment">// \u5B9A\u4E49 Student \u7C7B\u578B\u6570\u636E</span>
   name<span class="token punctuation">,</span> city  <span class="token builtin">string</span>                            <span class="token comment">// Student \u7C7B\u578B\u6709 name city \u5C5E\u6027, \u5C5E\u6027\u503C\u4E3A string</span>
   age <span class="token builtin">int</span>                                       <span class="token comment">// Student \u7C7B\u578B\u6709 age \u5C5E\u6027, \u5C5E\u6027\u7C7B\u578B\u4E3A int</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">var</span> kertory Student                             <span class="token comment">// \u521D\u59CB\u5316 Student \u7C7B\u578B\u53D8\u91CF kertory</span>
 kertory<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;kertory&quot;</span>                        <span class="token comment">// \u4F7F\u7528 . \u8D4B\u503C</span>
 kertory<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">18</span>

 facsert <span class="token operator">:=</span> Student<span class="token punctuation">{</span>                             <span class="token comment">// \u521D\u59CB\u5316 Student \u7C7B\u578B\u53D8\u91CF facsert</span>
   name<span class="token punctuation">:</span> <span class="token string">&quot;facsert&quot;</span><span class="token punctuation">,</span>
   city<span class="token punctuation">:</span> <span class="token string">&quot;shanghai&quot;</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span>

 <span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v\\n&quot;</span><span class="token punctuation">,</span> kertory<span class="token punctuation">)</span>
 <span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v\\n&quot;</span><span class="token punctuation">,</span> facsert<span class="token punctuation">)</span>

 <span class="token operator">&gt;</span> main<span class="token punctuation">.</span>Student<span class="token punctuation">{</span>name<span class="token punctuation">:</span><span class="token string">&quot;kertory&quot;</span><span class="token punctuation">,</span> city<span class="token punctuation">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> age<span class="token punctuation">:</span><span class="token number">18</span><span class="token punctuation">}</span> <span class="token comment">// \u672A\u521D\u59CB\u5316\u7684\u5C5E\u6027\u4F7F\u7528\u7C7B\u578B\u7684\u96F6\u503C </span>
 <span class="token operator">&gt;</span> main<span class="token punctuation">.</span>Student<span class="token punctuation">{</span>name<span class="token punctuation">:</span><span class="token string">&quot;facsert&quot;</span><span class="token punctuation">,</span> city<span class="token punctuation">:</span><span class="token string">&quot;shanghai&quot;</span><span class="token punctuation">,</span> age<span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="struct-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#struct-\u65B9\u6CD5" aria-hidden="true">#</a> struct \u65B9\u6CD5</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code> <span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
   name<span class="token punctuation">,</span> city <span class="token builtin">string</span>
   age <span class="token builtin">int</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">func</span> <span class="token punctuation">(</span>s Student<span class="token punctuation">)</span> <span class="token function">Learn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s learnig in %s\\n&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">.</span>name<span class="token punctuation">,</span> s<span class="token punctuation">.</span>city<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">func</span> <span class="token punctuation">(</span>s Student<span class="token punctuation">)</span> <span class="token function">Play</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s play games\\n&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 facsert <span class="token operator">:=</span> Student<span class="token punctuation">{</span>
    name<span class="token punctuation">:</span> <span class="token string">&quot;facsert&quot;</span><span class="token punctuation">,</span>
    city<span class="token punctuation">:</span> <span class="token string">&quot;shanghai&quot;</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span>

 facsert<span class="token punctuation">.</span><span class="token function">Learn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 facsert<span class="token punctuation">.</span><span class="token function">Play</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

 <span class="token operator">&gt;</span> facsert learnig in shanghai
 <span class="token operator">&gt;</span> facsert play games
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="struct-\u5C5E\u6027\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#struct-\u5C5E\u6027\u4FEE\u6539" aria-hidden="true">#</a> struct \u5C5E\u6027\u4FEE\u6539</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code> <span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
   name<span class="token punctuation">,</span> city <span class="token builtin">string</span>
   age <span class="token builtin">int</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">func</span> <span class="token punctuation">(</span>s Student<span class="token punctuation">)</span> <span class="token function">rename1</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>         <span class="token comment">// \u91CD\u547D\u540D\u5C5E\u6027 name</span>
   s<span class="token punctuation">.</span>name <span class="token operator">=</span> name
   <span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;rename1 to %s\\n&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>Student<span class="token punctuation">)</span> <span class="token function">rename2</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>        <span class="token comment">// \u91CD\u547D\u540D\u5C5E\u6027 name</span>
   s<span class="token punctuation">.</span>name <span class="token operator">=</span> name
   <span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;rename2 to %s\\n&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 facsert <span class="token operator">:=</span> Student<span class="token punctuation">{</span>
    name<span class="token punctuation">:</span> <span class="token string">&quot;facsert&quot;</span><span class="token punctuation">,</span>
    city<span class="token punctuation">:</span> <span class="token string">&quot;shanghai&quot;</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span>

 facsert<span class="token punctuation">.</span><span class="token function">rename1</span><span class="token punctuation">(</span><span class="token string">&quot;kertory&quot;</span><span class="token punctuation">)</span>
 facsert<span class="token punctuation">.</span><span class="token function">rename2</span><span class="token punctuation">(</span><span class="token string">&quot;squtary&quot;</span><span class="token punctuation">)</span>
 <span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;name: %s\\n&quot;</span><span class="token punctuation">,</span> facsert<span class="token punctuation">.</span>name<span class="token punctuation">)</span>

 <span class="token operator">&gt;</span> rename1 to kertory                            <span class="token comment">// \u91CD\u547D\u540D\u7ED3\u679C\u53EA\u5728\u51FD\u6570\u5185\u751F\u6548</span>
 <span class="token operator">&gt;</span> rename2 to squtary                            <span class="token comment">// \u91CD\u547D\u540D\u7ED3\u679C\u5BF9\u7ED3\u6784\u4F53\u751F\u6548</span>
 <span class="token operator">&gt;</span> name<span class="token punctuation">:</span> squtary
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="struct-\u8F6C-json" tabindex="-1"><a class="header-anchor" href="#struct-\u8F6C-json" aria-hidden="true">#</a> struct \u8F6C json</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
   <span class="token punctuation">.</span> <span class="token string">&quot;fmt&quot;</span>
   <span class="token string">&quot;encoding/json&quot;</span>
<span class="token punctuation">)</span>

 <span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
     Name <span class="token builtin">string</span>                                 <span class="token comment">// \u5C5E\u6027\u540D\u5927\u5199\u5176\u5B83\u6A21\u5757\u53EF\u8BBF\u95EE, \u53EF\u4EE5\u8F6C json</span>
     city <span class="token builtin">string</span>                                 <span class="token comment">// \u5C5E\u6027\u540D\u5C0F\u5199\u5176\u5B83\u6A21\u5757\u4E0D\u80FD\u8BBF\u95EE\u4E5F\u4E0D\u80FD\u8F6C json</span>
     Age <span class="token builtin">int</span>     <span class="token string">\`json:&quot;age&quot;\`</span>                    <span class="token comment">// \u53EF\u4EE5\u901A\u8FC7\u5B9A\u4E49 tag, \u4FEE\u6539\u8F6C\u5316\u4E3A json \u540E key \u540D\u79F0 </span>
<span class="token punctuation">}</span>

 facsert <span class="token operator">:=</span> Student<span class="token punctuation">{</span>
    Name<span class="token punctuation">:</span> <span class="token string">&quot;facsert&quot;</span><span class="token punctuation">,</span> 
    city<span class="token punctuation">:</span> <span class="token string">&quot;shanghai&quot;</span><span class="token punctuation">,</span>
    Age<span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span>

 jsonStu<span class="token punctuation">,</span> err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>facsert<span class="token punctuation">)</span>           <span class="token comment">// struct \u8F6C json </span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
   <span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;json mashal failed&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token function">Println</span><span class="token punctuation">(</span>facsert<span class="token punctuation">)</span>
 <span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>jsonStu<span class="token punctuation">)</span><span class="token punctuation">)</span>

 <span class="token operator">&gt;</span> <span class="token punctuation">{</span>facsert shanghai <span class="token number">18</span><span class="token punctuation">}</span>                         <span class="token comment">// facsert \u7ED3\u6784\u4F53\u6240\u6709\u5C5E\u6027\u503C</span>
 <span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;facsert&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span><span class="token number">18</span><span class="token punctuation">}</span>                   <span class="token comment">// city \u5C5E\u6027\u4E0D\u5728, Age \u5C5E\u6027\u540D\u53D8\u4E3A age</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[p];function c(i,u){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","go-6-struct.html.vue"]]);export{k as default};
