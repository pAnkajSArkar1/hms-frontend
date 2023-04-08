<template>
  <QEditForm :useStore="useStore" title="Edit Hospital">
    <div class="row q-mb-md q-col-gutter-md">
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          outlined
          v-model="formData.name"
          dense
          label="Hospital Name"
          :rules="[
            (val) => (val && val.length) || 'Please enter hospital name',
          ]"
          :error-message="$getValidationErrors('name')"
          :error="$hasValidationErrors('name')"
        >
        </q-input>
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-input outlined dense label="Address" v-model="formData.address" />
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-input outlined v-model="formData.street" dense label="Street" />
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          outlined
          v-model="formData.city"
          dense
          label="City"
          :rules="[(val) => (val && val.length) || 'Please enter City']"
          :error-message="$getValidationErrors('city')"
          :error="$hasValidationErrors('city')"
        />
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-select
          outlined
          dense
          clearable
          v-model="formData.country"
          :options="country_name"
          label="Select Country"
          :rules="[
            (val) => (val && val.length !== 0) || 'Please choose a country',
          ]"
          :error-message="$getValidationErrors('country_name')"
          :error="$hasValidationErrors('country_name')"
        />
      </div>

      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          outlined
          v-model="formData.company_email"
          dense
          label="Company Email"
          :rules="[
            (val) => (val && val.length) || 'Please enter Company Email',
          ]"
          :error-message="$getValidationErrors('company_email')"
          :error="$hasValidationErrors('company_email')"
        >
        </q-input>
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          label="Primary Contact"
          dense
          type="number"
          outlined
          v-model="formData.primary_contact"
          :error-message="$getValidationErrors('primary_contact')"
          :error="$hasValidationErrors('primary_contact')"
        />
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          label="Secondary Contact"
          dense
          outlined
          type="number"
          v-model="formData.secondary_contact"
        />
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <q-input
          outlined
          v-model="formData.postcode"
          dense
          label="Postcode"
          :rules="[
            (val) => (val && val.length) || 'Please enter your Postcode',
          ]"
          :error-message="$getValidationErrors('postcode')"
          :error="$hasValidationErrors('postcode')"
        />
      </div>
      <!-- <div class="col-12 col-md-6 col-lg-6">
        <q-field
          :error-message="$getValidationErrors('com_logo')"
          :error="$hasValidationErrors('com_logo')"
        >
          <UploaderFile
            v-model="formData.logo"
            label="Upload Company Logo"
            acceptFileType=".jpg, image/*"
            :privateData="false"
          /> -->
      <!-- <q-uploader
            label="Upload Company Logo"
            square
            flat
            bordered
            auto-upload
            max-files="1"
            class="full-width"
            accept=".jpg, image/*"
            :factory="factoryLogoUploader"
          /> -->
      <!-- </q-field>
      </div> -->
    </div>
  </QEditForm>
</template>

<script>
import { reactive } from "vue";
import { storeToRefs } from "pinia";
import { useCompanyStore } from "stores/company";
import { useMediaStore } from "stores/media";

export default {
  name: "EditCompany",
  props: {
    useStore: null, // store path
  },
  setup(props) {
    const { useStore } = reactive(props);
    const { formData, newData } = storeToRefs(useStore);
    // const { setNewItemLogo } = useStore;

    const mediaStore = useMediaStore();
    const { uploadItem } = mediaStore;

    const companyStore = useCompanyStore();
    const { setNewItemLogo } = companyStore;

    const factoryLogoUploader = (files) => {
      let uploadFormData = new FormData();
      uploadFormData.append("attachment_type", "image");
      uploadFormData.append("file", files[0]);
      return new Promise((resolve) => {
        uploadItem(uploadFormData)
          .then((res) => {
            setNewItemLogo({ id: res.data.media_id });
            resolve({ url: null });
          })
          .finally(() => {});
      });
    };

    return {
      roleOptons: [{ label: "Site Employee", value: "semployee" }],
      newData,
      formData,
      factoryLogoUploader,
      country_name: [
        "Afghanistan",

        "Aland Islands",

        "Albania",

        "Algeria",

        "American Samoa",

        "Andorra",

        "Angola",

        "Anguilla",

        "Antarctica",

        "Antigua and Barbuda",

        "Argentina",

        "Armenia",

        "Aruba",

        "Australia",

        "Austria",

        "Azerbaijan",

        "Bahamas",

        "Bahrain",

        "Bangladesh",

        "Barbados",

        "Belarus",

        "Belgium",

        "Belize",

        "Benin",

        "Bermuda",

        "Bhutan",

        "Bolivia",

        "Bonaire, Sint Eustatius and Saba",

        "Bosnia and Herzegovina",

        "Botswana",

        "Bouvet Island",

        "Brazil",

        "British Indian Ocean Territory",

        "Brunei Darussalam",

        "Bulgaria",

        "Burkina Faso",

        "Burundi",

        "Cambodia",

        "Cameroon",

        "Canada",

        "Cape Verde",

        "Cayman Islands",

        "Central African Republic",

        "Chad",

        "Chile",

        "China",

        "Christmas Island",

        "Cocos (Keeling) Islands",

        "Colombia",

        "Comoros",

        "Congo",

        "Congo, Democratic Republic of the Congo",

        "Cook Islands",

        "Costa Rica",

        "Cote D'Ivoire",

        "Croatia",

        "Cuba",

        "Curacao",

        "Cyprus",

        "Czech Republic",

        "Denmark",

        "Djibouti",

        "Dominica",

        "Dominican Republic",

        "Ecuador",

        "Egypt",

        "El Salvador",

        "Equatorial Guinea",

        "Eritrea",

        "Estonia",

        "Ethiopia",

        "Falkland Islands (Malvinas)",

        "Faroe Islands",

        "Fiji",

        "Finland",

        "France",

        "French Guiana",

        "French Polynesia",

        "French Southern Territories",

        "Gabon",

        "Gambia",

        "Georgia",

        "Germany",

        "Ghana",

        "Gibraltar",

        "Greece",

        "Greenland",

        "Grenada",

        "Guadeloupe",

        "Guam",

        "Guatemala",

        "Guernsey",

        "Guinea",

        "Guinea-Bissau",

        "Guyana",

        "Haiti",

        "Heard Island and Mcdonald Islands",

        "Holy See (Vatican City State)",

        "Honduras",

        "Hong Kong",

        "Hungary",

        "Iceland",

        "India",

        "Indonesia",

        "Iran",

        "Iraq",

        "Ireland",

        "Isle of Man",

        "Israel",

        "Italy",

        "Jamaica",

        "Japan",

        "Jersey",

        "Jordan",

        "Kazakhstan",

        "Kenya",

        "Kiribati",

        "North Korea",

        "South Korea",

        "Kosovo",

        "Kuwait",

        "Kyrgyzstan",

        "Lao People's Democratic Republic",

        "Latvia",

        "Lebanon",

        "Lesotho",

        "Liberia",

        "Libyan Arab Jamahiriya",

        "Liechtenstein",

        "Lithuania",

        "Luxembourg",

        "Macao",

        "Macedonia",

        "Madagascar",

        "Malawi",

        "Malaysia",

        "Maldives",

        "Mali",

        "Malta",

        "Marshall Islands",

        "Martinique",

        "Mauritania",

        "Mauritius",

        "Mayotte",

        "Mexico",

        "Micronesia",

        "Moldova",

        "Monaco",

        "Mongolia",

        "Montenegro",

        "Montserrat",

        "Morocco",

        "Mozambique",

        "Myanmar",

        "Namibia",

        "Nauru",

        "Nepal",

        "Netherlands",

        "Netherlands Antilles",

        "New Caledonia",

        "New Zealand",

        "Nicaragua",

        "Niger",

        "Nigeria",

        "Niue",

        "Norfolk Island",

        "Northern Mariana Islands",

        "Norway",

        "Oman",

        "Pakistan",

        "Palau",

        "Palestinian Territory, Occupied",

        "Panama",

        "Papua New Guinea",

        "Paraguay",

        "Peru",

        "Philippines",

        "Pitcairn",

        "Poland",

        "Portugal",

        "Puerto Rico",

        "Qatar",

        "Reunion",

        "Romania",

        "Russian Federation",

        "Rwanda",

        "Saint Barthelemy",

        "Saint Helena",

        "Saint Kitts and Nevis",

        "Saint Lucia",

        "Saint Martin",

        "Saint Pierre and Miquelon",

        "Saint Vincent and the Grenadines",

        "Samoa",

        "San Marino",

        "Sao Tome and Principe",

        "Saudi Arabia",

        "Senegal",

        "Serbia",

        "Serbia and Montenegro",

        "Seychelles",

        "Sierra Leone",

        "Singapore",

        "Sint Maarten",

        "Slovakia",

        "Slovenia",

        "Solomon Islands",

        "Somalia",

        "South Africa",

        "South Georgia and the South Sandwich Islands",

        "South Sudan",

        "Spain",

        "Sri Lanka",

        "Sudan",

        "Suriname",

        "Svalbard and Jan Mayen",

        "Swaziland",

        "Sweden",

        "Switzerland",

        "Syrian Arab Republic",

        "Taiwan, Province of China",

        "Tajikistan",

        "Tanzania",

        "Thailand",

        "Timor-Leste",

        "Togo",

        "Tokelau",

        "Tonga",

        "Trinidad and Tobago",

        "Tunisia",

        "Turkey",

        "Turkmenistan",

        "Turks and Caicos Islands",

        "Tuvalu",

        "Uganda",

        "Ukraine",

        "United Arab Emirates",

        "United Kingdom",

        "United States",

        "United States Minor Outlying Islands",

        "Uruguay",

        "Uzbekistan",

        "Vanuatu",

        "Venezuela",

        "Viet Nam",

        "Virgin Islands, British",

        "Virgin Islands, U.s.",

        "Wallis and Futuna",

        "Western Sahara",

        "Yemen",

        "Zambia",

        "Zimbabwe",
      ],
    };
  },
};
</script>
