<template>
  <q-page padding>
    <!-- content -->
    <div class="row justify-center q-pa-md">
      <div class="row q-col-gutter-lg">
        <div v-for="(item, index) in list" :key="index" class=" col-sm-3 col-xs-6 q-pt-md ">
          <q-card class="my-card cursor-pointer">
            <img :src="item.url">

            <q-list>
              <q-item clickable>
                <q-item-section>
                  <q-item-label class="text-weight-border text-center">{{ item.name }}</q-item-label>
                  <q-item-label class="text-Caption text-weight-light text-center">${{ item.price }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          url:
            'https://cdn.shopify.com/s/files/1/1246/0173/products/ASSC_USMail_09_grande.jpg?v=1590850075',
          name: 'assc-x-usps-work-navy-hoodie',
          price: 24.01
        },
        {
          url:
            'https://cdn.shopify.com/s/files/1/1246/0173/products/ASSC_USMail_09_grande.jpg?v=1590850075',
          name: 'assc-x-usps-work-navy-hoodie',
          price: 24.01
        },
        {
          url:
            'https://cdn.shopify.com/s/files/1/1246/0173/products/ASSC_USMail_09_grande.jpg?v=1590850075',
          name: 'assc-x-usps-work-navy-hoodie',
          price: 24.01
        },
        {
          url:
            'https://cdn.shopify.com/s/files/1/1246/0173/products/ASSC_USMail_09_grande.jpg?v=1590850075',
          name: 'assc-x-usps-work-navy-hoodie',
          price: 24.01
        },
        {
          url:
            'https://cdn.shopify.com/s/files/1/1246/0173/products/ASSC_USMail_09_grande.jpg?v=1590850075',
          name: 'assc-x-usps-work-navy-hoodie',
          price: 24.01
        },
        {
          url:
            'https://cdn.shopify.com/s/files/1/1246/0173/products/ASSC_USMail_09_grande.jpg?v=1590850075',
          name: 'assc-x-usps-work-navy-hoodie',
          price: 24.01
        }
      ]
    }
  }
}
</script>
