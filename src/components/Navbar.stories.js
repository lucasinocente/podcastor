import Navbar from './Navbar.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Navbar',
  component: Navbar,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Navbar },
  template: '<navbar :title="title" :imageUrl="imageUrl" />',
});

export const Primary = Template.bind({});
Primary.args = {
  title: 'Sabe de Nada, Inocente!',
  imageUrl: 'https://lucasinocente.com/_next/image?url=%2Flucas-inocente-2021.png&w=384&q=100',
};
