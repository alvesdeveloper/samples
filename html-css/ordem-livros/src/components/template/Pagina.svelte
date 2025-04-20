<script>
	import AreaLateral from './AreaLateral.svelte';
	import Cabecalho from './Cabecalho.svelte';
	import Rodape from './Rodape.svelte';
</script>

<div class="flex min-h-screen flex-col bg-black text-white">
	<Cabecalho />
	<div class="mx-auto flex w-full max-w-7xl flex-1 p-5">
		<main class="flex-1">
			<slot></slot>
			<!-- SLOT serve para renderizar o conteúdo do componente, quem estiver usando o componente PAGINA, vai poder colocar o conteúdo que quiser dentro do slot -->
		</main>
		<AreaLateral />
	</div>

	<Rodape />
</div>
