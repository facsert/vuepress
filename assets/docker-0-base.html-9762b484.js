import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as c,c as l,a as n,b as s,e as o,f as a}from"./app-8da2a3ac.js";const r={},p=a(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>Docker 安装<br> 下载官方一键安装脚本安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://get.docker.com <span class="token parameter variable">-o</span> get-docker.sh                          <span class="token comment"># 下载官方一键安装脚本</span>
 $ <span class="token function">sudo</span> <span class="token function">sh</span> get-docker.sh                                                       <span class="token comment"># 执行安装脚本</span>

 $ <span class="token function">docker</span> <span class="token parameter variable">--version</span>                                                            <span class="token comment"># 检查 docker 安装版本</span>
 <span class="token operator">&gt;</span> Docker version <span class="token number">24.0</span>.5, build ced0996

 $ <span class="token function">sudo</span> <span class="token function">apt-get</span> purge docker-ce <span class="token punctuation">\\</span>                                              <span class="token comment"># 卸载 docker</span>
      docker-ce-cli <span class="token punctuation">\\</span>
      containerd.io <span class="token punctuation">\\</span>
      docker-buildx-plugin <span class="token punctuation">\\</span>
      docker-compose-plugin <span class="token punctuation">\\</span>
      docker-ce-rootless-extras
 $ <span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/docker                                                <span class="token comment"># 删除 docker 相关文件</span>
 $ <span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/containerd                                             
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2>`,4),d=n("code",null,"/etc/docker/daemon.json",-1),u=n("br",null,null,-1),v={href:"https://docs.docker.com/engine/reference/commandline/dockerd/#daemon",target:"_blank",rel:"noopener noreferrer"},m=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">{</span>
    <span class="token string">&quot;insecure-registries&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;192.168.2.2:8080&quot;</span><span class="token punctuation">]</span>,                               <span class="token comment"># 私有镜像仓库, 第三方镜像源 &quot;&lt;IP&gt;:&lt;PORT&gt;&quot;</span>
    <span class="token string">&quot;dns&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,                                                                 <span class="token comment"># 设定容器DNS的地址，在容器的 /etc/resolv.conf文件中可查看</span>
    <span class="token string">&quot;exec-opts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;native.cgroupdriver=systemd&quot;</span><span class="token punctuation">]</span>,                              <span class="token comment"># 运行时执行选项</span>
    <span class="token string">&quot;registry-mirrors&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;https://ucjisdvf.mirror.aliyuncs.com&quot;</span><span class="token punctuation">]</span>,              <span class="token comment"># 更换官方镜像仓库地址为国内镜像地址</span>
    <span class="token string">&quot;log-level&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;info&quot;</span>,                                                       <span class="token comment"># 显示日志等级 (debug|info|warn|error|fatal, 默认为 info)</span>
    <span class="token string">&quot;log-driver&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;json-file&quot;</span>,                                                 <span class="token comment"># log 驱动</span>
    <span class="token string">&quot;log-opts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>                                                              <span class="token comment"># 容器默认日志驱动程序选项</span>
        <span class="token string">&quot;max-size&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;100m&quot;</span>, 
        <span class="token string">&quot;max-file&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;3&quot;</span> 
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;data-root&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker&quot;</span>                                             <span class="token comment"># docker 运行及日志保存位置 (默认 /var/lib/docker)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更换 Docker 镜像源</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;registry-mirrors&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;https://registry.docker-cn.com&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;http://hub-mirror.c.163.com&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;https://docker.mirrors.ustc.edu.cn&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;https://cr.console.aliyun.com&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;https://mirror.ccs.tencentyun.com&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改配置文件后需要重启 docker 服务生效</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ systemctl daemon-reload                                                     <span class="token comment"># 重新加载 docker 配置文件</span>
 $ systemctl restart <span class="token function">docker</span>                                                    <span class="token comment"># 重新启动 docker</span>
 
 $ systemctl status <span class="token function">docker</span>
 <span class="token operator">&gt;</span> <span class="token punctuation">..</span>.
 <span class="token operator">&gt;</span> Activate: activate<span class="token punctuation">(</span>running<span class="token punctuation">)</span>
 <span class="token operator">&gt;</span> <span class="token punctuation">..</span>.

 $ $ systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>                                                     <span class="token comment"># 设置为开机启动</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-基本参数" tabindex="-1"><a class="header-anchor" href="#docker-基本参数" aria-hidden="true">#</a> Docker 基本参数</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token function">docker</span> <span class="token parameter variable">--help</span>
  管理命令:
    container   管理容器
    image       管理镜像
    network     管理网络
  命令：
    attach      介入到一个正在运行的容器
    build       根据 Dockerfile 构建一个镜像
    commit      根据容器的更改创建一个新的镜像
    <span class="token function">cp</span>          在本地文件系统与容器中复制 文件/文件夹
    create      创建一个新容器
    <span class="token builtin class-name">exec</span>        在容器中执行一条命令
    images      列出镜像
    <span class="token function">kill</span>        杀死一个或多个正在运行的容器    
    logs        取得容器的日志
    pause       暂停一个或多个容器的所有进程
    <span class="token function">ps</span>          列出所有容器
    pull        拉取一个镜像或仓库到 registry
    push        推送一个镜像或仓库到 registry
    <span class="token function">rename</span>      重命名一个容器
    restart     重新启动一个或多个容器
    <span class="token function">rm</span>          删除一个或多个容器
    rmi         删除一个或多个镜像
    run         在一个新的容器中执行一条命令
    search      在 Docker Hub 中搜索镜像
    start       启动一个或多个已经停止运行的容器
    stats       显示一个容器的实时资源占用
    stop        停止一个或多个正在运行的容器
    tag         为镜像创建一个新的标签
    <span class="token function">top</span>         显示一个容器内的所有进程
    unpause     恢复一个或多个容器内所有被暂停的进程
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function k(b,g){const e=t("ExternalLinkIcon");return c(),l("div",null,[p,n("p",null,[s("编辑 "),d,s("(不存在则创建一个), 选择需要修改的配置写入文件"),u,n("a",v,[s("官方参数说明"),o(e)])]),m])}const f=i(r,[["render",k],["__file","docker-0-base.html.vue"]]);export{f as default};
