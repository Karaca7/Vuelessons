# $emit özelliği ---> componentten ana app e değer taşımak bu bir fonksiyon değeride olabilir normal değerde oolaiblir.

        this.$emit("taşınacadeğer adı",değer)


        <comp-a @taşınacakddeğeradı="bağlanacak fonksiyon yada değer">

# alt componentin özellikleri instance olur ve bunu kullanabiliriz çağırarak

# istersek alt komponentin bu özelliklerini kapatabilriiz.

compa={
inheritAttrs: false,
template:...}

# $attrs özelliği bir componentin yada bir app in css, style, id , yada data-\* gibi kendine ait özellikleri içinde saklar bir değişkendir.
