<template>
  <q-page padding>
    <!-- content -->
    <div :class="{'row':true ,'justify-center':$q.screen.xs}">
      <div class="col-sm-4 offset-sm-2 col-xs-12 ">
        <div class="text-h3 text-left q-pb-lg">Create Account</div>
        <q-form class="q-gutter-md" @submit="onSubmit" @reset="onReset">
          <q-input
            v-model="firstName"
            outlined
            label="First Name"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type your First Name']"
          />
          <q-input
            v-model="lastName"
            outlined
            label="Last Name"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type your Last Name']"
          />
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

          <q-input
            v-model="confirmPassword"
            outlined
            type="password"
            label="Confirm your password"
            lazy-rules
            :rules="[ val => val && val === password || 'Entered passwords differ!']"
          />
          <!-- <q-toggle v-model="accept" label="I accept the license and terms" /> -->
          <div>
            <q-btn label="Create" type="submit" color="primary" />
          </div>
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
      firstName: '',
      lastName: '',
      isPwd: true,
      email: null,
      password: null,
      confirmPassword: null
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
