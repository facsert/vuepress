import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-8da2a3ac.js";const e={},p=t(`<h2 id="struct" tabindex="-1"><a class="header-anchor" href="#struct" aria-hidden="true">#</a> Struct</h2><h3 id="struct-初始化" tabindex="-1"><a class="header-anchor" href="#struct-初始化" aria-hidden="true">#</a> struct 初始化</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code> <span class="token keyword">type</span> <span class="token operator">&lt;</span><span class="token keyword">struct</span> name<span class="token operator">&gt;</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>                     <span class="token comment">// 定义结构体, 结构体可以认为是自定义的数据类型</span>
   <span class="token operator">&lt;</span>attribute name<span class="token operator">&gt;</span>  <span class="token operator">&lt;</span><span class="token keyword">type</span><span class="token operator">&gt;</span>                      <span class="token comment">// 定义结构体属性及其类型</span>
   <span class="token operator">&lt;</span>attribute name<span class="token operator">&gt;</span>  <span class="token operator">&lt;</span><span class="token keyword">type</span><span class="token operator">&gt;</span>                      <span class="token comment">// 每个属性名唯一, 不能重复</span>
   <span class="token operator">...</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>                           <span class="token comment">// 定义 Student 类型数据</span>
   name<span class="token punctuation">,</span> city  <span class="token builtin">string</span>                            <span class="token comment">// Student 类型有 name city 属性, 属性值为 string</span>
   age <span class="token builtin">int</span>                                       <span class="token comment">// Student 类型有 age 属性, 属性类型为 int</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">var</span> kertory Student                             <span class="token comment">// 初始化 Student 类型变量 kertory</span>
 kertory<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;kertory&quot;</span>                        <span class="token comment">// 使用 . 赋值</span>
 kertory<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">18</span>

 facsert <span class="token operator">:=</span> Student<span class="token punctuation">{</span>                             <span class="token comment">// 初始化 Student 类型变量 facsert</span>
   name<span class="token punctuation">:</span> <span class="token string">&quot;facsert&quot;</span><span class="token punctuation">,</span>
   city<span class="token punctuation">:</span> <span class="token string">&quot;shanghai&quot;</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span>

 <span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v\\n&quot;</span><span class="token punctuation">,</span> kertory<span class="token punctuation">)</span>
 <span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v\\n&quot;</span><span class="token punctuation">,</span> facsert<span class="token punctuation">)</span>

 <span class="token operator">&gt;</span> main<span class="token punctuation">.</span>Student<span class="token punctuation">{</span>name<span class="token punctuation">:</span><span class="token string">&quot;kertory&quot;</span><span class="token punctuation">,</span> city<span class="token punctuation">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> age<span class="token punctuation">:</span><span class="token number">18</span><span class="token punctuation">}</span> <span class="token comment">// 未初始化的属性使用类型的零值 </span>
 <span class="token operator">&gt;</span> main<span class="token punctuation">.</span>Student<span class="token punctuation">{</span>name<span class="token punctuation">:</span><span class="token string">&quot;facsert&quot;</span><span class="token punctuation">,</span> city<span class="token punctuation">:</span><span class="token string">&quot;shanghai&quot;</span><span class="token punctuation">,</span> age<span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="struct-方法" tabindex="-1"><a class="header-anchor" href="#struct-方法" aria-hidden="true">#</a> struct 方法</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code> <span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="struct-属性修改" tabindex="-1"><a class="header-anchor" href="#struct-属性修改" aria-hidden="true">#</a> struct 属性修改</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code> <span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
   name<span class="token punctuation">,</span> city <span class="token builtin">string</span>
   age <span class="token builtin">int</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">func</span> <span class="token punctuation">(</span>s Student<span class="token punctuation">)</span> <span class="token function">rename1</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>         <span class="token comment">// 重命名属性 name</span>
   s<span class="token punctuation">.</span>name <span class="token operator">=</span> name
   <span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;rename1 to %s\\n&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>Student<span class="token punctuation">)</span> <span class="token function">rename2</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>        <span class="token comment">// 重命名属性 name</span>
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

 <span class="token operator">&gt;</span> rename1 to kertory                            <span class="token comment">// 重命名结果只在函数内生效</span>
 <span class="token operator">&gt;</span> rename2 to squtary                            <span class="token comment">// 重命名结果对结构体生效</span>
 <span class="token operator">&gt;</span> name<span class="token punctuation">:</span> squtary
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="struct-转-json" tabindex="-1"><a class="header-anchor" href="#struct-转-json" aria-hidden="true">#</a> struct 转 json</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
   <span class="token punctuation">.</span> <span class="token string">&quot;fmt&quot;</span>
   <span class="token string">&quot;encoding/json&quot;</span>
<span class="token punctuation">)</span>

 <span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
     Name <span class="token builtin">string</span>                                 <span class="token comment">// 属性名大写其它模块可访问, 可以转 json</span>
     city <span class="token builtin">string</span>                                 <span class="token comment">// 属性名小写其它模块不能访问也不能转 json</span>
     Age <span class="token builtin">int</span>     <span class="token string">\`json:&quot;age&quot;\`</span>                    <span class="token comment">// 可以通过定义 tag, 修改转化为 json 后 key 名称 </span>
<span class="token punctuation">}</span>

 facsert <span class="token operator">:=</span> Student<span class="token punctuation">{</span>
    Name<span class="token punctuation">:</span> <span class="token string">&quot;facsert&quot;</span><span class="token punctuation">,</span> 
    city<span class="token punctuation">:</span> <span class="token string">&quot;shanghai&quot;</span><span class="token punctuation">,</span>
    Age<span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span>

 jsonStu<span class="token punctuation">,</span> err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>facsert<span class="token punctuation">)</span>           <span class="token comment">// struct 转 json </span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
   <span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;json mashal failed&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token function">Println</span><span class="token punctuation">(</span>facsert<span class="token punctuation">)</span>
 <span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>jsonStu<span class="token punctuation">)</span><span class="token punctuation">)</span>

 <span class="token operator">&gt;</span> <span class="token punctuation">{</span>facsert shanghai <span class="token number">18</span><span class="token punctuation">}</span>                         <span class="token comment">// facsert 结构体所有属性值</span>
 <span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;facsert&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span><span class="token number">18</span><span class="token punctuation">}</span>                   <span class="token comment">// city 属性不在, Age 属性名变为 age</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[p];function c(i,u){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","go-6-struct.html.vue"]]);export{d as default};
