<template>
	<div class="mian">
		<div class="sideber" v-if="result.author">
			<div class="panel">
			    <div class="header author-header">
			    	作者
			    </div>
			    <div class="panel-inner">
			    	<div class="user-card">
			    		<div class="clearfix">
			    			<img class="user-avatar" :src="result.author.avatar_url" :title="result.author.loginname">
					    	<span class="user-name" :title="result.author.loginname">{{result.author.loginname}}</span>
			    		</div>
					    <div class="board">积分: -</div>
					    <span class="signature">“ - ”</span>
					</div>
			    </div>
			</div>
		</div>
		<div class="content-bd" v-if="result.author">
			<div class="panel">
				<div class="header">
			      	<div class="topic-full-title">
						<span :class="result.top ? 'put-top' : 'topiclist-tab'">{{result.tab | changetext(result.top)}}</span> {{result.title}}
			      	</div>
				    <div class="changes">
				        <span> 发布于 {{result.create_at | timeAgo}}</span>
				        <span> 作者 {{result.author.loginname}}</span>
				        <span> {{result.visit_count}} 次浏览</span>
				        <span> 来自 {{result.tab | changetext1}}</span>
				    </div>
				</div>
				<div class="panel-inner">
					<div class="topic-content" v-html="result.content"></div>
				</div>
			</div>
			<div class="panel">
				<div class="header replay-header">
			      <span class="col-fade">{{result.replies.length}} 回复</span>
			    </div>
			    <div :class="['cell', {'reply-highlight' : item.is_uped}]" v-for="(item, index) in result.replies">
			    	<div class="author-content" v-if="item.author">
			    		<img class="user-avatar" :src="item.author.avatar_url" :title="item.author.loginname">
			    		<div class="user-info">
			    			<span class="replay-author">{{item.author.loginname}}</span>
			    			<span class="replay-time">{{index+1}}楼•{{item.create_at | timeAgo}}</span>
			    		</div>
			    		<div class="user-active">
			    			<img src="../assets/images/up.png" />
			    			<span class="up-count">{{item.ups.length}}</span>
			    		</div>
			    	</div>
			    	<div class="reply-content" v-html="item.content"></div>
			    </div>
			</div>
		</div>
		<v-backTop></v-backTop>
	</div>
</template>

<script>

import BackTop from '@/components/BackTop'

export default {
	name: 'Topic',
	data () {
		return {
		  result: {}
		}
	},
	components: {
	  	vBackTop: BackTop
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
		},
		changetext1: function(arg){
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
	},
	mounted: function() {
		const id = this.$route.query.id
		const that = this;
		this.$http({
	        method: 'get',
	        url: 'https://cnodejs.org/api/v1/topic/'+id,
	        params: {
	        }
	    }).then(function(response) {
			if(response.data.success){
				that.result = response.data.data
			}
		});
	}
}
</script>

<style>
	@import "../assets/css/home.css"
</style>