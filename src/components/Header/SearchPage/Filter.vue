<template>
  <q-page class="">
    <div>
      <div class="cursor-pointer q-pb-md">
        <div class="q-py-md text-weight-bold">Click here search on map</div>
        <q-card flat bordered class="my-card">
          <q-img src="~assets/svg/map.svg" spinner-color="white" />
        </q-card>
      </div>
      <div>
        <q-input rounded outlined v-model="text" dense placeholder="Search">
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>

      <div>
        <div class="q-pt-md text-weight-bold">Your Budget</div>
        <div>
          <q-range v-model="standard" :min="0" :max="50" color="green" />
        </div>
        <div class="row q-col-gutter-xl">
          <div class="col-6">
            <div class="q-pb-sm">
              <label for="" class="text-weight-medium">Min</label>
            </div>
            <q-input square dense outlined v-model="text" />
          </div>
          <div class="col-6">
            <div class="q-pb-sm">
              <label for="" class="text-weight-medium">Max</label>
            </div>
            <q-input square dense outlined v-model="text" placeholder="Max" />
          </div>
        </div>
      </div>
      <div class="q-py-md">
        <q-separator />
      </div>
      <seaction>
        <div class="q-pb-md text-weight-bold">Guest rating</div>
        <div class="q-gutter-y-md font-12">
          <div>
            <q-checkbox
              dense
              v-model="customModel"
              color="secondary"
              label="Exceptional (1899)"
              true-value="yes"
              false-value="no"
            />
          </div>
          <div>
            <q-checkbox
              dense
              v-model="customModel"
              color="secondary"
              label="8+Excellent (4103)"
              true-value="yes"
              false-value="no"
            />
          </div>
          <div>
            <q-checkbox
              dense
              v-model="customModel"
              color="secondary"
              label="7+Very good (5013)"
              true-value="yes"
              false-value="no"
            />
          </div>
          <div>
            <q-checkbox
              dense
              v-model="customModel"
              color="secondary"
              label="6+Good (5343)"
              true-value="yes"
              false-value="no"
            />
          </div>
        </div>
      </seaction>
      <div class="q-py-md">
        <q-separator />
      </div>
      <section>
        <div class="q-pb-md text-weight-bold">Distance to center</div>
        <div class="q-gutter-y-md font-12">
          <div>
            <q-checkbox
              dense
              v-model="customModel"
              color="secondary"
              label="Inside city center (1341)"
              true-value="yes"
              false-value="no"
            />
          </div>
          <div>
            <q-checkbox
              dense
              v-model="customModel"
              color="secondary"
              label="<2 km to center (1148)"
              true-value="yes"
              false-value="no"
            />
          </div>
          <div>
            <q-checkbox
              dense
              v-model="customModel"
              color="secondary"
              label="2-5 km to center (1187)"
              true-value="yes"
              false-value="no"
            />
          </div>
          <div>
            <q-checkbox
              dense
              v-model="customModel"
              color="secondary"
              label="5-10 km to center (946)"
              true-value="yes"
              false-value="no"
            />
          </div>
          <div>
            <q-checkbox
              dense
              v-model="customModel"
              color="secondary"
              label=">10 km to center (6024)"
              true-value="yes"
              false-value="no"
            />
          </div>
        </div>
      </section>
    </div>
  </q-page>
</template>

<script>
import { ref, onBeforeUnmount } from "vue";

export default {
  name: "FilterPage",
  components: {},
  setup() {
    return {
      standard: ref({
        min: 10,
        max: 35,
      }),
      customModel: ref("no"),
    };
  },
};
</script>
