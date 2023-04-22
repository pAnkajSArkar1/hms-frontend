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

  // blood donor
  {
    path: "/donor-dashboard",
    component: () => import("layouts/DonorLayout.vue"),
    children: [
      {
        path: "",
        component: () =>
          import("src/pages/BloodBank/Donor/Dashboard/IndexPage.vue"),
      },
    ],
  },
  {
    path: "/donate",
    component: () => import("layouts/DonorLayout.vue"),
    children: [
      {
        path: "",
        component: () =>
          import("src/pages/BloodBank/Donor/Donate/IndexPage.vue"),
      },
    ],
  },
  {
    path: "/donation-history",
    component: () => import("layouts/DonorLayout.vue"),
    children: [
      {
        path: "",
        component: () =>
          import("src/pages/BloodBank/Donor/DonateHistory/IndexPage.vue"),
      },
    ],
  },

  // blood receiver
  {
    path: "/receiver-dashboard",
    component: () => import("layouts/PatientLayout.vue"),
    children: [
      {
        path: "",
        component: () =>
          import("src/pages/BloodBank/Patient/Dashboard/IndexPage.vue"),
      },
    ],
  },
  {
    path: "/request",
    component: () => import("layouts/PatientLayout.vue"),
    children: [
      {
        path: "",
        component: () =>
          import("src/pages/BloodBank/Patient/Request/IndexPage.vue"),
      },
    ],
  },
  {
    path: "/request-history",
    component: () => import("layouts/PatientLayout.vue"),
    children: [
      {
        path: "",
        component: () =>
          import("src/pages/BloodBank/Patient/RequestHistory/IndexPage.vue"),
      },
    ],
  },

  // patient
  // {
  //   path: "/patient-dashboard",
  //   component: () => import("layouts/UserLayout.vue"),
  //   children: [
  //     {
  //       path: "",
  //       component: () =>
  //         import("src/pages/Appointment/Dashboard/IndexPage.vue"),
  //     },
  //   ],
  // },
  {
    path: "/make-appointment",
    component: () => import("layouts/UserLayout.vue"),
    children: [
      {
        path: "",
        component: () =>
          import("src/pages/Appointment/Patient/Appointment/IndexPage.vue"),
      },
    ],
  },
  {
    path: "/appointment-history",
    component: () => import("layouts/UserLayout.vue"),
    children: [
      {
        path: "",
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
    component: () => import("layouts/VisitorLayout.vue"),
    children: [
      {
        path: "",
        component: () =>
          import("src/pages/Visitor/Patient/Visit/IndexPage.vue"),
      },
    ],
  },
  {
    path: "/visit-history",
    component: () => import("layouts/VisitorLayout.vue"),
    children: [
      {
        path: "",
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

  // // Branch

  // {
  //   path: "/department",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [
  //     {
  //       path: "",
  //       component: () => import("pages/Branch/IndexPage.vue"),
  //       meta: { name: "Login", requiresAuth: true, acl: "user.index" },
  //     },
  //   ],
  // },

  // // Asset
  {
    path: "/asset",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/pages/Asset/IndexPage.vue"),
        meta: { name: "Login", requiresAuth: true, acl: "assets.index" },
      },
    ],
  },

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

  // //   RISK ASSESSMENT
  // {
  //   path: "/riskassessment",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [
  //     {
  //       path: "",
  //       component: () =>
  //         import("src/pages/Customer/RiskAssesment/IndexPage.vue"),
  //       meta: { name: "assessment", requiresAuth: true, acl: "user.index" },
  //     },
  //     {
  //       path: "report",
  //       component: () =>
  //         import(
  //           "src/pages/Customer/RiskAssesment/CreateRiskAssessment/IndexPage.vue"
  //         ),
  //       meta: { name: "assessment", requiresAuth: true, acl: "user.index" },
  //     },
  //     {
  //       path: ":id",
  //       name: "view-risk-assessment",
  //       component: () =>
  //         import(
  //           "src/pages/Customer/RiskAssesment/CreateRiskAssessment/ViewAssessment.vue"
  //         ),
  //       meta: { name: "assessment", requiresAuth: true, acl: "user.index" },
  //     },
  //     {
  //       path: "activity",
  //       component: () =>
  //         import("src/pages/Customer/RiskAssesment/Activities/IndexPage.vue"),
  //       meta: {
  //         name: "activities.index",
  //         requiresAuth: true,
  //         acl: "user.index",
  //       },
  //     },
  //     {
  //       path: "hazard",
  //       component: () =>
  //         import("src/pages/Customer/RiskAssesment/Hazards/IndexPage.vue"),
  //       meta: {
  //         name: "activities.index",
  //         requiresAuth: true,
  //         acl: "user.index",
  //       },
  //     },
  //     {
  //       path: "risk",
  //       component: () =>
  //         import("src/pages/Customer/RiskAssesment/Risk/IndexPage.vue"),
  //       meta: {
  //         name: "activities.index",
  //         requiresAuth: true,
  //         acl: "user.index",
  //       },
  //     },
  //     {
  //       path: "risk-rating",
  //       meta: {
  //         name: "activities.index",
  //         requiresAuth: true,
  //         acl: "user.index",
  //       },
  //       children: [
  //         {
  //           path: "",
  //           name: "riskRating",
  //           component: () =>
  //             import(
  //               "src/pages/Customer/RiskAssesment/RiskRating/IndexPage.vue"
  //             ),
  //         },
  //         {
  //           path: "create",
  //           name: "create-risk-rating",
  //           component: () =>
  //             import(
  //               "src/pages/Customer/RiskAssesment/RiskRating/CreateRiskRating.vue"
  //             ),
  //           meta: {
  //             name: "activities.index",
  //             requiresAuth: true,
  //             acl: "user.index",
  //           },
  //         },
  //         {
  //           path: "edit",
  //           name: "edit-risk-rating",
  //           component: () =>
  //             import(
  //               "src/pages/Customer/RiskAssesment/RiskRating/EditRiskRating.vue"
  //             ),
  //           meta: {
  //             name: "activities.index",
  //             requiresAuth: true,
  //             acl: "user.index",
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // },

  // // TASK MANAGEMENT
  // {
  //   path: "/task-management",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [
  //     {
  //       path: "",
  //       component: () =>
  //         import("src/pages/Customer/RiskRegister/IndexPage.vue"),
  //       meta: {
  //         name: "risk_register.index",
  //         requiresAuth: true,
  //         acl: "user.index",
  //       },
  //     },
  //   ],
  // },

  // {
  //   path: "/inspection-checklist",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [
  //     {
  //       path: "",
  //       component: () =>
  //         import("src/pages/Customer/InspectionChecklist/IndexPage.vue"),
  //       meta: {
  //         name: "inspection_checklist.index",
  //         requiresAuth: true,
  //         acl: "user.index",
  //       },
  //     },
  //     {
  //       path: "inspection-template",
  //       component: () =>
  //         import(
  //           "src/pages/Customer/InspectionChecklist/Templates/IndexPage.vue"
  //         ),
  //       meta: {
  //         name: "equipment_checklist.index",
  //         requiresAuth: true,
  //         acl: "user.index",
  //       },
  //     },
  //   ],
  // },

  // // PPE INSPECTION CHECKLIST
  // {
  //   path: "/ppe-inspection",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [
  //     {
  //       path: "",
  //       component: () =>
  //         import("src/pages/Customer/PpeInspection/IndexPage.vue"),
  //     },
  //     {
  //       path: "template",
  //       component: () =>
  //         import("src/pages/Customer/PpeInspection/PpeTemplate/IndexPage.vue"),
  //     },
  //     {
  //       path: "equipment",
  //       component: () =>
  //         import("src/pages/Customer/PpeInspection/PpeEquipment/IndexPage.vue"),
  //     },
  //   ],
  // },

  // //WORKPLACE AUDIT
  // {
  //   path: "/workplace-audit",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [
  //     {
  //       path: "",
  //       component: () =>
  //         import("src/pages/Customer/WorkplaceAudit/IndexPage.vue"),
  //       meta: {
  //         name: "workplace_audit.index",
  //         requiresAuth: true,
  //         acl: "user.index",
  //       },
  //     },
  //     {
  //       path: "questions",
  //       component: () =>
  //         import("src/pages/Customer/WorkplaceAudit/Questions/IndexPage.vue"),
  //       meta: {
  //         name: "questions.index",
  //         requiresAuth: true,
  //         acl: "user.index",
  //       },
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
  // // {
  // //     path: "/",
  // //     component: () =>
  // //         import ("layouts/MainLayout.vue"),
  // //     children: [{
  // //             path: "/",
  // //             component: () =>
  // //                 import ("pages/Customer/IndexPage.vue")
  // //         },
  // //         {
  // //             path: "/about-us",
  // //             component: () =>
  // //                 import ("src/pages/AboutUs.vue"),
  // //         },
  // //         {
  // //             path: "/terms-conditions",
  // //             component: () =>
  // //                 import ("src/pages/PrivacyPolicy/IndexPage.vue"),
  // //         },
  // //         {
  // //             path: "/dashboard",
  // //             component: () =>
  // //                 import ("src/pages/Company/DashBoard.vue"),
  // //             meta: { name: "dashboard.index", requiresAuth: true, acl: "user.index" },
  // //         },
  // //     ],
  // // },

  // {
  //   path: "/incident-management",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [
  //     {
  //       path: "",
  //       component: () =>
  //         import("src/pages/Customer/IncidentManagement/IndexPage.vue"),
  //       meta: {
  //         name: "incident_management.index",
  //         requiresAuth: true,
  //         acl: "user.index",
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: "/workplace-audit",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [
  //     {
  //       path: "",
  //       component: () =>
  //         import("src/pages/Customer/WorkplaceAudit/IndexPage.vue"),
  //       meta: {
  //         name: "workplace_audit.index",
  //         requiresAuth: true,
  //         acl: "user.index",
  //       },
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
