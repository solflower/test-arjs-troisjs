<template>
    <form style="width: 25rem;" class="container flex justify-center ">
        <div class ="text-center">
            <h4 class="mt-4 mb-4">สร้างบัญชี</h4>
        </div>
        <div class="form-group m-3">
            <input type="text" class="form-control" id="inputUsername" placeholder="ชื่อบัญชี">
        </div>
        <div class="form-group m-3">
            <input type="email" class="form-control" id="inputEmail" placeholder="อีเมล">
        </div>
        <div class="form-group m-3">
            <input type="password" class="form-control" id="inputPassword" placeholder="รหัสผ่าน">
        </div>
        <div class="d-grid gap-2 m-3">
            <button type="submit" class="submit-btn mb-2">ลงทะเบียน</button>
        </div>
        <!-- already have account -->
        <div class="text-center" style="color: #767676;">
            <p>มีบัญชีอยู่แล้ว? <a href="#!" style="color: #767676; font-weight: bold;">เข้าสู่ระบบ</a></p>
        </div>

    </form>
</template>

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