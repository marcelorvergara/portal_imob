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
              <div class="mt-6 w-40 inline-block">
                <div class="flex">
                  <div class="mb-3 xl:w-96 text-left">
                    <label for="oQue" class="text-white">O que você deseja</label>
                    <select
                      id="oQue"
                      class="bg-primary form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-white bg-clip-padding bg-no-repeat rounded transition ease-in-out m-0"
                      aria-label="Selecione o que deseja">
                      <option selected value="1" class="bg-white text-gray-600">
                        Alugar
                      </option>
                      <option value="2" class="bg-white text-gray-600">
                        Comprar
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="mt-6 w-40 inline-block">
                <div class="flex">
                  <div class="mb-3 xl:w-96 text-left">
                    <label for="tipo" class="text-white">Tipo de imóvel </label>
                    <select
                      id="tipo"
                      class="bg-primary form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-white bg-clip-padding bg-no-repeat rounded transition ease-in-out m-0"
                      aria-label="Default select example">
                      <option value="1" class="bg-white text-gray-600">
                        Apartamento
                      </option>
                      <option value="2" class="bg-white text-gray-600">
                        Casa
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="mt-6 w-40 inline-block">
                <div class="flex">
                  <div class="mb-3 xl:w-96 text-left">
                    <label for="onde" class="text-white">Onde</label>
                    <select
                      id="onde"
                      class="bg-primary form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-white bg-clip-padding bg-no-repeat rounded transition ease-in-out m-0"
                      aria-label="Default select example">
                      <option value="1" class="bg-white text-gray-600">
                        Alugar
                      </option>
                      <option value="2" class="bg-white text-gray-600">
                        Comprar
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="mt-6 w-96 inline-block">
                <div class="flex">
                  <div class="mb-3 xl:w-96 text-left">
                    <label for="caracteristicas" class="text-white">Características</label>
                    <div class="inputWithButton">
                      <input
                        id="caracteristicas"
                        type="text"
                        class="form-control appearance-none block w-full px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border-2 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                        placeholder="Endereço ou características">
                      <button>
                        <span class="button1 material-icons" style="vertical-align: -6px; color: #0069a9;">tune</span>
                      </button>
                      <button class="button2">
                        <span class="button2 material-icons" style="vertical-align: -6px; color: white">search</span>
                      </button>
                    </div>
                  </div>
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
.inputWithButton{
  position: relative;
  height: 100px;
  width: 380px;
}

.inputWithButton input {
  width: 100%;
  padding-right: 60px;
}

.inputWithButton .button1{
  position: absolute;
  right: 11px;
  top: 5px;
  margin-right: 35px;
  padding-left: 4px;
  background: white;
  border: solid 1px lightgray;
}

.inputWithButton .button2{
  position: absolute;
  right: 1px;
  top: 3px;
  margin-right: 5px;
  padding-left: 4px;
  background: #0069a9;
}

</style>
