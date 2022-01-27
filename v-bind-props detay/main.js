var compa = {
  props: {
    ad: {
      type: String,
      default: "karaca",
    },
    soyad: String,
    liste: Array,
  },
  template: `<div>
  
  <h2>hi it is components</h2>

  <p>{{ad}}</p>
  <p>{{soyad}}</p>
  <p>{{liste}}</p>

  </div>`,
};

const App = {
  data() {
    return {
      ad: "Karacaaaaaa",
      soyad: "yılmaz",
      liste: [1, 2, 3, 4],
    };
  },

  components: {
    compa,
  },
};

Vue.createApp(App).mount("#app");
