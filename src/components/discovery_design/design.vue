<template>
  <section id="welcome">
    <div class="top-left">
      <h1 class="welcome-to-our-world">
        <span class="welcome-to"> Discovery Builders </span>
      </h1>
      <p class="welcome-text">
        Every Discovery property is wonderfully in-tune with its natural
        surroundings - a harmonious blend of the architecturally impressive with
        the environmentally sensitive. And your every expectation will be met,
        with our meticulous eye for detail matching outstanding levels of
        craftsmanship and master building.
      </p>
    </div>
    <div class="right">
      <img src="@/assets/images/img2.jpg" alt="Ocean View" />
    </div>
    <div class="bottom-left">
      <img src="@/assets/images/img6.jpg" alt="Leisure" />
    </div>
  </section>
</template>

<style scoped lang="scss">
#app {
  background-color: var(--color-light);
}

#welcome {
  display: flex;
  align-content: center;
  background-color: var(--color-light);
  padding: 8rem 10%;
  
  @media screen and (max-width: 1000px) {
    padding: 5rem 5%;
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
      padding-top: 0;
    }

    .welcome-to-our-world {
      span {
        display: block;
        font-size: 3.5rem;
        line-height: 1.1;
        color: var(--color-dark);
        font-family: var(--font-serif);
        font-weight: 400;
        
        @media screen and (max-width: 768px) {
          font-size: 2.8rem;
        }
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
    border-radius: 4px;
    overflow: hidden;
    box-shadow: var(--shadow-premium);

    @media screen and (max-width: 1000px) {
      padding: 0;
    }

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
    margin-top: 5rem;
    
    img {
      width: 70%;
      border-radius: 4px;
      box-shadow: var(--shadow-premium);
      transition: transform 1.2s ease;

      @media screen and (max-width: 768px) {
        width: 100%;
        margin-top: 2rem;
      }

      &:hover {
        transform: scale(1.03);
      }
    }
  }
}
</style>