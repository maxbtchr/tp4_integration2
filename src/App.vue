<template>
  <header>
    <nav-bar></nav-bar>
  </header>

  <RouterView
    :articles="articles"
    :tags="tags"
    @deleteWebsite="deleteWebsite"
    @addWebsite="addWebsite"
  />
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
  data() {
    return {
      articles: [],
      tags: [],
    };
  },
  created() {
    this.getArticles();
  },
  methods: {
    getArticles() {
      let url =
        "https://tp4-maxime-boucher-default-rtdb.firebaseio.com/websites.json";
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          let sites = [];
          let fetchedTags = [];
          for (const key in data) {
            const site = {
              id: key,
              date: data[key].date,
              url: data[key].url,
              name: data[key].name,
              desc: data[key].desc,
              tags: data[key].tags,
            };
            sites.push(site);
            fetchedTags.push(...data[key].tags);
          }
          this.tags = [...new Set(fetchedTags)];
          sites.sort().reverse();
          this.articles = sites;
        });
    },
    addWebsite(newSite) {
      fetch(
        "https://tp4-maxime-boucher-default-rtdb.firebaseio.com/websites.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newSite),
        }
      ).then(() => {
        this.getArticles();
        alert("Website added successfully!");
      });
    },
    deleteWebsite(id) {
      fetch(
        `https://tp4-maxime-boucher-default-rtdb.firebaseio.com/websites/${id}.json`,
        {
          method: "DELETE",
        }
      )
        .then(() => this.getArticles())
        .catch((err) => console.log(err));
    },
    filterTag() {},
  },
};
</script>

<style></style>
