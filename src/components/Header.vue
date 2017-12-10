<template>
	<div class="header">
		<div class="header-inner">
			<div class="container">
				<div class="brand">
					<router-link to="/">
						<img src="../assets/images/cnodejs_light.png" />
					</router-link>
				</div>
				<div class="header-serach">
					<input type="text" name="q" id="q" class="serach-query" />
				</div>
				<ul class="nav">
					<li>
						<router-link to="/">首页</router-link>
					</li>
					<li>
						<router-link to="/getstart">新手入门</router-link>
					</li>
					<li>
						<router-link to="/api">API</router-link>
					</li>
					<li>
						<router-link to="/about">关于</router-link>
					</li>
					<li>
						<router-link to="/new">注册</router-link>
					</li>
					<li>
						<router-link to="/signin">登录</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	
</script>

<style scoped>
	.header{
		position: relative;
		background-color: #444;
	}
	.header-inner{
		width: 90%;
		margin: 0 auto;
		padding: 5px;
		min-height: 40px;
	}
	.container{
		width: 100%;
		max-width: 1400px;
		min-width: 960px;
		margin: 0 auto;
	}
	.brand a{
    	float: left;
    	margin-left: -20px;
		display: block;
		width: 120px;
		height: 34px;
		padding: 3px 20px;
	}
	.brand img{
		max-width: 100%;
	}
	.header-serach{
		float: left;
		margin-top: 5px;
	}
	.serach-query{
	    background: url(../assets/images/search.png) 4px 4px no-repeat #888;
	    padding: 3px 5px 3px 22px;
	    color: #666;
	    border: 0;
	    margin-top: 2px;
	    border-radius: 15px;
	    font-size: 13px;
	    font-weight: 400;
    	line-height: 1;
    	height: 20px;
    	width: 206px;
    	outline:none;
	}
	.serach-query.focused, .serach-query:focus{
	    background-color: #fff;
	}
	.nav{
		float: right;
		list-style-type: none;
	    display: block;
	    margin: 0;
	    padding: 0;
	}
	.nav > li{
		float: left;
		margin: 0;
		padding: 0;
	}
	.nav > li a{
		display: block;
		color: #ccc;
		text-decoration: none;
		padding: 10px 15px;
		font-size: 13px;
	}
	.nav > li a:hover{
		color: #ffffff;
	}
</style>