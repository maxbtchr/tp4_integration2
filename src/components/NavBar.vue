<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
    <div class="container">
      <h1 class="fs-2">
        <RouterLink class="nav-link link-light" to="/"
          >Website reminder</RouterLink
        >
      </h1>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarColor02"
        aria-controls="navbarColor02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink class="nav-link link-light" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link link-light" to="/add"
              >Add Website</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
