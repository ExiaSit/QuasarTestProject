<template>
  <q-page padding>
    <!-- content -->
    <div :class="{'row':true ,'justify-center':$q.screen.xs}">
      <div class="col-sm-4 offset-sm-2 col-xs-12 ">
        <div class="text-h3 text-left q-pb-lg">Login</div>
        <q-form class="q-gutter-md" @submit="onSubmit" @reset="onReset">
          <q-input
            v-model="email"
            outlined
            label="Email"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type your Email']"
          />

          <q-input v-model="password" outlined :type="isPwd ? 'password' : 'text'" label="password">
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <q-btn flat color="primary" :no-caps="true" label="Forget your password?" size="md" :dense="true" />
          <!-- <q-toggle v-model="accept" label="I accept the license and terms" /> -->
          <div>
            <q-btn label="Sign In" type="submit" color="primary" />
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
          </div>
          <q-btn flat color="primary" :no-caps="true" label="Create account" size="md" :dense="true" />
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data () {
    return {
      isPwd: true,
      email: null,
      password: null
      // accept: false
    }
  },
  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.isPwd = null
      this.aemailge = null
    }
  }
}
</script>
