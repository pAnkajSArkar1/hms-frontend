<template>
  <QCreateForm
    :useStore="useStore"
    class="q-pa-sm"
    title="Create Incident Report"
  >
    <h6 class="text-weight-medium q-ma-none">Business Details</h6>
    <q-separator />

    <!-- Business Details -->
    <div class="row q-col-gutter-md q-pt-md">
      <div class="col-12 col-md-4 col-lg-4">
        <q-input
          outlined
          dense
          label="Business Name"
          v-model="formData.businessname"
          :rules="[(val) => (val && val.length) || 'Please enter businessname']"
          :error-message="$getValidationErrors('businessname')"
          :error="$hasValidationErrors('businessname')"
        />
      </div>

      <div class="col-12 col-md-4 col-lg-4">
        <q-select
          outlined
          dense
          label="Branch"
          v-model="formData.branch"
          :options="allbranch"
          :rules="[(val) => (val && val.length) || 'Please enter branch']"
          :error-message="$getValidationErrors('branch')"
          :error="$hasValidationErrors('branch')"
        />
      </div>

      <div class="col-12 col-md-4 col-lg-4">
        <q-input
          outlined
          dense
          type="number"
          label="Contact Number"
          v-model="formData.contactnumber"
          :rules="[
            (val) => (val && val.length) || 'Please enter contactnumber',
          ]"
          :error-message="$getValidationErrors('contactnumber')"
          :error="$hasValidationErrors('contactnumber')"
        />
      </div>

      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          outlined
          dense
          label="Address"
          v-model="formData.address"
          :rules="[(val) => (val && val.length) || 'Please enter address']"
          :error-message="$getValidationErrors('address')"
          :error="$hasValidationErrors('address')"
        />
      </div>

      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          outlined
          dense
          type="number"
          label="Incident/Accident Number"
          v-model="formData.incidentnumber"
          :rules="[
            (val) => (val && val.length) || 'Please enter incidentnumber',
          ]"
          :error-message="$getValidationErrors('incidentnumber')"
          :error="$hasValidationErrors('incidentnumber')"
        />
      </div>
    </div>

    <!-- Incident Logging Person Details -->
    <h6 class="text-weight-medium q-ma-none">
      Incident Logging Person Details
    </h6>
    <q-separator />

    <div class="row q-col-gutter-md q-pt-md">
      <div class="col-12 col-md-3 col-lg-3">
        <q-input
          outlined
          dense
          label="Person Name"
          v-model="formData.personname"
          :rules="[(val) => (val && val.length) || 'Please enter personname']"
          :error-message="$getValidationErrors('personname')"
          :error="$hasValidationErrors('personname')"
        />
      </div>
      <div class="col-12 col-md-3 col-lg-3">
        <q-input
          outlined
          dense
          label="Designation"
          v-model="formData.desig"
          :rules="[(val) => (val && val.length) || 'Please enter desig']"
          :error-message="$getValidationErrors('desig')"
          :error="$hasValidationErrors('desig')"
        />
      </div>
      <div class="col-12 col-md-3 col-lg-3">
        <q-input
          outlined
          dense
          type="number"
          label="Contact Number"
          v-model="formData.contactnumber"
          :rules="[
            (val) => (val && val.length) || 'Please enter contactnumber',
          ]"
          :error-message="$getValidationErrors('contactnumber')"
          :error="$hasValidationErrors('contactnumber')"
        />
      </div>
      <div class="col-12 col-md-3 col-lg-3">
        <q-input
          outlined
          dense
          label="Email Address"
          v-model="formData.email"
          :rules="[(val) => (val && val.length) || 'Please enter email']"
          :error-message="$getValidationErrors('email')"
          :error="$hasValidationErrors('email')"
        />
      </div>
    </div>

    <!-- Incident/Accident Time and Place -->
    <h6 class="text-weight-medium q-ma-none">
      Incident/Accident Time and Place
    </h6>
    <q-separator />

    <div class="row q-col-gutter-md q-pt-md">
      <div class="col-12 col-md-6 col-lg-6">
        <q-select
          outlined
          dense
          label="Incident Type"
          v-model="formData.incidenttype"
          :options="AllIncidentType"
          :rules="[(val) => (val && val.length) || 'Please enter incidenttype']"
          :error-message="$getValidationErrors('incident type')"
          :error="$hasValidationErrors('incident type')"
        />
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          outlined
          dense
          label="Place of incident"
          v-model="formData.placeofincident"
          :rules="[
            (val) => (val && val.length) || 'Please enter placeofincident',
          ]"
          :error-message="$getValidationErrors('placeofincident')"
          :error="$hasValidationErrors('placeofincident')"
        />
      </div>
    </div>
    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-3 col-lg-3">
        <q-input
          outlined
          dense
          readonly
          label="Date of incident"
          v-model="dateofincident"
          mask="date"
          :rules="[
            (val) => (val && val.length) || 'Please enter dateofincident',
          ]"
          :error-message="$getValidationErrors('dateofincident')"
          :error="$hasValidationErrors('dateofincident')"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="dateofincident">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <div class="col-12 col-md-3 col-lg-3">
        <q-input
          outlined
          dense
          readonly
          label="Time of incident"
          v-model="timeofincident"
          mask="time"
          :rules="[
            (val) => (val && val.length) || 'Please enter timeofincident',
          ]"
          :error-message="$getValidationErrors('timeofincident')"
          :error="$hasValidationErrors('timeofincident')"
        >
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-time v-model="timeofincident">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          outlined
          dense
          type="number"
          label="No Of Employees Involved"
          v-model="formData.numofemp"
          :rules="[(val) => (val && val.length) || 'Please enter numofemp']"
          :error-message="$getValidationErrors('numofemp')"
          :error="$hasValidationErrors('numofemp')"
        />
      </div>
    </div>
    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-6 col-lg-6">
        <!-- dynamic field -->
        <div class="q-pb-xs" v-for="key in field_no" :key="key">
          <q-input
            dense
            outlined
            label="Name Of The Employees"
            v-model="formData.nameofemp['dynamic-field-' + key]"
            :id="key"
            :rules="[
              (val) => (val && val.length) || 'Please enter name of employee',
            ]"
            :error-message="$getValidationErrors('nameofemp')"
            :error="$hasValidationErrors('nameofemp')"
          />
        </div>
        <q-card-actions class="flex justify-between q-pt-none">
          <!-- Add row button -->
          <div>
            <q-btn class="addrow" color="primary" @click="add">Add Row</q-btn>
          </div>
          <!-- Remove row button -->
          <div>
            <q-btn class="deleterow" color="primary" @click="remove"
              >Remove Row</q-btn
            >
          </div>
        </q-card-actions>
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          outlined
          dense
          label="Department"
          v-model="formData.dept"
          :rules="[(val) => (val && val.length) || 'Please enter dept']"
          :error-message="$getValidationErrors('dept')"
          :error="$hasValidationErrors('dept')"
        />
        <q-input
          outlined
          dense
          label="Manager"
          v-model="formData.manager"
          :rules="[(val) => (val && val.length) || 'Please enter manager']"
          :error-message="$getValidationErrors('manager')"
          :error="$hasValidationErrors('manager')"
        />
      </div>
    </div>
    <!-- Incident Details -->
    <h6 class="text-weight-medium q-ma-none">Incident Details</h6>
    <q-separator />

    <div class="row q-col-gutter-md q-pt-md">
      <div class="col-12 col-md-4 col-lg-4">
        <q-input
          outlined
          dense
          label="Cause of Injury"
          autogrow
          type="textarea"
          v-model="formData.causeofinjury"
          :rules="[
            (val) => (val && val.length) || 'Please enter causeofinjury',
          ]"
          :error-message="$getValidationErrors('causeofinjury')"
          :error="$hasValidationErrors('causeofinjury')"
        />
      </div>
      <div class="col-12 col-md-4 col-lg-4">
        <q-input
          outlined
          dense
          label="Nature of Injury"
          v-model="formData.natureofinjury"
          :rules="[
            (val) => (val && val.length) || 'Please enter natureofinjury',
          ]"
          :error-message="$getValidationErrors('natureofinjury')"
          :error="$hasValidationErrors('natureofinjury')"
        />
      </div>
      <div class="col-12 col-md-4 col-lg-4">
        <q-input
          outlined
          dense
          label="Root Cause"
          v-model="formData.rootcause"
          :rules="[(val) => (val && val.length) || 'Please enter rootcause']"
          :error-message="$getValidationErrors('rootcause')"
          :error="$hasValidationErrors('rootcause')"
        />
      </div>
    </div>
    <!-- Losses -->
    <h6 class="text-weight-medium q-ma-none">Losses</h6>
    <q-separator />

    <div class="row q-col-gutter-md q-pt-md">
      <!-- days lost(from)  -->
      <div class="col-12 col-md-4 col-lg-4">
        <q-input
          outlined
          dense
          readonly
          label="Working days lost(from)"
          v-model="dayslostfrom"
          mask="date"
          :rules="[(val) => (val && val.length) || 'Please enter dayslostfrom']"
          :error-message="$getValidationErrors('dayslostfrom')"
          :error="$hasValidationErrors('dayslostfrom')"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="dayslostfrom">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <!-- days lost(to) -->
      <div class="col-12 col-md-4 col-lg-4">
        <q-input
          outlined
          dense
          readonly
          label="Working days lost(to)"
          v-model="dayslostto"
          mask="date"
          :rules="[(val) => (val && val.length) || 'Please enter dayslostto']"
          :error-message="$getValidationErrors('dayslostto')"
          :error="$hasValidationErrors('dayslostto')"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="dayslostto">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <div class="col-12 col-md-4 col-lg-4">
        <q-input
          outlined
          dense
          label="Days lost"
          v-model="formData.dayslost"
          :rules="[(val) => (val && val.length) || 'Please enter dayslost']"
          :error-message="$getValidationErrors('dayslost')"
          :error="$hasValidationErrors('dayslost')"
        />
      </div>
    </div>

    <!-- uploader -->
    <h3 class="text-weight-medium q-ma-none">
      Please Upload Incident Related Documents
    </h3>
    <q-separator />

    <div class="row q-col-gutter-md q-pt-md">
      <div class="col-12 col-lg-3 col-md-3">
        <q-uploader
          style="width: 100%"
          label="ID/Passport"
          multiple
          no-thumbnails
        />
      </div>
      <div class="col-12 col-lg-3 col-md-3">
        <q-uploader
          label=" Doctors Certificate"
          multiple
          style="width: 100%"
          no-thumbnails
        />
      </div>
      <div class="col-12 col-lg-3 col-md-3">
        <q-uploader
          style="width: 100%"
          label=" Hospital Certificate"
          multiple
          no-thumbnails
        />
      </div>
      <div class="col-12 col-lg-3 col-md-3">
        <q-uploader
          style="width: 100%"
          label="Claim Receipts"
          multiple
          no-thumbnails
        />
      </div>
    </div>
  </QCreateForm>
</template>

<script>
import { reactive, ref } from "vue";
import { storeToRefs } from "pinia";
export default {
  name: "CreateIncident",
  props: {
    useStore: null, // store path
  },
  setup(props) {
    const { useStore } = reactive(props);
    const { formData } = storeToRefs(useStore);

    return {
      formData,
      branch: ref(null),
      allbranch: ["Delhi", "Kolkata"],
      incidenttype: ref(null),
      AllIncidentType: ["Electrocution", "Burns"],
      dateofincident: ref(null),
      timeofincident: ref(null),
      dayslostfrom: ref(null),
      dayslostto: ref(null),
      nameofemp: {},
    };
  },
  data: function () {
    return {
      field_no: 1,
    };
  },
  methods: {
    add: function () {
      this.field_no++;
    },
    remove: function () {
      this.field_no--;
    },
  },
};
</script>

<style>
.addrow {
  width: 100px;
}
.deleterow {
  width: 120px;
}
</style>
