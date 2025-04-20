<script>
	export let href = '/';
	export let texto = '';
</script>

<li>
	<a
		{href}
		class="
		flex cursor-pointer gap-2 px-4 py-2 text-zinc-300
		 hover:bg-white/10 hover:text-white hover:underline"
	>
		<span>{texto}</span>
	</a>
</li>
