# Dinamik komponentler topluluğu nasıl oluşturulur.

1. componentler ana appe dahil edilir.
2. data fonksiyonu içinde ; currenttabs --> ana akıştaki tab anlamında ve tabs[component adları ] oluşturuyoruz
3. template içinde button oluşturoyuruz ve özelliği olara v-for:tab in tabs ->yani data içindeki tabs listesi dönüyoruz buton methodu olarak (@click="currenttab="fordaki ->(i)tab")
4. <component :is="computed daki method adı">

5. computed tüm componentleri derliyor sadece @click methoduyla currenttab değiştiriliyor ve bu değişken computed :{return this.currenttab yada this.currenttab.lowercase() ile o component sanal dom içinde ekrana bastırlıyor.

yani ------> tüm komponentler öncede hesaplanıyor /reder ediliyor.
