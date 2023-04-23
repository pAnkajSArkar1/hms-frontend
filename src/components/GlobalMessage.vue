<template>
  <!-- <q-page></q-page> -->
  <!-- <div class="card">
    <h2>{{ data.subject }}</h2>
    <p>{{ data.message }}</p>
  </div> -->

  <div class="card container q-pt-md">
    <q-card flat bordered>
      <q-card-section>
        <div class="row">
          <div class="col-6 sender text-weight-bolder">
            {{ data.message_by_user_details.name }}
          </div>
          <div class="col-6 flex justify-end">
            {{ $dateConvert.format(data.created_at) }}
            <!-- {{ data.created_at }} -->
          </div>
        </div>
        <div class="subject text-weight-bold">
          {{ data.subject }}
        </div>
        <div class="message text-weight-medium">
          {{ data.message }}
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { dateConvert } from "src/boot/dateConvert";
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.sender {
  font-size: 21px;
  font-family: inherit;
  line-height: 1.1;
  color: inherit;
}
.subject {
  font-size: 18px;
  font-family: inherit;
  line-height: 1.1;
  color: inherit;
  margin: 0.67em 0;
}
.message {
  font-size: 16px;
  font-family: inherit;
  line-height: 1.1;
  color: inherit;
  margin: 0.67em 0;
}
</style>
