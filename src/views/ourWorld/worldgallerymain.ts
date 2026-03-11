import { Options, Vue } from 'vue-class-component';
import headerr from '@/components/navbar/navbar.vue'; // Changed to use consistent navbar
import worldgallery from '@/components/world_gallery/world_gallery.vue';
import footerr from '@/components/footer/footer.vue';
@Options({
  components: {
    headerr,
    worldgallery,
    footerr,
  },
Mount(){
        console.log('mount');
    }
})

export default class Home extends Vue {}