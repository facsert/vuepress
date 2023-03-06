import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c,b as n,d as l,a,e as s,r as o}from"./app.912ee8e3.js";const p={},r=a(`<h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><ul><li>Docker \u5B89\u88C5</li><li>Docker \u914D\u7F6E</li></ul><ol><li>Docker \u5B89\u88C5</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5\u4F9D\u8D56</span>
<span class="token function">apt</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">apt</span> <span class="token parameter variable">-y</span> <span class="token function">install</span> apt-transport-https ca-certificates <span class="token function">curl</span> gnupg2 software-properties-common

<span class="token comment"># \u5B89\u88C5 GPG \u8BC1\u4E66</span>
<span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://mirrors.aliyun.com/docker-ce/linux/debian/gpg <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span>

<span class="token comment"># \u6DFB\u52A0 docker \u8F6F\u4EF6\u6E90</span>
add-apt-repository <span class="token string">&quot;deb [arch=amd64] https://mirrors.bfsu.edu.cn/docker- ce/linux/debian <span class="token variable"><span class="token variable">$(</span>lsb_release <span class="token parameter variable">-cs</span><span class="token variable">)</span></span> stable&quot;</span>

<span class="token comment"># \u66F4\u65B0\u8F6F\u4EF6\u6E90\u6CC9, \u4E0B\u8F7D\u5B89\u88C5 docker</span>
<span class="token function">apt</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">apt</span> <span class="token parameter variable">-y</span> <span class="token function">install</span> docker-ce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Docker \u914D\u7F6E</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> info                                                                    <span class="token comment"># \u663E\u793A docker \u76F8\u5173\u4FE1\u606F</span>

<span class="token function">docker</span> version                                                                 <span class="token comment"># \u663E\u793A docker \u7248\u672C\u8BE6\u7EC6\u4FE1\u606F</span>

<span class="token function">docker</span> <span class="token parameter variable">--version</span>                                                               <span class="token comment"># \u663E\u793A docker \u7248\u672C\u4FE1\u606F</span>

systemctl status <span class="token function">docker</span>                                                        <span class="token comment"># \u67E5\u770B docker \u8FD0\u884C\u8BE6\u7EC6\u72B6\u6001</span>
<span class="token function">service</span> <span class="token function">docker</span> status                                                          <span class="token comment"># \u67E5\u770B docker \u8FD0\u884C\u72B6\u6001</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),d=s("\u7F16\u8F91 "),u=n("code",null,"/etc/docker/daemon.json",-1),m=s("(\u4E0D\u5B58\u5728\u5219\u521B\u5EFA\u4E00\u4E2A), \u4F7F\u7528 "),v=n("code",null,"man dockerd",-1),k=s(" \u6216\u5B98\u65B9\u6587\u6863\u67E5\u770B\u53C2\u6570\u4F7F\u7528\u8BF4\u660E"),b=n("br",null,null,-1),g={href:"https://docs.docker.com/engine/reference/commandline/dockerd/#daemon",target:"_blank",rel:"noopener noreferrer"},f=s("\u5B98\u65B9\u6587\u6863"),h=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">{</span>
    <span class="token string">&quot;insecure-registries&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;192.168.2.2:8080&quot;</span><span class="token punctuation">]</span>,                               <span class="token comment"># \u79C1\u6709\u955C\u50CF\u4ED3\u5E93, \u7B2C\u4E09\u65B9\u955C\u50CF\u6E90 &quot;&lt;IP&gt;:&lt;PORT&gt;&quot;</span>
    <span class="token string">&quot;dns&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,                                                                 <span class="token comment"># \u8BBE\u5B9A\u5BB9\u5668DNS\u7684\u5730\u5740\uFF0C\u5728\u5BB9\u5668\u7684 /etc/resolv.conf\u6587\u4EF6\u4E2D\u53EF\u67E5\u770B</span>
    <span class="token string">&quot;exec-opts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;native.cgroupdriver=systemd&quot;</span><span class="token punctuation">]</span>,                              <span class="token comment"># \u8FD0\u884C\u65F6\u6267\u884C\u9009\u9879</span>
    <span class="token string">&quot;registry-mirrors&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;https://ucjisdvf.mirror.aliyuncs.com&quot;</span><span class="token punctuation">]</span>,              <span class="token comment"># \u66F4\u6362\u5B98\u65B9\u955C\u50CF\u4ED3\u5E93\u5730\u5740\u4E3A\u56FD\u5185\u955C\u50CF\u5730\u5740</span>
    <span class="token string">&quot;log-level&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;info&quot;</span>,                                                       <span class="token comment"># \u663E\u793A\u65E5\u5FD7\u7B49\u7EA7 (debug|info|warn|error|fatal, \u9ED8\u8BA4\u4E3A info)</span>
    <span class="token string">&quot;log-driver&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;json-file&quot;</span>,                                                 <span class="token comment"># log \u9A71\u52A8</span>
    <span class="token string">&quot;log-opts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>                                                              <span class="token comment"># \u5BB9\u5668\u9ED8\u8BA4\u65E5\u5FD7\u9A71\u52A8\u7A0B\u5E8F\u9009\u9879</span>
        <span class="token string">&quot;max-size&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;100m&quot;</span>, 
        <span class="token string">&quot;max-file&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;3&quot;</span> 
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;data-root&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker&quot;</span>                                             <span class="token comment"># docker \u8FD0\u884C\u53CA\u65E5\u5FD7\u4FDD\u5B58\u4F4D\u7F6E (\u9ED8\u8BA4 /var/lib/docker)</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\u540E\u9700\u8981\u91CD\u542F docker \u670D\u52A1\u751F\u6548</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">service</span> <span class="token function">docker</span> start                                                           <span class="token comment"># \u542F\u52A8 docker \u670D\u52A1\uFF0C\u5B88\u62A4\u8FDB\u7A0B</span>
<span class="token function">service</span> <span class="token function">docker</span> stop                                                            <span class="token comment"># \u505C\u6B62 docker \u670D\u52A1</span>
<span class="token function">service</span> <span class="token function">docker</span> status                                                          <span class="token comment"># \u67E5\u770B docker \u670D\u52A1\u72B6\u6001</span>
<span class="token function">chkconfig</span> <span class="token function">docker</span> on                                                            <span class="token comment"># \u8BBE\u7F6E\u4E3A\u5F00\u673A\u542F\u52A8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">docker</span> <span class="token parameter variable">--help</span>

\u7BA1\u7406\u547D\u4EE4:
  container   \u7BA1\u7406\u5BB9\u5668
  image       \u7BA1\u7406\u955C\u50CF
  network     \u7BA1\u7406\u7F51\u7EDC
\u547D\u4EE4\uFF1A
  attach      \u4ECB\u5165\u5230\u4E00\u4E2A\u6B63\u5728\u8FD0\u884C\u7684\u5BB9\u5668
  build       \u6839\u636E Dockerfile \u6784\u5EFA\u4E00\u4E2A\u955C\u50CF
  commit      \u6839\u636E\u5BB9\u5668\u7684\u66F4\u6539\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u955C\u50CF
  <span class="token function">cp</span>          \u5728\u672C\u5730\u6587\u4EF6\u7CFB\u7EDF\u4E0E\u5BB9\u5668\u4E2D\u590D\u5236 \u6587\u4EF6/\u6587\u4EF6\u5939
  create      \u521B\u5EFA\u4E00\u4E2A\u65B0\u5BB9\u5668
  <span class="token builtin class-name">exec</span>        \u5728\u5BB9\u5668\u4E2D\u6267\u884C\u4E00\u6761\u547D\u4EE4
  images      \u5217\u51FA\u955C\u50CF
  <span class="token function">kill</span>        \u6740\u6B7B\u4E00\u4E2A\u6216\u591A\u4E2A\u6B63\u5728\u8FD0\u884C\u7684\u5BB9\u5668    
  logs        \u53D6\u5F97\u5BB9\u5668\u7684\u65E5\u5FD7
  pause       \u6682\u505C\u4E00\u4E2A\u6216\u591A\u4E2A\u5BB9\u5668\u7684\u6240\u6709\u8FDB\u7A0B
  <span class="token function">ps</span>          \u5217\u51FA\u6240\u6709\u5BB9\u5668
  pull        \u62C9\u53D6\u4E00\u4E2A\u955C\u50CF\u6216\u4ED3\u5E93\u5230 registry
  push        \u63A8\u9001\u4E00\u4E2A\u955C\u50CF\u6216\u4ED3\u5E93\u5230 registry
  <span class="token function">rename</span>      \u91CD\u547D\u540D\u4E00\u4E2A\u5BB9\u5668
  restart     \u91CD\u65B0\u542F\u52A8\u4E00\u4E2A\u6216\u591A\u4E2A\u5BB9\u5668
  <span class="token function">rm</span>          \u5220\u9664\u4E00\u4E2A\u6216\u591A\u4E2A\u5BB9\u5668
  rmi         \u5220\u9664\u4E00\u4E2A\u6216\u591A\u4E2A\u955C\u50CF
  run         \u5728\u4E00\u4E2A\u65B0\u7684\u5BB9\u5668\u4E2D\u6267\u884C\u4E00\u6761\u547D\u4EE4
  search      \u5728 Docker Hub \u4E2D\u641C\u7D22\u955C\u50CF
  start       \u542F\u52A8\u4E00\u4E2A\u6216\u591A\u4E2A\u5DF2\u7ECF\u505C\u6B62\u8FD0\u884C\u7684\u5BB9\u5668
  stats       \u663E\u793A\u4E00\u4E2A\u5BB9\u5668\u7684\u5B9E\u65F6\u8D44\u6E90\u5360\u7528
  stop        \u505C\u6B62\u4E00\u4E2A\u6216\u591A\u4E2A\u6B63\u5728\u8FD0\u884C\u7684\u5BB9\u5668
  tag         \u4E3A\u955C\u50CF\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u6807\u7B7E
  <span class="token function">top</span>         \u663E\u793A\u4E00\u4E2A\u5BB9\u5668\u5185\u7684\u6240\u6709\u8FDB\u7A0B
  unpause     \u6062\u590D\u4E00\u4E2A\u6216\u591A\u4E2A\u5BB9\u5668\u5185\u6240\u6709\u88AB\u6682\u505C\u7684\u8FDB\u7A0B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function q(_,x){const e=o("ExternalLinkIcon");return t(),c("div",null,[r,n("p",null,[d,u,m,v,k,b,n("a",g,[f,l(e)])]),h])}const N=i(p,[["render",q],["__file","docker-0-base.html.vue"]]);export{N as default};
