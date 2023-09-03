import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-8da2a3ac.js";const p={},e=t(`<h2 id="引申" tabindex="-1"><a class="header-anchor" href="#引申" aria-hidden="true">#</a> 引申</h2><p>字典是 python 非常常用的数据类型, 字典存取效率高且存取方便<br> 一个字典可以存储大量数据, 为了便于区分还可以层层分级, 多层嵌套</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>student <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;petter&quot;</span> <span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
        <span class="token string">&quot;hobby&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;swim&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">&quot;lily&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
        <span class="token string">&quot;hobby&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;sing&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

student<span class="token punctuation">[</span><span class="token string">&quot;pttter&quot;</span><span class="token punctuation">]</span>                                <span class="token comment"># 字典取值</span>
student<span class="token punctuation">[</span><span class="token string">&quot;steven&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">}</span>                  <span class="token comment"># 字典添加 key value</span>
student<span class="token punctuation">[</span><span class="token string">&quot;pttter&quot;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">17</span>                    <span class="token comment"># 字典多层数据赋值 (petter 必须存在)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于多层字典存取比较麻烦<br> 插入值多层的数据的时候需要考虑上层是否存在</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>student<span class="token punctuation">[</span><span class="token string">&quot;pttter&quot;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&quot;hobby&quot;</span><span class="token punctuation">]</span>                       <span class="token comment"># 取值时要确保上一层 petter 必须存在</span>
student<span class="token punctuation">[</span><span class="token string">&quot;Bob&quot;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">18</span>                       <span class="token comment"># KeyError 报错, 需先定义上一层 Bob</span>
<span class="token operator">&gt;</span> KeyError<span class="token punctuation">:</span> <span class="token string">&#39;bob&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>能否简化深层字典的存取方式<br> 插入值的时候能否忽略层级问题, 自动生成多级数据</p><h2 id="字典扁平化" tabindex="-1"><a class="header-anchor" href="#字典扁平化" aria-hidden="true">#</a> 字典扁平化</h2><p>如何简单快捷的进行快速存取深层字典呢?<br> 能否将字典简化成单层结构, 字典内就是 key 和 value</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">flat_dict</span><span class="token punctuation">(</span>dic<span class="token punctuation">,</span> parent_key<span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> result<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&#39;&#39;&#39;
    Description: 原生字典多层 key 通过分隔符连接写入 flat 字典
    Param dic dict: 原生字典
    Param parent_key dict: 父字典的 key 
    Return: None
    Attention: 任一层的字典 key value 都要保存
    &#39;&#39;&#39;</span>        
    <span class="token keyword">for</span> key<span class="token punctuation">,</span> value <span class="token keyword">in</span> dic<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        new_key <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>parent_key<span class="token punctuation">}</span></span><span class="token string">.</span><span class="token interpolation"><span class="token punctuation">{</span>key<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span> <span class="token keyword">if</span> parent_key <span class="token keyword">else</span> key
        result<span class="token punctuation">[</span>new_key<span class="token punctuation">]</span> <span class="token operator">=</span> value                  <span class="token comment"># 每深入一层, 就将 key 通过 . 并入</span>
        <span class="token keyword">if</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token builtin">dict</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
           flat_dict<span class="token punctuation">(</span>value<span class="token punctuation">,</span> new_key<span class="token punctuation">,</span> result<span class="token punctuation">)</span>     <span class="token comment"># 对 value 时字典类型的值进行递归</span>

flat <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
flat_dict<span class="token punctuation">(</span>student<span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> flat<span class="token punctuation">)</span>                     <span class="token comment"># 将扁平化键值对保存到 flat 中</span>
<span class="token operator">&gt;</span> <span class="token punctuation">{</span>                                              
    <span class="token string">&#39;petter&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token string">&#39;hobby&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;swim&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token string">&#39;petter.age&#39;</span><span class="token punctuation">:</span> <span class="token number">16</span><span class="token punctuation">,</span>                            
    <span class="token string">&#39;petter.hobby&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;swim&#39;</span><span class="token punctuation">,</span> 
    <span class="token string">&#39;lily&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token string">&#39;hobby&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;sing&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token string">&#39;lily.age&#39;</span><span class="token punctuation">:</span> <span class="token number">15</span><span class="token punctuation">,</span> 
    <span class="token string">&#39;lily.hobby&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;sing&#39;</span>
<span class="token punctuation">}</span>

flat<span class="token punctuation">[</span><span class="token string">&#39;lily.age&#39;</span><span class="token punctuation">]</span>                                 <span class="token comment"># 15 可以通过多层 key 取值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了保证任意层 key 都能取值, 所有层字典都需要扁平化, 因此增加了字典容量</p><h2 id="字典存取" tabindex="-1"><a class="header-anchor" href="#字典存取" aria-hidden="true">#</a> 字典存取</h2><p>能将字典扁平化后, 考虑如何存取<br> 魔改魔术方法 <code>setitem</code> 和 <code>getitem</code> 通过 [] 存取数据</p><p>通过继承原始字典, 保留原生字典的属性和方法</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">FlatDict</span><span class="token punctuation">(</span><span class="token builtin">dict</span><span class="token punctuation">)</span><span class="token punctuation">:</span> 

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&#39;&#39;&#39;
        Description: 初始化属性, flat(扁平化字典) separator(分隔符)
        Return: None
        Attention: 对象存一个原生字典和扁平化字典
        &#39;&#39;&#39;</span>        
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>flat <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>                           <span class="token comment"># 新增属性 flat 保存扁平化字典</span>
        self<span class="token punctuation">.</span>separator <span class="token operator">=</span> <span class="token string">&#39;.&#39;</span>                     <span class="token comment"># 定义 key 连接符号</span>

    <span class="token keyword">def</span> <span class="token function">__setitem__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>
 
    <span class="token keyword">def</span> <span class="token function">__getitem__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="写入" tabindex="-1"><a class="header-anchor" href="#写入" aria-hidden="true">#</a> 写入</h3><table><thead><tr><th style="text-align:left;">不带连接符号的 key</th><th style="text-align:left;">带连接符号的 key</th></tr></thead><tbody><tr><td style="text-align:left;">使用字典原有赋值方法</td><td style="text-align:left;">解析 key 生成字典写入字典再扁平化</td></tr></tbody></table><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>    <span class="token keyword">def</span> <span class="token function">__setitem__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&#39;&#39;&#39;
        Description: 字典 [] 方式设置值
        Param key str: 原生字典
        Param value Any: 父字典的 key 
        Return: None
        Attention: 
        &#39;&#39;&#39;</span>        
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>separator <span class="token keyword">in</span> key<span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>update_dict<span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__setitem__<span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">update_dict</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&#39;&#39;&#39;
        Description: 解析 key, 将多层 key 逐层解析写入原生字典
        Param key str: 字典 key, 多层 key 包含分隔符 
        Param value Any: 字典 value
        Return: None
        Attention: 
        &#39;&#39;&#39;</span>        
        dic <span class="token operator">=</span> self
        keys <span class="token operator">=</span> key<span class="token punctuation">.</span>split<span class="token punctuation">(</span>self<span class="token punctuation">.</span>separator<span class="token punctuation">)</span>
        <span class="token keyword">for</span> k <span class="token keyword">in</span> keys<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
            dic<span class="token punctuation">.</span>setdefault<span class="token punctuation">(</span>k<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>dic<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token builtin">dict</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                dic<span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token punctuation">{</span>k<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
            dic <span class="token operator">=</span> dic<span class="token punctuation">[</span>k<span class="token punctuation">]</span>

        dic<span class="token punctuation">[</span>keys<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> value
        self<span class="token punctuation">.</span>flat_dict<span class="token punctuation">(</span>self<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="取出" tabindex="-1"><a class="header-anchor" href="#取出" aria-hidden="true">#</a> 取出</h3><p>先尝试从从本体取出, 失败后从扁平化字典取值</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>    <span class="token keyword">def</span> <span class="token function">__getitem__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&#39;&#39;&#39;
        Description: 字典 [] 获取值
        Param key str: 字典 key, 允许使用多层 key 
        Return Any: 字典 key 对应的 value 
        Attention: 
        &#39;&#39;&#39;</span>        
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__getitem__<span class="token punctuation">(</span>key<span class="token punctuation">)</span>
        <span class="token keyword">except</span> KeyError<span class="token punctuation">:</span>
            <span class="token keyword">return</span> self<span class="token punctuation">.</span>flat<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><p><code>__str__</code> 能直接格式化打印结果<br> 添加自定义分隔符</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> json <span class="token keyword">import</span> dumps

<span class="token keyword">class</span> <span class="token class-name">FlatDict</span><span class="token punctuation">(</span><span class="token builtin">dict</span><span class="token punctuation">)</span><span class="token punctuation">:</span> 
    <span class="token triple-quoted-string string">&quot;&quot;&quot;扁平化字典&quot;&quot;&quot;</span>   

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&#39;&#39;&#39;
        Description: 初始化属性, flat(扁平化字典) separator(分隔符)
        Return: None
        Attention: 对象存一个原生字典和扁平化字典
        &#39;&#39;&#39;</span>        
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>flat <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        self<span class="token punctuation">.</span>separator <span class="token operator">=</span> <span class="token string">&#39;.&#39;</span>

    <span class="token keyword">def</span> <span class="token function">update_dict</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&#39;&#39;&#39;
        Description: 解析 key, 将多层 key 逐层解析写入原生字典
        Param key str: 字典 key, 多层 key 包含分隔符 
        Param value Any: 字典 value
        Return: None
        Attention: 
        &#39;&#39;&#39;</span>        
        dic <span class="token operator">=</span> self
        keys <span class="token operator">=</span> key<span class="token punctuation">.</span>split<span class="token punctuation">(</span>self<span class="token punctuation">.</span>separator<span class="token punctuation">)</span>
        <span class="token keyword">for</span> k <span class="token keyword">in</span> keys<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
            dic<span class="token punctuation">.</span>setdefault<span class="token punctuation">(</span>k<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>dic<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token builtin">dict</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                dic<span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token punctuation">{</span>k<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
            dic <span class="token operator">=</span> dic<span class="token punctuation">[</span>k<span class="token punctuation">]</span>

        dic<span class="token punctuation">[</span>keys<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> value
        self<span class="token punctuation">.</span>flat_dict<span class="token punctuation">(</span>self<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">flat_dict</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> dic<span class="token punctuation">,</span> parent_key<span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&#39;&#39;&#39;
        Description: 原生字典多层 key 通过分隔符连接写入 flat 字典
        Param dic dict: 原生字典
        Param parent_key dict: 父字典的 key 
        Return: None
        Attention: 任一层的字典 key value 都要保存
        &#39;&#39;&#39;</span>        
        <span class="token keyword">for</span> key<span class="token punctuation">,</span> value <span class="token keyword">in</span> dic<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            new_key <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>parent_key<span class="token punctuation">}</span></span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>separator<span class="token punctuation">}</span></span><span class="token interpolation"><span class="token punctuation">{</span>key<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span> <span class="token keyword">if</span> parent_key <span class="token keyword">else</span> key
            self<span class="token punctuation">.</span>flat<span class="token punctuation">[</span>new_key<span class="token punctuation">]</span> <span class="token operator">=</span> value
            <span class="token keyword">if</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token builtin">dict</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                self<span class="token punctuation">.</span>flat_dict<span class="token punctuation">(</span>value<span class="token punctuation">,</span> new_key<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__setitem__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&#39;&#39;&#39;
        Description: 字典 [] 方式设置值
        Param key str: 原生字典
        Param value Any: 父字典的 key 
        Return: None
        Attention: 
        &#39;&#39;&#39;</span>        
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>separator <span class="token keyword">in</span> key<span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>update_dict<span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__setitem__<span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__getitem__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&#39;&#39;&#39;
        Description: 字典 [] 获取值
        Param key str: 字典 key, 允许使用多层 key 
        Return Any: 字典 key 对应的 value 
        Attention: 
        &#39;&#39;&#39;</span>        
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__getitem__<span class="token punctuation">(</span>key<span class="token punctuation">)</span>
        <span class="token keyword">except</span> KeyError<span class="token punctuation">:</span>
            <span class="token keyword">return</span> self<span class="token punctuation">.</span>flat<span class="token punctuation">[</span>key<span class="token punctuation">]</span>

    <span class="token keyword">def</span> <span class="token function">__delitem__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&#39;&#39;&#39;
        Description: 字典删除 key-value
        Param key str: 字典 key, 不允许使用多层 key 
        Return: None
        Attention: 只允许使用原生字典的 key
        &#39;&#39;&#39;</span>    
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__delitem__<span class="token punctuation">(</span>key<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>flat <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        self<span class="token punctuation">.</span>flat_dict<span class="token punctuation">(</span>self<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__len__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&#39;&#39;&#39;
        Description: 获取原生字典长度
        Return int: 字典长度 
        Attention: 
        &#39;&#39;&#39;</span>        
        <span class="token keyword">return</span> <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__len__<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">update</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&#39;&#39;&#39;
        Description: 更新字典
        Return: None 
        Attention: 用法与原生字典一致
        &#39;&#39;&#39;</span>        
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>flat <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        self<span class="token punctuation">.</span>flat_dict<span class="token punctuation">(</span>self<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__str__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&#39;&#39;&#39;
        Description: json 格式原生字典
        Return srt: 字典字符串
        Attention: 
        &#39;&#39;&#39;</span>        
        <span class="token keyword">return</span> dumps<span class="token punctuation">(</span>self<span class="token punctuation">,</span> indent<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>flat <span class="token operator">=</span> FlatDict<span class="token punctuation">(</span><span class="token punctuation">)</span>
flat<span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string">&#39;a&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;b&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">&#39;e&#39;</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">,</span>    
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>flat<span class="token punctuation">[</span><span class="token string">&#39;a.b&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
flat<span class="token punctuation">[</span><span class="token string">&#39;a.c.d&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>flat<span class="token punctuation">)</span>

<span class="token punctuation">{</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span>
    <span class="token string">&quot;a&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;b&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;c&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string">&quot;c&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;d&quot;</span><span class="token punctuation">:</span> <span class="token number">2</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">&quot;e&quot;</span><span class="token punctuation">:</span> <span class="token number">3</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),i=[e];function o(c,l){return s(),a("div",null,i)}const r=n(p,[["render",o],["__file","python-flat-dict.html.vue"]]);export{r as default};
