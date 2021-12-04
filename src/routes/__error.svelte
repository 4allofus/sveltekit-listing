<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				title: `${status}: ${error.message}`
			}
		};
	}
</script>

<script>
import { Alert } from "spaper";
import 'papercss/dist/paper.min.css'

	export let title;
</script>

	<div class="row flex-middle">
		<div class="sm-6 col">
			<Alert type="danger"><h1>{title}</h1></Alert>
		</div>
	</div>
