概要

CSSStyleDeclaration 表示一个CSS属性键值对的集合。它被用于一些API中：

HTMLElement.style - 用于操作单个元素的样式(<elem style="...">)；
(TODO: reword) 作为 declaration block 的接口，当规则为 CSSStyleRule 时，由stylesheet中的 style  属性返回 。
CSSStyleDeclaration也是由window.getComputedStyle()返回的只读接口.


属性

CSSStyleDeclaration.cssText
声明块的文本内容。设置这个属性会改变样式。
CSSStyleDeclaration.length
属性的数量。参照下面的item方法。
CSSStyleDeclaration.parentRule
包含的 CssRule.


方法

CSSStyleDeclaration.getPropertyPriority()
返回可选的优先级，”Important", 例如： priString= styleObj.getPropertyPriority('color')

CSSStyleDeclaration.getPropertyValue()
返回属性值。例如: valString= styleObj.getPropertyValue('color')

CSSStyleDeclaration.item()
返回属性名。 例如: nameString= styleObj.item(0) Alternative: nameString= styleObj[0]

CSSStyleDeclaration.removeProperty()
返回被删除的属性。例如: valString= styleObj.removeProperty('color')

CSSStyleDeclaration.setProperty()
没有返回值。例如: styleObj.setProperty('color', 'red', 'important')

CSSStyleDeclaration.getPropertyCSSValue()
仅支持通过getComputedStyle的方式。 在Firefox (CSSPrimitiveValue中返回  ROCSSPrimitiveValue, 在其他实现 CSSValue，或为null 速记属性。

例子: cssString= window.getComputedStyle(elem, null).getPropertyCSSValue('color').cssText;
Note: Gecko 1.9返回null，除非使用 getComputedStyle().
Note: 这个方法可能被W3C弃用 , 它不存在于最新的CSSOM草案. 
它不支持IE，即使该功能存在于Opera，调用它抛出一个 DOMException NOT_SUPPORTED_ERR。


范例

var styleObj= document.styleSheets[0].cssRules[0].style;
alert(styleObj.cssText);
for (var i = styleObj.length-1; i >= 0; i--) {
   var nameString = styleObj[i];
   styleObj.removeProperty(nameString);
}
alert(styleObj.cssText);


注释

声明块是出现在大括号中并且实际提供样式定义的样式规则的一部分 (对于选择器，在大括号前面的部分).


可以看看

DOM CSS Properties


规范

CSSOM: CSSStyleDeclaration
