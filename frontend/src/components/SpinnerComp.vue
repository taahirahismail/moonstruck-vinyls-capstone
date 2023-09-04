<template>
  <div class="plate-spn">
    <div class="dark-blue-spn">
      <div class="border-spn">
        <div class="blue-spn">
          <div class="center-spn"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.plate-spn {
  width: fit-content;
}

.plate-spn .dark-blue-spn,
.plate-spn .blue-spn,
.plate-spn .center-spn,
.plate-spn .border-spn {
  border-radius: 100%;
}

.plate-spn .dark-blue-spn,
.plate-spn .blue-spn,
.plate-spn .border-spn {
  display: flex;
  align-items: center;
  justify-content: center;
}

.plate-spn .dark-blue-spn {
  width: 150px;
  height: 150px;
  background-color: #010111;
  animation: rotation 2s infinite linear;
  border: 2px solid #ffd700;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
}

.plate-spn .blue-spn {
  width: 70px;
  height: 70px;
  background-color: #0a192f;
  border: 1px solid #ffd700;
}

.plate-spn .center-spn {
  width: 20px;
  height: 20px;
  background-color: #ffd700;
}

.plate-spn .border-spn {
  width: 111px;
  height: 111px;
  border-top: 3px solid #f4f4f4;
  border-bottom: 3px solid #f4f4f4;
  border-left: 3px solid #010111;
  border-right: 3px solid #010111;
}
</style>
