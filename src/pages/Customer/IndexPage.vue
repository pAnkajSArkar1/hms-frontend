<template>
  <q-page>
    <div class="relative-position">
      <q-img src="~assets/images/hardhat.jpg" style="height: 70vh" />
      <div class="img-resize">
        <p class="q-ma-none sub-title text-grey-2">Welcome to</p>
        <h1 class="q-my-sm text-weight-bold title text-grey-2">SAFE T TRANS</h1>
        <p class="q-ma-none sub-title text-grey-2">A Quality Safety Solution</p>
        <q-btn class="q-mt-md" color="blue-7" to="/dashboard">Dashboard</q-btn>
      </div>
    </div>

    <div class="container">
      <div class="row q-col-gutter-sm">
        <div class="col-12 col-md-3 q-mt-md">
          <q-card flat bordered>
            <q-card-section>
              <div class="flex justify-center">
                <q-icon name="calculate" size="xl" color="primary" />
              </div>
              <h6 class="q-my-sm text-center text-weight-medium">
                CALCULATE RISKS
              </h6>
              <p>
                Our Safety Risk Calculation is based on the principle of
                identifying Hazards and using our Risk Ratings which are based
                on the three key Elements which are Likelihood, Severity and
                Frequency. If Control Measures are placed, the Risks will be
                reduced further using our Risk Ratings.
              </p>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-md-3">
          <q-card flat bordered>
            <q-card-section>
              <div class="flex justify-center">
                <q-icon name="thumb_up" size="xl" color="primary" />
              </div>
              <h6 class="q-my-sm text-center text-weight-medium">BENEFITS</h6>
              <p>
                Save time and money by using an online based Safety Program, as
                well as being able to view and monitor the Health and Safety
                Risks of your business in an online format from different sites
                all over the world thus enabling better communication with all
                divisions of the company.
              </p>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-md-3 q-mt-md">
          <q-card flat bordered>
            <q-card-section>
              <div class="flex justify-center">
                <q-icon name="local_mall" size="xl" color="primary" />
              </div>
              <h6 class="q-my-sm text-center text-weight-medium">
                BUY SAFETY EQUIPMENT
              </h6>
              <p>
                Estimate how much Safety Personal Protective Equipment is
                required before the financial year begins or when budgets are
                prepared. If a risk is identified and you don’t meet the
                requirements you can order Personal Protective.
              </p>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-md-3">
          <q-card flat bordered>
            <q-card-section>
              <div class="flex justify-center">
                <q-icon name="support" size="xl" color="primary" />
              </div>
              <h6 class="q-my-sm text-center text-weight-medium">
                DEDICATED SUPPORT
              </h6>
              <p>
                Access our knowledge of Health and Safety and we will implement
                our Health and Safety System. We offer a Safety Consulting
                Service as well as systems support ensuring you get maximum
                benefit from your subscription to our software.
              </p>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <div class="bg-grey-2">
      <div class="container">
        <h3 class="title q-ma-sm">What we do</h3>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-6 col-lg-6">
            <q-img src="~assets/images/buddha.jpg" style="height: 25vw">
              <div class="absolute-full flex flex-center sub-title-content">
                <ul>
                  <li>Risk Assessment</li>
                  <li>Task Management</li>
                  <li>Safety Files</li>
                  <li>Training & Auditing</li>
                  <li>ISO Certifications</li>
                </ul>
              </div>
            </q-img>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <q-img
              src="~assets/images/home-sunflower.jpg"
              style="height: 25vh"
            />
            <p class="q-mt-md">
              We provide all sectors of Business with a unique Health and Safety
              Software programme coupled with our consultancy service, that will
              assist their companies in achieving compliancy in terms of the OSH
              Act of 1993. As an added benefit and convenience we provide all
              Safety Equipment and Workwear for your business.
              <a href="#">Read more</a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="relative-position">
      <q-img src="~assets/images/hardhat.jpg" style="height: 40vh" />
      <div class="img-resize">
        <div class="container flex flex-center column">
          <h3 class="text-white q-ma-xs text-bold">SAFE T TRANS</h3>
          <p class="text-white sub-title">
            A Quality Online Solution to Health and Safety
          </p>
          <q-btn icon="shopping_cart" color="primary"
            >buy safety equipment</q-btn
          >
        </div>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
.title {
  font-size: 50px;
}
.sub-title {
  font-size: 22px;
}

.img-resize {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: #2c363954;
}

.sub-title-content {
  font-size: 30px;
}
</style>

<script>
import { onMounted } from "vue";
import { useAuthStore } from "stores/auth";

export default {
  name: "userHome",
  setup() {
    const useStore = useAuthStore();
    const { fetchAuthUser } = useStore;

    onMounted(() => {
      fetchAuthUser();
    });

    return {
      useStore,
    };
  },
};
</script>
