<template>
  <footer>
    <section>
      <div>
        <img src="../assets/images/logo.svg" alt="logo" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          placeat vel? Accusantium reiciendis voluptate officia possimus.
        </p>
      </div>
      <div>
        <nav>
          <h3>Shakarcha</h3>
          <NuxtLink to="/">Asosiy sahifa</NuxtLink>
          <NuxtLink to="/about">Kategoriyalar</NuxtLink>
          <NuxtLink to="/about">Kolleksiyalar</NuxtLink>
        </nav>
        <nav>
          <h3>Huquqiy me'yorlar</h3>
          <NuxtLink to="/">Foydalanish shart</NuxtLink>
          <NuxtLink to="/about">Cookie Siyosati</NuxtLink>
          <NuxtLink to="/about">Mualliflik Huquqi</NuxtLink>
          <NuxtLink to="/about">Biz haqimizda</NuxtLink>
        </nav>
        <nav>
          <h3>Ijtimoiy Tarmoqlar</h3>
          <a href="">Facebook</a>
          <a href="">Instagram</a>
          <a href="">Telegram</a>
          <a href="">YouTube</a>
        </nav>
      </div>
    </section>
    <section>
      <p>© 2022 Shakarcha - Hamma huquqlar himoyalangan</p>
      <div id="social">
        <a href="">
          <img
            src="../assets/images/social/1820484_brand_facebook_logo_network_social_icon.svg"
            alt=""
          />
        </a>
        <a href="">
          <img
            src="../assets/images/social/2959742_broadcast_google_streaming_video_youtube_icon.svg"
            alt=""
          />
        </a>
        <a href="">
          <img
            src="../assets/images/social/2959748_instagram_photo_share_icon.svg"
            alt=""
          />
        </a>
        <a href="">
          <img
            src="../assets/images/social/9167906_telegram_chat_socialmedia_message_communication_icon.svg"
            alt=""
          />
        </a>
      </div>
    </section>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
footer {
  width: 100%;
  display: grid;
  padding: 0 40px;
  grid-template-columns: 100%;
  overflow: visible;
  &::before {
    content: "";
    position: absolute;
    z-index: -11;
    background-color: $oqkulrang;
    left: -50vw;
    left: -40px;
    right: -50vw;
    right: -40px;
    height: 100%;
    bottom: 0;
  }
  section {
    &:nth-child(1) {
      border-bottom: 1px solid $kulrang;
      padding: 60px 0;
      display: grid;
      grid-template-columns: 30% 60%;
      justify-content: space-between;
      align-items: center;
      img {
        &[alt="logo"] {
          height: 4em;
          margin-bottom: 30px;
        }
      }
      p {
        font-family: "Inter", "Century Gothic", sans-serif;
        color: $kulrang;
      }
      div {
        &:nth-child(2) {
          display: grid;
          grid-template-columns: repeat(3, 30%);
          justify-content: space-between;
          nav {
            display: flex;
            flex-direction: column;
            row-gap: 10px;
            font-size: 0.7em;
            a {
              font-family: "Inter", "Century Gothic", sans-serif;
              color: $kulrang;
              &:hover {
                color: $sabzirang;
              }
            }
          }
        }
      }
    }
    &:nth-child(2) {
      * {
        color: $kulrang;
        font-family: "Inter", "Century Gothic", sans-serif;
      }
      font-size: 0.8em;
      display: grid;
      grid-template-columns: repeat(2, 50%);
      align-items: center;
      padding: 20px 0;
      #social {
        display: flex;
        column-gap: 20px;
        justify-content: right;
        align-items: center;
        align-content: center;
        a {
          height: 3em;
          display: flex;
          align-items: center;
          transition: none;
          img {
            height: 20px;
            filter: invert(49%) sepia(7%) saturate(18%) hue-rotate(348deg)
              brightness(100%) contrast(97%);
          }
          &:hover {
            filter: invert(54%) sepia(88%) saturate(3492%) hue-rotate(341deg)
              brightness(104%) contrast(101%);
          }
        }
      }
    }
  }
}
</style>
