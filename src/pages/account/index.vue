<template>
  <q-page padding>
    <!-- content -->
    <div class="row">
      <div :class="['col-10','text-h4','offset-md-2','offset-xs-1']">
        My Account
      </div>
      <div :class="['col-11','col-md-5',$q.screen.lt.md ? 'q-py-sm':'q-py-lg','offset-md-2', 'offset-xs-1' ]">
        <div class="text-h6">
          Order history
        </div>
        <div class="text-body1">
          <div v-if="orderList === [] || orderList.length ===0">
            You haven't placed any orders yet.
          </div>
        </div>
      </div>
      <div :class="['col-12','col-md-5',$q.screen.lt.md ? 'q-py-sm':'q-py-lg','offset-md-0', 'offset-xs-1' ]">
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
      </div>

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
      orderList: [],
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
