(function () {
  var mount = document.getElementById("trasy-app");
  if (!mount || !window.Vue) return;

  var rides = [
    {
      id: 1,
      cat: "tor",
      tag: "Tor",
      km: 44,
      image: "img/08-cbr-bok.jpg",
    },
    {
      id: 2,
      cat: "tor",
      tag: "Tor",
      km: 36,
      image: "img/07-tor-zakret.jpg",
    },
    {
      id: 3,
      cat: "tor",
      tag: "Tor",
      km: 41,
      image: "img/13-luk.jpg",
    },
    {
      id: 4,
      cat: "ekipa",
      tag: "Ekipa",
      km: 58,
      image: "img/09-dwoch-na-torze.jpg",
    },
    {
      id: 5,
      cat: "garaz",
      tag: "Garaż",
      km: 15,
      image: "img/11-warsztat.jpg",
    },
    {
      id: 6,
      cat: "garaz",
      tag: "Garaż",
      km: 9,
      image: "img/14-garaz-rama.jpg",
    },
  ];

  Vue.createApp({
    data: function () {
      return {
        categories: [
          { id: "wszystkie", label: "Wszystkie" },
          { id: "tor", label: "Tor" },
          { id: "ekipa", label: "Ekipa" },
          { id: "garaz", label: "Garaż" },
        ],
        active: "wszystkie",
        selected: null,
        rides: rides,
      };
    },
    computed: {
      filtered: function () {
        if (this.active === "wszystkie") return this.rides;
        var active = this.active;
        return this.rides.filter(function (ride) {
          return ride.cat === active;
        });
      },
      totalKm: function () {
        return this.filtered.reduce(function (sum, ride) {
          return sum + ride.km;
        }, 0);
      },
    },
    methods: {
      open: function (ride) {
        this.selected = ride;
        var el = document.getElementById("rideModal");
        if (!el || !window.bootstrap) return;
        this.$nextTick(function () {
          bootstrap.Modal.getOrCreateInstance(el).show();
        });
      },
    },
  }).mount("#trasy-app");
})();
