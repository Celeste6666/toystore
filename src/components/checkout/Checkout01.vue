<template>
  <div class="customer-info mb-6">
    <div class="h2 py-4 border-bottom mb-5 d-flex justify-content-between align-items-end">
      <span>購物資訊</span>
      <span class="fs-6 text-danger">* Required</span>
    </div>
    <label for="customerEmail" class="form-label">
      Email
      <span class="text-danger">*</span>
    </label>
    <Field name="電子信箱" rules="email|required" v-slot="{ field, errorMessage }">
      <input
        v-bind="field"
        type="email"
        class="form-control rounded-pill bg-light bg-light border-2 rounded-pill border-2"
        id="customerEmail"
        v-model="order.email"
      />
      <small v-if="errorMessage" class="p-2 text-danger">{{ errorMessage }}</small>
    </Field>
  </div>
  <div class="shipping-info mb-6">
    <div class="h2 py-4 border-bottom mb-5 d-flex justify-content-between align-items-end">
      <span>運送資訊</span>
      <span class="fs-6 text-danger">* Required</span>
    </div>
    <Form class="row g-4" :validation-schema="schema">
      <div class="col-12">
        <label for="shippingName" class="form-label"
          >全名
          <span class="text-danger">*</span>
        </label>
        <Field name="姓名" rules="required" v-slot="{ field, errorMessage }">
          <input
            v-bind="field"
            type="text"
            class="form-control rounded-pill bg-light bg-light border-2 rounded-pill border-2"
            id="shippingName"
            v-model="order.name"
          />
          <small v-if="errorMessage" class="p-2 text-danger">{{ errorMessage }}</small>
        </Field>
      </div>
      <div class="col-12">
        <label for="shippingTel" class="form-label"
          >電話號碼
          <span class="text-danger">*</span>
        </label>

        <Field name="電話號碼" rules="numeric|length:10|required" v-slot="{ field, errorMessage }">
          <input
            v-bind="field"
            type="tel"
            class="form-control rounded-pill bg-light bg-light border-2 rounded-pill border-2"
            id="shippingTel"
            v-model="order.tel"
          />
          <small v-if="errorMessage" class="p-2 text-danger">{{ errorMessage }}</small>
        </Field>
      </div>
      <div class="col-12">
        <label for="shippingAddress" class="form-label"
          >運送地址
          <span class="text-danger">*</span>
        </label>
        <Field name="運送地址" rules="required" v-slot="{ field, errorMessage }">
          <input
            v-bind="field"
            type="text"
            class="form-control rounded-pill bg-light bg-light border-2 rounded-pill border-2"
            id="shippingAddress"
            v-model="order.address"
          />
          <small v-if="errorMessage" class="p-2 text-danger">{{ errorMessage }}</small>
        </Field>
      </div>
      <div class="col-12">
        <label for="shippingNote" class="form-label">備註</label>
        <Field
          name="text"
          class="form-control rounded-pill bg-light border-2"
          id="shippingNote"
          v-model="order.message"
        />
      </div>
    </Form>
  </div>
  <div class="payment-info mb-6">
    <div class="h2 py-4 border-bottom mb-5 d-flex justify-content-between align-items-end">
      <span>付款方式</span>
      <span class="fs-6 text-danger">預設為貨到付款</span>
    </div>
    <div class="d-md-flex justify-content-between">
      <Field name="payment" rules="required" v-slot="{ field }">
        <input
          v-bind="field"
          type="radio"
          class="btn-check"
          id="LinePay"
          value="LinePay"
          v-model="order.payment"
        />
      </Field>
      <label
        class="btn btn-success rounded-pill fs-5 px-4 py-2 text-uppercase fw-bold me-2 my-2"
        for="LinePay"
      >
        line
        <span class="bg-white text-success p-1">pay</span>
      </label>

      <Field name="payment" rules="required" v-slot="{ field }">
        <input
          v-bind="field"
          type="radio"
          class="btn-check"
          id="PiPay"
          value="PiPay"
          v-model="order.payment"
        />
      </Field>
      <label
        class="btn btn-info rounded-pill fs-5 px-4 py-2 text-uppercase fw-bold me-2 my-2"
        for="PiPay"
      >
        <span class="bg-white text-info p-1 rounded-1">Pi</span>
        拍錢包
      </label>

      <Field name="payment" rules="required" v-slot="{ field }">
        <input
          v-bind="field"
          type="radio"
          class="btn-check"
          id="creditCard"
          value="creditCard"
          v-model="order.payment"
        />
      </Field>
      <label
        class="btn btn-warning rounded-pill fs-5 px-4 py-2 text-uppercase fw-bold me-2 my-2"
        for="creditCard"
        >信用卡
      </label>

      <Field name="payment" rules="required" v-slot="{ field }">
        <input
          v-bind="field"
          type="radio"
          class="btn-check"
          id="COD"
          value="COD"
          v-model="order.payment"
        />
      </Field>
      <label
        class="btn btn-dark rounded-pill fs-5 px-4 py-2 text-uppercase fw-bold me-2 my-2"
        for="creditCard"
        >貨到付款
      </label>
    </div>
  </div>
</template>
<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { defineRule, Form, Field } from 'vee-validate';
import AllRules from '@vee-validate/rules';

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

export default {
  name: 'Checkout01',
  components: { Form, Field },
  setup() {
    const store = useStore();
    const order = computed(() => store.state.client.order);

    return {
      order,
    };
  },
};
</script>
