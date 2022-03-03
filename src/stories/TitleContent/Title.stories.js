import Title from './Title.vue'

export default{
    title: 'Title',
    component: Title,
    color:{ control: 'color'},
    fontSize: { control: 'fontSize'},
    backgroundColor: { control: 'color'},

    argTypes:{
        apply:{
            control:{type: 'select'},
            options:  ["textHomePage",
            "textHomepageTitle",
            "messageErro",
         
            ]
        },

        type:{
            control:{type: 'select'},
            options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
        },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Title },
    template: '<Title v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    text: 'Default title',
    type: 'h1'
};

export const textHomePage = Template.bind({});
textHomePage.args = {
    apply: 'textHomePage',
    text: 'Default title',
    type: 'h2',
};

export const textHomepageTitle = Template.bind({});
textHomepageTitle.args = {
    apply: 'textHomepageTitle',
    text: 'Default title',
    type: 'h1',
};

export const messageErro = Template.bind({});
messageErro.args = {
    apply: 'messageErro',
    text: 'Default title',
    type: 'h6',
};