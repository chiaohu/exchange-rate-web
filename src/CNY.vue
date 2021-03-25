<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="text-center">
        <i class="fas fa-dollar-sign fa-5x mt-5 mb-5"></i>
        <form>
          <div class="mb-3">
            <label for="exchangeMoney" class="form-label">金額(人民幣):</label>
            <input
              type="number"
              class="form-control"
              id="exchangeMoney"
              aria-describedby="number"
              v-model="exchangeMoney"
            />
          </div>
        </form>
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-3" v-for="item in data" :key="item.country">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title"> {{ item.country }}</h5>
                  <p class="card-text">
                    銀行買進: {{ item.buy }}
                  </p>
                  <p class="card-text">
                    銀行賣出: {{ item.sell }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-3" v-for="item in filterData" :key="item.country">
              <div class="card">
                <div class="card-body">
                  <p class="card-text">
                    可換: {{ item }} 元
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  data () {
    return {
      data: [],
      exchangeMoney: ''
    }
  },
  computed: {
    filterData: function () {
      const vm = this
      return vm.data.map(function (item) {
        return (vm.exchangeMoney * item.sell).toFixed(3)
      })
    }
  },
  components: {
    Navbar
  },
  created () {
    const vm = this
    this.$http.get('https://api.mocki.io/v1/1b4839a5')
      .then((response) => {
        vm.data = response.data
      })
  }
}
</script>
