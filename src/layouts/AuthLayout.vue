<template>
  <div>
    <q-layout view="lHh lpr lFf">
      <div class="row">
        <div class="col-12 col-md-7 col-lg-7">
          <q-page-container>
            <router-view />
          </q-page-container>
        </div>
        <div class="col-12 col-md-5 col-lg-5" v-if="$q.platform.is.desktop">
          <q-img
            src="https://cdn.pixabay.com/photo/2020/08/03/09/39/medical-5459630_960_720.png"
            height="100%"
          />
        </div>
      </div>
    </q-layout>
  </div>
</template>
