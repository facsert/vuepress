import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,a as e}from"./app.b61c060c.js";const t={},p=e(`<h1 id="\u7B80\u5316\u4EE3\u7801\u63A7\u5236\u6D41" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5316\u4EE3\u7801\u63A7\u5236\u6D41" aria-hidden="true">#</a> \u7B80\u5316\u4EE3\u7801\u63A7\u5236\u6D41</h1><ul><li>\u5206\u652F</li><li>\u8FB9\u754C</li><li>\u53D8\u91CF\u7684\u903B\u8F91</li></ul><h2 id="\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u5206\u652F" aria-hidden="true">#</a> \u5206\u652F</h2><ul><li>\u6700\u5C0F\u5316\u5D4C\u5957</li><li>\u6B63\u5411\u4F18\u5148</li></ul><h3 id="\u6700\u5C0F\u5316\u5D4C\u5957" tabindex="-1"><a class="header-anchor" href="#\u6700\u5C0F\u5316\u5D4C\u5957" aria-hidden="true">#</a> \u6700\u5C0F\u5316\u5D4C\u5957</h3><p>\u63D0\u524D\u9000\u51FA \u4F18\u5148\u89E3\u51B3\u7B80\u5355\u95EE\u9898</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">if</span> sut_os_connect<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6B63\u5411\u4F18\u5148" tabindex="-1"><a class="header-anchor" href="#\u6B63\u5411\u4F18\u5148" aria-hidden="true">#</a> \u6B63\u5411\u4F18\u5148</h3><p>\u6B63\u5411\u7ED3\u679C\u4F18\u5148</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">if</span> is_pass<span class="token punctuation">:</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5206\u652F\u53C2\u6570, \u5DE6\u8FB9\u4E3A\u53D8\u91CF, \u53F3\u8FB9\u4E3A\u5E38\u91CF</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code> <span class="token keyword">if</span> num <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token keyword">if</span> <span class="token number">5</span> <span class="token operator">&gt;</span> num<span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8FB9\u754C" tabindex="-1"><a class="header-anchor" href="#\u8FB9\u754C" aria-hidden="true">#</a> \u8FB9\u754C</h2><p>\u7B80\u5316\u8FB9\u754C\u95EE\u9898, \u5FFD\u7565\u6216\u5408\u5E76\u4E0D\u5173\u6CE8\u7684\u5185\u5BB9</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53D8\u91CF\u7684\u903B\u8F91" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u7684\u903B\u8F91" aria-hidden="true">#</a> \u53D8\u91CF\u7684\u903B\u8F91</h2><ul><li>\u5C11\u521B\u5EFA\u65E0\u6548\u53D8\u91CF</li><li>\u51CF\u5C0F\u53D8\u91CF\u4F5C\u7528\u57DF</li></ul><h3 id="\u5C11\u521B\u5EFA\u65E0\u6548\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5C11\u521B\u5EFA\u65E0\u6548\u53D8\u91CF" aria-hidden="true">#</a> \u5C11\u521B\u5EFA\u65E0\u6548\u53D8\u91CF</h3><p>\u53D8\u91CF\u8D8A\u591A\u8D1F\u62C5\u8D8A\u91CD \u6D88\u9664\u65E0\u6548\u7684\u4E2D\u95F4\u53D8\u91CF</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>bmc_cmd <span class="token operator">=</span> <span class="token string">&#39;systemctl status docker&#39;</span>
cmd_ret <span class="token operator">=</span> subprocess<span class="token punctuation">.</span>Popen<span class="token punctuation">(</span>bmc_cmd<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>bmc_cmd<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>cmd_ret<span class="token punctuation">)</span>

run<span class="token punctuation">(</span><span class="token string">&#39;systemctl status docker&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u51CF\u5C0F\u53D8\u91CF\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u51CF\u5C0F\u53D8\u91CF\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u51CF\u5C0F\u53D8\u91CF\u4F5C\u7528\u57DF</h3><p>\u7F29\u51CF\u53D8\u91CF\u4F5C\u7528\u57DF\u4EE5\u51CF\u8F7B\u53D8\u91CF\u7684\u8FFD\u8E2A\u96BE\u5EA6<br> \u51CF\u5C0F\u53D8\u91CF\u7684\u4F7F\u7528\u8DE8\u5EA6</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>username <span class="token operator">=</span> <span class="token string">&#39;admin&#39;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),i=[p];function o(c,l){return s(),a("div",null,i)}const d=n(t,[["render",o],["__file","code-2-struct.html.vue"]]);export{d as default};
