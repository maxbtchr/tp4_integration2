<template>
  <section
    class="row justify-content-center"
    v-if="searchValue || checkedTags.length > 0"
  >
    <article
      class="my-4 col-sm-12 col-md-10 col-xl-6"
      v-for="(filteredArticle, index) in filteredArticles"
      :key="index"
    >
      <div class="card">
        <h3 class="card-header fs-5 text-center">
          Added on: {{ filteredArticle.date }}
        </h3>
        <div class="card-body">
          <div>
            <h3 class="card-title text-center">
              <a class="text-decoration-none" :href="filteredArticle.url">{{
                filteredArticle.name
              }}</a>
            </h3>
            <p class="card-text text-center">{{ filteredArticle.desc }}</p>
            <div class="d-flex justify-content-center mb-4 flex-wrap">
              <div v-for="(tag, index) in filteredArticle.tags">
                <button class="btn btn-primary mx-3">{{ tag }}</button>
              </div>
            </div>
            <div class="d-flex justify-content-end">
              <button class="btn btn-danger" @click="deleteWebsite(article.id)">
                Delete article
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>

  <section class="row justify-content-center" v-else>
    <article
      class="my-4 col-sm-12 col-md-10 col-xl-6"
      v-for="(article, index) in articles"
      :key="index"
    >
      <div class="card">
        <h3 class="card-header fs-5 text-center">
          Added on: {{ article.date }}
        </h3>
        <div class="card-body">
          <div>
            <h3 class="card-title text-center">
              <a class="text-decoration-none" :href="article.url">{{
                article.name
              }}</a>
            </h3>
            <p class="card-text text-center">{{ article.desc }}</p>
            <div class="d-flex justify-content-center mb-4 flex-wrap">
              <div v-for="(tag, index) in article.tags">
                <button class="btn btn-primary mx-3">{{ tag }}</button>
              </div>
            </div>
            <div class="d-flex justify-content-end">
              <button class="btn btn-danger" @click="deleteWebsite(article.id)">
                Delete article
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  emits: ["deleteWebsite"],
  props: ["articles", "searchValue", "tags", "checkedTags"],
  data() {
    return {
      filteredArticles: [],
    };
  },
  methods: {
    deleteWebsite(id) {
      this.$emit("deleteWebsite", id);
    },
    searchFilter() {
      const searchString = this.searchValue.toLowerCase();
      this.filteredArticles = [];
      let foundArticles = [];
      for (let i = 0; i < this.articles.length; i++) {
        this.articles[i].tags.filter((tag) => {
          if (
            tag.toLowerCase().includes(searchString) &&
            foundArticles.indexOf(this.articles[i]) == -1
          )
            foundArticles.push(this.articles[i]);
        });
      }
      this.filteredArticles = foundArticles;
    },
    searchTag() {
      const searchedTags = this.checkedTags;
      this.filteredArticles = [];
      let foundArticles = [];
      for (let i = 0; i < this.articles.length; i++) {
        if (
          searchedTags.every((r) => this.articles[i].tags.includes(r)) &&
          foundArticles.indexOf(this.articles[i]) == -1
        ) {
          foundArticles.push(this.articles[i]);
        }
      }
      this.filteredArticles = foundArticles;
    },
  },
  computed: {},
  watch: {
    searchValue(newVal, oldVal) {
      if (newVal != oldVal) this.searchFilter();
    },
    checkedTags(oldVal, newVal) {
      if (newVal != oldVal) this.searchTag();
    },
  },
};
</script>
