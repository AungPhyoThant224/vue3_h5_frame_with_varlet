<template>
  <div class="login-con">
    <var-form
      ref="form"
      :disabled="disabled"
      :readonly="readonly"
      scroll-to-error="start"
    >
      <var-space direction="column" :size="[14, 0]">
        <var-input
          placeholder="Please input username"
          :rules="[(v) => !!v || 'The username cannot be empty']"
          v-model="formData.username"
        />
        <var-input
          type="password"
          placeholder="Please input password"
          :rules="[(v) => !!v || 'The password cannot be empty']"
          v-model="formData.password"
        />
        <var-radio-group
          :rules="[(v) => !!v || 'The gender cannot be empty']"
          v-model="formData.gender"
        >
          <var-radio :checked-value="1">Male</var-radio>
          <var-radio :checked-value="2">Female</var-radio>
        </var-radio-group>
        <var-checkbox-group
          :rules="[(v) => v.length > 0 || 'The select cannot be empty']"
          v-model="formData.like"
        >
          <var-checkbox :checked-value="1">Eat</var-checkbox>
          <var-checkbox :checked-value="2">Sleep</var-checkbox>
          <var-checkbox :checked-value="3">Play game</var-checkbox>
        </var-checkbox-group>
      </var-space>
    </var-form>

    <var-space direction="column" :size="[14, 0]">
      <var-button block type="danger" @click="form.reset()">
        Empty form
      </var-button>
      <var-button block type="warning" @click="form.resetValidation()">
        Empty the validation
      </var-button>
      <var-button block type="success" @click="form.validate()">
        Trigger validation
      </var-button>
      <var-button block type="info" @click="disabled = !disabled">
        Form disabled
      </var-button>
      <var-button block type="primary" @click="readonly = !readonly">
        Form readonly
      </var-button>
    </var-space>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from "vue";
export default {
  name: "Login",
  setup() {
    const state = reactive({
      formData: {
        username: "",
        password: "",
        gender: undefined,
        group: [],
        like: [],
      },
    });
    const form = ref(null);
    const disabled = ref(false);
    const readonly = ref(false);

    return {
      ...toRefs(state),
      form,
      disabled,
      readonly,
    };
  },
};
</script>

<style>
.login-con {
  margin: 30px 20px;
}
</style>
