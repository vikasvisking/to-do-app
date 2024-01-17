import { createApp, h } from "vue";
import wrapper from "vue3-webcomponent-wrapper";
import MyToDo from './pages/index.vue';

export const MyToDoApp = wrapper(MyToDo, createApp, h);

const register = () => {
    window.customElements.define('my-todo-app', MyToDoApp);
}

export default register;