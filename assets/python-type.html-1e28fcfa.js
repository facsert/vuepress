import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-8da2a3ac.js";const t={},p=e(`<h2 id="引申" tabindex="-1"><a class="header-anchor" href="#引申" aria-hidden="true">#</a> 引申</h2><h3 id="动态语言与静态语言" tabindex="-1"><a class="header-anchor" href="#动态语言与静态语言" aria-hidden="true">#</a> 动态语言与静态语言</h3><ul><li>动态语言(弱类型语言)</li><li>静态语言(强类型语言)</li></ul><p>动态语言的变量没有类型, 变量的类型由值的类型决定</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code> name <span class="token operator">=</span> <span class="token string">&quot;facser&quot;</span>                                 <span class="token comment"># python 是动态语言</span>
 name <span class="token operator">=</span> <span class="token number">18</span>                                       <span class="token comment"># 变量无需声明类型, 可接受任意类型的值</span>
 name <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>                                  <span class="token comment"># 变量可随意变换类型, 类型仅在执行时确定</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>静态语言变量有类型, 且变量类型和值的类型必须一致</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code> <span class="token keyword">var</span> name <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;facser&quot;</span>                      <span class="token comment">// Go 是静态语言</span>
 <span class="token keyword">var</span> age <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">18</span>                                <span class="token comment">// 变量声明需要确定变量类型</span>
 age <span class="token operator">=</span> <span class="token number">20</span>                                        <span class="token comment">// 变量重新赋值时, 变量和值的类型必须一致</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python-类型注解" tabindex="-1"><a class="header-anchor" href="#python-类型注解" aria-hidden="true">#</a> python 类型注解</h3><p>python 类型注解:</p><ul><li>便于快速理解代码</li><li>编辑器的静态类型检查</li><li>编辑器类型提示快速开发</li></ul><p>注: python 不会做类型检查, 所有类型注解被看做注释用于提示, python 仍然可以使用动态语言特性</p><h2 id="变量注解" tabindex="-1"><a class="header-anchor" href="#变量注解" aria-hidden="true">#</a> 变量注解</h2><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code> var_str: str = &quot;string&quot;                        # 字符串变量
 var_byte:bytes = b&#39;byte&#39;                       # byte 类型变量
 var_int: int = 3                               # 整形变量
 var_float: float = 1.6                         # 浮点型变量
 var_bool: bool = True                          # 布尔类型变量
 none_var: None = None                          # 定义 None 值

 var_any: Any = &#39;any type&#39;                      # 任意类型(无法确定类型时使用, 减少使用)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="容器类型" tabindex="-1"><a class="header-anchor" href="#容器类型" aria-hidden="true">#</a> 容器类型</h3><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>  var_list: list[str] = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;]          # 列表的值类型只能是字符串
  var_set: set[int] = {1,2,3}                    # 集合的值类型只能是整型
  var_dict: dict[str, int] = {&#39;key&#39;: 3}          # 字典的 key 为字符串, 值为字符串

  var_tuple: tuple[int, str] = [3, &#39;c&#39;]          # 元组类型声明和值数量和类型均需要一致
  var_tuple2: tuple[int, str] = [&#39;a&#39;, 3, 1]      # 错误, 序号1 2值与类型不符, 类型与值数量不一致
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注: 上述除元组与字典外, 容器元素只能指定一个类型. 元组需要数量和类型一致, 字典只能使用一组 key value 类型<br> (python3.9版本前容器类型需要导入 typing 模块的 List Tuple Set Dict)</p><h3 id="联合类型" tabindex="-1"><a class="header-anchor" href="#联合类型" aria-hidden="true">#</a> 联合类型</h3><ul><li>Union</li><li>Optional</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code> <span class="token keyword">from</span> typing <span class="token keyword">import</span> Union
 str_int<span class="token punctuation">:</span> Union<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span>                    <span class="token comment"># 变量可为整形也可为字符串</span>

 lst<span class="token punctuation">:</span> Union<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span>                 <span class="token comment"># 列表的值类型可为字符串或整形</span>

 str_int<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">|</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">2</span>                          <span class="token comment"># python3.10 的新写法更直观</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code> option_str<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span>                     <span class="token comment"># 可选类型, 值可为字符串或者 None</span>
 option_int<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span>                    <span class="token comment"># 可选类型, 值可为整形或者 None</span>

 Optional<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span> <span class="token operator">=</span> Union<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">]</span>                    <span class="token comment"># Optional 自带 None, 只能再添加一种类型</span>

 optional_int<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">|</span> <span class="token boolean">None</span> <span class="token operator">=</span> <span class="token number">3</span>                        <span class="token comment"># python3.10 的新写法</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="抽象类型" tabindex="-1"><a class="header-anchor" href="#抽象类型" aria-hidden="true">#</a> 抽象类型</h3><ul><li>Mapping</li><li>MutableMapping</li><li>Sequence</li><li>Iterable</li></ul><p>数组, 元组, 集合</p><h3 id="函数注解" tabindex="-1"><a class="header-anchor" href="#函数注解" aria-hidden="true">#</a> 函数注解</h3><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code> def func(name: str, age: int) -&gt; dict:          # 参数添加类型, 返回值添加类型
     return {&#39;name&#39;: name, &#39;age&#39;: age}

  def func(name: str, age: int=18) -&gt; str, int:  # 返回多个值
      return name, age
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="callable" tabindex="-1"><a class="header-anchor" href="#callable" aria-hidden="true">#</a> Callable</h3><p>函数, 匿名函数, 包含 <strong>call</strong> 方法的对象</p><p>Callable[[args_type], return_type]</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code> from typing import Callable

 def func(name: str) -&gt; None:                    # 函数类型注解, 无返回值则默认返回 None
     print(f&quot;hellow {name}&quot;)

  foo: Callable[[str], None] = func              # 函数类型注解, 第一个参数是函数参数类型, 第二个是返回值类型

  fun: Callable[[int], bool] = lambda x: x is 1  # 匿名函数类型注解
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型" aria-hidden="true">#</a> 泛型</h3><p>当对函数使用类型注解时, 参数或返回值有多种类型的可能, 我们会使用 Union 联合类型<br> 但是, 这依然会出现问题, 如我们希望函数参数和返回值类型应当一致</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code> <span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span>a<span class="token punctuation">:</span><span class="token builtin">str</span> <span class="token operator">|</span> <span class="token builtin">int</span><span class="token punctuation">,</span> b<span class="token punctuation">:</span><span class="token builtin">str</span> <span class="token operator">|</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">str</span> <span class="token operator">|</span> <span class="token builtin">int</span><span class="token punctuation">:</span> <span class="token comment"># 参数可以是整形也可以是字符串</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b                                   <span class="token comment"># 可能出现 a b 类型不一致情况</span>

 <span class="token keyword">from</span> typing <span class="token keyword">import</span> TypeVar

 T <span class="token operator">=</span> TypeVar<span class="token punctuation">(</span><span class="token string">&#39;T&#39;</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">str</span><span class="token punctuation">)</span>                      <span class="token comment"># T 类型可以字符串或整数, 第一个参数和变量名一致(T &#39;T&#39;)</span>
 <span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span>a<span class="token punctuation">:</span> T<span class="token punctuation">,</span> b<span class="token punctuation">:</span> T<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> T<span class="token punctuation">:</span>                       <span class="token comment"># a b 及返回值类型一致</span>
     <span class="token keyword">return</span> a <span class="token operator">+</span> b

 <span class="token builtin">any</span> <span class="token operator">=</span> TypeVar<span class="token punctuation">(</span><span class="token string">&#39;any&#39;</span><span class="token punctuation">)</span>                            <span class="token comment"># 任意类型的泛型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>泛型可以使变量表示多种类型同时约束使用该类型的变量为同一类型</p><h3 id="自定义类型" tabindex="-1"><a class="header-anchor" href="#自定义类型" aria-hidden="true">#</a> 自定义类型</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code> <span class="token keyword">from</span> typing <span class="token keyword">import</span> NewType

matrix <span class="token operator">=</span> NewType<span class="token punctuation">(</span><span class="token string">&#39;matrix&#39;</span><span class="token punctuation">,</span> <span class="token builtin">list</span><span class="token punctuation">[</span><span class="token builtin">list</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>      <span class="token comment"># 自定义类型并命名</span>
nums <span class="token operator">=</span> NewType<span class="token punctuation">(</span><span class="token string">&#39;nums&#39;</span><span class="token punctuation">,</span> <span class="token builtin">list</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span>               
strings <span class="token operator">=</span> NewType<span class="token punctuation">(</span><span class="token string">&#39;strings&#39;</span><span class="token punctuation">,</span> <span class="token builtin">str</span><span class="token punctuation">)</span>

a<span class="token punctuation">:</span> matrix <span class="token operator">=</span> matrix<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>               <span class="token comment"># 需要实例化赋值</span>
b<span class="token punctuation">:</span> nums <span class="token operator">=</span> nums<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
c<span class="token punctuation">:</span> strings <span class="token operator">=</span> strings<span class="token punctuation">(</span><span class="token string">&#39;str&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型别名" tabindex="-1"><a class="header-anchor" href="#类型别名" aria-hidden="true">#</a> 类型别名</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code> 
 matrix <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">[</span><span class="token builtin">list</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">]</span>                        <span class="token comment"># 自定义类型并命名</span>
 nums <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span>              
 strings <span class="token operator">=</span> <span class="token builtin">str</span>

 a<span class="token punctuation">:</span> matrix <span class="token operator">=</span> matrix<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>              <span class="token comment"># 无需实例化与正常类型解一致</span>
 b<span class="token punctuation">:</span> nums <span class="token operator">=</span> nums<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
 c<span class="token punctuation">:</span> strings <span class="token operator">=</span> strings<span class="token punctuation">(</span><span class="token string">&#39;str&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="class" tabindex="-1"><a class="header-anchor" href="#class" aria-hidden="true">#</a> class</h3><p>通过类来定义复杂的组合类型, 类似接口</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code> <span class="token keyword">from</span> pydantic <span class="token keyword">import</span> BaseModel

 <span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span>
     <span class="token builtin">id</span><span class="token punctuation">:</span> <span class="token builtin">int</span>
     name<span class="token punctuation">:</span> <span class="token builtin">str</span>
     age<span class="token punctuation">:</span> <span class="token builtin">int</span>
     email<span class="token punctuation">:</span> <span class="token builtin">str</span>
     
 victory<span class="token punctuation">:</span> Person <span class="token operator">=</span> Person<span class="token punctuation">(</span>
     <span class="token builtin">id</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span>
     name <span class="token operator">=</span> <span class="token string">&#39;victory&#39;</span><span class="token punctuation">,</span>
     age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">,</span>
     email <span class="token operator">=</span> <span class="token string">&#39;victory@example.com&#39;</span><span class="token punctuation">,</span>
 <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40),i=[p];function o(l,c){return s(),a("div",null,i)}const d=n(t,[["render",o],["__file","python-type.html.vue"]]);export{d as default};
