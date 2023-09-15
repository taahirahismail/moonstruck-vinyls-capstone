<template>
  <div class="row p-3 star-bg">
    <h1 class="p-4 text-center heading-text">Contact Us !</h1>

    <div class="my-3 d-flex justify-content-center media">
      <div class="m-2 p-2 col-7 card blue-bg light-border light-text media-2">
        <form action="https://formspree.io/f/xqkvbqaj" method="POST" class="p-3">
          <div class="mb-3">
            <label for="fullName" class="form-label">Full Name(s): *</label>
            <input
              v-model="fullName"
              type="text"
              id="fullName"
              name="Full Name"
              class="form-control p-2 light-bg"
              placeholder="eg: Clayton Margaret Sherman"
              required
              oninvalid="this.setCustomValidity('Please enter your full name.')"
              oninput="this.setCustomValidity('')"
            />
          </div>
  
          <div class="mb-3">
            <label for="email" class="form-label">Email: *</label>
            <input
              v-model="email"
              type="text"
              id="email"
              name="Email"
              class="form-control p-2 light-bg"
              placeholder="eg: claytonmsherman@hotmail.com"
              required
              oninvalid="this.setCustomValidity('Please enter a valid email address.')"
              oninput="this.setCustomValidity('')"
            />
          </div>
  
          <div class="mb-3">
            <label for="message" class="form-label">Message:</label>
            <textarea
              v-model="message"
              id="message"
              name="Message"
              class="form-control p-2 light-bg"
              rows="5"
              placeholder="Leave us a message and we'll get back to you soon!"
            ></textarea>
          </div>
  
          <span>* indicates a required field.</span>
  
          <div class="d-flex align-items-center justify-content-center">
            <button type="submit" class="btn m-2 p-2 sub-btn">Submit!</button>
            <button type="reset" class="btn m-2 p-2 clr-btn">Clear Fields</button>
          </div>
        </form>
      </div>
  
      <div class="m-2 px-3 py-4 col-4 card purple-bg light-border media-2">
        <h3 class="text-center heading-text">Get in Touch with Our Customer Support :</h3>

        <span class="my-2 p-3 text-fix">
          <strong>Email :</strong> <br>
          <a href="mailto:taahirah.i@gmail.com"> msvinyls@unreal.com</a>
        </span>

        <span class="my-2 p-3 text-fix">
          <strong>Mobile :</strong> <br>
          <a href="tel:+27731735326">012 345 6789</a>
        </span>

        <span class="my-2 p-3 text-fix">
          <strong>Post :</strong> <br>
          P. O. Box 79384, Upper Lotus, 7941 
        </span>
      </div>
    </div>

    <hr class="text-center" style="height: 2px; background-color: #f4f4f4; color: #f4f4f4;">

    <div class="row my-2 p-3">
      <h2 class="text-center gold-text">Thank you for choosing Moonstruck Vinyl's ! We look forward to hearing from you !</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullName: "",
      email: "",
      message: "",
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.heading-text {
  font-family: "Archivo Black", sans-serif;
}

.gold-text {
  color: #ffd700;
  font-family: 'Montserrat Alternates', sans-serif;
}

.text-fix {
  font-size: 125%;
}

.blue-bg {
  background: #0a192f;
  color: #f4f4f4;
}

.purple-bg {
  background: #2D1128;
  color: #f4f4f4;
}

.star-bg {
  background-image: url('https://i.postimg.cc/tC6TPGSj/other-stars.png');
  background-repeat: no-repeat;
  background-position: fixed;
  background-size: cover;
  background-attachment: fixed;
}


.light-border {
  border: 2px solid #f4f4f4;
}

.light-bg {
  background: #f4f4f4;
}

.sub-btn,
.clr-btn {
  background: #ffd700;
  color: #0a192f;
  border: 3px solid #0a192f;
}

.sub-btn:hover,
.clr-btn:hover {
  background: #0a192f;
  color: #ffd700;
  border: 3px solid #ffd700;
}

a {
  text-decoration: none;
  color: #f4f4f4;
}

a:hover {
  color: #ffd700;
}

@media screen and (max-width: 800px) {
  .purple-bg {
    font-size: 12px;
  }

  .purple-bg>h3 {
    font-size: 20px;
  }
}

@media screen and (max-width: 650px) {
  .media {
    display: flex !important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .media-2 {
    width: 90%;
  }

  .purple-bg {
    font-size: 20px;
  }

  .purple-bg>h3 {
    font-size: 30px;
  }
}

@media screen and (max-width: 500px) {
  .purple-bg {
    font-size: 15px;
  }

  .purple-bg>h3 {
    font-size: 20px;
  }
}

@media screen and (max-width: 350px) {
  .purple-bg {
    font-size: 12px;
  }

  .purple-bg>h3 {
    font-size: 17px;
  }
}
</style>
