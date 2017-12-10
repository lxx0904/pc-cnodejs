<template>
	<div class="mian">
		<div class="content-bd">
			<div class="panel">
				<div class="cell hover" v-for="item in items">
					<div class="user-avatar">
						<img :src="item.author.avatar_url" :title="item.author.loginname">
					</div>
					<div class="reply-count">
						<span class="count-replies" title="回复数">{{item.reply_count}}</span>
						<span class="count-seperator">/</span>
						<span class="count-visits" title="点击数">{{item.visit_count}}</span>
					</div>
					<div class="last-time">
						<img class="user-small-avatar" :src="item.author.avatar_url">
    					<span class="last-active-time">{{item.last_reply_at | timeAgo}}</span>
					</div>
					<div class="title-wrapper">
						<span :class="item.top ? 'put-top' : 'topiclist-tab'">{{item.tab | changetext(item.top)}}</span>
						<router-link :to="{ path: '/topic', query: { id: item.id }}" class="topic-title" :title="item.title">{{item.title}}</router-link>
					</div>
				</div>
				<v-page @change="pageChange" v-if="showPage"></v-page>
			</div>
		</div>
	</div>
</template>

<script>

import Page from '@/components/Page'

export default {
	name: 'Home',
	data () {
		return {
		  items: [],
		  currentPage: 1,
		  showPage : false
		}
	},
	components: {
	  	vPage: Page
	},
	filters: {
		timeAgo: function(arg){
		    let nowDate = new Date();
		    let replyDate = new Date(arg);
		    let diffSeconds = (nowDate.getTime()-Number(replyDate.getTime()))/1000;
		    let years = 365*24*60*60;
		    let months = 30*24*60*60;
		    let days = 24*60*60;
		    let hours =  60*60;
		    let minutes = 60;
		    let seconds = 1;
		    if(diffSeconds<seconds){
		        return '1秒以前'
		    }else if(seconds<=diffSeconds&&diffSeconds<minutes){
		        return Math.floor(diffSeconds/seconds)+'秒前'
		    }else if(minutes<=diffSeconds&&diffSeconds<hours){
		        return Math.floor(diffSeconds/minutes)+'分钟前'
		    }else if(hours<diffSeconds&&diffSeconds<days){
		        return Math.floor(diffSeconds/hours)+'小时前'
		    }else if(days<diffSeconds&&diffSeconds<months){
		        return Math.floor(diffSeconds/days)+'天前'
		    }else if(months<diffSeconds&&diffSeconds<years){
		        return Math.floor(diffSeconds/months)+'个月前'
		    }else{
		        return Math.floor(diffSeconds/years)+'年前'
		    }
		},
		changetext: function(arg, top){
			if(top){
				return "置顶"
			}else{
				switch(arg)
				{
				case "good":
				  return "精华"
				  break;
				case "share":
				  return "分享"
				  break;
				case "ask":
				  return "问答"
				  break;
				case "job":
				  return "招聘"
				  break;
				case "dev":
				  return "客户端测试"
				  break;
				}
			}
		}
	},
	methods: {
        getList () {
            const that = this;
			this.$http({
		        method: 'get',
		        url: 'https://cnodejs.org/api/v1/topics',
		        params: {
		        	page: that.currentPage,
		        	mdrender: false
		        }
		    }).then(function(response) {
				if(response.data.success){
					that.items = response.data.data
					that.showPage = true
				}
			});
        },
		pageChange (page) {
            this.currentPage = page
            this.getList()
        }
	},
	mounted: function() {
		this.getList()
	}
}
</script>

<style scoped>
	@import "../assets/css/home.css"
</style>