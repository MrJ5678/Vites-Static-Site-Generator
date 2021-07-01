const ourStorySidebar = [{ text: "Our Story", link: "/about/our-story" }]
module.exports = {
  title: "Vitepress demo",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about/" },
      { text: "Contact", link: "/contact" },
    ],
    sidebar: {
      "/about/": ourStorySidebar,
      "/contact": ourStorySidebar,
    },
  },
}
