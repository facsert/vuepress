import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-8da2a3ac.js";const t={},p=e(`<ul><li>风格</li><li>命名</li><li>注释</li></ul><h2 id="风格" tabindex="-1"><a class="header-anchor" href="#风格" aria-hidden="true">#</a> 风格</h2><ul><li>空格</li><li>对齐</li><li>换行</li><li>一致性</li></ul><p>使用空格, 对齐, 换行的规则形成代码风格</p><h3 id="空格" tabindex="-1"><a class="header-anchor" href="#空格" aria-hidden="true">#</a> 空格</h3><p>使用空格使运算语句更清晰, 分隔多个数据, 参数</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code> <span class="token number">4</span> <span class="token operator">+</span> <span class="token number">2</span>                                           <span class="token comment"># 6 二元运算</span>
 <span class="token number">2</span> <span class="token operator">**</span> <span class="token number">3</span>                                          <span class="token comment"># 8 指数运算</span>
 
 love <span class="token operator">=</span> <span class="token boolean">True</span>                                     <span class="token comment"># 赋值</span>
 love <span class="token keyword">is</span> <span class="token boolean">True</span>                                    <span class="token comment"># True 逻辑判断</span>
 <span class="token keyword">not</span> love                                        <span class="token comment"># False 非运算</span>
 love <span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token keyword">not</span> love<span class="token punctuation">)</span>                               <span class="token comment"># True 比较运算</span>
 love <span class="token keyword">and</span> love                                   <span class="token comment"># True 逻辑运算</span>

 <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>                                       <span class="token comment"># 数据之间空格区分</span>
 <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;petter&#39;</span><span class="token punctuation">}</span>                              <span class="token comment"># 键值对区分 key value</span>

 func<span class="token punctuation">(</span>msg<span class="token operator">=</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">&#39;petter&#39;</span><span class="token punctuation">)</span>                <span class="token comment"># 参数之间空格区分</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token operator">!</span><span class="token boolean">true</span>                                           <span class="token comment">// false 非运算 一元运算</span>
 <span class="token operator">~</span><span class="token number">2</span>                                              <span class="token comment">// -3 按位取反</span>
 <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>                                       <span class="token comment">// 逗号前不需要空格</span>
 <span class="token punctuation">{</span><span class="token string-property property">&#39;key&#39;</span><span class="token operator">:</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">}</span>                                <span class="token comment">// 括号开头和结尾无需空格</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对齐" tabindex="-1"><a class="header-anchor" href="#对齐" aria-hidden="true">#</a> 对齐</h3><p>通过空格与缩进区分代码所属区域</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>count<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>                            <span class="token comment">// while 循环在 if 条件下</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>                      <span class="token comment">// 打印操作在 while 循环内</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;while cycle over&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>             <span class="token comment">// 循环结束后打印结果</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>run_long_name_function<span class="token punctuation">(</span>
    cycle<span class="token operator">=</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span>                                   <span class="token comment"># 函数名较长和参数过多, 换行需要缩进</span>
    step<span class="token operator">=</span><span class="token string">&#39;reset&#39;</span><span class="token punctuation">,</span>
    log<span class="token operator">=</span><span class="token string">&#39;pass&#39;</span><span class="token punctuation">,</span>
    time<span class="token operator">=</span><span class="token number">133</span>
<span class="token punctuation">)</span>

<span class="token punctuation">{</span>
    <span class="token string">&#39;SIT&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;TA&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
        <span class="token punctuation">}</span>
        <span class="token string">&#39;BMC&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string">&#39;BIOS&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string">&#39;SV&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相同的内容对齐后更容易发现差异, 代码整体更加美观整洁</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>http<span class="token punctuation">.</span>post<span class="token punctuation">(</span>username<span class="token operator">=</span><span class="token string">&#39;facser&#39;</span><span class="token punctuation">,</span>  email<span class="token operator">=</span><span class="token string">&#39;facser@example.com&#39;</span><span class="token punctuation">,</span>  phone<span class="token operator">=</span><span class="token string">&#39;12345678&#39;</span><span class="token punctuation">)</span>
http<span class="token punctuation">.</span>post<span class="token punctuation">(</span>username<span class="token operator">=</span><span class="token string">&#39;kertory&#39;</span><span class="token punctuation">,</span> email<span class="token operator">=</span><span class="token string">&#39;kertory@example.com&#39;</span><span class="token punctuation">,</span> phone<span class="token operator">=</span><span class="token string">&#39;12345678&#39;</span><span class="token punctuation">)</span>
http<span class="token punctuation">.</span>post<span class="token punctuation">(</span>username<span class="token operator">=</span><span class="token string">&#39;victory&#39;</span><span class="token punctuation">,</span> email<span class="token operator">=</span><span class="token string">&#39;victory@example.com&#39;</span><span class="token punctuation">,</span> phone<span class="token operator">=</span><span class="token string">&#39;12345678&#39;</span><span class="token punctuation">)</span>
http<span class="token punctuation">.</span>post<span class="token punctuation">(</span>username<span class="token operator">=</span><span class="token string">&#39;petter&#39;</span><span class="token punctuation">,</span>  email<span class="token operator">=</span><span class="token string">&#39;petter@example.com&#39;</span><span class="token punctuation">,</span>  phone<span class="token operator">=</span><span class="token string">&#39;12345678&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="空行" tabindex="-1"><a class="header-anchor" href="#空行" aria-hidden="true">#</a> 空行</h3><p>时用空行分隔无关的代码, 使相关的代码形成代码块</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">connect_sut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>                               
    title<span class="token punctuation">(</span><span class="token string">&#39;Connect SUT Test&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
    
    <span class="token keyword">if</span> <span class="token keyword">not</span> ping<span class="token punctuation">(</span>config<span class="token punctuation">[</span><span class="token string">&#39;BMC_host&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> count<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span> delay<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        display<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;BMC host </span><span class="token interpolation"><span class="token punctuation">{</span>config<span class="token punctuation">[</span><span class="token string">&#39;BMC_host&#39;</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string"> connect failed &quot;</span></span><span class="token punctuation">,</span> <span class="token boolean">False</span><span class="token punctuation">)</span>
        exit<span class="token punctuation">(</span><span class="token punctuation">)</span>
        
    <span class="token keyword">if</span> <span class="token keyword">not</span> ping<span class="token punctuation">(</span>config<span class="token punctuation">[</span><span class="token string">&#39;OS_host&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> count<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span> delay<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        display<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;OS host </span><span class="token interpolation"><span class="token punctuation">{</span>config<span class="token punctuation">[</span><span class="token string">&#39;OS_host&#39;</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string"> connect failed &quot;</span></span><span class="token punctuation">,</span> <span class="token boolean">False</span><span class="token punctuation">)</span>
        exit<span class="token punctuation">(</span><span class="token punctuation">)</span>
                    
    <span class="token keyword">if</span> <span class="token keyword">not</span> exists<span class="token punctuation">(</span>config<span class="token punctuation">[</span><span class="token string">&#39;Tool_dir&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        display<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>config<span class="token punctuation">[</span><span class="token string">&#39;Tool_dir&#39;</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string"> not exist &quot;</span></span><span class="token punctuation">,</span> <span class="token boolean">False</span><span class="token punctuation">)</span>
        exit<span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        run<span class="token punctuation">(</span>config<span class="token punctuation">[</span><span class="token string">&#39;Get_bios_attribute&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> code<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span> RuntimeError <span class="token keyword">as</span> <span class="token keyword">_</span><span class="token punctuation">:</span>
        display<span class="token punctuation">(</span><span class="token string">&#39;Get BIOS option failed &#39;</span><span class="token punctuation">,</span> <span class="token boolean">False</span><span class="token punctuation">)</span>
        exit<span class="token punctuation">(</span><span class="token punctuation">)</span>
        
    display<span class="token punctuation">(</span><span class="token string">&#39;Connect SUT successfully&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="一致性" tabindex="-1"><a class="header-anchor" href="#一致性" aria-hidden="true">#</a> 一致性</h3><p>在一个项目里只使用一种代码风格</p><ol><li>命名法(驼峰法, 蛇形命名)不要混用,</li><li>相似的问题尽量使用同一种解决方式</li><li>相似的结构或处理方式, 代码格式尽量保持一致</li></ol><h2 id="命名" tabindex="-1"><a class="header-anchor" href="#命名" aria-hidden="true">#</a> 命名</h2><ul><li>准确 突出重点</li><li>简洁</li><li>一致性</li></ul><p>命名目地: 把信息放入名字里<br> 变量命名: 名词 形容词<br> 函数命名: 动词 名词 (形容词)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>errTestMsg                  <span class="token comment"># 驼峰命名</span>

err_test_msg                <span class="token comment"># 蛇形命名, 下划线 _ 区分断点  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="准确-突出重点" tabindex="-1"><a class="header-anchor" href="#准确-突出重点" aria-hidden="true">#</a> 准确 突出重点</h3><p>使用 <strong>准确</strong> <strong>具体</strong> <strong>单一</strong>的词</p><p><a href="#%E5%B8%B8%E7%94%A8%E5%8A%A8%E8%AF%8D">常用动词</a></p><p>正向语义命名</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code> test_pass <span class="token operator">=</span> <span class="token boolean">True</span>                                <span class="token comment"># 推荐  </span>
 test_fail <span class="token operator">=</span> <span class="token boolean">False</span>                               <span class="token comment"># 不推荐 </span>

 able <span class="token operator">=</span> <span class="token boolean">True</span>                                     <span class="token comment"># 值与语义对应</span>
 unable <span class="token operator">=</span> <span class="token boolean">False</span>                                  <span class="token comment"># 双重否定表示肯定</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 <strong>前缀</strong> <strong>后缀</strong> 突出重点<br> 强调或者注意的内容放在最后</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code> is_xx                                           <span class="token comment"># 是不是</span>
 should_xx                                       <span class="token comment"># 是否应该</span>
 has_xx                                          <span class="token comment"># 有没有</span>
 can_xx                                          <span class="token comment"># 能不能</span>

 max_xx                                          <span class="token comment"># 最大的 </span>
 min_xx                                          <span class="token comment"># 最小的</span>
 avg_xx                                          <span class="token comment"># 平均的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code> time_secs <span class="token operator">=</span> <span class="token number">8</span>                                   <span class="token comment"># 时间变量添加单位 </span>
 size_mb <span class="token operator">=</span> <span class="token number">2</span>                                     <span class="token comment"># 添加单位 mb</span>
 length_str <span class="token operator">=</span> <span class="token string">&#39;5&#39;</span>                                <span class="token comment"># 添加值类型后缀</span>
 book_json <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;code&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span><span class="token punctuation">}</span>                     <span class="token comment"># 添加值类型后缀</span>

 apple_red                                       <span class="token comment"># 强调 apple 的颜色</span>
 red_apple                                       <span class="token comment"># 强调 apple 个体</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="长度" tabindex="-1"><a class="header-anchor" href="#长度" aria-hidden="true">#</a> 长度</h3><p>使用常用的单词缩写<br> 省略无用的内容<br> 在小的作用域内可以使用简短的变量名</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code> <span class="token keyword">def</span> <span class="token function">get_basic_manager_controller_information</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    ali_basic_manager_controller_username <span class="token operator">=</span> <span class="token string">&#39;admin&#39;</span>
    ali_basic_manager_controller_password <span class="token operator">=</span> <span class="token string">&#39;admin&#39;</span>
    ali_basic_manager_controller_information_command <span class="token operator">=</span> <span class="token string">&#39;ipmitool mc info&#39;</span>

 <span class="token keyword">def</span> <span class="token function">get_bmc_info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    username <span class="token operator">=</span> <span class="token string">&#39;admin&#39;</span>
    password <span class="token operator">=</span> <span class="token string">&#39;admin&#39;</span>
    info_cmd <span class="token operator">=</span> <span class="token string">&#39;ipmitool mc info&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="#%E5%8D%95%E8%AF%8D%E7%BC%A9%E5%86%99">常见单词缩写</a></p><h3 id="一致性-1" tabindex="-1"><a class="header-anchor" href="#一致性-1" aria-hidden="true">#</a> 一致性</h3><p>项目中表示同样的值或类似的值, 命名方式应该一致</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
<span class="token keyword">def</span> <span class="token function">title</span><span class="token punctuation">(</span>string<span class="token operator">=</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span> level<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span> length<span class="token operator">=</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token keyword">def</span> <span class="token function">wait</span><span class="token punctuation">(</span>delay<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> show<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> length<span class="token operator">=</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token keyword">def</span> <span class="token function">ping</span><span class="token punctuation">(</span>host<span class="token punctuation">,</span> count<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span> delay<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span> show<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h2><p>代码比注释更重要<br> 注释应强调使用规范和缺陷</p><h3 id="代码比注释更重要" tabindex="-1"><a class="header-anchor" href="#代码比注释更重要" aria-hidden="true">#</a> 代码比注释更重要</h3><p>注释是代码的补充, 先写好代码, 再使用注释引导读者理解代码<br> 无需用注释解释能从代码迅速推断的内容, 避免无效注释</p><h3 id="强调使用规范和缺陷" tabindex="-1"><a class="header-anchor" href="#强调使用规范和缺陷" aria-hidden="true">#</a> 强调使用规范和缺陷</h3><p>函数和类的注释要表明参数类型, 使用方式<br> 表明对可能出现的问题</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">title</span><span class="token punctuation">(</span>string<span class="token operator">=</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span> level<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span> length<span class="token operator">=</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;根据 level 等级打印不同样式的标题

    Args:
        string (str, optional): 标题内容. Defaults to &#39;title&#39;.
        level  (int, optional): 标题等级 (0, 1, 2, 3). Defaults to 3.
        length (int, optional): 标题一端符号的数量. Defaults to 30.

    Returns:
        None: 无返回值
        
    Attention:
        标题有4个等级, 与符号对应关系是 
            0: &#39;##### title #####&#39;  
            1: &#39;===== title =====&#39; 
            2: &#39;***** title *****&#39;  
            3: &#39;----- title -----&#39;
    &quot;&quot;&quot;</span>
    <span class="token keyword">pass</span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="附录" tabindex="-1"><a class="header-anchor" href="#附录" aria-hidden="true">#</a> 附录</h1><h2 id="常用动词" tabindex="-1"><a class="header-anchor" href="#常用动词" aria-hidden="true">#</a> 常用动词</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    添加/插入                      add, append, insert, 
    创建/初始化                    create, initialize, 
    加载/选择                      load, pick, <span class="token keyword">select</span>
    删除/销毁                      delete, remove, destroy, drop
    打开/启动                      open, start
    关闭/停止                      close, stop
    获取/读取                      get, fetch, acquire, read, 
    查找/查询                      search, find, query
    设置/重置                      set, reset
    放入/写入                      put, write, 
    释放/刷新                      release, refresh
    发送/推送                      send, push
    接收/拉取                      receive, pull
    提交/取消                      submit, cancel
    收集/采集                      collect, 
    提取/解析                      sub, extract, parse
    编码/解码                      encode, decode
    填充/压缩                      fill, pack, compress
    清空/解压                      flush, clear, unpack, decompress
    增加/减少                      increase, decrease, reduce
    分隔/拼接                      split, join, concat
    过滤/校验/检测                 filter, valid, check
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="单词缩写" tabindex="-1"><a class="header-anchor" href="#单词缩写" aria-hidden="true">#</a> 单词缩写</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    addition              <span class="token function">add</span>               加
    subtraction           sub               减
    multiplication        mul               乘法
    division              div               除法
    hexadecimal           hex               十六进制
    array                 arr               数组, 集合
    list/Sequence         lst/seq           列表 
    dictionary            dict              字典
    character             char              字符
    string                str               字符串
    text                  txt               文本
    number                num               数量, 编号
    image                 img               图像
    length                len               长度
    summation             <span class="token function">sum</span>               和
    average               avg               平均
    maximum               max               最大值
    minimum               min               最小值
    middle                mid               中值
    <span class="token builtin class-name">source</span>                src               源头
    address               addr              地址
    previous              pre               前一个
    current               cur               当前的
    initalize             init              初始化
    database              db                数据库
    administrator         adm               管理员
    password              <span class="token builtin class-name">pwd</span>               密码
    user                  usr               用户
    directory             <span class="token function">dir</span>               目录
    document              doc               文档
    library               lib               库
    <span class="token keyword">function</span>              func              函数
    object                obj               对象
    argument              arg               实参
    variable              var               变量
    parameter             param             参数<span class="token punctuation">(</span>形参<span class="token punctuation">)</span>
    execute               <span class="token builtin class-name">exec</span>              执行
    <span class="token builtin class-name">command</span>               cmd               命令
    configuration         config            配置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,51),i=[p];function l(o,c){return s(),a("div",null,i)}const d=n(t,[["render",l],["__file","code-1-word.html.vue"]]);export{d as default};
