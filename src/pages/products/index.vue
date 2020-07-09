<template>
  <q-page padding>
    <!-- content -->
    <div class="row">
      <div class="col-12 q-pb-md">
        <q-breadcrumbs class="text-grey">
          <q-breadcrumbs-el label="Home" to="/home" />
          <q-breadcrumbs-el :label="productName" />
        </q-breadcrumbs>
      </div>
      <div class="col-xs-12 col-md-6">
        <div class="q-pb-xs">
          <q-img
            src="https://cdn.shopify.com/s/files/1/1246/0173/products/ASSC_USMail_09_1024x1024.jpg?v=1590850075"
            :ratio="1"
          />
        </div>
        <div class="row q-col-gutter-xs">
          <div class="col-4">
            <q-img
              src="https://cdn.shopify.com/s/files/1/1246/0173/products/ASSC_USMail_09_grande.jpg?v=1590850075"
              :ratio="1"
            />
          </div>
          <div class="col-4">
            <q-img
              src="https://cdn.shopify.com/s/files/1/1246/0173/products/ASSC_USMail_11_grande.jpg?v=1590850075"
              :ratio="1"
            />
          </div>
          <div class="col-4">
            <q-img
              src="https://cdn.shopify.com/s/files/1/1246/0173/products/ASSC_USMail_12_grande.jpg?v=1590850075"
              :ratio="1"
            />
          </div>
          <div class="col-4">
            <q-img
              src="https://cdn.shopify.com/s/files/1/1246/0173/products/ASSC_USMail_10_grande.jpg?v=1590850075"
              :ratio="1"
            />
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-md-6" style="padding-left:20px">
        <div class="text-h4 q-py-xs">{{ productName }}</div>
        <div class="text-h5 q-py-sm">${{ price }} USD</div>
        <div>Size</div>
        <div class="q-pb-sm">
          <q-select
            v-model="model"
            outlined
            :options="options"
            :option-value="opt => opt === null ? null : opt.id"
            :option-label="opt => opt === null ? '- Null -' : opt.desc"
            emit-value
            map-options
            style="min-width: 250px; max-width: 300px"
          />
        </div>
        <div>Quantity</div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {
      productName: 'ASSC X USPS Work Navy Hoodie',
      price: '98.69',
      model: '',
      options: [
        { id: 1, desc: 'SMALL' },
        { id: 2, desc: 'MEDIUM' },
        { id: 3, desc: 'LARGE' }
      ]
    }
  },
  mounted() {
    this.model = this.options[0]
  },
  methods: {

  }
}
</script>
