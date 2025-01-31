<template>

	<div class="c-form-container">
		<h2 class="c-form-title">
			Contact
		</h2>
		<!-- Assistant 1 -->
		<div class="c-assistant-box first">
			<div class="cas-avatar-box">
				<img
					src="@/assets/images/contact/len.png"
					alt="Image of a person"
					class="cas-avatar"
				/>
			</div>
			<div class="cas-message-box">
				<span class="hello">
					Hi! I'm Len and would love to hear about your project request.
				</span> <br>
				<span class="msg">
					Please drop me a line on
					<a
						class="mail-link"
						href="mailto:project@cpibusiness.net"
					>project@cpibusiness.net</a>
				</span>
			</div>
		</div>
		<!-- /Assistant 1 -->

		<!-- Assistant 2 -->
		<!-- <div class="c-assistant-box first">
			<div class="cas-avatar-box">
				<img
					src="@/assets/images/contact/manager.png"
					alt="Image of a person"
					class="cas-avatar"
				/>
			</div>
			<div class="cas-message-box">
				<span class="hello">
					Need to contact with management
					directly?
				</span>
				<span class="msg">
					Then send me a mail to
					<a
						class="mail-link"
						href="mailto:managment@cpibusiness.net"
					>managment@cpibusiness.net</a>
				</span>
			</div>
		</div> -->
		<!-- /Assistant 2 -->

		<!-- Quick Icons -->
		<div class="contact-info-container">
			<!-- Quick Icons -->
			<div class="ci-row">
				<!-- Icon 1 -->
				<div class="qi-col">
					<a
						class="qi-item"
						href="tel:+97144332447"
					>
						<div class="qii-box">
							<icon-phone class="qi-icon" />
						</div>
						<span class="qi-text">
							Call
						</span>
					</a>
				</div>
				<!-- /Icon 1 -->

				<!-- Icon 2 -->
				<div class="qi-col">
					<a
						class="qi-item"
						href="mailto:project@cpibusiness.net"
					>
						<div class="qii-box">
							<icon-mail class="qi-icon" />
						</div>
						<span class="qi-text">
							Mail
						</span>
					</a>
				</div>
				<!-- /Icon 2 -->

				<!-- Icon 3 -->
				<div class="qi-col">
					<a
						class="qi-item"
						href="https://maps.google.com/maps?q=25.062705993652344%2C55.13797378540039&z=17&hl=en"
						target="_blank"
					>
						<div class="qii-box">
							<icon-route class="qi-icon" />
						</div>
						<span class="qi-text">
							Route
						</span>
					</a>
				</div>
				<!-- /Icon 3 -->
				<!-- </div> -->
				<!-- /Quick Icons -->
				<!-- <div class="ci-row"> -->
				<div
					class="ci-col"
					v-for="item in [
						{
							title: 'Phone',
							content: '+971 44 332447'
						},
						{
							title: 'Email',
							content: 'support@cpibusiness.net'
						},
						{
							title: 'Address',
							content: '206, 25th Floor Dome tower, Cluster N DMCC, JLT, Dubai,United Arab Emirates'
						}
					]"
				>
					<div class="ci-item">
						<span class="ci-title">
							{{ item.title }}
						</span>
						<p class="ci-content">
							{{ item.content }}
						</p>
					</div>
				</div>
			</div>
		</div>
		<!-- /Quick Icons -->
	</div>
</template>
<script setup>
</script>
<style lang="scss" scoped>
.c-form-container {
	max-width: 490px;
}

.c-form-title {
	font-size: 83px;
	margin: 0 0 20px;

	@include md {
		font-size: 70px
	}

	@include sm {
		font-size: 65px;
	}
}

.c-assistant-box {
	display: flex;
	align-items: center;
	justify-content: left;
	border: 1px solid #484848;
	border-radius: 10px;
	padding: 22px 25px;

	&.first {
		margin-bottom: 20px;
	}

	@include sm {
		flex-wrap: wrap;
	}
}

.cas-avatar-box {
	height: 75px;
	width: 75px;
	overflow: hidden;
	flex-shrink: 0;
	border-radius: 50%;
	margin-right: 17px;

	.cas-avatar {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@include sm {
		margin-bottom: 15px;
	}
}

.cas-message-box {
	font-size: 20px;
	font-weight: 400;

	.hello {
		color: rgba(255, 255, 255, 0.5);
	}

	.msg {
		color: white;

		.mail-link {
			color: white;
			text-decoration: underline;
		}
	}
}


// Quick Icons
.contact-info-container {
	width: 100%;
	overflow: hidden;
}

.ci-row {
	display: flex;
	margin: -8px;
	flex-wrap: wrap;
}

.qi-col {
	padding: 8px;
	flex-grow: 1;
}

.qi-item,
.ci-item {
	display: flex;
	background: rgba(255, 255, 255, 0.05);
	border-radius: 10px;
	overflow: hidden;
	flex-direction: column;
	padding: 20px;
	height: 100%;
	text-decoration: none;
	color: inherit;
}

.qi-item {

	justify-content: center;
	align-items: center;

	.qii-box {
		margin-bottom: 7px;
	}

	.qi-text {
		font-size: 13px;
		color: rgba(255, 255, 255, 0.5);
	}
}

.ci-col {
	width: 100%;
	padding: 8px;
}

.ci-item {
	.ci-title {
		font-size: 14px;
		color: rgba(255, 255, 255, 0.5);
		margin: 0 0 5px;
	}

	.ci-content {
		font-size: 19px;
		color: white;
		margin: 0;
		font-weight: 500;
	}
}

.qi-icon {
	@include sm {
		width: 30px;
		height: 40px;
	}
}
</style>