import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-8da2a3ac.js";const t={},l=e(`<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>镜像是容器的模板, 所有容器都通过镜像创建的<br> 一个镜像可以生成任意数量的容器<br> 可以使用官方镜像或者自定义镜像</p><h2 id="镜像列表" tabindex="-1"><a class="header-anchor" href="#镜像列表" aria-hidden="true">#</a> 镜像列表</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token function">docker</span> images <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> <span class="token punctuation">[</span>REPOSITORY<span class="token punctuation">[</span>:TAG<span class="token punctuation">]</span><span class="token punctuation">]</span>
 Options:
  -a, <span class="token parameter variable">--all</span>             Show all images <span class="token punctuation">(</span>default hides intermediate images<span class="token punctuation">)</span>
      <span class="token parameter variable">--digests</span>         Show digests
  -f, <span class="token parameter variable">--filter</span> filter   Filter output based on conditions provided
      <span class="token parameter variable">--format</span> string   Pretty-print images using a Go template
      --no-trunc        Do not truncate output
  -q, <span class="token parameter variable">--quiet</span>           Only show numeric IDs

 $ <span class="token function">docker</span> images
 <span class="token operator">&gt;</span> REPOSITORY  TAG     IMAGE ID      CREATED       SIZE
 <span class="token operator">&gt;</span> mongo       latest  0850fead9327  <span class="token number">12</span> days ago   700MB
 <span class="token operator">&gt;</span> pipreqs     <span class="token number">1.0</span>     d4633ae3a8af  <span class="token number">2</span> months ago  <span class="token number">1</span>.08GB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:left;"><code>REPOSITORY</code></th><th style="text-align:left;"><code>TAG</code></th><th style="text-align:left;"><code>IMAGE ID</code></th><th style="text-align:left;"><code>CREATED</code></th><th style="text-align:left;"><code>SIZE</code></th></tr></thead><tbody><tr><td style="text-align:left;">镜像仓库源</td><td style="text-align:left;">镜像 tag</td><td style="text-align:left;">镜像 ID</td><td style="text-align:left;">镜像创建时间</td><td style="text-align:left;">镜像大小</td></tr></tbody></table><h2 id="拉取镜像" tabindex="-1"><a class="header-anchor" href="#拉取镜像" aria-hidden="true">#</a> 拉取镜像</h2><ul><li>官方镜像</li><li>私有镜像</li></ul><p>拉取镜像前可以使用 docker search 查看官方及第三方镜像列表<br> 未指定链接默认从官方镜像拉取</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token function">docker</span> pull <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> NAME<span class="token punctuation">[</span>:TAG<span class="token operator">|</span>@DIGEST<span class="token punctuation">]</span>
 Options:
   -a, --all-tags                Download all tagged images <span class="token keyword">in</span> the repository
       --disable-content-trust   Skip image verification <span class="token punctuation">(</span>default <span class="token boolean">true</span><span class="token punctuation">)</span>  

 $ <span class="token function">docker</span> pull ubuntu:20.04
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从私有仓库拉取镜像前需要先登录, 然后指定仓库中的镜像拉取<br> 在私有仓库中未找到镜像会到官方镜像仓库拉取</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token function">docker</span> login <span class="token punctuation">[</span>person registry<span class="token punctuation">]</span>
 <span class="token operator">&gt;</span> <span class="token function">docker</span> login registry.facser:8081
 Username <span class="token punctuation">(</span>facser<span class="token punctuation">)</span>: facser 
 Password: 
 Login Succeeded

 $ <span class="token function">docker</span> pull registry.facser:8081/ubuntu:20.04
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除镜像" tabindex="-1"><a class="header-anchor" href="#删除镜像" aria-hidden="true">#</a> 删除镜像</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token function">docker</span> rmi <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> IMAGE <span class="token punctuation">[</span>IMAGE<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
 Options:
   -f, <span class="token parameter variable">--force</span>      Force removal of the image
       --no-prune   Do not delete untagged parents

 $ <span class="token function">docker</span> images 
 <span class="token operator">&gt;</span> REPOSITORY  TAG     IMAGE ID      CREATED       SIZE
 <span class="token operator">&gt;</span> mongo       latest  0850fead9327  <span class="token number">12</span> days ago   700MB
 <span class="token operator">&gt;</span> pipreqs     <span class="token number">1.0</span>     d4633ae3a8af  <span class="token number">2</span> months ago  <span class="token number">1</span>.08GB

 $ <span class="token function">docker</span> rmi 0850fead9327
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其它操作" tabindex="-1"><a class="header-anchor" href="#其它操作" aria-hidden="true">#</a> 其它操作</h2><ul><li>查找镜像</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token function">docker</span> search <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span>  <span class="token punctuation">[</span>IMAGE NAME<span class="token punctuation">]</span>

 $ <span class="token function">docker</span> search ubuntu
 <span class="token operator">&gt;</span> NAME               DESCRIPTION                                     STARS   OFFICIAL   AUTOMATED
 <span class="token operator">&gt;</span> ubuntu             Ubuntu is a Debian-based Linux operating sys…   <span class="token number">15368</span>   <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>                
 <span class="token operator">&gt;</span> websphere-liberty  WebSphere Liberty multi-architecture images …   <span class="token number">290</span>     <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>     
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:left;"><code>NAME</code></th><th style="text-align:left;"><code>DESCRIPTION</code></th><th style="text-align:left;"><code>STARS</code></th><th style="text-align:left;"><code>OFFICIAL</code></th><th style="text-align:left;"><code>AUTOMATED</code></th></tr></thead><tbody><tr><td style="text-align:left;">镜像名称</td><td style="text-align:left;">镜像名称</td><td style="text-align:left;">点赞数</td><td style="text-align:left;">是否官方</td><td style="text-align:left;">是否自动构建</td></tr></tbody></table><ul><li>保存镜像</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token function">docker</span> save <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> IMAGE <span class="token punctuation">[</span>IMAGE<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
 $ <span class="token function">docker</span> save 0850fead9327 <span class="token operator">&gt;</span> mongo.tar.gz
 
 $ ll
 <span class="token operator">&gt;</span> -rw-r--r-- <span class="token number">1</span> root  root   23K Mar  <span class="token number">7</span> <span class="token number">21</span>:10 mongo.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>镜像历史</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token function">docker</span> <span class="token function">history</span> <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> IMAGE
 $ <span class="token function">docker</span> <span class="token function">history</span> 0850fead9327

 <span class="token operator">&gt;</span> IMAGE         CREATED      CREATED BY                          SIZE  COMMENT
 <span class="token operator">&gt;</span> 0850fead9327  <span class="token number">12</span> days ago  /bin/sh <span class="token parameter variable">-c</span> <span class="token comment">#(nop)  CMD [&quot;mongod&quot;]   0B         </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>修改镜像 tag</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $  <span class="token function">docker</span> tag SOURCE_IMAGE<span class="token punctuation">[</span>:TAG<span class="token punctuation">]</span> TARGET_IMAGE<span class="token punctuation">[</span>:TAG<span class="token punctuation">]</span>

❯ <span class="token function">docker</span> images
REPOSITORY  TAG  IMAGE ID      CREATED       SIZE
mongo-base  v1   43761bd5b76d  <span class="token number">41</span> hours ago  00MB
mongo-base  v2   43761bd5b76d  <span class="token number">41</span> hours ago  700MB

$ <span class="token function">docker</span> tag mongo-base:v2  mongo-person:1.0.0                           

❯ <span class="token function">docker</span> images
REPOSITORY    TAG    IMAGE ID      CREATED       SIZE
mongo-base    v1     43761bd5b76d  <span class="token number">41</span> hours ago  700MB
mongo-person  <span class="token number">1.0</span>.0  43761bd5b76d  <span class="token number">41</span> hours ago  700MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义镜像" tabindex="-1"><a class="header-anchor" href="#自定义镜像" aria-hidden="true">#</a> 自定义镜像</h2><h3 id="docker-build" tabindex="-1"><a class="header-anchor" href="#docker-build" aria-hidden="true">#</a> docker build</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">docker</span> build <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> <span class="token environment constant">PATH</span> <span class="token operator">|</span> URL <span class="token operator">|</span> -

 Options:
   --file, <span class="token parameter variable">-f</span>                                                                  <span class="token comment"># 指定要使用的Dockerfile路径；</span>
   --tag, <span class="token parameter variable">-t</span>                                                                   <span class="token comment"># 镜像的名字及标签(name:tag 或 name, 允许多个) </span>
   --no-cache                                                                  <span class="token comment"># 不使用缓存</span>

 $ <span class="token function">docker</span> build <span class="token parameter variable">-t</span> nginx-base:v1 <span class="token builtin class-name">.</span>                                             <span class="token comment"># &quot;.&quot; 查找当前目录下的 Dockerfile 构建镜像</span>
 $ <span class="token function">docker</span> build <span class="token parameter variable">-t</span> nginx-base:v1 <span class="token parameter variable">-f</span> /root/Dockerfile                           <span class="token comment"># 指定 Dockerfile 构建镜像</span>

REPOSITORY  TAG  IMAGE ID      CREATED       SIZE
nginx-base  v1   43761bd5b76d  <span class="token number">41</span> hours ago  700MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile" aria-hidden="true">#</a> Dockerfile</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>FROM ubuntu                                                                    <span class="token comment"># 以 ubuntu 镜像为基础, 可添加 tag, ubuntu:20.04</span>

ENV <span class="token assign-left variable">path</span><span class="token operator">=</span>/usr/local/                                                           <span class="token comment"># 设置全局变量, 可添加多个，或 ENV 多次设置, 可以使用已设置的变量</span>
ARG <span class="token assign-left variable">USERNAME</span><span class="token operator">=</span><span class="token string">&quot;facser&quot;</span>                                                          <span class="token comment"># 设置 build 执行参数, 通过 --build-arg &lt;key&gt;=value 来修改</span>

LABEL <span class="token assign-left variable">version</span><span class="token operator">=</span><span class="token string">&quot;1.0.0&quot;</span> <span class="token assign-left variable">description</span><span class="token operator">=</span><span class="token string">&quot;ubuntu image by <span class="token variable">$USERNAME</span>&quot;</span>                  <span class="token comment"># 添加镜像元数据</span>

ADD nginx-1.8.0.tar.gz <span class="token variable">$path</span>                                                   <span class="token comment"># 将系统下文件复制到镜像中目录下</span>
ADD epel-release-latest-7.noarch.rpm <span class="token variable">$path</span> 

WORKDIR <span class="token variable">$path</span>                                                                  <span class="token comment"># 设定镜像中工作目录, 并转到改目录, 类似 cd 命令, 可以多次设置</span>

RUN <span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> /usr/local/epel-release-latest-7.noarch.rpm <span class="token operator">&amp;&amp;</span><span class="token punctuation">\\</span>                   <span class="token comment"># 执行 shell 命令</span>
    yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">wget</span> lftp gcc gcc-c++ <span class="token function">make</span> openssl-devel pcre-devel pcre <span class="token operator">&amp;&amp;</span><span class="token punctuation">\\</span> 
    yum clean all <span class="token operator">&amp;&amp;</span><span class="token punctuation">\\</span>
    <span class="token builtin class-name">cd</span> <span class="token variable">$path</span>/nginx-1.8.0 <span class="token operator">&amp;&amp;</span><span class="token punctuation">\\</span>
    ./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/nginx <span class="token parameter variable">--user</span><span class="token operator">=</span>www <span class="token parameter variable">--group</span><span class="token operator">=</span>www --with-http_ssl_module --with-pcre <span class="token operator">&amp;&amp;</span><span class="token punctuation">\\</span>
    <span class="token function">make</span> <span class="token operator">&amp;&amp;</span><span class="token punctuation">\\</span>
    <span class="token function">make</span> <span class="token function">install</span> <span class="token operator">&amp;&amp;</span><span class="token punctuation">\\</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;daemon off;&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/nginx.conf 

CMD /usr/sbin/nginx                                                            <span class="token comment"># 生成容器后执行的命令, 会被 docker run 生成容器时初始命令覆盖</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>FROM IMAGE<span class="token punctuation">[</span>:TAG<span class="token punctuation">]</span>                                                               <span class="token comment"># 第一行必须是 FROM, 选择基础镜像, 可以设置多个</span>

FROM ubuntu:20.04
FROM centos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ARG <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token operator">=</span><span class="token operator">&lt;</span>default value<span class="token operator">&gt;</span><span class="token punctuation">]</span>                                                   <span class="token comment"># 设置构建镜像的外部参数, 修改参数需要使用 --build-arg</span>
ENV <span class="token operator">&lt;</span>key<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>value<span class="token operator">&gt;</span>                                                              <span class="token comment"># 设置 Dockerfile 内全局变量</span>

ARG <span class="token assign-left variable">USERNAME</span><span class="token operator">=</span><span class="token string">&quot;facser&quot;</span>                                                          <span class="token comment"># Dockerfile 设置默认参数 &quot;facser&quot;</span>
$ <span class="token function">docker</span> build --build-arg <span class="token assign-left variable">USERNAME</span><span class="token operator">=</span><span class="token string">&quot;kertory&quot;</span> <span class="token parameter variable">-t</span> demo:v1                       <span class="token comment"># build 镜像时通过 --build-arg 修改 USERNAME 的值</span>

ENV FILENAME <span class="token string">&quot;record.log&quot;</span>                                                      <span class="token comment"># 设置 Dockerfile 内全局变量, 一般全大写, 用法与 shell 一致</span>
ENV <span class="token assign-left variable">TITLE</span><span class="token operator">=</span><span class="token string">&quot;title in <span class="token variable">$FILENAME</span>&quot;</span>                                                 <span class="token comment"># &quot;title in record.log&quot;, 使用 = 可以设置多个变量</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>COPY <span class="token operator">&lt;</span>src<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>dest<span class="token operator">&gt;</span>
ADD  <span class="token operator">&lt;</span>src<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>dest<span class="token operator">&gt;</span>

COPY client.log /root/docker.log                                               <span class="token comment"># 将容器外的文件复制到镜像指定目录下</span>
ADD  /root/client.log /root/docker.log                                         <span class="token comment"># 使用绝对路径, 效果一致</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>WORKDIR <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span>                                                                 <span class="token comment"># 设置镜像内的工作目录, 类似 cd 效果</span>

WORKDIR /root                                                                  <span class="token comment"># 进入 /root 并设为工作目录</span>
WORKDIR /home                                                                  <span class="token comment"># 将工作目录转到 /home</span>
WORKDIR facser                                                                 <span class="token comment"># 将工作目录转到 /home/facser</span>
WORKDIR Desktop                                                                <span class="token comment"># 将工作目录转到 /home/facser/Desktop</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>RUN <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span>                                                                  <span class="token comment"># 通过 sh 执行命令</span>
RUN <span class="token punctuation">[</span><span class="token string">&quot;executable&quot;</span>, <span class="token string">&quot;param1&quot;</span>, <span class="token string">&quot;param2&quot;</span><span class="token punctuation">]</span>                                         <span class="token comment"># 指定 shell 执行命令</span>

RUN <span class="token function">date</span>                                                                       <span class="token comment"># 通过 sh 执行 date 命令 (命令执行失败即停止)</span>
RUN <span class="token punctuation">[</span><span class="token string">&quot;/bin/sh&quot;</span>, <span class="token string">&quot;-c&quot;</span>, <span class="token string">&quot;date&quot;</span><span class="token punctuation">]</span>                                                  <span class="token comment"># 和上命令完全一致</span>
RUN <span class="token punctuation">[</span><span class="token string">&quot;/bin/bash&quot;</span>, <span class="token string">&quot;-c&quot;</span>, <span class="token string">&quot;date&quot;</span><span class="token punctuation">]</span>                                                <span class="token comment"># 通过 bash 执行 date 命令 (命令执行失败继续执行)</span>

RUN <span class="token builtin class-name">echo</span> <span class="token string">&quot;line first&quot;</span>  <span class="token operator">&gt;&gt;</span> /root/run.log                                        <span class="token comment"># 执行 3 个 RUN 指令, 创建 3 个镜像层 </span>
RUN <span class="token builtin class-name">echo</span> <span class="token string">&quot;line second&quot;</span> <span class="token operator">&gt;&gt;</span> /root/run.log                                        <span class="token comment"># 层数越多占用空间更大</span>
RUN <span class="token builtin class-name">echo</span> <span class="token string">&quot;line third&quot;</span>  <span class="token operator">&gt;&gt;</span> /root/run.log                                        <span class="token comment"># 创建失败时, 从失败的上一层 RUN 继续, 重新创建速度更快</span>

RUN <span class="token builtin class-name">echo</span> <span class="token string">&quot;line first&quot;</span>  <span class="token operator">&gt;&gt;</span> /root/run.log <span class="token operator">&amp;&amp;</span><span class="token punctuation">\\</span>                                    <span class="token comment"># 一个 RUN 指令创建 1 个镜像层</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;line second&quot;</span> <span class="token operator">&gt;&gt;</span> /root/run.log <span class="token operator">&amp;&amp;</span><span class="token punctuation">\\</span>                                    <span class="token comment"># 只有一层镜像, 占用更小</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;line third&quot;</span>  <span class="token operator">&gt;&gt;</span> /root/run.log                                        <span class="token comment"># 每次创建都需要从头开始执行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>CMD <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span>                                                                  <span class="token comment"># 以次文件构建的镜像, 创建容器后, 通过 sh 执行命令</span>
CMD <span class="token punctuation">[</span><span class="token string">&quot;executable&quot;</span>, <span class="token string">&quot;param1&quot;</span>, <span class="token string">&quot;param2&quot;</span><span class="token punctuation">]</span>                                         <span class="token comment"># 以次文件构建的镜像, 创建容器后, 指定 shell 执行命令</span>

CMD /bin/bash                                                                  <span class="token comment"># 会被 docker run 创建容器时指定的命令覆盖</span>

 $ <span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--name</span> nginx-demo nginx-base <span class="token builtin class-name">echo</span> <span class="token string">&quot;create mongo container&quot;</span>   <span class="token comment"># echo 命令覆盖 /bin/bash 指令</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注: 创建容器时, 若执行的命令在一定时间内能完成, 则容器在执行完命令就会关闭</p><ul><li>echo &quot;hello docker&quot;, 创建容器在执行完 echo 命令后便关闭改容器</li><li>/bin/bash, 该命令未收到 exit 退出前会一直执行, 该容器会保持运行状态</li></ul>`,36),o=[l];function i(p,c){return s(),a("div",null,o)}const u=n(t,[["render",i],["__file","docker-1-image.html.vue"]]);export{u as default};