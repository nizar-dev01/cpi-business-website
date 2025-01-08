import {
	defineStore
} from 'pinia'

const basePath = "/cpi-public/"
const blog_list = []

// Randomly fill blogs list
for (let i = 0; i < 10; i++) {
	blog_list.push({
		image: `https://picsum.photos/536/354?rand=${Math.random()}`,
		slug: "blog-" + (i + 1),
		title: "CPI Business is thriving in UAE",
		subject: "M-Escape",
		content: `<p><em>This is a Plain English Papers summary of a research paper called <a href="https://aimodels.fyi/papers/arxiv/contrast-continual-multi-source-adaptation-to-dynamic" target="_blank" rel="noopener noreferrer">MeTA: Test-Time Multi-Source Adaptation to Improve Model Robustness on Shifting Distributions</a>. If you like these kinds of analysis, you should join <a href="https://aimodels.fyi" target="_blank" rel="noopener noreferrer">AImodels.fyi</a> or follow me on <a href="https://twitter.com/mikeyoung44" target="_blank" rel="noopener noreferrer">Twitter</a>.</em></p> <h2> <a name="overview" href="#overview"> </a> Overview </h2> <ul> <li>This paper presents a new approach called MeTA (Multi-source Test Time Adaptation) for improving model performance on test data that differs from the training data.</li> <li>MeTA leverages multiple source domains during test time to adapt the model to a target domain, without requiring retraining.</li> <li>The authors evaluate MeTA on two benchmark datasets, Office-Home and CIFAR-10C, and perform an ablation study to analyze the key components of their approach.</li> </ul> <h2> <a name="plain-english-explanation" href="#plain-english-explanation"> </a> Plain English Explanation </h2> <p>In machine learning, models are often trained on one type of data (the "source domain") but then need to be used on a different type of data (the "target domain"). This mismatch between the training and test data can hurt the model's performance. </p> <p><a href="https://aimodels.fyi/papers/arxiv/contrast-continual-multi-source-adaptation-to-dynamic" target="_blank" rel="noopener noreferrer">The authors' approach, MeTA</a>, aims to address this problem by allowing the model to adapt to the target domain during test time, without having to retrain the entire model. The key idea is to leverage multiple source domains to guide the adaptation process, rather than relying on a single source.</p> <p>The authors show that MeTA can significantly improve model performance on two challenging benchmark datasets, where the test data differs from the training data in various ways. They also break down the different components of their approach to understand what's driving the performance improvements.</p> <p>Overall, MeTA provides an effective way to adapt models to new environments without the need for costly retraining, which could have important practical applications in real-world machine learning deployments.</p> <h2> <a name="key-findings" href="#key-findings"> </a> Key Findings </h2> <ul> <li><a href="https://aimodels.fyi/papers/arxiv/contrast-continual-multi-source-adaptation-to-dynamic" target="_blank" rel="noopener noreferrer">MeTA can improve model performance on test data that differs from the training data, across two different benchmark datasets.</a></li> <li>The ability to leverage multiple source domains during test time adaptation is a key factor in MeTA's success.</li> <li>The authors' ablation study provides insights into the importance of different components of their approach, such as contrastive loss and the use of a reference model.</li> </ul> <h2> <a name="technical-explanation" href="#technical-explanation"> </a> Technical Explanation </h2> <p>The core idea behind MeTA is to leverage multiple source domains during the test-time adaptation process, rather than relying on a single source. This allows the model to learn more robust adaptations that can generalize better to the target domain.</p> <p>Specifically, MeTA works as follows:</p> <ol> <li>The model is first trained on the multiple source domains.</li> <li>During test time, for each target example, MeTA extracts features from the target example and computes a weighted combination of the source features.</li> <li>This combined source feature is then used to compute a contrastive loss against the target example, encouraging the model to adapt its representation to better match the target.</li> <li>Finally, the adapted representation is used for the final prediction on the target example.</li> </ol> <p>The authors evaluate MeTA on two benchmark datasets, Office-Home and CIFAR-10C, where the test data differs from the training data in various ways (e.g., different visual styles, corruptions, etc.). They show that MeTA can significantly outperform baseline approaches that do not leverage the multiple source domains.</p> <p>The authors also perform an ablation study to understand the importance of different components of their approach, such as the contrastive loss and the use of a reference model. This provides useful insights into the key factors driving MeTA's performance improvements.</p> <h2> <a name="implications-for-the-field" href="#implications-for-the-field"> </a> Implications for the Field </h2> <p>This work introduces an effective approach for adapting models to new environments without the need for costly retraining. By leveraging multiple source domains during test-time adaptation, MeTA can learn more robust adaptations that generalize better to target domains.</p> <p>This could have important practical applications in real-world machine learning deployments, where models often need to be used in environments that differ from the training data. MeTA provides a way to address this challenge without the need for extensive fine-tuning or retraining, which can be time-consuming and resource-intensive.</p> <h2> <a name="critical-analysis" href="#critical-analysis"> </a> Critical Analysis </h2> <p>The authors do a thorough job of evaluating MeTA on relevant benchmark datasets and providing a detailed technical explanation of their approach. The ablation study also offers valuable insights into the key components driving the method's performance.</p> <p>One potential limitation is that the authors only evaluate MeTA on computer vision tasks, and it's unclear how well the approach would generalize to other domains, such as natural language processing or speech recognition. Further evaluation on a wider range of tasks would help establish the broader applicability of the method.</p> <p>Additionally, while MeTA demonstrates significant performance improvements over baseline approaches, it would be interesting to see how it compares to other state-of-the-art techniques for domain adaptation, such as adversarial training or meta-learning. A more comprehensive comparison to the broader literature could help position MeTA's contributions more clearly.</p> <h2> <a name="conclusion" href="#conclusion"> </a> Conclusion </h2> <p><a href="https://aimodels.fyi/papers/arxiv/contrast-continual-multi-source-adaptation-to-dynamic" target="_blank" rel="noopener noreferrer">This paper introduces MeTA, a novel approach for adapting machine learning models to target domains that differ from the training data.</a> By leveraging multiple source domains during test-time adaptation, MeTA can learn more robust adaptations that generalize better to the target.</p> <p>The authors' evaluation on two benchmark datasets and their ablation study provide strong evidence for the effectiveness of their approach. If extended to a wider range of domains, MeTA could have significant practical implications for deploying machine learning models in real-world environments where the test data differs from the training data.</p> <p><strong>If you enjoyed this summary, consider joining <a href="https://aimodels.fyi" target="_blank" rel="noopener noreferrer">AImodels.fyi</a> or following me on <a href="https://twitter.com/mikeyoung44" target="_blank" rel="noopener noreferrer">Twitter</a> for more AI and machine learning content.</strong></p>`,
		duration: "2 Minutes Read",
		author: {
			name: "Someone Else",
			image: ""
		}
	})
}
export const useDataStore = defineStore('data', {
	state: () => ({
		event_list: [
			{
				image: basePath + 'img/portfolios/1.jpg',
				slug: "hello-business"
			},
			{
				image: basePath + 'img/portfolios/2.png',
				slug: "autonomous-industries"
			},
			{
				image: basePath + 'img/portfolios/3.png',
				slug: "impact-summmit"
			},
			{
				image: basePath + 'img/portfolios/4.png',
				slug: "ne-miral"
			},
			{
				image: basePath + 'img/portfolios/5.png',
				slug: "sam-altman"
			},
			{
				image: basePath + 'img/portfolios/6.png',
				slug: "resolve"
			},
			{
				image: basePath + 'img/portfolios/7.png',
				slug: "ahlan-modi"
			},
			{
				image: basePath + 'img/portfolios/8.png',
				slug: "finance-week"
			},
			{
				image: basePath + 'img/portfolios/9.png',
				slug: "smb-awards"
			},
			{
				image: basePath + 'img/portfolios/10.png',
				slug: "business-forum"
			},
			{
				image: basePath + 'img/portfolios/11.png',
				slug: "transition-era"
			},
			{
				image: basePath + 'img/portfolios/12.png',
				slug: "agwa"
			},
			{
				image: basePath + 'img/portfolios/13.png',
				slug: "suhoor"
			},
			{
				image: basePath + 'img/portfolios/14.png',
				slug: "future-of-finance"
			},
			{
				image: basePath + 'img/portfolios/15.png',
				slug: "think-film"
			},
			{
				image: basePath + 'img/portfolios/1.jpg',
				slug: "hello-business-1"
			},
		],
		blog_list
	}),
	actions: {
		getEvent (slug) {
			const event = this.event_list.find(ev => ev.slug === slug)
			return event || null
		},
		getNextEvent (slug) {
			const event = this.getEvent(slug)
			const index = this.event_list.indexOf(event) + 1

			if (index >= this.event_list.length) {
				return null
			} else {
				return this.event_list[index]
			}
		},
		getPrevEvent (slug) {
			const event = this.getEvent(slug)
			const index = this.event_list.indexOf(event) - 1

			if (index < 0) {
				return null
			} else {
				return this.event_list[index]
			}
		},
		getBlog (slug) {
			const blog = this.blog_list.find(bl => bl.slug === slug)
			return blog || null
		}
	},
	getters: {
		events: s => s.event_list,
		blogs: s => s.blog_list
	}
})