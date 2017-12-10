<template>
	<div class="page">
		<ul class="pagination">
	        <li
                :class="{'disabled' : index === 1}" 
	        	@click="prev"><a href="javascript:;">«</a></li>
	        <li
	        	class="more"
	        	v-if="showPrevMore"><a>...</a></li>
	        <li
	        	:class="{'active' : index === pager}"
	        	v-for="pager in pagers"
	        	@click="go(pager)"><a href="javascript:;">{{ pager }}</a></li>
			<li
        		class="more"
        		v-if="showNextMore"><a>...</a></li>
	        <li 
	        	@click="next"><a href="javascript:;">»</a></li>
    	</ul>
	</div>
</template>

<script>
export default {
	name: 'page',
	data () {
        return {
            index : this.pageIndex,
            showPrevMore : false,
            showNextMore : true
        }
    },
	props: {
		//页面中的可见页码，其他的以...替代, 必须是奇数
		perPages : { 
            type : Number,
            default : 5 
        },
		//当前页码
        pageIndex : {
            type : Number,
            default : 1
        }
	},
	computed : {
		//计算页码，当count等变化时自动计算
        pagers () {
            const array = []
            const perPages = this.perPages
            let current = this.index
            const _offset = (perPages - 1) / 2

            
            const offset = {
                start : current - _offset,
                end   : current + _offset
            }

            if (offset.start < 1) {
                offset.end = offset.end + (1 - offset.start)
                offset.start = 1
            }
            if (offset.start < 1) offset.start = 1

            this.showPrevMore = (offset.start > 1)

            for (let i = offset.start; i <= offset.end; i++) {
                array.push(i)
            }

            return array
        }
	},
	methods: {
		prev(){
            if (this.index > 1) {
            	console.log(this.index)
                this.go(this.index - 1)
            }
        },
        next(){
            this.go(this.index + 1)
        },
        go (page) {
            this.index = page
            this.$emit('change', this.index)
        }
	}
}
</script>

<style scoped>
	.page{
		margin: 10px 0 0 10px;
		line-height: 0;
		font-size: 0;
	}
	.pagination{
		display: inline-block;
	    padding: 0;
	    margin: 0;
	    font-size: 0;
	    list-style: none;
	    user-select: none;
	}
	.pagination li{
		display: inline;
	}
	.pagination a{
		float: left;
		font-size: 14px;
        position: relative;
        padding: 6px 12px;
        line-height: 1.42857143;
        text-decoration: none;
        border: 1px solid #ccc;
        background-color: #fff;
        margin-left: -1px;
        color: #778087;
	}
	.pagination li.active a{
        color: #80bd01;
    }
    .pagination li.disabled  a {
        cursor: not-allowed;
        opacity: .75;
    }
    .pagination li:hover a{
        background-color: #f5f5f5;
    }
</style>