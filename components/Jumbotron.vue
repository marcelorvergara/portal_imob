<template>
  <div>
    <!-- Background image -->
    <div
      class="p-12 text-center relative overflow-hidden bg-repeat bg-cover object-cover h-96"
      :style="{'background-image': `url(${require('@/assets/img/jumbotron_bg.png')})`}">
      <div
        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
        style="background-color: rgba(0, 0, 0, 0.0)">
        <div class="flex justify-center items-center h-full">
          <div class="block">
            <div>
              <h2>
                Você buscou, encontrou, curtiu!
              </h2>
              <h3>
                O melhor lugar para encontrar o seu imóvel é na <strong>IMOVEL.BR</strong>
              </h3>
            </div>
            <div>
              <div class="mt-6 w-52 inline-block">
                <div class="dropdown relative">
                  <a
                    id="dropdownOQueDeseja"
                    class="dropdown-toggle p-2.5 bg-primary text-white leading-tight rounded shadow-md hover:bg-white hover:text-gray-600 hover:shadow-lg focus:bg-primary focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-white active:text-gray-600 transition duration-150 ease-in-out flex items-center whitespace-nowrap"
                    href="#"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    O que você deseja?
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="caret-down"
                      class="w-2 ml-4"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512">
                      <path
                        fill="currentColor"
                        d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
                    </svg>
                  </a>
                  <ul
                    class="w-52 dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none"
                    aria-labelledby="dropdownOQueDeseja">
                    <li>
                      <a
                        class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                        href="#">Alugar</a>
                    </li>
                    <li>
                      <a
                        class=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                        href="#">Comprar</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="mt-6 w-52 inline-block">
                <div class="dropdown relative">
                  <a
                    id="dropdownTipo"
                    class="dropdown-toggle px-6 py-2.5 bg-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0    active:bg-blue-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex items-center whitespace-nowrap"
                    href="#"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Tipo de imóvel
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="caret-down"
                      class="w-2 ml-14"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512">
                      <path
                        fill="currentColor"
                        d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
                    </svg>
                  </a>
                  <ul
                    class=" dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none"
                    aria-labelledby="dropdownTipo">
                    <li>
                      <a
                        class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                        href="#">Apartamento</a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                        href="#">Casa</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <!-- Background image -->
  </div>
</template>

<script>
export default {
  name: 'Jumbotron'
}
</script>

<style scoped>

</style>
