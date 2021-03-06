一、Nexus
平台介绍
Nexus是一个强大的Maven仓库管理器，它极大地简化了自己内部仓库的维护和外部仓库的访问。利用Nexus你可以只在一个地方就能够完全控制访问和部署在你所维护仓库中的每个Artifact。

Nexus是一套“开箱即用”的系统不需要数据库，它使用文件系统加Lucene来组织数据。Nexus使用ExtJS来开发界面，利用Restlet来提供完整的REST APIs，通过m2eclipse与Eclipse集成使用。

Nexus支持WebDAV与LDAP安全身份认证。 
主要功能
主要功能说明：

1.代理外部maven仓库；

2.代理maven中央仓库；

3.管理本地maven仓库；

4.管理maven仓库组；

5.搜索构件；

6.强大详细的代码评审功能

二、Gerrit
平台介绍
Gerrit，一种免费、开放源代码的代码管理和代码审查软件，使用网页界面。

利用网页浏览器，可以管理一个团队代码库的成员和分支权限配置，并且同一个团队的软件程序员，可以相互审阅彼此修改后的程序代码，决定是否能够提交，退回或者继续修改。

它使用Git作为底层版本控制系统。

主要功能
主要功能说明：

1.创建代码库等代码仓库管理；

2.代码库人员分组管理；

3.个人信息配置管理；

4.代码库各分支权限管理；

5.下载和上传代码；

6.强大详细的代码评审功能


三、GitLab
平台介绍
GitLab是利用 Ruby on Rails 一个开源的版本管理系统，实现一个自托管的Git项目仓库，可通过Web界面进行访问公开的或者私人项目。

它拥有与Github类似的功能，能够浏览源代码，管理缺陷和注释。可以管理团队对仓库的访问，它非常易于浏览提交过的版本并提供一个文件历史库。

团队成员可以利用内置的简单聊天程序(Wall)进行交流。它还提供一个代码片段收集功能可以轻松实现代码复用。

主要功能

1.创建代码库等代码仓库管理；

2.代码库人员分组管理；

3.个人信息配置管理；

4.下载和上传代码；

5.pull request和merge request

四、Sonar
平台介绍
Sonar，一种免费、开放源代码的代码质量管理平台，支持20多种语言，功能强大。
主要功能
支持25种以上的语言：Java, C/C++, C#, PHP, Flex,Groovy, JavaScript, Python, PL/SQL, COBOL等
可以用在Android开发中
提供重复代码，代码标准，单元测试，代码覆盖，复杂代码，潜在代码，注释以及设计和架构的报表
记录度量历史以及提供演化图时间机器(“time machine”)和不同视图
提供全自动的分析：集成Maven,Ant, Gradle以及持续集成工具(Atlassian Bamboo, Jenkins, Hudson等)
集成Eclipse开发环境
集成外部工具：JIRA, Mantis, LDAP, Fortify等
可以通过插件扩展
实现SQALE方法论来计算技术负债（technical debt）
支持Tomcat，但是Tomcat最终支持是SonarQube 4.1。单独模式是唯一支持Tomcat的，其中内嵌一个Tomcat服务器。

五、Jenkins
平台介绍
Jenkins，原名Hudson，2011年改为现在的名字，它 是一个开源的实现持续集成的软件工具。官方网站：http://jenkins-ci.org/。

Jenkins 有强大的任务调度功能，通过插件和salve完成用户的几乎所有调度需求，并且能实施监控集成中存在的错误，提供详细的日志文件和提醒功能，还能用图表的形式形象地展示项目构建的趋势和稳定性。

主要功能
易安装：仅仅一个 java -jar jenkins.war，从官网下载该文件后，直接运行，无需额外的安装，更无需安装数据库；
易配置：提供友好的GUI配置界面；
变更支持：Jenkins能从代码仓库（gitlab、gerrit）中获取并产生代码更新列表并输出到编译输出信息中；
支持永久链接：用户是通过web来访问Jenkins的，而这些web页面的链接地址都是永久链接地址，因此，你可以在各种文档中直接使用该链接；
集成E-Mail/RSS/IM：当完成一次集成时，可通过这些工具实时告诉你集成结果（据我所知，构建一次集成需要花费一定时间，有了这个功能，你就可以在等待结果过程中，干别的事情）；
JUnit/TestNG测试报告：也就是用以图表等形式提供详细的测试报表功能；
支持分布式构建：Jenkins可以把集成构建等工作分发到多台计算机中完成；
支持第三方插件：使得 Jenkins 变得越来越强大；

