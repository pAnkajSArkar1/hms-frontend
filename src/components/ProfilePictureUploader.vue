<template>
  <div>
    <q-avatar size="150px">
      <div class="profile-img-avatar full-width">
        <img :src="authUser.avatar_3x.url" class="full-width" />
        <div v-show="loading" class="spinner-loader">
          <q-spinner color="primary" size="2rem" />
        </div>
        <div class="action-btn full-width">
          <div class="col">
            <q-btn
              no-caps
              align="right"
              class="action-btn-input border-right no-border-radius full-width full-height q-pa-xs"
              @click="$refs.files.click()"
              :disable="loading"
              color="black"
              unelevated
              icon="publish"
            >
              <q-tooltip> Upload new profile picture </q-tooltip>
            </q-btn>
          </div>
          <div class="col">
            <q-btn
              no-caps
              align="left"
              class="action-btn-input no-border-radius full-width full-height q-pa-xs"
              @click="removePhoto()"
              :disable="loading || authUser.avatar == 1"
              color="black"
              unelevated
              icon="close"
            >
              <q-tooltip> Remove profile picture </q-tooltip>
            </q-btn>
          </div>
        </div>
      </div>
    </q-avatar>
    <input type="file" ref="files" style="display: none" @input="uploadPhoto" />
  </div>
</template>
