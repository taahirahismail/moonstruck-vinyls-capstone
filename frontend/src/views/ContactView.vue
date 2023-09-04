<template>
  <div class="row p-3 media">
    <h1 class="p-4 text-center heading-text">Contact Us !</h1>
    <div class="p-2 col-7 card blue-bg light-border light-text media-2">
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

        <div>
          <button type="submit" class="btn m-2 p-2 sub-btn">Submit!</button>
          <button type="reset" class="btn m-2 p-2 clr-btn">Clear Fields</button>
        </div>
      </form>
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

.blue-bg {
  background: #0a192f;
  color: #f4f4f4;
}

.light-border {
  border: 2px solid #f4f4f4;
}

.light-bg {
  background: #f4f4f4;
}

.sub-btn,
.clr-btn {
  background: #0a192f;
  color: #ffd700;
  border: 3px solid #ffd700;
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

.sub-btn:hover,
.clr-btn:hover {
  background: #010111;
  color: #ffd700;
  box-shadow: 0 0 15px 2.5px #ffd700;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}
</style>
