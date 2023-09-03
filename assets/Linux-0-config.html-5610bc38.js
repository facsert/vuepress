import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,f as e}from"./app-8da2a3ac.js";const t={},p=e(`<h2 id="网络配置" tabindex="-1"><a class="header-anchor" href="#网络配置" aria-hidden="true">#</a> 网络配置</h2><p>Debian 网络配置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token function">vi</span> /etc/network/interfaces

 auto enp125s0f0                                 <span class="token comment"># 网卡名</span>
 iface enp125s0f0 inet static                    <span class="token comment"># 设置静态 IP</span>
 address <span class="token number">10.58</span>.14.96/24                          <span class="token comment"># 设置 IP 地址和掩码</span>
 gateway <span class="token number">10.10</span>.10.1                              <span class="token comment"># 设置网关</span>

 auto enp125s0f0                                 <span class="token comment"># 网卡名称</span>
 iface enp125s0f0 inet dhcp                      <span class="token comment"># 设置动态 IP</span>
 address <span class="token number">10.58</span>.14.96/24                          <span class="token comment"># 设置 IP 地址和子网掩码</span>
 gateway <span class="token number">10.10</span>.10.1                              <span class="token comment"># 设置网关</span>

 $ systemctl restart networking                  <span class="token comment"># 重启网络服务</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Centos</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">vi</span> /etc/sysconfig/network-scripts/ifcfg-eth0

 <span class="token assign-left variable">TYPE</span><span class="token operator">=</span>Ethernet                                   <span class="token comment"># 类型=以太网络</span>
 <span class="token assign-left variable">PROXY_METHOD</span><span class="token operator">=</span>none                               <span class="token comment"># 代理模式</span>
 <span class="token assign-left variable">BROWSER_ONLY</span><span class="token operator">=</span>no
 <span class="token assign-left variable">DEFROUTE</span><span class="token operator">=</span>yes                                    
 <span class="token assign-left variable">IPV4_FAILURE_FATAL</span><span class="token operator">=</span>no
 <span class="token assign-left variable">IPV6INIT</span><span class="token operator">=</span>yes                                    <span class="token comment"># 启用IPV6协议</span>
 <span class="token assign-left variable">IPV6_AUTOCONF</span><span class="token operator">=</span>yes                               <span class="token comment"># 自动配置IPV6地址</span>
 <span class="token assign-left variable">IPV6_DEFROUTE</span><span class="token operator">=</span>yes
 <span class="token assign-left variable">IPV6_FAILURE_FATAL</span><span class="token operator">=</span>no
 <span class="token assign-left variable">IPV6_ADDR_GEN_MODE</span><span class="token operator">=</span>stable-privacy
 <span class="token assign-left variable">NAME</span><span class="token operator">=</span>ens32
 <span class="token assign-left variable">UUID</span><span class="token operator">=</span>0e6d72a7-8a6c-43ac-aef2-25d165562fd0　　

 <span class="token assign-left variable">DEVICE</span><span class="token operator">=</span>eth0                                     <span class="token comment"># 设备名称</span>
 <span class="token assign-left variable">BOOTPROTO</span><span class="token operator">=</span>none                                  <span class="token comment"># 开机协议 static dhcp none</span>
 <span class="token assign-left variable">ONBOOT</span><span class="token operator">=</span>yes                                      <span class="token comment"># 启动或重启网络时，启动该设备，yes启动，no不启动</span>
 <span class="token assign-left variable">IPADDR</span><span class="token operator">=</span><span class="token number">192.168</span>.1.15                             <span class="token comment"># IPV4 地址</span>
 <span class="token assign-left variable">PREFIX</span><span class="token operator">=</span><span class="token number">24</span>                                       <span class="token comment"># 子网掩码</span>
 <span class="token assign-left variable">GATEWAY</span><span class="token operator">=</span><span class="token number">192.168</span>.1.1                             <span class="token comment"># 网关</span>
 <span class="token assign-left variable">DNS1</span><span class="token operator">=</span><span class="token number">192.168</span>.1.2                                <span class="token comment"># DNS服务器地址</span>
 <span class="token assign-left variable">IPV6_PRIVACY</span><span class="token operator">=</span>no                                 <span class="token comment"># IPV6协议</span>

 $ systemctl restart network                     <span class="token comment"># 重启网络</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置-ssh" tabindex="-1"><a class="header-anchor" href="#配置-ssh" aria-hidden="true">#</a> 配置 ssh</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token function">vi</span> /etc/ssh/sshd_config                       <span class="token comment"># 编辑 ssh 系统配置文件</span>

 <span class="token comment">#PermitRootLogin prohibit-password</span>
 PermitRootLogin <span class="token function">yes</span>                             <span class="token comment"># 允许远程 root 用户登录</span>

 <span class="token comment">#PasswordAuthentication no</span>
 PasswordAuthentication <span class="token function">yes</span>                      <span class="token comment"># 允许用户密码作为口令验证</span>

 $ systemctl restart sshd                        <span class="token comment"># 重启 ssh 服务，令配置生效</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="host-配置" tabindex="-1"><a class="header-anchor" href="#host-配置" aria-hidden="true">#</a> host 配置</h2><p>命令行开头 <code>root@debian:~/#</code></p><ul><li>root: 用户名称</li><li>debian: Linux host 名称</li><li>~/: 当前目录</li><li>#: root 用户标识(普通用户为 $)</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token function">hostname</span>                                      <span class="token comment"># 打印本机 hostname</span>
 <span class="token operator">&gt;</span> debian

 $ <span class="token function">hostname</span> <span class="token parameter variable">-i</span>                                   <span class="token comment"># 打印本机 IP</span>
 <span class="token operator">&gt;</span> debian

 $ hostnamectl set-hostname ubuntu               <span class="token comment"># 修改 hostname, 立即生效</span>
 $ <span class="token function">hostname</span>
 <span class="token operator">&gt;</span> ubuntu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 <code>/etc/hosts</code> 文件可以将主机名与 IP 绑定快速解析</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token function">vi</span> /etc/hosts                                 <span class="token comment"># 域名解析为 IP 地址的配置文件</span>

 <span class="token number">127.0</span>.0.1        localhost                      <span class="token comment"># localhost 会被解析为 IP 127.0.0.1</span>
 <span class="token number">192.168</span>.1.49     <span class="token function">node</span>                           <span class="token comment"># node 被解析为对应 IP, 例如 ping node == ping 192.168.1.49</span>
 <span class="token number">123.123</span>.123.123  baidu                           
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 <code>/etc/resolve.conf</code> 指定 DNS 解析的服务器地址<br> 用户通过域名访问网站, 请求发送到 DNS 服务器, DNS 服务器将域名解析为具体的 IP 返回给用户机器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ <span class="token function">vi</span> /etc/resolve.conf

 nameserver  <span class="token number">8.8</span>.8.8                             <span class="token comment"># 添加 DNS 解析服务器 IP 地址</span>
 nameserver  <span class="token number">10.10</span>.10                            <span class="token comment"># 添加 DNS 解析服务器 IP 地址</span>

 $ <span class="token builtin class-name">source</span> /etc/resolve.conf                      <span class="token comment"># 配置生效</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>      www.baidu.com     <span class="token number">123.123</span>.123.123    <span class="token number">123.123</span>.123.123
computer -------<span class="token operator">&gt;</span> DNS server -------<span class="token operator">&gt;</span> computer -------<span class="token operator">&gt;</span> baidu server

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="windows-wsl-ssh-连接" tabindex="-1"><a class="header-anchor" href="#windows-wsl-ssh-连接" aria-hidden="true">#</a> Windows WSL ssh 连接</h2><p>WSL 下查看 ssh 服务端口</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> $ ss <span class="token parameter variable">-ntlp</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">ssh</span>                           <span class="token comment"># Debian Ubuntu 默认端口查看工具</span>
 <span class="token operator">&gt;</span> LISTEN   <span class="token number">0</span>   <span class="token number">128</span>   <span class="token number">0.0</span>.0.0:2222   <span class="token number">0.0</span>.0.0:*  users:<span class="token variable"><span class="token punctuation">((</span>&quot;sshd&quot;<span class="token punctuation">,</span>pid<span class="token operator">=</span><span class="token number">4628</span>fd<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">))</span></span>
 <span class="token operator">&gt;</span> LISTEN   <span class="token number">0</span>   <span class="token number">128</span>      <span class="token punctuation">[</span>::<span class="token punctuation">]</span>:2222      <span class="token punctuation">[</span>::<span class="token punctuation">]</span>:*  users:<span class="token variable"><span class="token punctuation">((</span>&quot;sshd&quot;<span class="token punctuation">,</span>pid<span class="token operator">=</span><span class="token number">4628</span><span class="token punctuation">,</span>fd<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">))</span></span>

 $ <span class="token function">netstat</span> <span class="token parameter variable">-ntlp</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">ssh</span>                      <span class="token comment"># Redhat Centos netstat 查看端口</span>
 <span class="token operator">&gt;</span> tcp    <span class="token number">0</span>   <span class="token number">0</span> <span class="token number">0.0</span>.0.0:2222   <span class="token number">0.0</span>.0.0:*   LISTEN   <span class="token number">4628</span>/sshd: /usr/sbi 
 <span class="token operator">&gt;</span> tcp6   <span class="token number">0</span>   <span class="token number">0</span> :::2222        :::*        LISTEN   <span class="token number">4628</span>/sshd: /usr/sbi 

 $ systemclt start sshd                          <span class="token comment"># 启动 ssh 服务</span>
 $ <span class="token function">service</span> <span class="token function">ssh</span> start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Windows &gt; 设置 &gt; 应用 &gt; 可选功能 &gt; 添加可选功能<br> 选择 OpenSSH 服务端和 OpenSSH 服务端安装<br> 安装后在可选功能界面下方检查是否安装成功</p><p>Windows 打开终端管理员, 设置 WSL IP 和 ssh 端口映射到 Windows 端口</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>netsh interface portproxy add v4tov4 listenport=2222 listenaddress=0<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0 connectport=2222 connectaddress=172<span class="token punctuation">.</span>28<span class="token punctuation">.</span>185<span class="token punctuation">.</span>15

<span class="token comment"># listenport windows 端口</span>
<span class="token comment"># listenaddress windows IP</span>
<span class="token comment"># connectport WSL 端口</span>
<span class="token comment"># connectaddress WSL IP</span>

<span class="token comment"># 查看端口映射列表</span>
netsh interface portproxy show all
侦听 ipv4:                 连接到 ipv4:

地址            端口        地址            端口
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span> <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>  <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span> <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>
0<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0         2222        172<span class="token punctuation">.</span>28<span class="token punctuation">.</span>185<span class="token punctuation">.</span>15   2222
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),o=[p];function l(i,c){return n(),a("div",null,o)}const u=s(t,[["render",l],["__file","Linux-0-config.html.vue"]]);export{u as default};
