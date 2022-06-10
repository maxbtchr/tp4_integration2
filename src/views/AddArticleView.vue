<template>
  <div class="container">
    <h2 class="text-center fs-1">New Website Form</h2>
    <p class="text-center fs-5">
      Add a new website to the reminder by completing the form below.
    </p>
    <form
      @submit.prevent="submitData"
      class="row justify-content-md-center mt-4"
    >
      <div class="col-lg-7 row mb-3" :class="{ invalid: websiteNameValidity }">
        <label for="websiteName" class="col-lg-4 col-form-label text-end"
          >Website Name</label
        >
        <div class="col-lg-7">
          <input
            class="form-control"
            id="websiteName"
            name="websiteName"
            type="text"
            placeholder="Enter the website name here"
            v-model="websiteName"
          />
          <span v-if="websiteNameValidity"
            >Please enter a name for the website. It must be shorter than 255
            characters.</span
          >
        </div>
      </div>
      <div class="col-lg-7 row mb-3">
        <label for="websiteAddress" class="col-lg-4 col-form-label text-end"
          >Website Address</label
        >
        <div class="col-lg-7">
          <input
            class="form-control"
            id="websiteAddress"
            name="websiteAddress"
            type="text"
            placeholder="Copy the website address here"
            v-model="websiteUrl"
          />
        </div>
      </div>
      <div class="col-lg-7 row mb-3">
        <label class="col-lg-4 col-form-label text-end" for="websiteDescription"
          >Website Description</label
        >
        <div class="col-lg-7">
          <textarea
            class="form-control"
            id="websiteDescription"
            name="websiteDescription"
            type="text"
            placeholder="Write a short description here"
            v-model="websiteDesc"
          ></textarea>
        </div>
      </div>
      <div class="col-lg-7 row mb-3">
        <label class="col-lg-4 col-form-label text-end" for="tags">Tags</label>
        <div class="col-lg-7">
          <input
            class="form-control"
            id="tags"
            name="tags"
            type="text"
            placeholder="Enter tag names to easily find your website"
            v-model="websiteTags"
          />
        </div>
      </div>
      <div class="d-flex justify-content-center mt-2">
        <button type="submit" class="btn btn-primary">Add Website</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  emits: ["addWebsite"],
  props: ["articles", "tags"],
  data() {
    return {
      websiteName: "",
      websiteUrl: "",
      websiteDesc: "",
      websiteTags: "",
      entryDate: "",
      websiteNameValidity: false,
      formIsValid: true,
    };
  },
  methods: {
    validateForm() {
      this.formIsValid = true;
      this.websiteNameValidity = false;

      if (this.websiteName.length === 0 || this.websiteName.length > 255) {
        this.websiteNameValidity = true;
        this.formIsValid = false;
      }
    },
    submitData() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      let tags = this.websiteTags.split(" ");
      let cleanTags = tags.filter((tag) => tag !== "");

      this.getDate,
        this.$emit("addWebsite", {
          name: this.websiteName,
          url: this.websiteUrl,
          desc: this.websiteDesc,
          tags: cleanTags,
          date: this.entryDate,
        });
    },
  },
  computed: {
    getDate() {
      let now = new Date();
      let currentTime = now.toLocaleTimeString("en-US", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
      return (this.entryDate = currentTime);
    },
  },
};
</script>

<style scoped>
.invalid input {
  border-color: red;
}

.invalid label {
  color: red;
}
</style>
