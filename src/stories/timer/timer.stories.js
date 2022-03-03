import timer from "./timer.vue";

export default {
  title: "timer",
  component: timer,
  color: { control: "color" },
  fontSize: { control: "fontSize" },
  backgroundColor: { control: "color" },

  argTypes: {
    
    minutes: {
      control: { type: "select" },
      options: ["600", "400", "300", "100"],
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { timer },
  template: '<timer v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};
