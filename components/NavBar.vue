<template>
  <div>
    <nav class="relative w-full flex flex-wrap items-center justify-between py-0 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg navbar navbar-expand-xl navbar-light">
      <div class="container-fluid w-full flex flex-wrap items-center justify-between pl-6">
        <a class="flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mr-8 ml-2" href="#">
          <img
            src="http://imovelbr.assys.dev.br/assets/logo.png"
            style="height: 25px"
            alt="logo da empresa"
            loading="lazy">
        </a>
        <button
          class="navbar-toggler text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            class="w-6"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512">
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
          </svg>
        </button>
        <div id="navbarSupportedContent" class="collapse navbar-collapse flex-grow items-center">
          <!-- Left links -->
          <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
            <li class="nav-item p-2">
              <a
                class="navLink">
                <span class="material-icons mr-3" style="vertical-align: -6px">star</span>
                <span>NOVIDADES</span>
              </a>
            </li>
            <li class="nav-item p-2">
              <a class="navLink">
                <span class="material-icons mr-3" style="vertical-align: -6px">paid</span>
                <span>FINANCIAMENTO</span>
              </a>
            </li>
            <li class="nav-item p-2">
              <a class="navLink">
                <span class="material-icons mr-3" style="vertical-align: -6px">support_agent</span>
                <span>CENTRAL AJUDA</span>
              </a>
            </li>
          </ul>
          <!-- Left links -->
          <!-- Right elements -->
          <div class="flex items-center relative">
            <div class="bg-primary h-16 text-gray-100 pt-4 px-8 py-8">
              <span class="material-icons" style="vertical-align: -6px">flag</span>
              <span class="font-display text-lg">Anuncie</span>
            </div>
            <div class="bg-primary h-16 text-gray-100 pt-4 px-8 py-8">
              <span class="material-icons" style="vertical-align: -6px">account_circle</span>
              <span class="font-display text-lg">Login</span>
            </div>
          </div>
          <!-- Right elements -->
        </div>
        <!-- Collapsible wrapper -->
      </div>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
