常用配置有##appenders##,##Levels##.appenders用来配置日志的具体的展现形式，Levels用来配置日志的展现等级。

例如:我们配置一个写入到文件中的日志。
var log4js = require('log4js');

//var logger = log4js.getLogger();

log4js.configure({
    "appenders":[{
        "type":"file",
        "filename":__dirname+"/logs/logger.log",
        "category":"logger" 
    }]
})

var loggerTest = log4js.getLogger('logger')
loggerTest.info('test')


logger.log文件中:
[2016-12-11 16:32:51.303] [INFO] logger - test

我们也可以配置多个:
var log4js = require('log4js');

//var logger = log4js.getLogger();

log4js.configure({
    "appenders":[{
        "type":"file",
        "filename":__dirname+"/logs/logger.log",
        "category":"logger" 
    },{
        "type":"file",
        "filename":__dirname+"/logs/logger2.log",
        "category":"logger2" 
    }]
})

var loggerTest = log4js.getLogger('logger')
var loggerTest2 = log4js.getLogger('logger2')
loggerTest.info('test')
loggerTest2.info('test2')

我们也可以控制输出的级别,通过在配置文件中添加##levels##
var log4js = require('log4js');

//var logger = log4js.getLogger();

log4js.configure({
    "appenders":[{
        "type":"file",
        "filename":__dirname+"/logs/logger.log",
        "category":"logger" 
    },{
        "type":"file",
        "filename":__dirname+"/logs/logger2.log",
        "category":"logger2" 
    }],
    "levels":{
        "logger":"info",
        "logger2":"warn"
    }
})

var loggerTest = log4js.getLogger('logger')
var loggerTest2 = log4js.getLogger('logger2')
loggerTest.info('test')
loggerTest2.info('test2')


**************************************************************************
datefilel类型的日志
**************************************************************************
上面的日志输出的名称是固定的，这可能不是我们想要的。我们想要每天一个日志，我们需要修改##type##属性


{"type":"datefile",
"filename":__dirname+"/logs/logger",
"pattern": "-yyyy-MM-dd-hh.log",
"alwaysIncludePattern": true,
"category":"logger" }

这样输出的日志的文件格式类似这种:logger-2016-12-11-18.log
需要配合##pattern##,##alwaysIncludePattern##来使用。

appenders是用来配置日志输出源信心的。


pattern：表示一个文件的时间命名格式，只有配合datefile才起作用
filename:表示文件的路径名称
type:表示日志输出类型
category:可以理解为一类日志的表示
alwaysIncludePattern：表示日志是否包含命名格式，只有配合datefile才起作用
backups:表示备份的文件数量,配合file类型