
<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <header class="modal-header">
          <slot name="header">This is the default tile!</slot>
          <button type="button" class="btn-close" @click="close">x</button>
        </header>
        <section class="modal-body">
          <slot name="body">
              Default body
          </slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            <!-- <button type="button" class="btn-green" @click="close">Close me!</button> -->
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modal",
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>


<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #000;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border: white solid 1px;
  min-width: 230px;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #fff;
  color: #fff;
  justify-content: space-between;
}

.modal-footer {
  border-bottom: 1px solid #fff;
  color: #fff;

  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
  color: #fff;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding-left: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #fff;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>