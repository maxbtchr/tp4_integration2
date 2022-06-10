<template>
  <div class="container">
    <section class="mb-5">
      <h2 class="text-center fs-1">Saved Websites</h2>
      <p class="text-center fs-5">
        Select one or more tags to search for a website:
      </p>
      <div class="row justify-content-center mb-3">
        <div class="col-md-8 d-flex justify-content-around flex-wrap my-4">
          <div
            class="form-check form-check-inline"
            v-for="(tag, index) in tags"
            :key="index"
          >
            <input
              type="checkbox"
              class="btn-check"
              autocomplete="off"
              :name="tag"
              :id="tag"
              :value="tag"
              :disabled="isCheckDisabled"
              v-model="checkedTags"
            />
            <label class="btn btn-primary" :for="tag">{{ tag }}</label>
          </div>
        </div>
      </div>
      <form class="d-flex flex-column align-items-center">
        <label class="fs-5 mb-2" for="search">Or type in a tag here:</label>
        <div class="col-sm-6 col-md-4 col-lg-3">
          <input
            class="form-control"
            id="search"
            type="text"
            placeholder="Search a tag..."
            :disabled="isSearchDisabled"
            v-model="searchValue"
          />
        </div>
      </form>
    </section>
    <hr class="border-primary border-3 opacity-75 mb-4" />
    <ArticleEntry
      @deleteWebsite="deleteWebsite"
      :searchValue="searchValue"
      :articles="articles"
      :tags="tags"
      :checkedTags="checkedTags"
    ></ArticleEntry>
  </div>
</template>

<script>
import ArticleEntry from "@/components/ArticleEntry.vue";

export default {
  emits: ["deleteWebsite"],
  name: "Home",
  components: {
    ArticleEntry,
  },
  props: ["articles", "tags"],
  data() {
    return {
      searchValue: "",
      filteredTags: [],
      checkedTags: [],
      isCheckDisabled: false,
      isSearchDisabled: false,
    };
  },
  watch: {
    searchValue(newVal, oldVal) {
      if (this.searchValue.length !== 0) this.isCheckDisabled = true;
      if (this.searchValue.length == 0) this.isCheckDisabled = false;
    },
    checkedTags(newVal, oldVal) {
      if (this.checkedTags.length !== 0) this.isSearchDisabled = true;
      if (this.checkedTags.length == 0) this.isSearchDisabled = false;
    },
  },
  methods: {
    deleteWebsite(id) {
      this.$emit("deleteWebsite", id);
    },
  },
};
</script>
