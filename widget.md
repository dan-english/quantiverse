---
report:
  tooltipText: Report a problem with code sample
  label: What is wrong with this code sample?
---

# How to make the widget work again!

A recent update to the widget requires some configuration updates. Below is the list of changes and steps required to regain widget functionality.


---
{% split %}

1. The file name for the widget has changed it is no longer `cool-widget.js`
{% br / %}
2.  The ```<footer />``` tag should have an attribute widget-container, because the widget wants to be inserted into the element with this attribute.
{% br / %}
3. All the buttons should have a new attribute `checkStat=true`, so widget can collect the click statistics.
{% br / %}
4. There is an advanced mode for the widget which allows user to see weather, clicks, and even the current date by Maya calendar. 
To enable these options customer should insert additional code into the page. Pay attention that the code should be at the bottom of the page right before the closing ```</body>``` tag



---





1. The file name is now `great-widget.min.js`
{% br / %}

2. {% code-snippet
  file="./code-examples/widget-index-footer.html"
  language="php"
  title="Widget Home Page Footer"
/%} 

{% br / %}
3. {% code-snippet
  file="./code-examples/widget-index-button.html"
  language="php"
  title="Widget Button Change"
/%}


{% br / %}
4. {% code-snippet
  file="./code-examples/widget-update.js"
  language="js"
  from=1
  to=10
  title="Widget Advanced Config"
/%} 
 
  


{% /split %}


 {% code-snippet
  file="./code-examples/widget-index.html"
  language="php"
  title="Example Index"
/%}