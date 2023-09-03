import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as t,c as i,a as s,b as n,e as c,f as a}from"./app-8da2a3ac.js";const r={},p=a('<h1 id="environmrnt" tabindex="-1"><a class="header-anchor" href="#environmrnt" aria-hidden="true">#</a> Environmrnt</h1><ul><li><a href="#%E5%AE%89%E8%A3%85">安装</a></li><li><a href="#%E5%BC%80%E5%A7%8B">开始</a></li></ul><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>',3),d={href:"https://go.dev/",target:"_blank",rel:"noopener noreferrer"},u=s("br",null,null,-1),m=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token function">wget</span> https://golang.google.cn/dl/go1.20.3.linux-amd64.tar.gz
 $ <span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> go1.20.3.linux-amd64.tar.gz <span class="token parameter variable">-C</span> /usr/local/

 $ <span class="token builtin class-name">pwd</span>                                           <span class="token comment"># 压缩包解压到 /usr/local/go 下</span>
 <span class="token operator">&gt;</span> /usr/local/go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将 <code>/usr/local/go/bin</code> 添加进环境目录, 使得系统在环境目录中找到 golang 的可执行文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token function">vi</span> ~/.bashrc
 <span class="token operator">&gt;</span> <span class="token builtin class-name">export</span> <span class="token assign-left variable">GOROOT</span><span class="token operator">=</span>/usr/local/go                   <span class="token comment"># 将两条命令写入 ~/.bashrc</span>
 <span class="token operator">&gt;</span> <span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$GOROOT</span>/bin                 <span class="token comment"># 意为每次启动命令行都将 /usr/local/go/bin 加入环境目录</span>
 $ SOURCE ~/.bashrc                              <span class="token comment"># 令修改后的 bashrc 生效</span>

 $ go <span class="token function">env</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">GOPROXY</span><span class="token operator">=</span>https://goproxy.cn,direct   <span class="token comment"># 更换 go 默认下载源</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开始" tabindex="-1"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h2><p>使用 <code>go mod</code> 创建项目</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ go mod init <span class="token operator">&lt;</span>module name<span class="token operator">&gt;</span>                     <span class="token comment"># go mod 初始化项目</span>
 $ <span class="token function">touch</span> main.go                                 <span class="token comment"># 创建项目入口</span>

 $ ll
 <span class="token operator">&gt;</span> total 12K
 <span class="token operator">&gt;</span> -rw-r--r-- <span class="token number">1</span> root root   <span class="token number">22</span> Mar <span class="token number">23</span> 03:24 go.mod
 <span class="token operator">&gt;</span> -rw-r--r-- <span class="token number">1</span> root root <span class="token number">4</span>.2K Apr <span class="token number">25</span> 03:26 main.go

 $ <span class="token function">cat</span> go.mod
 <span class="token operator">&gt;</span> module learn
 <span class="token operator">&gt;</span>
 <span class="token operator">&gt;</span> go <span class="token number">1.20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 go mod 创建项目会自动生成 go.mod 文件, 该文件会记录项目需要用的第三方包</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main                                     <span class="token comment">// 声明包</span>

<span class="token keyword">import</span> <span class="token punctuation">(</span>                                         <span class="token comment">// 引入标准库 &quot;fmt&quot;</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>                                    <span class="token comment">// 项目入口, 只允许一个项目入口</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;hello world!&quot;</span><span class="token punctuation">)</span>                  <span class="token comment">// 打印</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 main.go</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ go run main.go                                <span class="token comment"># 执行 go 文件</span>
 <span class="token operator">&gt;</span> hello world<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function v(b,g){const e=l("ExternalLinkIcon");return t(),i("div",null,[p,s("p",null,[s("a",d,[n("Golang 官网"),c(e)]),n(" 下载 Golang 最新的包"),u,n(" 解压安装包到 /usr/local 目录下")]),m])}const f=o(r,[["render",v],["__file","go-0-environment.html.vue"]]);export{f as default};
