<script setup>
import loginIcon from "@/assets/images/loginIcon.jpg"
import bgLoginIcon from "@/assets/images/bgLoginIcon.jpg"
import googleIcon from "@/assets/images/googleIcon.png"

import { reactive, ref } from "vue";
import axios from "axios";

let confirmedPass = ref('')
const form = ref({
    name: "",
    email: "",
    password: ""
});

async function submitRegisterForm() {

    try {
        const res = await axios.post("http://127.0.0.1:8000/api/user", form.value);

        console.log("Register success", res.data);



        // const response = await axios.post("/users", form)
        // const data = response.data
        // console.log(data);
    } catch (error) {
        console.error("Axios error:", error.response)
    }
}

</script>
<template>
    <div class="w-screen h-screen flex flex-row">
        <div class="flex-1">
            <img :src="bgLoginIcon" class="w-full h-full object-cover" />
        </div>
        <div class="w-[456px] h-full p-[48px]">
            <div class="flex flex-row justify-start items-center gap-5">
                <img :src="loginIcon" class="w-20 h-20 rounded-full" />
                <p class="text-2xl font-semibold">Register</p>
            </div>

            <form @submit.prevent="submitForm" class="mt-10 flex flex-col gap-5">
                <div class="flex flex-col gap-2">
                    <label class="font-light">User Name</label>
                    <input v-model="form.name" type="text" class="w-full h-10 bg-gray-200 p-5 rounded-lg"
                        placeholder="Email or phone number" />
                </div>
                <div class="flex flex-col gap-2">
                    <label class="font-light">Email</label>
                    <input v-model="form.email" type="text" class="w-full h-10 bg-gray-200 p-5 rounded-lg"
                        placeholder="Email or phone number" />
                </div>
                <div class="flex flex-col gap-2">
                    <label class="font-light">Password</label>
                    <div class="relative">
                        <input v-model="form.password" type="password" class="w-full h-10 bg-gray-200 p-5 rounded-lg"
                            placeholder="Enter password" />
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <label class="font-light">Confirm Password</label>
                    <div class="relative">
                        <input v-model="confirmedPass" type="password" class="w-full h-10 bg-gray-200 p-5 rounded-lg"
                            placeholder="Repeat your password" />
                    </div>
                </div>



                <button @click="submitRegisterForm" type="submit"
                    class="bg-black text-white font-semibold cursor-pointer p-2 rounded-lg"> Sign
                    up</button>
                <div class="flex flex-row justify-center items-center">
                    <p>Already have account ? <a href="/login" class="cursor-pointer font-semibold">Sign in now</a></p>
                </div>
            </form>
        </div>
    </div>
</template>