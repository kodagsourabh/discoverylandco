import { Options, Vue } from "vue-class-component";

@Options({
    name: "Navbar",
    data(){
        return{
            isToggled: false,
            isScrolled: false
        };
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        this.isScrolled = window.scrollY > 50;
      }
    }
})
export default class Navbar extends Vue {}