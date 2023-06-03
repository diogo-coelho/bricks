<script setup>
import BrBreadcrumb from '../../src/components/breadcrumb/BrBreadcrumb.vue'
</script>

# BrBreadcrumb <Badge type="warning" text="beta" />

`BrBreadcrumb` proporciona links que auxiliam com que o usuário navegue com mais facilidade pela hierarquia do site.

<BrBreadcrumb
	:items="[
		{ text: 'Home', href: '../example/home/index' },
		{ text: 'Section', href: '../example/home/section/index' },
		{ text: 'Article', href: '../example/home/section/article/index' },
	]"
></BrBreadcrumb>

```vue
<BrBreadcrumb
	:items="[
		{ text: 'Home', href: '../example/home' },
		{ text: 'Section', href: '../example/home/section' },
		{ text: 'Article', href: '../example/home/section/article' },
	]"
></BrBreadcrumb>
```

<style lang="scss">
@import '../../src/styles/index.scss'
</style>