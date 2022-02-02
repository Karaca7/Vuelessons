# provide /inject --> sağlamak/enjekte etmek

    şimdi olay şu istediğin yapı içiresinden başka alt bir yapıya  veri aktara bilrisin bunu tek tek katmanlar arasında veri aktarmakla uğramşana gerek yok

        App->compa->compb->compc yerine

        özel fieldslarla çok kolay bir şekilde yapabilirsin diyor

        App->compc

nasıl

öreniğin app içinde bir veriyi c comp içine aktaracaskın

<div id="app">
    <compa>
    <compb>
    <compc>

</div>

app={
data(){
veri:"bu veri";
}
provide(){return{aktarılacakdata:this.veri}}

}

coma...
compb..
const compc={
template:`<h1>{{aktarılacakdata}}</h1>`

    inject:["aktarılacakdata"]

}

# Önemli not eğer componentleri aşağıdan yukarı okursak sorunla karşılaşırız .VUE render edemet. Bunun yapmanın yolu yukardan aşağı okuyup en alttaki elemanı en üsteki eleman mış gibi ana appa bağlanır
