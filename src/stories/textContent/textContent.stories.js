import textContent from "./textContent.vue";

export default {
  title: "textContent",
  component: textContent,

  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },

    fontSize: {
      control: { type: "select" },
      options: ["10px", "30px", "50px", "60px"],
    },

    size: {
      control: { type: "select" },
      options: ["temperature", "textFooter", "navegation"],
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { textContent },
  template: '<textContent v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};

export const temperature = Template.bind({});
temperature.args = {
  size: "temperature",
  text: "Default text simple",
};

export const textFooter = Template.bind({});
textFooter.args = {
  size: "textFooter",
  text: "Default text simple",
};

export const navegation = Template.bind({});
textFooter.args = {
  size: "navegation",
  text: "Default text simple",
};
