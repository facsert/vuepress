import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-8da2a3ac.js";const t={},p=e(`<ul><li>分支</li><li>边界</li><li>变量的逻辑</li></ul><h2 id="分支" tabindex="-1"><a class="header-anchor" href="#分支" aria-hidden="true">#</a> 分支</h2><ul><li>最小化嵌套</li><li>正向优先</li></ul><h3 id="最小化嵌套" tabindex="-1"><a class="header-anchor" href="#最小化嵌套" aria-hidden="true">#</a> 最小化嵌套</h3><p>提前退出<br> 优先解决简单问题</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">if</span> sut_os_connect<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> sut_tool_exist<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> sut_bmc_version<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token comment"># flash BMC</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token string">&#39;get BMC version failed&#39;</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&#39;tool not exist&#39;</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&#39;sut os connect failed&#39;</span>


<span class="token keyword">if</span> <span class="token keyword">not</span> sut_os_connect<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>                         <span class="token comment"># if sut_os_connect_fail</span>
    <span class="token keyword">return</span> <span class="token string">&#39;sut os connect failed&#39;</span>

<span class="token keyword">if</span> <span class="token keyword">not</span> sut_tool_exist<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>                         <span class="token comment"># if sut_tool_not_exist</span>
    <span class="token keyword">return</span> <span class="token string">&#39;tool not exist&#39;</span>

<span class="token keyword">if</span> <span class="token keyword">not</span> sut_bmc_version<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>                        <span class="token comment"># if sut_bmc_version_fail</span>
    <span class="token keyword">return</span> <span class="token string">&#39;get BMC version failed&#39;</span>

<span class="token comment"># flash BMC</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="正向优先" tabindex="-1"><a class="header-anchor" href="#正向优先" aria-hidden="true">#</a> 正向优先</h3><p>正向结果优先</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">if</span> is_pass<span class="token punctuation">:</span>
    <span class="token comment"># case PASS ...</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token comment"># case FAIL ...</span>

<span class="token keyword">if</span> <span class="token keyword">not</span> is_pass<span class="token punctuation">:</span>
    <span class="token comment"># case FAIL ...</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token comment"># case PASS ...</span>

<span class="token keyword">if</span> is_fail<span class="token punctuation">:</span>
    <span class="token comment"># case FAIL ...</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token comment"># case PASS ...</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分支参数, 左边为变量, 右边为常量</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code> <span class="token keyword">if</span> num <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token keyword">if</span> <span class="token number">5</span> <span class="token operator">&gt;</span> num<span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="边界" tabindex="-1"><a class="header-anchor" href="#边界" aria-hidden="true">#</a> 边界</h2><p>简化边界问题,<br> 忽略或合并不关注的内容</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
<span class="token keyword">if</span> <span class="token builtin">type</span><span class="token punctuation">(</span>bkm<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token builtin">type</span><span class="token punctuation">(</span>bkms<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token builtin">list</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> bkm <span class="token keyword">in</span> bkms<span class="token punctuation">:</span>
            <span class="token keyword">return</span> bkms<span class="token punctuation">.</span>index<span class="token punctuation">(</span>bkm<span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token string-interpolation"><span class="token string">f&#39;</span><span class="token interpolation"><span class="token punctuation">{</span>bkm<span class="token punctuation">}</span></span><span class="token string"> not in </span><span class="token interpolation"><span class="token punctuation">{</span>bkms<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string-interpolation"><span class="token string">f&#39;</span><span class="token interpolation"><span class="token punctuation">{</span>bkms<span class="token punctuation">}</span></span><span class="token string"> not a list&#39;</span></span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string-interpolation"><span class="token string">f&#39;</span><span class="token interpolation"><span class="token punctuation">{</span>bkm<span class="token punctuation">}</span></span><span class="token string"> type not int&#39;</span></span>


<span class="token keyword">try</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> bkms<span class="token punctuation">.</span>index<span class="token punctuation">(</span>bkm<span class="token punctuation">)</span>
<span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string-interpolation"><span class="token string">f&#39;Get </span><span class="token interpolation"><span class="token punctuation">{</span>bkm<span class="token punctuation">}</span></span><span class="token string"> index error&#39;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变量的逻辑" tabindex="-1"><a class="header-anchor" href="#变量的逻辑" aria-hidden="true">#</a> 变量的逻辑</h2><ul><li>少创建无效变量</li><li>减小变量作用域</li></ul><h3 id="少创建无效变量" tabindex="-1"><a class="header-anchor" href="#少创建无效变量" aria-hidden="true">#</a> 少创建无效变量</h3><p>变量越多负担越重<br> 消除无效的中间变量</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
note <span class="token operator">=</span> <span class="token string">&#39;Continue the test when error occurred? (default: Y  N/Y)&#39;</span>
input_raw <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span>note<span class="token punctuation">)</span> 
input_no_space <span class="token operator">=</span> input_raw<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span>
input_up <span class="token operator">=</span> input_no_space<span class="token punctuation">.</span>upper<span class="token punctuation">(</span><span class="token punctuation">)</span>
input_ok <span class="token operator">=</span> input_up <span class="token keyword">in</span> <span class="token punctuation">(</span><span class="token string">&#39;Y&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;N&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> input_up <span class="token keyword">in</span> <span class="token punctuation">(</span><span class="token string">&#39;Y&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;continue test when error occurred&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;stop test when error occurred&#39;</span><span class="token punctuation">)</span>


note <span class="token operator">=</span> <span class="token string">&#39;Continue the test when error occurred? (default: Y  N/Y)&#39;</span>
<span class="token keyword">if</span> <span class="token builtin">input</span><span class="token punctuation">(</span>note<span class="token punctuation">)</span><span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>upper<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">in</span> <span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Y&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;continue test when error occurred&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;stop test when error occurred&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>bmc_cmd <span class="token operator">=</span> <span class="token string">&#39;systemctl status docker&#39;</span>
cmd_ret <span class="token operator">=</span> subprocess<span class="token punctuation">.</span>Popen<span class="token punctuation">(</span>bmc_cmd<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>bmc_cmd<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>cmd_ret<span class="token punctuation">)</span>

run<span class="token punctuation">(</span><span class="token string">&#39;systemctl status docker&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="减小变量作用域" tabindex="-1"><a class="header-anchor" href="#减小变量作用域" aria-hidden="true">#</a> 减小变量作用域</h3><p>缩减变量作用域以减轻变量的追踪难度<br> 减小变量的使用跨度</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>username <span class="token operator">=</span> <span class="token string">&#39;admin&#39;</span>
password <span class="token operator">=</span> <span class="token string">&#39;admin&#39;</span>
config <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
config_valid <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
tool_dir <span class="token operator">=</span> <span class="token string">&#39;tools&#39;</span>
log_dir <span class="token operator">=</span> <span class="token string">&#39;reports/process.log&#39;</span>
count <span class="token operator">=</span> <span class="token number">0</span>
key <span class="token operator">=</span> <span class="token boolean">None</span>
value <span class="token operator">=</span> <span class="token boolean">None</span>


<span class="token comment"># read config</span>
config <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
config_valid <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment"># set output file</span>
log_dir <span class="token operator">=</span> <span class="token string">&#39;reports/process.log&#39;</span>

<span class="token comment"># test step</span>
username <span class="token operator">=</span> <span class="token string">&#39;admin&#39;</span>
password <span class="token operator">=</span> <span class="token string">&#39;admin&#39;</span>
tool_dir <span class="token operator">=</span> <span class="token string">&#39;tools&#39;</span>
count <span class="token operator">=</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),i=[p];function o(c,l){return s(),a("div",null,i)}const d=n(t,[["render",o],["__file","code-2-struct.html.vue"]]);export{d as default};
