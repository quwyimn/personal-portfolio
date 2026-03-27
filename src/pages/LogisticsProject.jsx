import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getProjectBySlug } from '../data/projects'
import logisticsFlowImage from '../assets/images/Vyn-logistics/flow.png'
import logisticsFormulaImage from '../assets/images/Vyn-logistics/recipe.png'
import logisticsProcessOverviewImage from '../assets/images/Vyn-logistics/process.jpg'
import logisticsEntityOverviewImage from '../assets/images/Vyn-logistics/entity.png'
import logisticsDemoDashboardImage from '../assets/images/Vyn-logistics/demo1.png'
import logisticsDemoTableImage from '../assets/images/Vyn-logistics/demo2.png'

const quickFacts = [
  'Project Type: Team Project',
  'Recognition: Praised at the Lotus Hackathon',
  'My Role: Full Model Training',
]

const overviewParagraphs = [
  'VYN Logistics AI is an AI-based logistics bottleneck detection system designed to analyze execution data and identify abnormal process behavior across complex operational workflows. The project was built to support earlier detection of logistics bottlenecks by learning normal execution patterns and highlighting cases where delays or operational disruption are most likely occurring.',
  'The system focuses on major logistics workflows including trucking, warehouse fulfillment, and customs clearance. Instead of relying on fixed business rules or manual labels, it combines process anomaly detection with contextual entity intelligence to produce explainable risk outputs, process-level summaries, and dashboard-ready results for decision support.',
]

const contextParagraphs = [
  'The project was developed in the context of logistics and supply chain operations, where repeated multi-step workflows generate large amounts of execution data but operational bottlenecks are often discovered too late.',
  'Because different companies and workflows behave differently, a fixed-rule monitoring approach is often too rigid. A more adaptive AI-based system is needed to learn execution patterns, detect abnormal behavior, and support earlier intervention.',
  'The intended users of the system include operations managers, logistics supervisors, analysts, dispatch and coordination teams, and decision-makers who need a unified view of process health and abnormal execution risk.',
]

const operationalProblemPoints = [
  'The system is designed to detect abnormal process executions and bottlenecks in logistics workflows without relying on manual labels or fixed business rules.',
  'Delays are often discovered too late, especially when bottlenecks are hidden inside multi-step execution logs.',
  'Different workflows behave differently across trucking, warehouse, and customs operations, making static monitoring difficult to generalize.',
  'Manual review is slow, inconsistent, and difficult to scale, while operational teams often lack a unified risk view across processes.',
  'Before the system, businesses often had to rely on experience-based inspection or simple threshold monitoring, which could miss subtle bottlenecks and weak early warning signals.',
]

const roleParagraphs = [
  'This project was developed as a team effort, and my main contribution focused on the full model training pipeline. I was responsible for training-oriented AI work, including structuring model-ready logic, preparing data for training, designing training signals, and building the methodology that turns raw operational data into risk-oriented model outputs.',
  'My work centered specifically on the machine learning side of the project rather than the full product stack. This means the project page should present me primarily as the person responsible for the AI methodology, model training direction, and the logic behind transforming logistics execution data into meaningful detection outputs.',
]

const dataParagraphs = [
  'The core input of the system is event-based logistics execution data, and in the current unified design it can also be packaged as an integrated CSV/XLSX file containing both process-event rows and entity rows.',
  'The process-event side represents how a logistics case is executed in real operations, including what process it belongs to, which steps were performed, and how long those steps took. The entity side adds contextual information related to driver, fleet, and operations conditions that may contribute to risk.',
]

const dataPoints = [
  'Input structure includes process-event rows, entity rows, and a unified integrated file for validation and analysis.',
  'Important fields include process_code, case_id, step_code, start_time, end_time, row_group, scenario_id, entity_type, and record_id.',
  'Entity-side feature columns may include driver, fleet, and operations metrics that provide additional context beyond process timing alone.',
]

const featurePoints = [
  'The system builds both process-side and entity-side signals, then combines them into a final risk view.',
  'Process branch features include step duration features, total process time, max / mean / std step duration, step count, missing-step indicators, repeated-step indicators, and process-specific aggregates such as transit delay, pick-pack time, inspection delay, staging wait, and rework rate.',
  'Entity branch features include driver signals such as experience, accident history, on-time behavior, and mileage efficiency; fleet signals such as truck age, maintenance cost, downtime, and maintenance frequency; and operations signals such as detention hours, delay hours, real MPG, and actual distance.',
]

const preprocessingPoints = [
  'Validate schema and required columns.',
  'Split integrated input into process rows and entity rows.',
  'Group records by case and process.',
  'Build feature vectors for each branch.',
  'Normalize or scale inputs where required.',
  'Score process branch and entity branch separately.',
  'Fuse scores into a final risk logic.',
]

const methodologyParagraphs = [
  'The core process AI uses Isolation Forest–based anomaly detection for process bottleneck detection. This approach was chosen because it is suitable for unsupervised anomaly detection, does not require manual labels, and works well with multivariate operational data.',
  'Alongside the process anomaly model, the system includes separate entity-oriented models for driver, fleet, and operations signals. These models do not replace the process anomaly logic, but provide contextual information that helps refine the final risk interpretation.',
  'The final methodology is therefore a hybrid architecture: process anomaly detection forms the core, while entity-side intelligence contributes additional contextual risk to improve the usefulness of the final output.',
]

const formulaParagraphs = [
  'The process branch produces a process-side risk signal, while the entity branch produces an entity-side risk signal. These two components are then fused into a final risk representation.',
  'In the current design, the fusion rule follows a weighted logic where process-side risk receives the larger contribution: final_risk_score = 0.7 × process_risk_score + 0.3 × entity_risk_score.',
  'If entity context is not available, the final score can fall back to the process-side result. This design keeps the process anomaly layer as the core engine while still allowing contextual refinement when supporting entity information exists.',
]

const outputParagraphs = [
  'The system returns both a shared overall output and process-specific outputs. Depending on the endpoint or design version, case-level outputs can include risk_score, anomaly_score, is_anomaly, top problematic step information, and step deviation indicators.',
  'For the summarized design, the output centers on overall_result and process_results. The overall block contains shared metrics, while the process-level blocks summarize case count, average risk, anomaly count, anomaly rate, average anomaly score, and process timing-related indicators.',
  'This output structure is intentionally designed to support both API consumption and dashboard visualization, making the project suitable for monitoring, analysis, and decision support.',
]

const resultsParagraphs = [
  'The project successfully defines a unified architecture capable of ingesting mixed logistics process data, detecting abnormal behavior across multiple process types, and summarizing risk at both overall and process-specific levels.',
  'In practice, the system helps logistics teams move from manual, reactive monitoring to a more structured and data-driven bottleneck detection workflow.',
  'It supports earlier bottleneck detection, process health monitoring across multiple logistics workflows, abnormal case review, process comparison over time, and more explainable operational decision support.',
]

const challengeParagraphs = [
  'The most difficult part of the project was data. Real logistics execution logs are often difficult to obtain because operational process data is close to confidential in many real-world environments.',
  'To address this, I collected data from multiple public sources such as Kaggle and other available datasets, then built integrated and synthesized training-oriented data structures that could support the intended methodology.',
  'This challenge was important because without suitable process-style data, it would be difficult to design, train, and evaluate a realistic logistics AI pipeline. Solving the data problem was therefore a core part of making the project feasible.',
]

const limitationPoints = [
  'The current system is still closer to a prototype or advanced demo than a fully production-hardened logistics platform.',
  'Without production-scale validation, long-term drift monitoring, and more diverse real operational data, the model may not yet generalize perfectly across all logistics environments.',
  'Future improvement should include more real operational data, stronger production validation, better retraining and drift monitoring, tighter alignment between documentation and implementation, and stronger normalization for user-uploaded files.',
]

const deploymentParagraphs = [
  'The project has already been deployed as a complete demo system. This includes both the main application interface and the dedicated model-serving API.',
  'This deployment helps demonstrate that the project is not limited to model experimentation alone, but can also be connected to a usable system flow for interface-based monitoring and API-based inference.',
]

const deploymentLinks = [
  {
    label: 'Main Project Demo',
    href: 'https://vyn-logistic-vfbt.onrender.com/?fbclid=IwY2xjawQzBKFleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEeppNPDKTyL97GJgFMRlL9nrb7tWa5zW9HA_MMEmvs2IuGQDoJbMLS12NM9XE_aem_0JpyaCYJzy_FG4nxKcdU4g',
  },
  {
    label: 'Model API Docs',
    href: 'https://vyn-logistic-model.onrender.com/docs?fbclid=IwY2xjawQzBMpleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEecHFcQmPgV0c4C2iUVJlhoX2wrHdHrS_z9d-d0Tptp6g1R4jbBxSl7LTCntU_aem_PfCmJSMtorHShAM3jBY43Q',
  },
]

const takeawayParagraphs = [
  'This project highlights not only my machine learning implementation ability, but also my system thinking and problem-solving mindset. It shows that I can take a complex real-world operational problem and transform it into a structured AI workflow with meaningful outputs.',
  'More importantly, it reflects my ability to turn difficult, abstract, or data-constrained problems into something that can still be modeled, reasoned about, and implemented in a practical way. That is the strongest message I want this project to communicate.',
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

function LogisticsProject() {
  const project = getProjectBySlug('vyn-logistics')
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
                Logistics AI / Bottleneck Detection
              </p>

              <h1 className="mb-5 text-4xl font-bold leading-tight text-white md:text-6xl">
                VYN Logistics AI
              </h1>

              <p className="text-lg leading-8 text-slate-300">
                A team-based logistics AI project praised at the Lotus Hackathon for its
                practical and promising approach. VYN Logistics AI was designed to detect
                operational bottlenecks by learning normal execution behavior, identifying
                abnormal process patterns, and transforming complex logistics event data into
                structured risk outputs for decision support.
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

          <SectionBlock title="Project Context">
            {contextParagraphs.map((paragraph) => (
              <p key={paragraph} className="leading-8">
                {paragraph}
              </p>
            ))}
          </SectionBlock>

          <SectionBlock title="Operational Problem">
            <ul className="space-y-3">
              {operationalProblemPoints.map((item) => (
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

          <SectionBlock title="Data Foundation">
            {dataParagraphs.map((paragraph) => (
              <p key={paragraph} className="leading-8">
                {paragraph}
              </p>
            ))}

            <ul className="space-y-3">
              {dataPoints.map((item) => (
                <li key={item} className="leading-8">
                  • {item}
                </li>
              ))}
            </ul>
          </SectionBlock>

          <SectionBlock title="Feature Engineering and Preprocessing">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-semibold text-white">Feature Design</h3>
                <ul className="space-y-3">
                  {featurePoints.map((item) => (
                    <li key={item} className="leading-8">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-semibold text-white">Preprocessing Steps</h3>
                <ul className="space-y-3">
                  {preprocessingPoints.map((item) => (
                    <li key={item} className="leading-8">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionBlock>

          <SectionBlock title="AI Methodology">
            {methodologyParagraphs.map((paragraph) => (
              <p key={paragraph} className="leading-8">
                {paragraph}
              </p>
            ))}
          </SectionBlock>

          <SectionBlock title="System Workflow">
            <p className="leading-8">
              The end-to-end workflow of the system follows a unified path: input file →
              validation → split into process branch and entity branch → process scoring +
              entity scoring → fusion → aggregation → JSON output / dashboard view.
            </p>

            <FigureBlock
              image={logisticsFlowImage}
              alt="Detailed operational workflow of the Logistics AI model"
              caption="Figure 1. Detailed operational workflow of the Logistics AI model."
              description="This diagram shows the full operational flow of the system, starting from integrated input validation, then splitting data into process and entity branches, running parallel scoring, fusing the results, and finally producing JSON-ready outputs for dashboard or API consumption."
              onPreview={setPreview}
            />
          </SectionBlock>

          <SectionBlock title="Output Generation Logic">
            {formulaParagraphs.map((paragraph) => (
              <p key={paragraph} className="leading-8">
                {paragraph}
              </p>
            ))}

            <FigureBlock
              image={logisticsFormulaImage}
              alt="Formula for generating the output results of the Logistics AI system"
              caption="Figure 2. Formula for generating the output results of the Logistics AI system."
              description="This figure illustrates how process risk and entity risk are combined into a final case-level risk score, then aggregated separately for trucking, warehouse, and customs to produce summarized process-level outputs."
              reverse
              onPreview={setPreview}
            />
          </SectionBlock>

          <SectionBlock title="Process-Level Overview">
            <p className="leading-8">
              At the process level, the system supports comparative monitoring across the three
              main logistics workflows. This includes risk trend analysis over time, helping users
              understand how trucking, warehouse, and customs behavior evolves across different
              periods.
            </p>

            <FigureBlock
              image={logisticsProcessOverviewImage}
              alt="Monthly average risk by process"
              caption="Figure 3. Process-level monthly average risk overview across trucking, warehouse, and customs."
              description="This view provides a summarized comparison of the three process models by showing how average risk changes over time for each major logistics workflow."
              onPreview={setPreview}
            />
          </SectionBlock>

          <SectionBlock title="Entity-Level Overview">
            <p className="leading-8">
              In addition to process anomaly detection, the project design also supports
              entity-oriented intelligence. This allows the system to surface contextual risk
              signals related to operational segments and supporting contributors beyond the raw
              process sequence alone.
            </p>

            <FigureBlock
              image={logisticsEntityOverviewImage}
              alt="Entity-level intelligence overview"
              caption="Figure 4. Entity-level overview of supporting intelligence signals."
              description="This view represents the entity-side perspective of the system, where supporting risk signals can be summarized as segment intelligence, comparative indicators, and context-driven monitoring visuals."
              reverse
              onPreview={setPreview}
            />
          </SectionBlock>

          <SectionBlock title="Dashboard Demo">
            <p className="leading-8">
              The project design supports dashboard-ready outputs that can be used for monitoring,
              comparison, and operational review. These views help translate model outputs into a
              more accessible interface for analysts and decision-makers.
            </p>

            <FigureBlock
              image={logisticsDemoDashboardImage}
              alt="Logistics AI dashboard demo"
              caption="Figure 5. Dashboard demo showing segment intelligence and visual monitoring outputs."
              description="This interface-style view demonstrates how model outputs can be visualized as risk indicators, segment summaries, and monitoring panels for practical operational insight."
              onPreview={setPreview}
            />
          </SectionBlock>

          <SectionBlock title="Case-Level Result View">
            <p className="leading-8">
              At the detailed level, the system can also present case-oriented monitoring results.
              These outputs help users review execution behavior, compare risk intensity, and
              identify which cases should be prioritized for further analysis.
            </p>

            <FigureBlock
              image={logisticsDemoTableImage}
              alt="Case-level result table"
              caption="Figure 6. Case-level result view with risk-oriented monitoring outputs."
              description="This table-style output demonstrates how individual records or cases can be presented with measurable risk indicators, making the system easier to use for review, filtering, and follow-up decisions."
              reverse
              onPreview={setPreview}
            />
          </SectionBlock>

          <SectionBlock title="Outputs and Practical Value">
            {outputParagraphs.map((paragraph) => (
              <p key={paragraph} className="leading-8">
                {paragraph}
              </p>
            ))}

            {resultsParagraphs.map((paragraph) => (
              <p key={paragraph} className="leading-8">
                {paragraph}
              </p>
            ))}
          </SectionBlock>

          <SectionBlock title="Challenge and Limitation">
            {challengeParagraphs.map((paragraph) => (
              <p key={paragraph} className="leading-8">
                {paragraph}
              </p>
            ))}

            <ul className="space-y-3 pt-2">
              {limitationPoints.map((item) => (
                <li key={item} className="leading-8">
                  • {item}
                </li>
              ))}
            </ul>
          </SectionBlock>

          <SectionBlock title="Deployment and Demo Status">
            {deploymentParagraphs.map((paragraph) => (
              <p key={paragraph} className="leading-8">
                {paragraph}
              </p>
            ))}

            <div className="grid gap-4 pt-2 md:grid-cols-2">
              {deploymentLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-sky-400/20 bg-sky-500/10 px-5 py-5 text-sky-200 transition hover:border-sky-400/40 hover:bg-sky-500/15"
                >
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-sky-400">
                    {link.label}
                  </p>
                  <p className="break-all text-sm leading-7 text-slate-300">{link.href}</p>
                </a>
              ))}
            </div>
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

export default LogisticsProject