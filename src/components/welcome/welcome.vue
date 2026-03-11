   
<template>
  <div class="home">
    <!-- main section -->
    <section class="main">

      <video class="main-bg" autoplay muted loop>
        <source src="@/assets/video/hvideo.mp4" type="video/mp4" />
      </video>
      <main class="discover-your-world">
        <span class="discover">Discover</span>
        <span class="your-world">your world</span>
      </main>
    </section>

    <!-- welcome section -->
    <section id="welcome">
      <div class="top-left">
        <h1 class="welcome-to-our-world">
          <span class="welcome-to"> Welcome to </span>
          <span class="our-world"> our world </span>
        </h1>
        <p class="welcome-text">
          Discover the unique atmosphere of our private residential club
          communities. Once experienced. Never forgotten. This is classic,
          comfortable, modern living in nature’s most spectacular settings
          worldwide. Reassuringly exclusive. Generously welcoming. Find your
          unique world – a place where families love to be; creating
          unforgettable moments, together.
        </p>
      </div>
      <div class="right">
        <img :src="require('@/assets/home/home1.jpg')" alt="Ocean View" />
      </div>
      <div class="bottom-left">
        <img :src="require('@/assets/home/home2.jpg')" alt="Leisure" />
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
#app {
  background-color: var(--color-light);
}
.home {
  .main {
    overflow: hidden;
    width: 100%;
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    /* Subtle gradient overlay to ensure text is legible on the bright video */
    &::after {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: linear-gradient(
        to bottom,
        rgba(0,0,0,0.5) 0%,
        rgba(0,0,0,0.1) 40%,
        rgba(0,0,0,0.4) 100%
      );
      pointer-events: none;
      z-index: 1;
    }

    video.main-bg {
      position: absolute;
      top: 50%;
      left: 50%;
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
      transform: translate(-50%, -50%);
      object-fit: cover;
      z-index: 0;
    }

    .discover-your-world {
      position: relative;
      z-index: 2;
      color: #fff;
      text-align: center;
      padding: 0 2rem;
      animation: fadeInUp 1.2s ease forwards;

      .discover,
      .your-world {
        font-family: var(--font-serif);
        font-size: 6rem;
        display: block;
        line-height: 1.1;
        font-weight: 400;
        letter-spacing: 2px;
        text-shadow: 0 4px 20px rgba(0,0,0,0.4);

        @media screen and (max-width: 768px) {
          font-size: 3.5rem;
        }
      }

      .your-world {
        font-style: italic;
        font-family: var(--font-sans);
        font-weight: 300;
      }
    }
  }

  /* Keyframe animations for entrance */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  #welcome {
    background-color: var(--color-light);
    padding: 8rem 10%;
    
    @media screen and (max-width: 1000px) {
      padding: 4rem 5%;
    }

    display: grid;
    column-gap: 6rem;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;

    @media screen and (max-width: 1000px) {
      column-gap: 4rem;
      row-gap: 4rem;
      grid-template-columns: 1fr;
    }

    .top-left {
      display: flex;
      flex-direction: column;
      row-gap: 2.5rem;
      padding-right: 2rem;

      @media screen and (max-width: 1000px) {
        row-gap: 2rem;
        padding-right: 0;
      }

      .welcome-to-our-world {
        span {
          display: block;
          font-size: 3.5rem;
          line-height: 1.1;
          color: var(--color-dark);
          
          @media screen and (max-width: 768px) {
            font-size: 2.5rem;
          }
        }
        .welcome-to {
          font-family: var(--font-sans);
          font-weight: 300;
          letter-spacing: 1px;
          color: var(--color-text-muted);
        }
        .our-world {
          font-family: var(--font-serif);
          font-style: italic;
        }
      }

      .welcome-text {
        color: var(--color-text-muted);
        line-height: 1.8;
        font-size: 1.1rem;
        font-weight: 300;
        max-width: 90%;
        
        @media screen and (max-width: 500px) {
          font-size: 1rem;
          line-height: 1.6;
          max-width: 100%;
        }
      }
    }

    .right {
      position: relative;
      overflow: hidden;
      border-radius: 4px;
      box-shadow: var(--shadow-premium);

      img {
        width: 100%;
        display: block;
        margin: auto;
        transition: transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);

        &:hover {
          transform: scale(1.05);
        }
      }
    }

    .bottom-left {
      grid-column: 1 / -1;
      display: flex;
      justify-content: center;
      margin-top: 4rem;
      
      img {
        width: 80%;
        border-radius: 4px;
        box-shadow: var(--shadow-premium);
        transition: transform 1.2s ease;

        &:hover {
          transform: scale(1.03);
        }

        @media screen and (max-width: 768px) {
          width: 100%;
        }
      }
    }
  }
}
</style>