<template>
    <div>
        <input type="file" name="" id="" @change="fileChange">
        <img :src="baseUrl" alt="" ref="img">
    </div>
</template>

<script setup lang='ts'>
import { ref, nextTick } from "vue";
import { saveAs } from "file-saver";
const img = ref<HTMLImageElement>();

const baseUrl = ref('')
const fileChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const files = target.files;
    if (files) {
        const file: File = files[0];
        console.log(file);

        const fr = new FileReader();
        fr.readAsDataURL(file);
        fr.onload = () => {
            baseUrl.value = fr.result as string;
            nextTick(() => {
                const pressCanvas = document.createElement('canvas');
                const ctx = pressCanvas.getContext("2d");
                if (img.value) {
                    pressCanvas.width = img.value.width;
                    pressCanvas.height = img.value.height;
                    ctx?.drawImage(img.value, 0, 0, 400, 200);
                    pressCanvas.toBlob((blob) => {
                        console.log(blob);
                        saveAs(blob, 'tp.png')
                    }, "image/png", 0.6)
                }
            })
        }
    }



    // drawImage
    // toBlob, toDataURL 压缩
}

</script>
<style scoped>
img {
    height: 300px;
    width: 600px;
    border: 1px solid #333;
}
</style>