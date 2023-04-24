<template>
  <q-page class="container">
    <div class="q-py-md">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-8 col-lg-8">
          <h1 class="main-heading">Global message</h1>
          <div>This message can be seen by everyone and cannot be edited.</div>
        </div>
        <div
          class="col-12 col-sm-12 col-md-4 col-lg-4 flex"
          :class="$q.platform.is.mobile ? 'justify-center' : 'justify-end'"
        >
          <q-img
            src="~assets/images/brodcast.jpg"
            spinner-color="white"
            :class="$q.platform.is.mobile ? '' : 'page-image'"
          />
        </div>
      </div>
      <q-form @submit="onSubmit">
        <div>
          <div class="q-pb-lg">
            <div class="q-pb-md">
              <h2 class="form-heading">Provide a Subject</h2>
              <div>Please provide a subject for your message below.</div>
            </div>
            <q-card flat bordered class="my-card">
              <q-card-section>
                <q-input
                  dense
                  outlined
                  placeholder="Subject"
                  v-model="globalStore.sendMessage.subject"
                  square
                  :error-message="$getValidationErrors('subject')"
                  :error="$hasValidationErrors('subject')"
                />
              </q-card-section>
            </q-card>
          </div>

          <div class="q-pb-lg">
            <div class="q-pb-md">
              <h2 class="form-heading">The message you want to send</h2>
              <div>Type the message you want to send to everyone below.</div>
            </div>
            <q-card flat bordered class="my-card">
              <q-card-section>
                <q-input
                  dense
                  type="textarea"
                  outlined
                  v-model="globalStore.sendMessage.message"
                  square
                  placeholder="Message"
                  :error-message="$getValidationErrors('message')"
                  :error="$hasValidationErrors('message')"
                />
              </q-card-section>
            </q-card>
          </div>

          <div class="flex justify-end q-pt-md">
            <q-btn type="primary" color="primary">Brodcast</q-btn>
          </div>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { getCurrentInstance, ref } from "vue";
import { useGlobalStore } from "stores/globalMessage/index";

export default {
  name: "DescriptionPage",
  setup() {
    const globalStore = useGlobalStore();
    const app = getCurrentInstance();
    const Qnotify = app.appContext.config.globalProperties.$Qnotify;

    const onSubmit = () => {
      globalStore
        .makeBrodcast()
        .then((response) => {
          Qnotify({
            message: response.data.message,
            type: "positive",
          });
        })
        .catch((error) => {
          let formatted_message = "";
          if (error.response.data.message) {
            formatted_message = error.response.data.message;
          } else {
            formatted_message = error.response.data.error;
          }

          Qnotify({
            message: formatted_message,
            type: "negative",
          });
        });
    };

    return {
      onSubmit,
      globalStore,
    };
  },
};
</script>

<style scoped>
.main-heading {
  font-size: 21px;
  font-family: inherit;
  font-weight: 700;
  line-height: 1.1;
  color: inherit;
  margin: 0.67em 0;
}
.form-heading {
  font-size: 18px;
  font-family: inherit;
  font-weight: 700;
  line-height: 1.1;
  color: inherit;
  margin: 0.67em 0;
}
.page-image {
  height: 150px;
  max-width: 150px;
}
</style>
