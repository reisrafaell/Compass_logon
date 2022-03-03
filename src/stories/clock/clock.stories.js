import clock from "./clock.vue";

export default {
  title: "clock",
  component: clock,
  color: { control: "color" },
  fontSize: { control: "fontSize" },
  backgroundColor: { control: "color" },

  argTypes: {
    hours: {
      control: { type: "select" },
      options: ["20", "24", "06", "12"],
    },

    minutes: {
      control: { type: "select" },
      options: ["20", "60", "30", "15"],
    },
    weekDay: {
      control: { type: "select" },
      options: ["Segunda-Feira", "Terça-Feira", "Domingo"],
    },
    monthDay: {
      control: { type: "select" },
      options: ["10", "20", "30"],
    },
    month: {
      control: { type: "select" },
      options: ["Janeiro", "Fevereiro", "Dezembro"],
    },
    years: {
      control: { type: "select" },
      options: ["2022", "2020", "2019"],
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { clock },
  template: '<clock v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};

// export const secundary = Template.bind({});
// secundary.args = {
//     apply: 'secundary',
//     text: 'Default title',
//     type: 'h2',
// };
