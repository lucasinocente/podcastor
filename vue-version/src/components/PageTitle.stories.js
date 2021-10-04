import PageTitle from './PageTitle.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/PageTitle',
  component: PageTitle,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { PageTitle },
  template: '<page-title :text="text" />',
});

export const Primary = Template.bind({});
Primary.args = {
  text: 'Sabe de Nada, Inocente!',
};
