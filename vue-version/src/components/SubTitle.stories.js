import SubTitle from './SubTitle.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/SubTitle',
  component: SubTitle,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SubTitle },
  template: '<sub-title :text="text" />',
});

export const Primary = Template.bind({});
Primary.args = {
  text: 'Sabe de Nada, Inocente!',
};
