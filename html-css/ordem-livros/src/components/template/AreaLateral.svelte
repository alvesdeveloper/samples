<script>
	import Menu from './Menu.svelte';
	import MenuItem from './MenuItem.svelte';
</script>

<aside class="flex w-72 flex-col gap-10 self-start rounded-md border border-zinc-800 p-5">
	<Menu titulo="Navegação">
		<MenuItem texto="Início" href="/" />
		<MenuItem texto="Personagens" href="/personagens" />
		<MenuItem texto="Autores" href="/autores" />
		<MenuItem texto="Séries" href="/series" />
	</Menu>
	<Menu titulo="Principais Autores">
		<MenuItem texto="J.K. Rowling" href="/" />
		<MenuItem texto="J.R.R. Tolkien" href="/" />
		<MenuItem texto="George R.R Martin" href="/autores/george-martin" />
	</Menu>
	<Menu titulo="Outras Categorias">
		<MenuItem texto="Últimas Notícias" href="/" />
		<MenuItem texto="Séries Populares" href="/" />
		<MenuItem texto="Facebook" href="/" />
		<MenuItem texto="Instagram" href="/" />
		<MenuItem texto="Youtube" href="/" />
	</Menu>
</aside>
