<template>
  <q-layout view="lhh lpR lFf" class="red-10">
    <q-header>
      <q-toolbar style="background-color: #">
        <q-btn
          v-if="authUserStore?.authUser && authUserStore?.authUser.id"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <router-link to="/dashboard" class="text-white hyperlink">
            {{
              authUserStore?.authUser?.active_company
                ? authUserStore.authUser.active_company.name
                : "SAFE T TRANS"
            }}
          </router-link>
        </q-toolbar-title>

        <!-- v-if="
          authUserStore?.authUser &&
          authUserStore?.authUser?.user_role?.role?.code === 'sadmin'
        " -->
        <div
          class="col-4"
          v-if="
            authUserStore?.authUser &&
            authUserStore?.authUser?.user_role?.role?.code === 'sadmin'
          "
        >
          <!-- v-if="
          authUserStore?.authUser &&
          authUserStore?.authUser?.user_role?.role?.code === 'sadmin'
        " -->
          <QSearch
            v-if="
              authUserStore?.authUser &&
              authUserStore?.authUser?.user_role?.role?.code === 'sadmin'
            "
            label-color="dark-page"
            bg-color="grey-1"
            label="Hospital"
            v-model="authUserStore.authUser.active_company_id"
            :useStore="companyStore"
            optionValue="id"
            optionLabel="name"
            @update:modelValue="onCompanySelect"
          />
        </div>

        <div v-if="authUserStore?.authUser?.id">
          <q-btn-dropdown flat unelevated no-caps>
            <template v-slot:label>
              <q-chip size="10px" class="float-right q-px-sm">
                <q-avatar size="25px">
                  <img src="https://cdn.quasar.dev/img/avatar.png" />
                </q-avatar>
                {{ authUserStore?.authUserGetter?.name }}
              </q-chip>
            </template>

            <q-list style="min-width: 100px">
              <q-item clickable :to="{ name: 'profile' }">
                <q-item-section>Profile</q-item-section>
              </q-item>
              <q-separator />
              <span
                v-if="
                  authUserStore?.authUser &&
                  authUserStore?.authUser?.user_role?.role?.code === 'cadmin'
                "
              >
                <q-item clickable :to="{ name: 'companyProfile' }">
                  <q-item-section>Company Profile</q-item-section>
                </q-item>
              </span>
              <!-- <q-item clickable>
                <q-item-section>Membership Plan</q-item-section>
              </q-item> -->
              <q-separator />
              <q-item clickable @click="logout()">
                <q-item-section>Logout</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
        <div v-else>
          <router-link to="/" class="text-white hyperlink"> Login </router-link>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="authUserStore?.authUser && authUserStore?.authUser.id"
      v-model="leftDrawerOpen"
      style="background-color: #"
      :width="200"
      bordered
      show-if-above
      side="left"
      dark
    >
      <q-list
        dense
        dark
        v-if="authUserStore?.authUser?.active_company?.com_logo"
      >
        <q-item clickable to="/" key="dashboard" style="padding: 0">
          <q-item-section>
            <q-img
              :src="authUserStore?.authUser?.active_company?.com_logo?.url"
              spinner-color="white"
              style="height: auto; max-width: 300px"
            />
          </q-item-section>
        </q-item>
      </q-list>
      <EssentialLink :essentialLinks="essentialLinks" />
    </q-drawer>

    <q-page-container class="bg-primary">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, onMounted, computed } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { acl } from "boot/acl";
import { useAuthStore } from "stores/auth/index";
import { useCompanyStore } from "stores/company";
import { useQuasar } from "quasar";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const $q = useQuasar();
    const router = useRouter();

    const authUserStore = useAuthStore();
    const companyStore = useCompanyStore();

    const firstLoad = ref(true);

    const linksList = computed(() => [
      {
        title: "About Us",
        icon: "dashboard",
        link: "/dashboard",
        // show: acl.hasAccess("user.index"),
      },
      {
        title: "Hospitals",
        icon: "emergency",
        link: "/hospitals",
        show: acl.hasAccess("company.index"),
      },
      {
        title: "Department",
        icon: "corporate_fare",
        link: "/department",
        show: acl.hasAccess("company.index"),
      },
      {
        title: "Employee",
        icon: "group",
        show: true,
        childs: [
          {
            title: "Doctor",
            icon: "corporate_fare",
            link: "/doctor",
            show: acl.hasAccess("doctor.index"),
          },
          {
            title: "Nurse",
            icon: "corporate_fare",
            link: "/nurse",
            show: acl.hasAccess("company.index"),
          },
          {
            title: "Lab Scientist",
            icon: "corporate_fare",
            link: "/labscientist",
            show: acl.hasAccess("company.index"),
          },
          {
            title: "Pharmacists",
            icon: "corporate_fare",
            link: "/pharmacists",
            show: acl.hasAccess("company.index"),
          },
        ],
      },
      {
        title: "Medicine",
        icon: "healing",
        link: "/medicine",
        show: acl.hasAccess("company.index"),
      },
      {
        title: "Patient",
        icon: "personal_injury",
        link: "/patient",
        show: true,
      },
      {
        title: "Billing",
        icon: "receipt_long",
        show: true,
      },
      {
        title: "Blood Bank",
        icon: "bloodtype",
        show: true,
      },
      {
        title: "Ambulance",
        icon: "airport_shuttle",
        show: true,
      },

      // {
      //   title: "Task Management",
      //   icon: "today",
      //   link: "/task-management",
      //   show: acl.hasAccess("task_management.index"),
      // },
      // {
      //   title: "Inspection Checklist",
      //   icon: "checklist_rtl",
      //   link: "/inspection-checklist",
      //   show: acl.hasAccess("aiReport.index"),
      // },
      // {
      //   title: "PPE Inspection Checklist",
      //   icon: "dashboard",
      //   link: "/ppe-inspection",
      //   show: acl.hasAccess("company.create"),
      // },
      // {
      //   title: "Incident Management",
      //   icon: "dashboard",
      //   link: "/incident-management",
      //   show: acl.hasAccess("company.create"),
      // },
      // {
      //   title: "Audit Manager",
      //   icon: "dashboard",
      //   link: "/audit-manager",
      //   show: acl.hasAccess("company.create"),
      // },
      // {
      //   title: "Office Risk Survey",
      //   icon: "dashboard",
      //   link: "",
      //   show: acl.hasAccess("company.create"),
      // },
      // {
      //   title: "Warhouse Risk Survey",
      //   icon: "dashboard",
      //   link: "",
      //   show: acl.hasAccess("company.create"),
      // },
      // {
      //   title: "Engineering Risk Survey",
      //   icon: "dashboard",
      //   link: "",
      //   show: acl.hasAccess("company.create"),
      // },

      // {
      //   title: "Safety Files",
      //   icon: "storage",
      //   link: "",
      //   show: acl.hasAccess("company.create"),
      // },
      // {
      //   title: "Shop",
      //   icon: "redeem",
      //   link: "",
      //   show: acl.hasAccess("company.create"),
      // },
      // {
      //   title: "Contact Us",
      //   icon: "contacts",
      //   link: "",
      //   show: acl.hasAccess("company.create"),
      // },
      // {
      //   title: "Registration",
      //   icon: "how_to_reg",
      //   link: "",
      //   show: acl.hasAccess("company.create"),
      // },
      // {
      //   title: "About Us",
      //   icon: "error_outline",
      //   link: "/about-us",
      //   show: acl.hasAccess("company.create"),
      // },
    ]);

    const onCompanySelect = () => {
      if (authUserStore.authUser.active_company_id) {
        authUserStore.setActiveCompany().then(() => {
          // if (!firstLoad.value) location.reload();

          firstLoad.value = false;
        });
      }
    };

    const logout = () => {
      $q.dialog({
        title: "Confirm",
        message: "Are you sure to logout?",
        ok: {
          label: "Yes",
          unelevated: true,
          color: "primary",
        },
        cancel: {
          unelevated: true,
          color: "",
          textColor: "black",
        },
        persistent: true,
      }).onOk(() => {
        authUserStore.logout().then((r) => {
          window.location.href = "/";
        });
      });
    };

    onMounted(() => {
      companyStore.getItems({
        all: true,
        pagination: {
          sortBy: "name",
          direction: "ASC",
          page: 1,
          rowsPerPage: -1,
        },
        filter: {
          search: "",
        },
      });
    });

    // watch(
    //   () => {
    //     return authUserStore.active_company_id;
    //   },
    //   (first, second) => {
    //     // console.log("companyStore.allItems", companyStore.allItems[0]);
    //     authUserStore.setActiveCompany();
    //   },
    //   { deep: true }
    // );

    return {
      firstLoad,
      essentialLinks: linksList,
      leftDrawerOpen,
      authUserStore,
      companyStore,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      logout,
      model: ref(null),
      onCompanySelect,
    };
  },
});
</script>

<style lang="scss" scoped>
.bg {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(6, 33, 87, 1) 27%,
    rgba(9, 52, 116, 1) 45%,
    rgba(9, 54, 119, 1) 63%,
    rgba(9, 55, 121, 1) 76%,
    rgba(6, 40, 86, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
}
</style>
