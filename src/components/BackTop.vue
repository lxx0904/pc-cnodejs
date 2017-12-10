<template>
	<div class="backTop" v-if="showTop" @click="toTop">
		回到顶部
	</div>
</template>

<script>
export default {
    name: 'backTop',
    data () {
        return {
            showTop: false,
            run: true,
            timer: null
        }
    },
    mounted () {
        this.$nextTick(function () {  
             window.addEventListener('scroll', this.needToTop);  //滚动事件监听  
        })
    },
    methods: {
        needToTop: function () {
            let curHeight = document.documentElement.scrollTop || document.body.scrollTop
            let viewHeight = document.documentElement.clientHeight; 
            if (curHeight > viewHeight + 500) {
                this.showTop = true
            } else {
                this.showTop = false
            }
        },
        toTop: function () {
            if (this.run) {
                clearInterval(this.timer)
                this.timer = setInterval(() => {
                    let curHeight = document.documentElement.scrollTop || document.body.scrollTop
                    let speed = (0 - curHeight) / 7
                    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                    if(curHeight <= 0) {
                        clearInterval(this.timer)
                        this.run = true
                    }
                    document.documentElement.scrollTop = (curHeight + speed < 0 ? 0 : curHeight + speed);
                    document.body.scrollTop = (curHeight + speed < 0 ? 0 : curHeight + speed); //为了兼容 谷歌
                }, 30)
                this.run = false
            }
        }
    }
}
</script>

<style scoped>
	.backTop{
        position: fixed;
        right: 0;
        bottom: 200px;
        width: 24px;
        color: gray;
        padding: 12px 0 12px 5px;
        cursor: pointer;
        text-align: center;
        z-index: 20;
        background-color: #f5f5f5;
        border-radius: 12px 0 0 12px;
        border: 1px solid #ccc;
        border-right: 0;
    }
</style>