new RegExp("hello")
/world/
正则表达式的方式

test() 检测

exec() 检索字符串中指定的值，返回被找到的值，找不到返回null

search() 字符串查找


match() 字符串匹配

replace() 字符串替换


[abc]查找方括号之间的任何字符

[^abc] 查找任何不在方括号之间的字符

[0-9] 查找任何 0 至 9 之间的数字
[a-z] 查找任何 a 至 z 之间的小写字符
[A-Z] 查找任何 A 至 Z 之间的大写字符
[A-z] 查找任何 A 至 z 之间的所有字符
[adgk] 查找给定集合内的任何字符
[^adgk] 查找给定集合外的任何字符
red|blue|green 查找任何指定的选项
a.b 查找单个字符，除了换行和行结束符
\w 查找单词字符（字母，数字，下划线）
\W 查找非单词字符
\d 查找数字字符
\D 查找非数字字符
\s 查找空白字符
\S 查找非空白字符
\b 匹配单词边界
\B 匹配非单词边界
\n 查找换行符
n+ 匹配包含至少一个n的字符串
n* 匹配任何包含0个或多个包含n的字符串
n? 匹配任何包含0个或一个包含n的字符串
n{X} 匹配包含 X 个n的序列的字符串
n{X,Y} 匹配包含 X 个或 Y 个n的序列的字符串
n$ 匹配任何结尾为n的字符串
^n 匹配任何开头为n的字符串

 

