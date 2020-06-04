<template>
	<div id="app" :class="{'hide-menu' : !isMenuVisible}">
		<Header title="Cod3r - Base de Conhecimento" 
			:hideToggle="false"
			:hideUserDropDown="false" />
		<Menu/>
		<Content/>
		<Footer/>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import Header from './components/template/Header'
import Menu from './components/template/Menu'
import Content from './components/template/Content'
import Footer from './components/template/Footer'
export default {
	name: "App",
	components: { Header, Menu, Content, Footer },
	computed: mapState(['isMenuVisible'])
}
</script>

<style>
	* {
		font-family: "Lato", sans-serif;
	}

	body {
		margin: 0;
	}

	#app {
		-webkit-web-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		height: 100vh;
		display: grid;
		grid-template-rows: 60px 1fr 40px;
		grid-template-columns: 300px 1fr;
		grid-template-areas:  
			"header header"
			"menu content"
			"menu footer" 
	}

	.title {
		font-size: 1.2rem;
		color: #fff;
		font-weight: 100;
		flex-grow: 1;
		text-align: center;
	}

	.title a {
		color: #fff;
		text-decoration: none;
	}

	header.header > a.toggle {
		width: 60px;
		height: 100%;
		color: #fff;
		justify-self: flex-start;
		text-decoration: none;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	header.header > a.toggle:hover {
		background-color: rgba(0, 0, 0, 0.2);
	}

	#app.hide-menu {
		grid-template-areas:  
			"header header"
			"content content"
			"footer footer"
	}

</style>