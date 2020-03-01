<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        mounted() {
            // 检查用户设备
            var u = navigator.userAgent;
            if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
                // 安卓
                this.$notify.error({
                    title: '提示',
                    message: '暂未做APP自适应 请移步PC端',
                    duration: 0,
                    showClose: false
                });
            } else if (u.indexOf('iPhone') > -1) {
                //  苹果
                this.$notify.error({
                    title: '提示',
                    message: '暂未做APP自适应 请移步PC端',
                    duration: 0,
                    showClose: false
                });
            } else if (u.indexOf('Windows') > -1) {
                // PC
                this.$notify({
                    title: '提示',
                    message: '此版本为内测版 功能未开发完毕',
                    type: 'warning',
                    position: 'bottom-right'
                });
            }
        }
    }
</script>