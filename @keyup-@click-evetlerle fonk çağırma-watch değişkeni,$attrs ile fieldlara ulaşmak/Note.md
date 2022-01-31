Not:
klavyeden yada mouse dan bir olay handlig/modifere etmek için

      elemanın içine< tag -->  @keyup.alt.enter yada @click.right ="method adı" yapılırsa o olayı handling edilir.

        elemanın özelliklerine ulaşmak için
            onu v-model ile bir değişkene bağlayabiliriz.

Not2:
fonksiyonlar v-on: yazmak yerine beziyici kullanabiliriz kısa yolu "@" işaretidir.
@click="sayhi"
@click="sayhi('karaca')" parametre alabilir
@click="sayhi(name)" değişken bağlanabilir.

@click="sayhi(name), deletsayhi(name)" birden fazla bir tag da method çağırabiliriz.

Note3:

    dışardan vue instance özelliklerine methodlarına ulaşmak için vm =....createApp() ile instance oluşturduktan sonra
        vm.$data.fields--> özelliğe ulaşılır değiştirilebilir. silinebilir

Note4:
watch: -->meta özelliği
bir inputun değeri olabilir her hangi bir şeyi izler ve o olduğunda bir şeyleri tetikler. (!!! v-model="watchmethod" ile bir inputa bağlanırsa doğrudan value alur watch methodu ile)

watch:{
methodadı(param alabilir){

        if(param){

            bir şeyleri tetikleyecek fonksiyonlar.
        }else{
            şu fonku çağır
        }
    }

}

Note5:
template mesaj basmak için
<span v-html="değişken adı">
