module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/_variables";
          @import "@/assets/scss/_functions";
          @import "@/assets/scss/_mixins";
          @import "@/assets/scss/reset.scss";
          @import "@/assets/scss/main.scss";

            `,
      },
    },
  },
};
