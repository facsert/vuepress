import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as i,f as r}from"./app-8da2a3ac.js";const n={},e=r(`<h2 id="指针" tabindex="-1"><a class="header-anchor" href="#指针" aria-hidden="true">#</a> 指针</h2><ul><li>变量</li><li>指针变量</li></ul><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code> strVar := &quot;initial&quot;                             // 初始化变量赋值, 绑定一个固定地址, 值可以变, 地址不变
 Printf(&quot;initial strVar value:%v, addr: %p\\n&quot;, strVar, &amp;strVar)

 straddr := &amp;strVar                              // 初始化地址类型变量并赋值, 变量绑定地址, 变量值是一个地址
 Printf(&quot;initial straddr value: %v, addr: %p\\n&quot;, straddr, &amp;straddr)

 addrVal := *straddr                             // 初始化并赋值, 变量绑定地址, 地址类型才能取值
 Printf(&quot;initial strVar value:%v, addr: %p\\n&quot;, addrVal, &amp;addrVal)

 strVar = &quot;modify&quot;                               

 Printf(&quot;modify strVar value:%v, addr: %p\\n&quot;, strVar, &amp;strVar)
 Printf(&quot;modify straddr value: %v, addr: %p\\n&quot;, straddr, &amp;straddr)
 Printf(&quot;modify strVar value:%v, addr: %p\\n&quot;, addrVal, &amp;addrVal)

 &gt; strVar value:initial, addr: 0xc0000142b0
 &gt; straddr value: 0xc0000142b0, addr: 0xc000012038
 &gt; addrVal value:initial, addr: 0xc0000142d0

 &gt; strVar value:modify, addr: 0xc0000142b0       // strVar 重新赋值(地址对应的值变化), 地址不变
 &gt; straddr value: 0xc0000142b0, addr: 0xc000012038
 &gt; addrVal value:initial, addr: 0xc0000142d0     // 地址对应的值没有变化

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义变量后, 该变量的地址不变, 地址内的值可变化</p><h3 id="变量地址" tabindex="-1"><a class="header-anchor" href="#变量地址" aria-hidden="true">#</a> 变量地址</h3><ul><li>符号: &amp; 获取变量的地址</li><li>符号: * 指针变量的值(地址)取值</li></ul><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code> var str string = &quot;hello&quot;                        // 定义一个字符串变量 str, 值是 &quot;hello&quot; 地址是 0xc00001a078

 addr := &amp;str                                    // addr 类型为 *string(地址类型), addr 的值是 0xc00001a078(str 地址), addr 地址是 0xc00000e018

 tmp := *addr                                    // 根据 addr 的值(0xc00001a078 str 地址)取值到 &quot;hello&quot; 赋值给 tmp. 等同于 tmp := &quot;hello&quot;
 
 *addr = &quot;end&quot;                                   // str 的地址不变, addr 指针一直指向 str 的值, 与 str = &quot;end&quot; 效果一致
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),l=[e];function s(t,u){return a(),i("div",null,l)}const o=d(n,[["render",s],["__file","go-pointer.html.vue"]]);export{o as default};
