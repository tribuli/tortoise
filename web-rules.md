Web前端开发规范
1.文件命名规则
1.1文件名和文件夹名的命名规则
      1.1.1  业务文件统一用小写的英文字母，数字和下划线的组合，不得包含汉字空格和特殊字符。

      1.1.2  自定义组件（template）, 统一用大写开头，英文字母，数字和下划线的组合，不得包含汉字空格和特殊字符。

      1.1.3  文件夹名称，统一用小写的英文字母（尽量简短）（待定：感觉小写会好一点，对比手里四五个项目，小写偏多，看着也可以）

      原则： 1）方便理解，见名之意

                  2）方面查找

1.2索引文件的命名规则（首页面）
index.htm
index.html（常见的静态网页）
1.3各子页面的命名规则
统一用翻译的英文命名（推荐）
统一用拼音命名（拼音的简化也可）
如果文件名过长，企业要提前约定一份缩写的规范，如pro—product

[x] 注意：不要中英文混用
例如：

首页—index
产品列表—prolist产品详细页面—prodetail
新闻列表—newslist新闻详细页面—newsdetail
发展历史—history
关于我们—aboutus
联系我们—linkus，contactus
信息反馈—feedback留言—leavewords
1.4图片命名规范
图片的名称分为头尾两部分，用下划线隔开，头部表示此图片的大类性质，例如广告，标志，菜单，按钮等

banner：放置在页面顶部的广告，装饰图案等长方形的图片
logo：标志性的图片
button：在页面上位置不固定，并且带有链接的小图片
menu：在页面中某一位置连续出现，性质相同的链接栏目的图片
pic：装饰用的图片
例子：

banner_sohu.gif, banner_sina.gif
menu_aboutus.gif,menu_job.gif
title_news.gif
logo_police.gif
pic_people.gif
1.5脚本文件和动态文本文件命名规则
脚本文件：一般使用脚本功能的英文小写缩写命名

实际模块：例如广告条的javascript文件名为ad.js，弹出窗口的javascript文件名为pop.js
公用模块：js文件命名：英文命名，后缀js。如common.js，basic.js
外部资源：Jquery.min.js，Jquery.validate.js，Jquery.date.js
动态文件：以性质描述，可以有多个单词，用‘_’隔开，性质一般是该页面的概要（见名知意）。

范例：register_form.aspx，register_post.aspx，topic_lock.aspx。不同模块之间，可以使用不同的前缀来区分。