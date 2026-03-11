<template>
  <div class="gallery-wrapper">
    <div class="gallery-header">
      <h1>Our Worlds</h1>
      <p>Discover the breathtaking locations and unparalleled experiences that define Discovery Land Company.</p>
    </div>
    <div class="image-main">
      <div class="image_cmp" v-for="l in list" :key="l.name">
        <div class="img_grid">
          <img class="imgs" :src="getImgUrl(l.url)" :alt="l.caption" />
          <div class="overlay">
            <span class="caption-text">{{ l.caption }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";
interface listi {
  url: string;
  caption: string;
}
export default class gallery extends Vue {
  list: listi[] = [
    {
      url: "img1.jpg",
      caption: "Outdoor Pursuits",
    },
    {
      url: "img2.jpg",
      caption: "Golf",
    },
    {
      url: "img3.jpeg",
      caption: "Lifestyle",
    },
    {
      url: "img4.jpg",
      caption: "Landscapes",
    },
    {
      url: "img5.jpg",
      caption: "Clubhouses",
    },
    {
      url: "img6.jpg",
      caption: "Wellness",
    },
  ];
  getImgUrl(pic: string): string {
    return require("../../assets/images/" + pic);
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/global.scss";

.gallery-wrapper {
  background-color: var(--color-light);
  padding: 8rem 5% 4rem;
  min-height: 100vh;
}

.gallery-header {
  text-align: center;
  margin-bottom: 4rem;
  
  h1 {
    font-family: var(--font-serif);
    font-size: 3.5rem;
    color: var(--color-dark);
    margin-bottom: 1rem;
    font-weight: 400;
  }
  
  p {
    font-family: var(--font-sans);
    color: var(--color-text-muted);
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
}

.image-main {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
}

.image_cmp {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--shadow-premium);
  background: #000;
  cursor: pointer;

  .img_grid {
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
    
    @media screen and (max-width: 768px) {
      height: 300px;
    }
  }

  .imgs {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.5s ease;
    opacity: 0.9;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%);
    display: flex;
    align-items: flex-end;
    padding: 2rem;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .caption-text {
    color: #fff;
    font-family: var(--font-serif);
    font-size: 1.8rem;
    transform: translateY(20px);
    transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    text-shadow: 0 4px 15px rgba(0,0,0,0.5);
  }

  &:hover {
    .imgs {
      transform: scale(1.05);
      opacity: 1;
    }
    
    .overlay {
      opacity: 1;
    }
    
    .caption-text {
      transform: translateY(0);
    }
  }
}
</style>