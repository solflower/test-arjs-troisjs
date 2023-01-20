<template>
  <form style="width: 25rem" class="container flex justify-center">
    <div class="text-center">
      <h4 class="mt-4 mb-4">ยินดีต้อนรับ</h4>
    </div>
    <!-- Email input -->
    <div class="form-group m-3">
      <input
        type="email"
        id="form2Example1"
        class="form-control"
        placeholder="ชื่อบัญชี"
      />
    </div>

    <!-- Password input -->
    <div class="form-group m-3">
      <input
        type="password"
        id="form2Example2"
        class="form-control"
        placeholder="รหัสผ่าน"
      />
    </div>

    <!-- Submit button -->
    <div class="d-grid gap-2 m-3">
      <button type="submit" class="submit-btn mb-2">เข้าสู่ระบบ</button>
    </div>

    <div class="d-grid gap-2 m-3">
      <button type="submit" class="submit-btn mb-2" @click="redirect">โหมดไม่ระบุตัวตน</button>
    </div>

    <!-- forget password -->
    <div class="text-center mb-4">
      <a href="" style="color: #767676">ลืมรหัสผ่าน?</a>
    </div>

    <!-- if not a member then signup -->
    <div class="text-center" style="color: #767676">
      <p>
        ยังไม่ใช่สมาชิก?
        <a href="/signup" style="color: #767676; font-weight: bold">ลงทะเบียน</a>
      </p>
    </div>
  </form>
</template>
<script>
export default {  
  methods: {
    redirect() {
      this.$router
        .push({ path: '/ar' })
        .then(() => { this.$router.go() })
    },
  }
}
</script>

<style>
.submit-btn {
  background-color: #006664;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem 1.25rem;
}

.submit-btn:hover {
  background-color: #00545f;
  color: white;
}
</style>