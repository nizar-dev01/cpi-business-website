<template>
</template>
<script setup>
	const route = useRoute()
	const service = route.params.service
	const default_service = "ip-creation"
	if (!service) {
		const router = useRouter()
		router.replace("/services/" + default_service)
	}
</script>