const routes = [
  {
    path: "/",
    component: () => import("layouts/GuestLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Landing/LandingPage.vue"),
      },
    ],
  },
  {
    path: "/avatar",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/components/HomePage.vue"),
      },
    ],
  },

  {
    path: "/home",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Home/HomeDashboard.vue"),
      },
    ],
  },
  {
    path: "/users",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Admin/UserManagement/IndexPage.vue"),
        meta: {
          name: "company-users.index",
          requiresAuth: true,
        },
      },
    ],
  },

  // For login route
  {
    path: "/login",
    component: () => import("layouts/AuthLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Auth/LoginPage.vue"),
        meta: { name: "Login", requiresAuth: false },
      },
    ],
  },
  // {
  //   path: "/donor-login",
  //   component: () => import("layouts/AuthLayout.vue"),
  //   children: [
  //     {
  //       path: "",
  //       component: () => import("pages/Auth/DonorLoginPage.vue"),
  //       meta: { name: "Login", requiresAuth: false },
  //     },
  //   ],
  // },
  // {
  //   path: "/receiver-login",
  //   component: () => import("layouts/AuthLayout.vue"),
  //   children: [
  //     {
  //       path: "",
  //       component: () => import("pages/Auth/ReceiverLoginPage.vue"),
  //       meta: { name: "Login", requiresAuth: false },
  //     },
  //   ],
  // },
  // For signup route
  {
    path: "/signup",
    component: () => import("layouts/AuthLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Auth/SignUpPage.vue"),
        meta: { name: "Login", requiresAuth: false },
      },
    ],
  },
  {
    path: "/donor-signup",
    component: () => import("layouts/AuthLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Auth/DonorSignUpPage.vue"),
        meta: { name: "Login", requiresAuth: false },
      },
    ],
  },

  {
    path: "/receiver-signup",
    component: () => import("layouts/AuthLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Auth/ReceiverSignUpPage.vue"),
        meta: { name: "Login", requiresAuth: false },
      },
    ],
  },
  {
    path: "/visitor-signup",
    component: () => import("layouts/AuthLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Auth/VisitorSignUpPage.vue"),
        meta: { name: "Login", requiresAuth: false },
      },
    ],
  },

  // For forgot password route
  {
    path: "/forgot-password",
    component: () => import("layouts/AuthLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Auth/ForgotPassword/OtpPage.vue"),
        meta: { name: "Login", requiresAuth: false },
      },
      {
        path: "verification",
        component: () => import("pages/Auth/ForgotPassword/VerifyOtpPage.vue"),
        meta: { name: "Login", requiresAuth: false },
      },
      {
        path: "reset-password",
        component: () => import("pages/Auth/ForgotPassword/ResetPassword.vue"),
        meta: { name: "Login", requiresAuth: false },
      },
    ],
  },

  {
    path: "/bed-management",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/pages/Beds/BedStatus/IndexPage.vue"),
      },
      {
        path: "floor",
        component: () => import("src/pages/Beds/Floor/IndexPage.vue"),
      },
      {
        path: "bed-group",
        component: () => import("src/pages/Beds/BedGroup/IndexPage.vue"),
      },
      {
        path: "bed-type",
        component: () => import("src/pages/Beds/BedType/IndexPage.vue"),
      },
      {
        path: "bed-list",
        component: () => import("src/pages/Beds/BedList/IndexPage.vue"),
      },
    ],
  },

  {
    path: "/blood-admin",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () =>
          import("src/pages/BloodBank/Admin/Dashboard/IndexPage.vue"),
      },
      {
        path: "donors",
        component: () =>
          import("src/pages/BloodBank/Admin/Donor/IndexPage.vue"),
      },
      {
        path: "receivers",
        component: () =>
          import("src/pages/BloodBank/Admin/Patient/IndexPage.vue"),
      },
      {
        path: "donations",
        component: () =>
          import("src/pages/BloodBank/Admin/Donation/IndexPage.vue"),
      },
      {
        path: "requests",
        component: () =>
          import("src/pages/BloodBank/Admin/Request/IndexPage.vue"),
      },
    ],
  },
  {
    path: "/donor",
    component: () => import("layouts/DonorLayout.vue"),
    children: [
      {
        path: "",
        component: () =>
          import("src/pages/BloodBank/Donor/Dashboard/IndexPage.vue"),
      },
      {
        path: "blood-donate",
        component: () =>
          import("src/pages/BloodBank/Donor/Donate/IndexPage.vue"),
      },
      {
        path: "donation-history",
        component: () =>
          import("src/pages/BloodBank/Donor/DonateHistory/IndexPage.vue"),
      },
    ],
  },
  {
    path: "/receiver",
    component: () => import("layouts/DonorLayout.vue"),
    children: [
      {
        path: "",
        component: () =>
          import("src/pages/BloodBank/Patient/Dashboard/IndexPage.vue"),
      },
      {
        path: "request-blood",
        component: () =>
          import("src/pages/BloodBank/Patient/Request/IndexPage.vue"),
      },
      {
        path: "request-history",
        component: () =>
          import("src/pages/BloodBank/Patient/RequestHistory/IndexPage.vue"),
      },
    ],
  },
  {
    path: "/appointment",
    component: () => import("layouts/DonorLayout.vue"),
    children: [
      {
        path: "",
        component: () =>
          import("src/pages/Appointment/Patient/Appointment/IndexPage.vue"),
      },
      {
        path: "appointment-history",
        component: () =>
          import(
            "src/pages/Appointment/Patient/AppointmentHistory/IndexPage.vue"
          ),
      },
    ],
  },
  // admin appointment request
  {
    path: "/manage-appointment",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () =>
          import(
            "src/pages/Appointment/Admin/AppointmentRequests/IndexPage.vue"
          ),
      },
    ],
  },

  // visit
  {
    path: "/visit",
    component: () => import("layouts/DonorLayout.vue"),
    children: [
      {
        path: "",
        component: () =>
          import("src/pages/Visitor/Patient/Visit/IndexPage.vue"),
      },
      {
        path: "visit-history",
        component: () =>
          import("src/pages/Visitor/Patient/VisitHistory/IndexPage.vue"),
      },
    ],
  },
  // admin visitor request
  {
    path: "/manage-visitor",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () =>
          import("src/pages/Visitor/Admin/VisitorManagement/IndexPage.vue"),
      },
    ],
  },

  // USER
  {
    path: "/profile",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "profile",
        component: () => import("src/pages/ProfilePage.vue"),
        meta: { name: "Profile", requiresAuth: true },
      },
    ],
  },
  {
    path: "/user-profile",
    component: () => import("layouts/DonorLayout.vue"),
    children: [
      {
        path: "",
        name: "user-profile",
        component: () => import("src/pages/ProfilePage.vue"),
        meta: { name: "Profile", requiresAuth: true },
      },
    ],
  },
  {
    path: "/pharma-profile",
    component: () => import("layouts/PharmacistLayout.vue"),
    children: [
      {
        path: "",
        name: "pharma-profile",
        component: () => import("src/pages/ProfilePage.vue"),
        meta: { name: "Profile", requiresAuth: true },
      },
    ],
  },
  {
    path: "/recep-profile",
    component: () => import("layouts/ReceptionistLayout.vue"),
    children: [
      {
        path: "",
        name: "recep-profile",
        component: () => import("src/pages/ProfilePage.vue"),
        meta: { name: "Profile", requiresAuth: true },
      },
    ],
  },
  // admin global message
  {
    path: "/global-message",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/pages/GlobalMessage/IndexPage.vue"),
      },
    ],
  },
  {
    path: "/manage-message",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () =>
          import("src/pages/GlobalMessage/GlobalMessageManage.vue"),
      },
    ],
  },
  {
    path: "/brodcasts",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/pages/GlobalMessage/MessagePage.vue"),
      },
    ],
  },
  // {
  //   path: "/user-brodcasts",
  //   component: () => import("layouts/DonorLayout.vue"),
  //   children: [
  //     {
  //       path: "",
  //       component: () => import("src/pages/GlobalMessage/MessagePage.vue"),
  //     },
  //   ],
  // },
  {
    path: "/pharmacist-brodcasts",
    component: () => import("layouts/PharmacistLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/pages/GlobalMessage/MessagePage.vue"),
      },
    ],
  },

  // medicine admin
  {
    path: "/medicine-management",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () =>
          import("src/pages/MedicineManagement/Category/IndexPage.vue"),
      },
      {
        path: "medicine",
        component: () =>
          import("src/pages/MedicineManagement/Medicine/IndexPage.vue"),
      },
      {
        path: "medicine-sales",
        component: () =>
          import("src/pages/MedicineManagement/MedicineSale/IndexPage.vue"),
      },
    ],
  },

  // {
  //   path: "/medicine-status",
  //   component: () => import("layouts/PharmacistLayout.vue"),
  //   children: [
  //     {
  //       path: "",
  //       component: () => import("src/pages/Pharmacist/Dashboard/IndexPage.vue"),
  //     },
  //   ],
  // },
  {
    path: "/medicine-list",
    component: () => import("layouts/PharmacistLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/pages/Pharmacist/Medicine/IndexPage.vue"),
      },
    ],
  },
  {
    path: "/medicine-sales-list",
    component: () => import("layouts/PharmacistLayout.vue"),
    children: [
      {
        path: "",
        component: () =>
          import("src/pages/Pharmacist/MedicineSale/IndexPage.vue"),
      },
    ],
  },

  {
    path: "/bed-details",
    component: () => import("layouts/ReceptionistLayout.vue"),
    children: [
      {
        path: "",
        component: () =>
          import("src/pages/BedsReceptioninst/BedStatus/IndexPage.vue"),
      },
      {
        path: "floors",
        component: () =>
          import("src/pages/BedsReceptioninst/Floor/IndexPage.vue"),
      },
      {
        path: "bed-groups",
        component: () =>
          import("src/pages/BedsReceptioninst/BedGroup/IndexPage.vue"),
      },
      {
        path: "bed-types",
        component: () =>
          import("src/pages/BedsReceptioninst/BedType/IndexPage.vue"),
      },
      {
        path: "bed-lists",
        component: () =>
          import("src/pages/BedsReceptioninst/BedList/IndexPage.vue"),
      },
    ],
  },
  // receptioninst patient
  {
    path: "/patients-management",
    component: () => import("layouts/ReceptionistLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/pages/PatientManagement/IndexPage.vue"),
      },
    ],
  },
  // admin patient
  {
    path: "/patients",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/pages/PatientManagement/IndexPage.vue"),
      },
    ],
  },
  // {
  //   path: "/doctors",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [
  //     {
  //       path: "",
  //       component: () => import("src/pages/DoctorManagement/IndexPage.vue"),
  //     },
  //   ],
  // },

  {
    path: "/doctor",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/pages/DoctorManagement/IndexPage.vue"),
      },
      {
        path: "speciality",
        component: () =>
          import("src/pages/DoctorManagement/Speciality/IndexPage.vue"),
      },
    ],
  },

  {
    path: "/receptionist-brodcasts",
    component: () => import("layouts/ReceptionistLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/pages/GlobalMessage/MessagePage.vue"),
      },
    ],
  },
  // {
  //   path: "/company-profile",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [
  //     {
  //       path: "",
  //       name: "companyProfile",
  //       component: () => import("src/pages/CompanyProfile.vue"),
  //       meta: {
  //         name: "companyProfile",
  //         requiresAuth: true,
  //         acl: "user.index",
  //       },
  //     },
  //   ],
  // },

  // {
  //   path: "/user-management",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [
  //     {
  //       path: "",
  //       name: "user.index",
  //       component: () => import("pages/Admin/UserManagement/IndexPage.vue"),
  //       meta: { name: "Login", requiresAuth: true, acl: "user.create" },
  //     },
  //   ],
  // },

  // // {
  // //     path: "/company",
  // //     component: () =>
  // //         import ("layouts/MainLayout.vue"),
  // //     children: [{
  // //             path: "",
  // //             name: "company.index",
  // //             component: () =>
  // //                 import ("pages/Admin/CompanyManagement/IndexPage.vue"),
  // //             meta: {
  // //                 name: "comapny.index",
  // //                 requiresAuth: true,
  // //                 acl: "company.create",
  // //             },
  // //         },
  // //         {
  // //             path: ":id/users",
  // //             name: "company-users.index",
  // //             component: () =>
  // //                 import ("pages/Admin/UserManagement/IndexPage.vue"),
  // //             meta: {
  // //                 name: "comapny-users.index",
  // //                 requiresAuth: true,
  // //                 acl: "company.create",
  // //             },
  // //         },
  // //     ],
  // // },
  // {
  //   path: "/",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [
  //     {
  //       path: "/home",
  //       component: () => import("src/pages/Customer/IndexPage.vue"),
  //       meta: { name: "Login", requiresAuth: true, acl: "user.index" },
  //     },
  //     {
  //       path: "/dashboard",
  //       component: () => import("src/pages/Company/DashBoard.vue"),
  //       meta: { name: "Login", requiresAuth: true, acl: "user.index" },
  //     },
  //     {
  //       path: "/about-us",
  //       component: () => import("src/pages/AboutUs.vue"),
  //     },
  //     {
  //       path: "/terms-conditions",
  //       component: () => import("src/pages/PrivacyPolicy/IndexPage.vue"),
  //     },
  //   ],
  // },

  // // {
  // //     path: "/user-management",
  // //     component: () =>
  // //         import ("src/pages/Customer/RiskAssesment/RiskRating/IndexPage.vue"),
  // //     meta: { name: "risk-rating", requiresAuth: true, acl: "user.index" },
  // // },

  // // Branch
  // // {
  // //     path: "/branch",
  // //     component: () =>
  // //         import ("layouts/MainLayout.vue"),
  // //     children: [{
  // //         path: "",
  // //         component: () =>
  // //             import ("pages/Branch/IndexPage.vue"),
  // //         meta: { name: "branch.index", requiresAuth: true, acl: "user.index" },
  // //     }, ],
  // // },

  // {
  //   path: "/hospitals",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [
  //     {
  //       path: "",
  //       name: "company.index",
  //       component: () => import("pages/Admin/CompanyManagement/IndexPage.vue"),
  //       meta: { name: "company.index", requiresAuth: true, acl: "user.index" },
  //     },
  //     {
  //       path: ":id/users",
  //       name: "company-users.index",
  //       component: () => import("pages/Admin/UserManagement/IndexPage.vue"),
  //       meta: {
  //         name: "company-users.index",
  //         requiresAuth: true,
  //         acl: "user.index",
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: "/",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [
  //     {
  //       path: "/doctor",
  //       // name: "company.index",
  //       component: () => import("pages/Employee/doctors/IndexPage.vue"),
  //       meta: { name: "doctor.index", requiresAuth: true, acl: "doctor.index" },
  //     },
  //     {
  //       path: "/nurse",
  //       // name: "company.index",
  //       component: () => import("pages/Employee/nurses/IndexPage.vue"),
  //       meta: {
  //         name: "company.index",
  //         requiresAuth: true,
  //         acl: "company.index",
  //       },
  //     },
  //     {
  //       path: "/labscientist",
  //       // name: "company.index",
  //       component: () => import("pages/Employee/labScientists/IndexPage.vue"),
  //       meta: { name: "company.index", requiresAuth: true, acl: "user.index" },
  //     },
  //     {
  //       path: "/pharmacists",
  //       // name: "company.index",
  //       component: () => import("pages/Employee/pharmacists/IndexPage.vue"),
  //       meta: { name: "company.index", requiresAuth: true, acl: "user.index" },
  //     },
  //   ],
  // },
  // {
  //   path: "/medicine",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [
  //     {
  //       path: "",
  //       component: () => import("src/pages/medicine/IndexPage.vue"),
  //       meta: {
  //         name: "medicine.index",
  //         requiresAuth: true,
  //         acl: "user.index",
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: "/patient",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [
  //     {
  //       path: "",
  //       component: () => import("src/pages/patient/IndexPage.vue"),
  //       // meta: {
  //       //   name: "incident_management.index",
  //       //   requiresAuth: true,
  //       //   acl: "user.index",
  //       // },
  //     },
  //   ],
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
