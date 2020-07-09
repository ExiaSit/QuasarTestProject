<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          v-if="$q.screen.lt.md"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>
        <div v-if="!$q.screen.xs">
          <!-- <router-link  :to="{ path: '/account/login' }"> -->
          <q-btn v-if="!$store.state.user.isLogin" to="/account/login" flat color="primary" text-color="white" label="Login or Create account" />
          <!-- </router-link> -->
          <div v-else>
            <!-- <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar.png">
            </q-avatar> -->
            <q-btn to="/account" flat color="primary" text-color="white" label="My Account" />
            <q-btn flat color="primary" text-color="white" label="Log Out" @click="logOut()" />
          </div>
        </div>
        <div :class="[$q.screen.xs ? 'q-px-xs' : 'q-px-lg']">
          <q-btn flat color="white" to="/cart" text-color="white" label="Cart" icon="icon-gouwuchekong" />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="$q.screen.lt.md"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container :style="$q.screen.gt.md?'padding-left:20%;padding-right:20%':''">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Docs',
          caption: 'quasar.dev',
          icon: 'school',
          link: 'https://quasar.dev'
        },
        {
          title: 'Github',
          caption: 'github.com/quasarframework',
          icon: 'code',
          link: 'https://github.com/quasarframework'
        },
        {
          title: 'Discord Chat Channel',
          caption: 'chat.quasar.dev',
          icon: 'chat',
          link: 'https://chat.quasar.dev'
        },
        {
          title: 'Forum',
          caption: 'forum.quasar.dev',
          icon: 'record_voice_over',
          link: 'https://forum.quasar.dev'
        },
        {
          title: 'Twitter',
          caption: '@quasarframework',
          icon: 'rss_feed',
          link: 'https://twitter.quasar.dev'
        },
        {
          title: 'Facebook',
          caption: '@QuasarFramework',
          icon: 'public',
          link: 'https://facebook.quasar.dev'
        },
        {
          title: 'Quasar Awesome',
          caption: 'Community Quasar projects',
          icon: 'favorite',
          link: 'https://awesome.quasar.dev'
        }
      ]
    }
  },

  beforeCreate() {
    this.$store.commit('user/setUserInfo', { userName: 'zeyu peng', age: 18 })
    this.$store.commit('user/loginSuccess')
  },

  methods: {
    logOut() {
      this.$q.notify({
        message: '退出成功',
        timeout: 1000,
        position: 'center'
      })

      this.$store.commit('user/logOut')
    }
  }
}
</script>
