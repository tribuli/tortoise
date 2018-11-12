1.简单工厂模式
https://blog.csdn.net/weiwenlongll/article/details/6918164
简单工厂模式解释： 

       简单工厂模式（Simple Factory Pattern）属于类的创新型模式，又叫静态工厂方法模式（Static FactoryMethod Pattern）,是通过专门定义一个类来负责创建其他类的实例，被创建的实例通常都具有共同的父类。

简单工厂模式的UML图： 

       简单工厂模式中包含的角色及其相应的职责如下：

       工厂角色（Creator）：这是简单工厂模式的核心，由它负责创建所有的类的内部逻辑。当然工厂类必须能够被外界调用，创建所需要的产品对象。

       抽象（Product）产品角色：简单工厂模式所创建的所有对象的父类，注意，这里的父类可以是接口也可以是抽象类，它负责描述所有实例所共有的公共接口。

       具体产品（Concrete Product）角色：简单工厂所创建的具体实例对象，这些具体的产品往往都拥有共同的父类。



简单工厂模式深入分析：

       简单工厂模式解决的问题是如何去实例化一个合适的对象。

       简单工厂模式的核心思想就是：有一个专门的类来负责创建实例的过程。

       具体来说，把产品看着是一系列的类的集合，这些类是由某个抽象类或者接口派生出来的一个对象树。而工厂类用来产生一个合适的对象来满足客户的要求。

       如果简单工厂模式所涉及到的具体产品之间没有共同的逻辑，那么我们就可以使用接口来扮演抽象产品的角色；如果具体产品之间有功能的逻辑或，我们就必须把这些共同的东西提取出来，放在一个抽象类中，然后让具体产品继承抽象类。为实现更好复用的目的，共同的东西总是应该抽象出来的。

       在实际的的使用中，抽闲产品和具体产品之间往往是多层次的产品结构，如下图所示：



简单工厂模式使用场景分析及代码实现： 

       GG请自己的女朋友和众多美女吃饭，但是GG自己是不会做饭的或者做的饭很不好，这说明GG不用自己去创建各种食物的对象；各个美女都有各自的爱好，到麦当劳后她们喜欢吃什么直接去点就行了，麦当劳就是生产各种食物的工厂，这时候GG不用自己动手，也可以请这么多美女吃饭，所要做的就是买单O(∩_∩)O哈哈~,其UML图如下所示：



       实现代码如下：

       新建立一个食物的接口：
       package com.diermeng.designPattern.SimpleFactory;

 

/*

 * 产品的抽象接口

 */

public interface Food {

    /*

     * 获得相应的食物

     */

    public void get();

}

接下来建立具体的产品：麦香鸡和薯条

package com.diermeng.designPattern.SimpleFactory.impl;

import com.diermeng.designPattern.SimpleFactory.Food;

 

/*

 * 麦香鸡对抽象产品接口的实现

 */

public class McChicken implements Food{

    /*

     * 获取一份麦香鸡

     */

    public void get(){

        System.out.println("我要一份麦香鸡");

    }

}

package com.diermeng.designPattern.SimpleFactory.impl;

import com.diermeng.designPattern.SimpleFactory.Food;

 

/*

 * 薯条对抽象产品接口的实现

 */

public class Chips implements Food{

    /*

     * 获取一份薯条

     */

    public void get(){

        System.out.println("我要一份薯条");

    }

}

现在建立一个食物加工工厂：

package com.diermeng.designPattern.SimpleFactory.impl;

import com.diermeng.designPattern.SimpleFactory.Food;

 

 

public class FoodFactory {

 

    public static Food getFood(String type) throws InstantiationException, IllegalAccessException, ClassNotFoundException {

        if(type.equalsIgnoreCase("mcchicken")) {

            return McChicken.class.newInstance();

 

        } else if(type.equalsIgnoreCase("chips")) {

            return Chips.class.newInstance();

        } else {

            System.out.println("哎呀！找不到相应的实例化类啦！");

            return null;

        }

 

 

    }

}

最后我们建立测试客户端：

package com.diermeng.designPattern.SimpleFactory.client;

import com.diermeng.designPattern.SimpleFactory.Food;

import com.diermeng.designPattern.SimpleFactory.impl.FoodFactory;

 

/*

 * 测试客户端

 */

public class SimpleFactoryTest {

    public static void main(String[] args) throws InstantiationException, IllegalAccessException, ClassNotFoundException {

 

        //实例化各种食物

        Food mcChicken = FoodFactory.getFood("McChicken");

        Food chips = FoodFactory.getFood("Chips");

        Food eggs = FoodFactory.getFood("Eggs");

 

        //获取食物

        if(mcChicken!=null){

            mcChicken.get();

        }

        if(chips!=null){

            chips.get();

        }

        if(eggs!=null){

            eggs.get();

        }

 

 

    }

}

输出的结果如下：

哎呀！找不到相应的实例化类啦！

我要一份麦香鸡

我要一份薯条

简单工厂模式的优缺点分析： 

       优点：工厂类是整个模式的关键所在。它包含必要的判断逻辑，能够根据外界给定的信息，决定究竟应该创建哪个具体类的对象。用户在使用时可以直接根据工厂类去创建所需的实例，而无需了解这些对象是如何创建以及如何组织的。有利于整个软件体系结构的优化。

      缺点：由于工厂类集中了所有实例的创建逻辑，这就直接导致一旦这个工厂出了问题，所有的客户端都会受到牵连；而且由于简单工厂模式的产品室基于一个共同的抽象类或者接口，这样一来，但产品的种类增加的时候，即有不同的产品接口或者抽象类的时候，工厂类就需要判断何时创建何种种类的产品，这就和创建何种种类产品的产品相互混淆在了一起，违背了单一职责，导致系统丧失灵活性和可维护性。而且更重要的是，简单工厂模式违背了“开放封闭原则”，就是违背了“系统对扩展开放，对修改关闭”的原则，因为当我新增加一个产品的时候必须修改工厂类，相应的工厂类就需要重新编译一遍。

      总结一下：简单工厂模式分离产品的创建者和消费者，有利于软件系统结构的优化；但是由于一切逻辑都集中在一个工厂类中，导致了没有很高的内聚性，同时也违背了“开放封闭原则”。另外，简单工厂模式的方法一般都是静态的，而静态工厂方法是无法让子类继承的，因此，简单工厂模式无法形成基于基类的继承树结构。

简单工厂模式的实际应用简介： 

       作为一个最基本和最简单的设计模式，简单工厂模式却有很非常广泛的应用，我们这里以Java中的JDBC操作数据库为例来说明。

        JDBC是SUN公司提供的一套数据库编程接口API，它利用Java语言提供简单、一致的方式来访问各种关系型数据库。Java程序通过JDBC可以执行SQL语句，对获取的数据进行处理，并将变化了的数据存回数据库，因此，JDBC是Java应用程序与各种关系数据进行对话的一种机制。用JDBC进行数据库访问时，要使用数据库厂商提供的驱动程序接口与数据库管理系统进行数据交互。



客户端要使用使用数据时，只需要和工厂进行交互即可，这就导致操作步骤得到极大的简化，操作步骤按照顺序依次为：注册并加载数据库驱动，一般使用Class.forName();创建与数据库的链接Connection对象；创建SQL语句对象preparedStatement(sql)；提交SQL语句，根据实际情况使用executeQuery()或者executeUpdate()；显示相应的结果；关闭数据库。

