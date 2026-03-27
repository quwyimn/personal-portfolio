import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getProjectBySlug } from '../data/projects'
import trainingProcessImage from '../assets/images/aptos-sybil-detector/process.png'
import confusionMatrixImage from '../assets/images/aptos-sybil-detector/matrix&ROC.png'
import thresholdTuningImage from '../assets/images/aptos-sybil-detector/Precision-Recall.png'
import forcePlotImage from '../assets/images/aptos-sybil-detector/force.png'
import apiSybilImage from '../assets/images/aptos-sybil-detector/demo2.png'
import apiNormalImage from '../assets/images/aptos-sybil-detector/demo1.png'

const quickFacts = [
  'Project Type: Team Project',
  'Recognition: Top 5 Student Project – Aptos Hackathon',
  'My Role: ML Training Pipeline',
]

const overviewParagraphs = [
  'Aptos Sybil Detector is a machine learning project designed to identify suspicious Aptos wallets based on on-chain behavioral patterns. The project addresses a practical challenge in the Web3 ecosystem, where wallet creation is easy, identity is difficult to verify, and reward or airdrop programs can be exploited by wallets that do not represent genuine user activity.',
  'To tackle this problem, the project combines behavioral feature analysis, feature engineering, supervised classification, and prediction workflows to distinguish Sybil wallets from Non-Sybil wallets. Beyond model training, the project also includes evaluation, threshold optimization, explainability, and API-based prediction, making it a practical prototype for wallet screening and early risk detection.',
]

const problemPoints = [
  'The project was created to identify suspicious Aptos wallets that may represent sybil behavior rather than genuine user activity.',
  'In this context, sybil wallets may be created or operated in large numbers to exploit airdrops, farm rewards, inflate user activity, spam on-chain interactions, or manipulate community and token distribution programs.',
  'The core task of the model is to distinguish between normal, trustworthy wallets and suspicious sybil wallets using on-chain behavioral patterns.',
  'This problem is especially important in the Aptos / Web3 ecosystem, where wallet creation is easy, identity is not directly tied to an address, and manual inspection becomes unrealistic at scale.',
]

const roleParagraphs = [
  'This project was developed as part of a team effort to build a complete solution. My primary responsibility was the full machine learning training workflow, including preparing the training-ready dataset, engineering features, training and comparing models, evaluating performance, and building the final prediction pipeline.',
  'Within the team, my contribution focused on turning wallet behavior data into a workable machine learning system that could support suspicious wallet detection in a practical and structured way.',
]

const challengeParagraphs = [
  'One of the biggest challenges in this project was data collection. In practice, many wallets that are publicly reported as suspicious or fake may no longer remain active or traceable on Aptos in a consistent way, which makes it difficult to build a reliable labeled dataset directly from ready-made public sources.',
  'To address this, I first studied the common characteristics of suspicious or sybil wallets through publicly available articles, reports, and discussions about fraudulent wallet behavior. Based on those risk patterns, I then manually examined wallets on the Aptos network using direct on-chain sources, where I could observe real-time wallet information such as transaction count, first and last transaction timing, and other behavioral signals.',
  'Using those observed risk-related characteristics, I created labels for wallets and built a dataset that could be used for model training. This approach allowed me to transform limited public evidence into a practical supervised learning setup for wallet classification.',
]

const dataAndFeaturePoints = [
  'Used an Aptos wallet behavior dataset containing labeled Sybil and Non-Sybil wallets, with on-chain behavioral features such as wallet age, balance, transaction activity, contract interactions, address interactions, and transaction timing patterns.',
  'Built both raw and engineered features, including success rate, new contract rate, balance per transaction, transaction day of week, month, and day of month.',
  'Applied cyclical encoding for time-related variables such as active hour, weekday, and month to better represent periodic behavioral patterns.',
]

const modelingPoints = [
  'Trained and compared multiple classifiers, including Random Forest, XGBoost, and LightGBM.',
  'The final selected solution was a LightGBM-based classification pipeline combined with preprocessing, feature selection, and SMOTE for class balancing.',
  'Built a prediction workflow that returns probability-based outputs for Sybil versus Normal classification.',
]

const metricCards = [
  { label: 'Best CV AUC', value: '0.8412' },
  { label: 'Test Accuracy', value: '93.75%' },
  { label: 'Test AUC-ROC', value: '0.9744' },
  { label: 'Sybil Precision', value: '75.00%' },
  { label: 'Sybil Recall', value: '100.00%' },
  { label: 'Sybil F1-score', value: '0.8571' },
]

const evaluationParagraphs = [
  'During model selection, LightGBM achieved the best cross-validated AUC of 0.8412, making it the strongest candidate among the compared classifiers.',
  'On the independent test set, the final pipeline reached 93.75% Accuracy and 0.9744 AUC-ROC. For the Sybil class specifically, the model achieved 75.00% Precision, 100.00% Recall, and an F1-score of 0.8571.',
  'In practice, these results suggest that the model can serve as an effective screening tool. On the test set, it identified all Sybil wallets while producing only one false positive, which makes it useful for filtering suspicious wallets before manual review or reward eligibility decisions.',
]

const thresholdParagraphs = [
  'Threshold tuning showed that the best F1-score was obtained at a decision threshold of approximately 0.5931 instead of the default 0.5.',
  'This result is important because it demonstrates that the decision threshold does not have to remain fixed at 0.5. A better threshold can produce a more balanced trade-off between precision, recall, and F1-score depending on the application goal.',
]

const explainabilityParagraphs = [
  'To make individual predictions easier to interpret, the project also included a model explainability view using force-plot-style visualization.',
  'This helps show why a wallet is predicted as Sybil or Non-Sybil by highlighting which features push the prediction higher or lower for a specific case.',
]

const apiDemoParagraphs = [
  'The project also included a prediction API prototype for scoring new wallets. By sending a wallet address to the predict endpoint, the system returns the wallet address, predicted label, sybil probability, binary sybil flag, and confidence score.',
  'This makes the project more practical than a notebook-only experiment, because the trained model can be used as a lightweight screening service for wallet assessment and early review support.',
]

const limitationParagraphs = [
  'A key limitation is that the reported independent test result comes from a small test set of only 16 samples, including just 3 Sybil wallets.',
  'For that reason, the result should be presented as a promising prototype outcome rather than final proof of production-level robustness.',
  'The model should be further validated and potentially retrained on larger and more diverse on-chain datasets to confirm generalization.',
]

const takeawayParagraphs = [
  'This project reflects my ability to combine technical machine learning work with analytical problem-solving. Beyond training models, I approached the problem by studying suspicious wallet behavior, identifying practical risk patterns, transforming them into usable features and labels, and building a structured ML pipeline for classification.',
  'What makes this project meaningful to me is not only the model performance, but also the process of turning an unclear real-world problem into a workable AI solution through data reasoning, feature design, evaluation, and interpretation.',
]

function ImageLightbox({ preview, onClose }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (preview) {
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [preview, onClose])

  if (!preview) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900 p-3 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-slate-950/80 px-3 py-2 text-sm font-semibold text-white transition hover:border-sky-400 hover:text-sky-300"
        >
          Close
        </button>

        <img
          src={preview.image}
          alt={preview.alt}
          className="max-h-[82vh] w-full object-contain"
        />

        <div className="border-t border-white/10 px-4 py-3">
          <p className="text-sm text-slate-300">{preview.alt}</p>
        </div>
      </div>
    </div>
  )
}

function SectionBlock({ title, children }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
      <h2 className="mb-5 text-2xl font-semibold text-white md:text-3xl">{title}</h2>
      <div className="space-y-4 text-slate-300">{children}</div>
    </section>
  )
}

function ClickableImage({ image, alt, onPreview, className = '', imageClassName = '' }) {
  return (
    <button
      type="button"
      onClick={() => onPreview({ image, alt })}
      className={`group relative block w-full text-left ${className}`}
    >
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950 p-3 transition duration-300 group-hover:border-sky-400/40">
        <img
          src={image}
          alt={alt}
          className={`w-full cursor-zoom-in object-contain transition duration-300 group-hover:scale-[1.01] ${imageClassName}`}
        />

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-2xl bg-slate-950/0 opacity-0 transition duration-300 group-hover:bg-slate-950/35 group-hover:opacity-100">
          <span className="rounded-full border border-white/15 bg-slate-950/80 px-4 py-2 text-sm font-semibold text-white shadow-lg">
            Click to enlarge
          </span>
        </div>
      </div>
    </button>
  )
}

function FigureBlock({
  image,
  alt,
  caption,
  description,
  reverse = false,
  onPreview,
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 md:p-6">
      <div className="grid items-center gap-6 md:grid-cols-2">
        <div className={reverse ? 'md:order-2' : ''}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-sky-400">
            {caption}
          </p>
          <p className="leading-7 text-slate-300">{description}</p>
        </div>

        <div className={reverse ? 'md:order-1' : ''}>
          <ClickableImage
            image={image}
            alt={alt}
            onPreview={onPreview}
            imageClassName="h-[220px] md:h-[260px]"
          />
        </div>
      </div>
    </div>
  )
}

function AptosProject() {
  const project = getProjectBySlug('aptos-sybil-detector')
  const [preview, setPreview] = useState(null)

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">Project not found.</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <ImageLightbox preview={preview} onClose={() => setPreview(null)} />

      <div className="border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-6 py-5">
          <Link to="/" className="text-sm font-medium text-sky-400 hover:text-sky-300">
            ← Back to Home
          </Link>
        </div>
      </div>

      <main className="px-6 py-16">
        <div className="mx-auto max-w-6xl space-y-10">
          <section className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
                Blockchain AI / Wallet Classification
              </p>

              <h1 className="mb-5 text-4xl font-bold leading-tight text-white md:text-6xl">
                Aptos Sybil Detector
              </h1>

              <p className="text-lg leading-8 text-slate-300">
                A team-based machine learning project recognized as a Top 5 Student Project at
                the Aptos Hackathon. Aptos Sybil Detector was designed to identify suspicious
                wallets through on-chain behavior analysis, combining feature engineering, model
                evaluation, explainability, and API-based prediction for practical wallet
                screening.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {quickFacts.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-sky-400/20 bg-sky-500/10 px-4 py-4 text-sm font-medium text-sky-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <ClickableImage
                image={project.coverImage}
                alt={project.coverAlt}
                onPreview={setPreview}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 p-4 shadow-2xl shadow-sky-950/40"
                imageClassName="h-[260px] md:h-[300px]"
              />
            </div>
          </section>

          <SectionBlock title="Project Overview">
            {overviewParagraphs.map((paragraph) => (
              <p key={paragraph} className="leading-8">
                {paragraph}
              </p>
            ))}
          </SectionBlock>

          <SectionBlock title="Problem Background">
            <ul className="space-y-3">
              {problemPoints.map((item) => (
                <li key={item} className="leading-8">
                  • {item}
                </li>
              ))}
            </ul>
          </SectionBlock>

          <SectionBlock title="My Role and Contribution">
            {roleParagraphs.map((paragraph) => (
              <p key={paragraph} className="leading-8">
                {paragraph}
              </p>
            ))}
          </SectionBlock>

          <SectionBlock title="Challenge and Solution">
            {challengeParagraphs.map((paragraph) => (
              <p key={paragraph} className="leading-8">
                {paragraph}
              </p>
            ))}
          </SectionBlock>

          <SectionBlock title="Development Process">
            <p className="leading-8">
              This diagram summarizes the overall development pipeline of the project, from data
              collection and preprocessing to model selection, training, evaluation, and
              deployment-oriented usage.
            </p>

            <FigureBlock
              image={trainingProcessImage}
              alt="Aptos training process"
              caption="Figure 1. End-to-end model training process for the Aptos Sybil Detector."
              description="This workflow presents the full machine learning pipeline used in the project, including data preparation, preprocessing, model comparison, evaluation, and deployment-oriented prediction design."
              onPreview={setPreview}
            />
          </SectionBlock>

          <SectionBlock title="Modeling Approach">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-semibold text-white">Data and Feature Design</h3>
                <ul className="space-y-3">
                  {dataAndFeaturePoints.map((item) => (
                    <li key={item} className="leading-8">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-semibold text-white">Model Training</h3>
                <ul className="space-y-3">
                  {modelingPoints.map((item) => (
                    <li key={item} className="leading-8">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionBlock>

          <SectionBlock title="Evaluation Results">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {metricCards.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-slate-900 p-5"
                >
                  <p className="mb-2 text-sm uppercase tracking-[0.18em] text-sky-400">
                    {metric.label}
                  </p>
                  <p className="text-2xl font-bold text-white">{metric.value}</p>
                </div>
              ))}
            </div>

            {evaluationParagraphs.map((paragraph) => (
              <p key={paragraph} className="leading-8">
                {paragraph}
              </p>
            ))}

            <FigureBlock
              image={confusionMatrixImage}
              alt="Confusion matrix and classification report"
              caption="Figure 2. Confusion matrix and classification report of the final model on the independent test set."
              description="This result shows how many wallets were classified correctly and incorrectly across both classes, with a particular focus on Sybil detection performance and the balance between false positives and false negatives."
              reverse
              onPreview={setPreview}
            />
          </SectionBlock>

          <SectionBlock title="Threshold Optimization">
            {thresholdParagraphs.map((paragraph) => (
              <p key={paragraph} className="leading-8">
                {paragraph}
              </p>
            ))}

            <FigureBlock
              image={thresholdTuningImage}
              alt="Threshold tuning"
              caption="Figure 3. Precision, recall, and F1-score across decision thresholds."
              description="This analysis shows that the decision threshold does not have to remain at the default value of 0.5. In this project, a threshold of approximately 0.59 provided a better balance between precision, recall, and F1-score."
              onPreview={setPreview}
            />
          </SectionBlock>

          <SectionBlock title="Model Explainability">
            {explainabilityParagraphs.map((paragraph) => (
              <p key={paragraph} className="leading-8">
                {paragraph}
              </p>
            ))}

            <FigureBlock
              image={forcePlotImage}
              alt="Force plot explanation"
              caption="Figure 4. Force plot for explaining wallet-level predictions."
              description="This visualization explains why the model predicts a wallet as Sybil or Non-Sybil by showing which features push the prediction higher or lower for a specific case."
              reverse
              onPreview={setPreview}
            />
          </SectionBlock>

          <SectionBlock title="Prediction API Demo">
            {apiDemoParagraphs.map((paragraph) => (
              <p key={paragraph} className="leading-8">
                {paragraph}
              </p>
            ))}

            <div className="space-y-6">
              <FigureBlock
                image={apiSybilImage}
                alt="Postman Sybil prediction demo"
                caption="Figure 5. Postman demo of the /predict API returning a Sybil classification result."
                description="This example shows how the API returns a wallet-level prediction with supporting fields such as sybil probability, binary classification, and confidence score for a wallet predicted as Sybil."
                onPreview={setPreview}
              />

              <FigureBlock
                image={apiNormalImage}
                alt="Postman Normal prediction demo"
                caption="Figure 6. Postman demo of the /predict API returning a Normal classification result."
                description="This example shows that the same prediction workflow can also classify wallets as Normal, while keeping a consistent API response structure for practical screening usage."
                reverse
                onPreview={setPreview}
              />
            </div>
          </SectionBlock>

          <SectionBlock title="Limitations">
            <ul className="space-y-3">
              {limitationParagraphs.map((item) => (
                <li key={item} className="leading-8">
                  • {item}
                </li>
              ))}
            </ul>
          </SectionBlock>

          <SectionBlock title="Key Takeaway">
            {takeawayParagraphs.map((paragraph) => (
              <p key={paragraph} className="leading-8">
                {paragraph}
              </p>
            ))}
          </SectionBlock>
        </div>
      </main>
    </div>
  )
}

export default AptosProject