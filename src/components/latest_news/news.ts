import { Vue } from 'vue-class-component';
export default class LatestNews extends Vue {
    private Title:{
        text1: string,
        text2: string
      } = {
        text1: "News",
        text2: "and Press"
      }
    
      private slideshowData:{
        image: string,
        title: string,
        body: string,
      }[]=[
        {
          image:
            require("@/assets/images/img1.jpg"),
          title:
            "Discovery’s newest property in Kaua’i North Shore Preserve",
          body:
            "Discovery Land Company is excited to announce our 25th residential club community on the majestic North Shore of Kaua’i. North Shore Preserve, a one-of-a-kind residential community, spans one thousand acres at the base of the mountains in the pastoral Hanalei valley. This newly re-imagined, low-density project is a secluded and peaceful island oasis with limited initial homesite and hale offerings.",
        },
        {
          image:
            require("@/assets/images/img2.jpg"),
          title: "James Island  Discovery's Newest Property",
          body:
            "Discovery Land Company is excited to announce our 24th private luxury residential community. James Island Golf and Ocean Club, a 780-acre private island in British Columbia with only 76 lots, is Discovery Land Company’s most exclusive community to date and Discovery’s first project in Canada.",
        },
        {
          image:
            require("@/assets/images/img3.jpeg"),
          title: "CostaTerra  Discovery's 23rd property",
          body:
            "Discovery Land Company, the world’s leading developer of luxury private residential communities, clubs and resorts, has announced its 23rd property and first in Europe.",
        },
        {
          image:
            require("@/assets/images/img4.jpg"),
          title: "Troubadour To Open Golf Course Fall 2019",
          body:
            "Troubadour Golf & Field Club, a Discovery Land Company community, is pleased to announce the opening of its 18-hole Tom Fazio-designed golf course this fall.",
        },
      ]
    
      public selectedPage = 0;
    
      public nextPlace(): void {
        const totalPlaces = this.slideshowData.length;
        this.selectedPage = (this.selectedPage + 1) % totalPlaces;
      }
      
      public previousPlace(): void {
        const totalPlaces = this.slideshowData.length;
        this.selectedPage = (this.selectedPage + totalPlaces - 1) % totalPlaces;
      }
    }


