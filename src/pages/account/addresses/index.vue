<template>
  <q-page padding>
    <!-- content -->
    <div class="row">
      <div :class="['col-md-9','col-xs-12','text-h4']">
        My Account
      </div>
      <div :class="['col-1',$q.screen.lt.md ? 'q-py-sm':'q-pb-lg', ]">
        <q-btn unelevated class="btn-fixed-width" color="primary" label="Add a New Address" />
      </div>
      <div class="col-12" @click="toAccount">
        <span class="cursor-pointer">Return to Account Details</span>
      </div>
      <!-- <div class="col-12">
        <div class="row inline">
          <q-form class="q-gutter-md">

            <q-input v-model="text" class="col-auto" label="First Name" stack-label />

            <q-input
              v-model="email"
              class="col-auto"
              outlined
              label="Email"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type your Email']"
            />

          </q-form>
        </div>
      </div> -->
      <div :class="['col-12','col-md-6',$q.screen.lt.md ? 'q-py-sm':'q-py-lg' ]">
        <div class="text-h6">
          Your Addresses
        </div>
        <div v-for="item in addressList" :key="item.id" class="text-body1">
          <div class="text-weight-bolder q-my-sm">
            {{ $store.state.user.userInfo.userName }}{{ item.default? '(Default)': '' }}
          </div>
          <div id="defaultAddress" class="q-mb-lg">
            <div class="text-weight-light q-mb-xs"> {{ item.address1 }}</div>
            <div class="text-weight-light q-mb-xs"> {{ item.address2 }}</div>
            <div class="text-weight-light q-mb-xs"> {{ item.city }}</div>
            <div class="text-weight-light q-mb-xs"> {{ item.province }}</div>
            <div class="text-weight-light q-mb-xs"> {{ item.postalCode }}</div>
            <div class="text-weight-light q-mb-xs"> {{ item.country }}</div>
            <div class="text-weight-light q-mb-xs"> {{ item.phone }}</div>
          </div>
          <div>
            <span>Edit</span>  | <span>Delete</span>
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
      addressList: [{
        default: 1,
        address1: 'address1',
        address2: 'address2',
        city: 'city',
        province: 'province',
        postalCode: 'postalCode',
        country: 'country',
        phone: 'phone'
      },
      {
        default: 0,
        address1: 'address1',
        address2: 'address2',
        city: 'city',
        province: 'province',
        postalCode: 'postalCode',
        country: 'country',
        phone: 'phone'
      }],
      text: '',
      email: ''
    }
  },
  methods: {
    toAccount() {
      this.$router.push({ path: '/account' })
    }
  }
}
</script>

<style scoped>
.btn-fixed-width{
  width: 200px;
}
</style>
