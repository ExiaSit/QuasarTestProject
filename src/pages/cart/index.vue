<template>
  <q-page padding>
    <!-- content -->
    <div class="row">
      <div :class="['col-12','text-h4']">
        Your Cart
      </div>
      <div :class="['col-12','col-md-6',$q.screen.lt.md ? 'q-py-sm':'q-py-lg' ]">
        <div class="text-body1">
          <div v-if="cartList === [] || cartList.length ===0">
            <div>Your cart is currently empty.</div>
            <div>Continue browsing here.</div>
          </div>
        </div>
      </div>
      <!-- <div :class="['col-12','col-md-5',$q.screen.lt.md ? 'q-py-sm':'q-py-lg','offset-md-0', 'offset-xs-1' ]">
        <div class="text-h6">
          Account Details
        </div>
        <div class="text-body1">
          <div class="text-weight-medium q-mb-sm">
            {{ $store.state.user.userInfo.userName }}
          </div>
          <div id="defaultAddress">
            <div class="text-weight-light q-mb-xs"> {{ defaultAddress.address1 }}</div>
            <div class="text-weight-light q-mb-xs"> {{ defaultAddress.address2 }}</div>
            <div class="text-weight-light q-mb-xs"> {{ defaultAddress.city }}</div>
            <div class="text-weight-light q-mb-xs"> {{ defaultAddress.province }}</div>
            <div class="text-weight-light q-mb-xs"> {{ defaultAddress.postalCode }}</div>
            <div class="text-weight-light q-mb-xs"> {{ defaultAddress.country }}</div>
            <div class="text-weight-light q-mb-xs"> {{ defaultAddress.phone }}</div>
          </div>
          <div @click="toAddress">
            <span class="cursor-pointer">View Addresses({{ addressCount }})</span>
          </div>
        </div>
      </div> -->

    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {
      defaultAddress: {
        address1: 'address1',
        address2: 'address2',
        city: 'city',
        province: 'province',
        postalCode: 'postalCode',
        country: 'country',
        phone: 'phone'
      },
      cartList: [],
      addressCount: 2
    }
  },
  methods: {
    toAddress() {
      this.$router.push({ path: '/account/addresses' })
    }
  }
}
</script>
