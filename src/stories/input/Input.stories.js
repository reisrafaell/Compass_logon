import Input from './Input.vue'

export default{
    title: 'Input',
    component: Input,
    color:{ control: 'color'},
    fontSize: { control: 'fontSize'},
    backgroundColor: { control: 'color'},

    argTypes:{

        type:{
            control:{type: 'select'},
            options: ["button", "submit", "text", "password"],
        },
        value:{
            control:{type: 'text'},
            options: ["button", "submit", "text"],
        },
        backgroundColor: { control: "color" },
        color: { control: "color" },
    
        fontSize: {
          control: { type: "select" },
          options: ["10px", "30px", "50px", "60px"],
        },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Input },
    template: '<Input v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    text: 'Default title',
    type: 'submit',
    value: 'Continuar'
};

export const button = Template.bind({});
button.args = {
    primary: true,
    text: 'Default title',
    type: 'submit',
    value: 'Continuar'
};

