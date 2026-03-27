import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getSavedLanguage, saveLanguage } from '../utils/language'
import { getProjectBySlug } from '../data/projects'
import logisticsFlowImage from '../assets/images/Vyn-logistics/flow.png'
import logisticsFormulaImage from '../assets/images/Vyn-logistics/recipe.png'
import logisticsProcessOverviewImage from '../assets/images/Vyn-logistics/process.jpg'
import logisticsEntityOverviewImage from '../assets/images/Vyn-logistics/entity.png'
import logisticsDemoDashboardImage from '../assets/images/Vyn-logistics/demo1.png'
import logisticsDemoTableImage from '../assets/images/Vyn-logistics/demo2.png'
const content = {
  en: {
    back: '← Back to Home',
    close: 'Close',
    clickToEnlarge: 'Click to enlarge',
    category: 'Logistics AI / Bottleneck Detection',
    heroTitle: 'VYN Logistics AI',
    heroDescription:
      'A team-based logistics AI project praised at the Lotus Hackathon for its practical and promising approach. VYN Logistics AI was designed to detect operational bottlenecks by learning normal execution behavior, identifying abnormal process patterns, and transforming complex logistics event data into structured risk outputs for decision support.',
    quickFacts: [
      'Project Type: Team Project',
      'Recognition: Praised at the Lotus Hackathon',
      'My Role: Full Model Training',
    ],
    sections: {
      overview: 'Project Overview',
      context: 'Project Context',
      problem: 'Operational Problem',
      role: 'My Role and Contribution',
      data: 'Data Foundation',
      features: 'Feature Engineering and Preprocessing',
      methodology: 'AI Methodology',
      workflow: 'System Workflow',
      formula: 'Output Generation Logic',
      processOverview: 'Process-Level Overview',
      entityOverview: 'Entity-Level Overview',
      dashboard: 'Dashboard Demo',
      caseView: 'Case-Level Result View',
      outputs: 'Outputs and Practical Value',
      challenge: 'Challenge and Limitation',
      deployment: 'Deployment and Demo Status',
      takeaway: 'Key Takeaway',
    },
    overviewParagraphs: [
      'VYN Logistics AI is an AI-based logistics bottleneck detection system designed to analyze execution data and identify abnormal process behavior across complex operational workflows. The project was built to support earlier detection of logistics bottlenecks by learning normal execution patterns and highlighting cases where delays or operational disruption are most likely occurring.',
      'The system focuses on major logistics workflows including trucking, warehouse fulfillment, and customs clearance. Instead of relying on fixed business rules or manual labels, it combines process anomaly detection with contextual entity intelligence to produce explainable risk outputs, process-level summaries, and dashboard-ready results for decision support.',
    ],
    contextParagraphs: [
      'The project was developed in the context of logistics and supply chain operations, where repeated multi-step workflows generate large amounts of execution data but operational bottlenecks are often discovered too late.',
      'Because different companies and workflows behave differently, a fixed-rule monitoring approach is often too rigid. A more adaptive AI-based system is needed to learn execution patterns, detect abnormal behavior, and support earlier intervention.',
      'The intended users of the system include operations managers, logistics supervisors, analysts, dispatch and coordination teams, and decision-makers who need a unified view of process health and abnormal execution risk.',
    ],
    operationalProblemPoints: [
      'The system is designed to detect abnormal process executions and bottlenecks in logistics workflows without relying on manual labels or fixed business rules.',
      'Delays are often discovered too late, especially when bottlenecks are hidden inside multi-step execution logs.',
      'Different workflows behave differently across trucking, warehouse, and customs operations, making static monitoring difficult to generalize.',
      'Manual review is slow, inconsistent, and difficult to scale, while operational teams often lack a unified risk view across processes.',
      'Before the system, businesses often had to rely on experience-based inspection or simple threshold monitoring, which could miss subtle bottlenecks and weak early warning signals.',
    ],
    roleParagraphs: [
      'This project was developed as a team effort, and my main contribution focused on the full model training pipeline. I was responsible for training-oriented AI work, including structuring model-ready logic, preparing data for training, designing training signals, and building the methodology that turns raw operational data into risk-oriented model outputs.',
      'My work centered specifically on the machine learning side of the project rather than the full product stack. This means the project page should present me primarily as the person responsible for the AI methodology, model training direction, and the logic behind transforming logistics execution data into meaningful detection outputs.',
    ],
    dataParagraphs: [
      'The core input of the system is event-based logistics execution data, and in the current unified design it can also be packaged as an integrated CSV/XLSX file containing both process-event rows and entity rows.',
      'The process-event side represents how a logistics case is executed in real operations, including what process it belongs to, which steps were performed, and how long those steps took. The entity side adds contextual information related to driver, fleet, and operations conditions that may contribute to risk.',
    ],
    dataPoints: [
      'Input structure includes process-event rows, entity rows, and a unified integrated file for validation and analysis.',
      'Important fields include process_code, case_id, step_code, start_time, end_time, row_group, scenario_id, entity_type, and record_id.',
      'Entity-side feature columns may include driver, fleet, and operations metrics that provide additional context beyond process timing alone.',
    ],
    featureTitle1: 'Feature Design',
    featureTitle2: 'Preprocessing Steps',
    featurePoints: [
      'The system builds both process-side and entity-side signals, then combines them into a final risk view.',
      'Process branch features include step duration features, total process time, max / mean / std step duration, step count, missing-step indicators, repeated-step indicators, and process-specific aggregates such as transit delay, pick-pack time, inspection delay, staging wait, and rework rate.',
      'Entity branch features include driver signals such as experience, accident history, on-time behavior, and mileage efficiency; fleet signals such as truck age, maintenance cost, downtime, and maintenance frequency; and operations signals such as detention hours, delay hours, real MPG, and actual distance.',
    ],
    preprocessingPoints: [
      'Validate schema and required columns.',
      'Split integrated input into process rows and entity rows.',
      'Group records by case and process.',
      'Build feature vectors for each branch.',
      'Normalize or scale inputs where required.',
      'Score process branch and entity branch separately.',
      'Fuse scores into a final risk logic.',
    ],
    methodologyParagraphs: [
      'The core process AI uses Isolation Forest–based anomaly detection for process bottleneck detection. This approach was chosen because it is suitable for unsupervised anomaly detection, does not require manual labels, and works well with multivariate operational data.',
      'Alongside the process anomaly model, the system includes separate entity-oriented models for driver, fleet, and operations signals. These models do not replace the process anomaly logic, but provide contextual information that helps refine the final risk interpretation.',
      'The final methodology is therefore a hybrid architecture: process anomaly detection forms the core, while entity-side intelligence contributes additional contextual risk to improve the usefulness of the final output.',
    ],
    workflowIntro:
      'The end-to-end workflow of the system follows a unified path: input file → validation → split into process branch and entity branch → process scoring + entity scoring → fusion → aggregation → JSON output / dashboard view.',
    formulaParagraphs: [
      'The process branch produces a process-side risk signal, while the entity branch produces an entity-side risk signal. These two components are then fused into a final risk representation.',
      'In the current design, the fusion rule follows a weighted logic where process-side risk receives the larger contribution: final_risk_score = 0.7 × process_risk_score + 0.3 × entity_risk_score.',
      'If entity context is not available, the final score can fall back to the process-side result. This design keeps the process anomaly layer as the core engine while still allowing contextual refinement when supporting entity information exists.',
    ],
    processOverviewIntro:
      'At the process level, the system supports comparative monitoring across the three main logistics workflows. This includes risk trend analysis over time, helping users understand how trucking, warehouse, and customs behavior evolves across different periods.',
    entityOverviewIntro:
      'In addition to process anomaly detection, the project design also supports entity-oriented intelligence. This allows the system to surface contextual risk signals related to operational segments and supporting contributors beyond the raw process sequence alone.',
    dashboardIntro:
      'The project design supports dashboard-ready outputs that can be used for monitoring, comparison, and operational review. These views help translate model outputs into a more accessible interface for analysts and decision-makers.',
    caseViewIntro:
      'At the detailed level, the system can also present case-oriented monitoring results. These outputs help users review execution behavior, compare risk intensity, and identify which cases should be prioritized for further analysis.',
    outputParagraphs: [
      'The system returns both a shared overall output and process-specific outputs. Depending on the endpoint or design version, case-level outputs can include risk_score, anomaly_score, is_anomaly, top problematic step information, and step deviation indicators.',
      'For the summarized design, the output centers on overall_result and process_results. The overall block contains shared metrics, while the process-level blocks summarize case count, average risk, anomaly count, anomaly rate, average anomaly score, and process timing-related indicators.',
      'This output structure is intentionally designed to support both API consumption and dashboard visualization, making the project suitable for monitoring, analysis, and decision support.',
    ],
    resultsParagraphs: [
      'The project successfully defines a unified architecture capable of ingesting mixed logistics process data, detecting abnormal behavior across multiple process types, and summarizing risk at both overall and process-specific levels.',
      'In practice, the system helps logistics teams move from manual, reactive monitoring to a more structured and data-driven bottleneck detection workflow.',
      'It supports earlier bottleneck detection, process health monitoring across multiple logistics workflows, abnormal case review, process comparison over time, and more explainable operational decision support.',
    ],
    challengeParagraphs: [
      'The most difficult part of the project was data. Real logistics execution logs are often difficult to obtain because operational process data is close to confidential in many real-world environments.',
      'To address this, I collected data from multiple public sources such as Kaggle and other available datasets, then built integrated and synthesized training-oriented data structures that could support the intended methodology.',
      'This challenge was important because without suitable process-style data, it would be difficult to design, train, and evaluate a realistic logistics AI pipeline. Solving the data problem was therefore a core part of making the project feasible.',
    ],
    limitationPoints: [
      'The current system is still closer to a prototype or advanced demo than a fully production-hardened logistics platform.',
      'Without production-scale validation, long-term drift monitoring, and more diverse real operational data, the model may not yet generalize perfectly across all logistics environments.',
      'Future improvement should include more real operational data, stronger production validation, better retraining and drift monitoring, tighter alignment between documentation and implementation, and stronger normalization for user-uploaded files.',
    ],
    deploymentParagraphs: [
      'The project has already been deployed as a complete demo system. This includes both the main application interface and the dedicated model-serving API.',
      'This deployment helps demonstrate that the project is not limited to model experimentation alone, but can also be connected to a usable system flow for interface-based monitoring and API-based inference.',
    ],
    deploymentLinks: [
      {
        label: 'Main Project Demo',
        href: 'https://vyn-logistic-vfbt.onrender.com/?fbclid=IwY2xjawQzBKFleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEeppNPDKTyL97GJgFMRlL9nrb7tWa5zW9HA_MMEmvs2IuGQDoJbMLS12NM9XE_aem_0JpyaCYJzy_FG4nxKcdU4g',
      },
      {
        label: 'Model API Docs',
        href: 'https://vyn-logistic-model.onrender.com/docs?fbclid=IwY2xjawQzBMpleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEecHFcQmPgV0c4C2iUVJlhoX2wrHdHrS_z9d-d0Tptp6g1R4jbBxSl7LTCntU_aem_PfCmJSMtorHShAM3jBY43Q',
      },
    ],
    takeawayParagraphs: [
      'This project highlights not only my machine learning implementation ability, but also my system thinking and problem-solving mindset. It shows that I can take a complex real-world operational problem and transform it into a structured AI workflow with meaningful outputs.',
      'More importantly, it reflects my ability to turn difficult, abstract, or data-constrained problems into something that can still be modeled, reasoned about, and implemented in a practical way. That is the strongest message I want this project to communicate.',
    ],
    figures: {
      workflow: {
        caption: 'Figure 1. Detailed operational workflow of the Logistics AI model.',
        description:
          'This diagram shows the full operational flow of the system, starting from integrated input validation, then splitting data into process and entity branches, running parallel scoring, fusing the results, and finally producing JSON-ready outputs for dashboard or API consumption.',
      },
      formula: {
        caption: 'Figure 2. Formula for generating the output results of the Logistics AI system.',
        description:
          'This figure illustrates how process risk and entity risk are combined into a final case-level risk score, then aggregated separately for trucking, warehouse, and customs to produce summarized process-level outputs.',
      },
      processOverview: {
        caption:
          'Figure 3. Process-level monthly average risk overview across trucking, warehouse, and customs.',
        description:
          'This view provides a summarized comparison of the three process models by showing how average risk changes over time for each major logistics workflow.',
      },
      entityOverview: {
        caption: 'Figure 4. Entity-level overview of supporting intelligence signals.',
        description:
          'This view represents the entity-side perspective of the system, where supporting risk signals can be summarized as segment intelligence, comparative indicators, and context-driven monitoring visuals.',
      },
      dashboard: {
        caption: 'Figure 5. Dashboard demo showing segment intelligence and visual monitoring outputs.',
        description:
          'This interface-style view demonstrates how model outputs can be visualized as risk indicators, segment summaries, and monitoring panels for practical operational insight.',
      },
      caseView: {
        caption: 'Figure 6. Case-level result view with risk-oriented monitoring outputs.',
        description:
          'This table-style output demonstrates how individual records or cases can be presented with measurable risk indicators, making the system easier to use for review, filtering, and follow-up decisions.',
      },
    },
  },

  vi: {
    back: '← Quay về trang chủ',
    close: 'Đóng',
    clickToEnlarge: 'Bấm để phóng to',
    category: 'AI Logistics / Phát hiện điểm nghẽn',
    heroTitle: 'VYN Logistics AI',
    heroDescription:
      'Một dự án AI trong logistics được thực hiện theo nhóm và được khen ngợi tại Lotus Hackathon nhờ hướng tiếp cận thực tiễn và nhiều tiềm năng. VYN Logistics AI được xây dựng để phát hiện điểm nghẽn vận hành bằng cách học hành vi thực thi bình thường, xác định các mẫu quy trình bất thường và chuyển đổi dữ liệu logistics phức tạp thành các đầu ra rủi ro có cấu trúc để hỗ trợ ra quyết định.',
    quickFacts: [
      'Loại dự án: Làm theo nhóm',
      'Ghi nhận: Được khen ngợi tại Lotus Hackathon',
      'Vai trò của mình: Huấn luyện mô hình đầy đủ',
    ],
    sections: {
      overview: 'Tổng quan dự án',
      context: 'Bối cảnh dự án',
      problem: 'Bài toán vận hành',
      role: 'Vai trò và đóng góp',
      data: 'Nền tảng dữ liệu',
      features: 'Đặc trưng và tiền xử lý',
      methodology: 'Phương pháp AI',
      workflow: 'Luồng hệ thống',
      formula: 'Logic tạo đầu ra',
      processOverview: 'Tổng quan theo quy trình',
      entityOverview: 'Tổng quan theo entity',
      dashboard: 'Demo dashboard',
      caseView: 'Kết quả ở mức case',
      outputs: 'Đầu ra và giá trị thực tiễn',
      challenge: 'Khó khăn và hạn chế',
      deployment: 'Triển khai và demo',
      takeaway: 'Điểm nổi bật rút ra',
    },
    overviewParagraphs: [
      'VYN Logistics AI là một hệ thống AI phát hiện điểm nghẽn trong logistics, được xây dựng để phân tích dữ liệu thực thi và nhận diện các hành vi bất thường trong những quy trình vận hành phức tạp. Dự án được tạo ra nhằm hỗ trợ phát hiện sớm các bottleneck trong logistics bằng cách học các mẫu thực thi bình thường và làm nổi bật những trường hợp có khả năng chậm trễ hoặc gián đoạn vận hành.',
      'Hệ thống tập trung vào các quy trình logistics chính như trucking, warehouse fulfillment và customs clearance. Thay vì dựa vào các business rule cố định hoặc nhãn thủ công, hệ thống kết hợp phát hiện bất thường ở mức process với thông tin ngữ cảnh từ entity để tạo ra các đầu ra rủi ro có thể giải thích, các bản tóm tắt theo quy trình và các kết quả sẵn sàng cho dashboard nhằm hỗ trợ ra quyết định.',
    ],
    contextParagraphs: [
      'Dự án được phát triển trong bối cảnh logistics và vận hành chuỗi cung ứng, nơi các quy trình nhiều bước được lặp lại tạo ra lượng lớn dữ liệu thực thi nhưng các điểm nghẽn lại thường được phát hiện quá muộn.',
      'Do mỗi doanh nghiệp và mỗi quy trình có hành vi khác nhau, một cách giám sát dựa trên rule cố định thường quá cứng nhắc. Vì vậy cần một hệ thống AI thích ứng hơn để học các mẫu thực thi, phát hiện hành vi bất thường và hỗ trợ can thiệp sớm.',
      'Những người có thể sử dụng hệ thống này gồm quản lý vận hành, giám sát logistics, analyst, các nhóm điều phối và những người ra quyết định cần có một góc nhìn thống nhất về sức khỏe quy trình và rủi ro bất thường.',
    ],
    operationalProblemPoints: [
      'Hệ thống được thiết kế để phát hiện các lần thực thi bất thường và điểm nghẽn trong quy trình logistics mà không cần phụ thuộc vào nhãn thủ công hay business rule cố định.',
      'Các sự chậm trễ thường bị phát hiện quá muộn, đặc biệt khi điểm nghẽn bị ẩn bên trong các log thực thi nhiều bước.',
      'Mỗi workflow lại có hành vi khác nhau giữa trucking, warehouse và customs, khiến việc giám sát tĩnh rất khó tổng quát hóa.',
      'Việc review thủ công vừa chậm, vừa thiếu nhất quán, vừa khó mở rộng, trong khi đội vận hành thường không có một góc nhìn rủi ro thống nhất giữa các quy trình.',
      'Trước khi có hệ thống, doanh nghiệp thường phải dựa vào kinh nghiệm hoặc các ngưỡng giám sát đơn giản, nên dễ bỏ sót những bottleneck tinh vi và các tín hiệu cảnh báo sớm yếu.',
    ],
    roleParagraphs: [
      'Dự án này được thực hiện theo nhóm, và phần đóng góp chính của mình tập trung vào toàn bộ pipeline huấn luyện mô hình. Mình phụ trách phần AI theo hướng training, bao gồm cấu trúc logic để đưa dữ liệu về dạng model-ready, chuẩn bị dữ liệu cho quá trình train, thiết kế tín hiệu huấn luyện và xây dựng phương pháp biến dữ liệu vận hành thô thành các đầu ra rủi ro có ý nghĩa.',
      'Công việc của mình tập trung rõ ràng vào phía machine learning của dự án hơn là toàn bộ product stack. Vì vậy, trang project này nên thể hiện mình như người chịu trách nhiệm chính cho phương pháp AI, định hướng huấn luyện mô hình và logic chuyển dữ liệu thực thi logistics thành các đầu ra phục vụ phát hiện.',
    ],
    dataParagraphs: [
      'Đầu vào cốt lõi của hệ thống là dữ liệu thực thi logistics theo dạng event-based, và trong thiết kế hợp nhất hiện tại nó cũng có thể được đóng gói dưới dạng file integrated CSV/XLSX chứa cả process-event rows lẫn entity rows.',
      'Phần process-event thể hiện cách một case logistics được thực thi trong thực tế, bao gồm nó thuộc process nào, các step nào đã diễn ra và mỗi step mất bao lâu. Phần entity bổ sung thêm thông tin ngữ cảnh liên quan đến driver, fleet và operations có thể góp phần tạo ra rủi ro.',
    ],
    dataPoints: [
      'Cấu trúc đầu vào bao gồm process-event rows, entity rows và một file integrated dùng cho validation và analysis.',
      'Các trường quan trọng gồm process_code, case_id, step_code, start_time, end_time, row_group, scenario_id, entity_type và record_id.',
      'Phần feature phía entity có thể gồm các chỉ số liên quan đến driver, fleet và operations để bổ sung ngữ cảnh ngoài thông tin timing của process.',
    ],
    featureTitle1: 'Thiết kế đặc trưng',
    featureTitle2: 'Các bước tiền xử lý',
    featurePoints: [
      'Hệ thống xây dựng cả tín hiệu ở phía process và phía entity, sau đó kết hợp chúng thành một góc nhìn rủi ro cuối cùng.',
      'Các feature của nhánh process bao gồm duration của step, tổng thời gian process, max / mean / std step duration, số lượng step, cờ thiếu step, cờ lặp step và các aggregate chuyên biệt theo quy trình như transit delay, pick-pack time, inspection delay, staging wait và rework rate.',
      'Các feature của nhánh entity bao gồm tín hiệu từ driver như kinh nghiệm, lịch sử tai nạn, hành vi đúng hạn và hiệu suất nhiên liệu; tín hiệu từ fleet như tuổi xe, chi phí bảo trì, downtime và tần suất bảo trì; cùng các tín hiệu từ operations như detention hours, delay hours, real MPG và actual distance.',
    ],
    preprocessingPoints: [
      'Kiểm tra schema và các cột bắt buộc.',
      'Tách integrated input thành process rows và entity rows.',
      'Nhóm bản ghi theo case và process.',
      'Xây dựng vector đặc trưng cho từng nhánh.',
      'Chuẩn hóa hoặc scale đầu vào nếu cần.',
      'Tính điểm riêng cho nhánh process và nhánh entity.',
      'Kết hợp các điểm thành logic rủi ro cuối cùng.',
    ],
    methodologyParagraphs: [
      'Phần process AI cốt lõi của hệ thống sử dụng anomaly detection dựa trên Isolation Forest để phát hiện điểm nghẽn trong quy trình. Cách tiếp cận này được chọn vì phù hợp với bài toán unsupervised anomaly detection, không cần nhãn thủ công và hoạt động tốt với dữ liệu vận hành đa biến.',
      'Song song với mô hình anomaly cho process, hệ thống còn bao gồm các mô hình định hướng entity riêng cho driver, fleet và operations. Những mô hình này không thay thế logic anomaly của process, mà bổ sung thông tin ngữ cảnh giúp tinh chỉnh cách diễn giải rủi ro cuối cùng.',
      'Vì vậy, phương pháp cuối cùng là một kiến trúc lai: anomaly detection ở mức process đóng vai trò lõi, còn entity-side intelligence đóng góp thêm rủi ro ngữ cảnh để tăng tính hữu ích cho đầu ra cuối cùng.',
    ],
    workflowIntro:
      'Luồng đầu-cuối của hệ thống đi theo một đường thống nhất: file đầu vào → validation → tách thành process branch và entity branch → process scoring + entity scoring → fusion → aggregation → JSON output / dashboard view.',
    formulaParagraphs: [
      'Nhánh process tạo ra tín hiệu rủi ro phía process, còn nhánh entity tạo ra tín hiệu rủi ro phía entity. Hai thành phần này sau đó được kết hợp thành biểu diễn rủi ro cuối cùng.',
      'Trong thiết kế hiện tại, quy tắc fusion dùng logic có trọng số, trong đó rủi ro phía process có trọng số lớn hơn: final_risk_score = 0.7 × process_risk_score + 0.3 × entity_risk_score.',
      'Nếu không có thông tin entity, điểm cuối cùng có thể fallback về kết quả từ phía process. Thiết kế này giữ anomaly layer ở mức process là bộ máy lõi, đồng thời vẫn cho phép tinh chỉnh theo ngữ cảnh khi có thêm dữ liệu entity hỗ trợ.',
    ],
    processOverviewIntro:
      'Ở mức process, hệ thống hỗ trợ theo dõi so sánh giữa ba workflow logistics chính. Điều này bao gồm cả phân tích xu hướng rủi ro theo thời gian, giúp người dùng hiểu cách trucking, warehouse và customs thay đổi qua từng giai đoạn.',
    entityOverviewIntro:
      'Ngoài anomaly detection ở phía process, thiết kế dự án còn hỗ trợ intelligence theo hướng entity. Điều này cho phép hệ thống bộc lộ các tín hiệu rủi ro ngữ cảnh liên quan đến các nhóm vận hành và những yếu tố đóng góp hỗ trợ vượt ra ngoài chuỗi process thô.',
    dashboardIntro:
      'Thiết kế dự án hỗ trợ các đầu ra sẵn sàng cho dashboard để phục vụ giám sát, so sánh và review vận hành. Những góc nhìn này giúp chuyển các output của mô hình thành giao diện dễ tiếp cận hơn cho analyst và người ra quyết định.',
    caseViewIntro:
      'Ở mức chi tiết hơn, hệ thống cũng có thể hiển thị các kết quả theo từng case. Những đầu ra này giúp người dùng xem xét hành vi thực thi, so sánh cường độ rủi ro và xác định các trường hợp cần được ưu tiên phân tích thêm.',
    outputParagraphs: [
      'Hệ thống trả về cả một đầu ra chung và các đầu ra riêng theo process. Tùy theo endpoint hoặc phiên bản thiết kế, các đầu ra ở mức case có thể bao gồm risk_score, anomaly_score, is_anomaly, thông tin về step gây vấn đề nhất và các chỉ số step deviation.',
      'Trong thiết kế dạng tóm tắt, đầu ra xoay quanh overall_result và process_results. Khối overall chứa các chỉ số chung, còn các khối theo process tóm tắt case count, average risk, anomaly count, anomaly rate, average anomaly score và các chỉ số liên quan đến thời gian quy trình.',
      'Cấu trúc đầu ra này được thiết kế có chủ đích để hỗ trợ cả việc tiêu thụ qua API lẫn trực quan hóa trên dashboard, khiến dự án phù hợp cho giám sát, phân tích và hỗ trợ ra quyết định.',
    ],
    resultsParagraphs: [
      'Dự án đã xác định thành công một kiến trúc thống nhất có khả năng nhận dữ liệu logistics hỗn hợp, phát hiện hành vi bất thường trên nhiều loại process khác nhau và tóm tắt rủi ro ở cả mức overall lẫn mức process.',
      'Trong thực tế, hệ thống giúp các đội logistics chuyển từ cách giám sát thủ công, phản ứng muộn sang một quy trình phát hiện bottleneck có cấu trúc và dựa trên dữ liệu hơn.',
      'Nó hỗ trợ phát hiện sớm bottleneck, theo dõi sức khỏe quy trình trên nhiều workflow logistics, review các case bất thường, so sánh process theo thời gian và hỗ trợ ra quyết định vận hành theo cách có thể giải thích hơn.',
    ],
    challengeParagraphs: [
      'Phần khó nhất của dự án là dữ liệu. Các log thực thi logistics thực tế thường rất khó có được vì dữ liệu vận hành gần như là thông tin nhạy cảm hoặc tiệm cận mức bảo mật trong nhiều môi trường thực tế.',
      'Để xử lý điều đó, mình đã thu thập dữ liệu từ nhiều nguồn công khai như Kaggle và các dataset có sẵn khác, sau đó xây dựng các cấu trúc dữ liệu tổng hợp và tổng hợp giả lập phục vụ cho việc huấn luyện theo đúng phương pháp đã định.',
      'Khó khăn này rất quan trọng vì nếu không có dữ liệu theo kiểu process đủ phù hợp, sẽ rất khó để thiết kế, train và đánh giá một pipeline AI logistics có tính thực tế. Giải quyết được bài toán dữ liệu vì thế là một phần cốt lõi giúp dự án khả thi.',
    ],
    limitationPoints: [
      'Hệ thống hiện tại vẫn gần với một prototype hoặc advanced demo hơn là một nền tảng logistics production-hardened hoàn chỉnh.',
      'Nếu chưa có validation ở quy mô production, drift monitoring dài hạn và dữ liệu vận hành thực đa dạng hơn, mô hình có thể chưa khái quát hóa hoàn hảo cho mọi môi trường logistics.',
      'Hướng cải thiện tiếp theo nên bao gồm nhiều dữ liệu vận hành thực hơn, validation production mạnh hơn, retraining và drift monitoring tốt hơn, sự thống nhất chặt hơn giữa tài liệu và triển khai, cũng như chuẩn hóa đầu vào mạnh hơn cho file do người dùng tải lên.',
    ],
    deploymentParagraphs: [
      'Dự án đã được triển khai dưới dạng một hệ thống demo hoàn chỉnh. Điều này bao gồm cả giao diện ứng dụng chính lẫn model-serving API riêng biệt.',
      'Việc triển khai này giúp chứng minh rằng dự án không chỉ dừng ở mức thử nghiệm mô hình, mà còn có thể được kết nối với một luồng hệ thống có thể sử dụng cho giám sát qua giao diện và suy luận qua API.',
    ],
    deploymentLinks: [
      {
        label: 'Demo dự án chính',
        href: 'https://vyn-logistic-vfbt.onrender.com/?fbclid=IwY2xjawQzBKFleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEeppNPDKTyL97GJgFMRlL9nrb7tWa5zW9HA_MMEmvs2IuGQDoJbMLS12NM9XE_aem_0JpyaCYJzy_FG4nxKcdU4g',
      },
      {
        label: 'Tài liệu API mô hình',
        href: 'https://vyn-logistic-model.onrender.com/docs?fbclid=IwY2xjawQzBMpleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEecHFcQmPgV0c4C2iUVJlhoX2wrHdHrS_z9d-d0Tptp6g1R4jbBxSl7LTCntU_aem_PfCmJSMtorHShAM3jBY43Q',
      },
    ],
    takeawayParagraphs: [
      'Dự án này không chỉ thể hiện khả năng triển khai machine learning của mình, mà còn cho thấy tư duy hệ thống và cách mình giải quyết vấn đề. Nó chứng minh rằng mình có thể biến một bài toán vận hành thực tế phức tạp thành một workflow AI có cấu trúc với các đầu ra có ý nghĩa.',
      'Quan trọng hơn, nó phản ánh khả năng của mình trong việc biến những bài toán khó, trừu tượng hoặc bị hạn chế dữ liệu thành thứ vẫn có thể được mô hình hóa, lý giải và triển khai theo cách thực tiễn. Đây chính là thông điệp mạnh nhất mà mình muốn dự án này truyền tải.',
    ],
    figures: {
      workflow: {
        caption: 'Hình 1. Luồng vận hành chi tiết của mô hình Logistics AI.',
        description:
          'Sơ đồ này thể hiện toàn bộ luồng vận hành của hệ thống, bắt đầu từ validation của input tích hợp, sau đó tách dữ liệu thành process branch và entity branch, chạy scoring song song, fusion kết quả và cuối cùng tạo ra JSON output sẵn sàng cho dashboard hoặc API.',
      },
      formula: {
        caption: 'Hình 2. Công thức tạo ra kết quả đầu ra của hệ thống Logistics AI.',
        description:
          'Hình này mô tả cách rủi ro phía process và rủi ro phía entity được kết hợp thành điểm rủi ro cuối ở mức case, sau đó tổng hợp riêng cho trucking, warehouse và customs để tạo ra các kết quả tóm tắt ở mức process.',
      },
      processOverview: {
        caption: 'Hình 3. Tổng quan rủi ro trung bình theo tháng ở mức process cho trucking, warehouse và customs.',
        description:
          'Góc nhìn này cung cấp một so sánh tổng quát giữa ba process model bằng cách thể hiện cách average risk thay đổi theo thời gian cho từng workflow logistics chính.',
      },
      entityOverview: {
        caption: 'Hình 4. Tổng quan các tín hiệu intelligence hỗ trợ ở mức entity.',
        description:
          'Góc nhìn này đại diện cho phía entity của hệ thống, nơi các tín hiệu rủi ro hỗ trợ có thể được tóm tắt dưới dạng segment intelligence, comparative indicators và các hình thức giám sát theo ngữ cảnh.',
      },
      dashboard: {
        caption: 'Hình 5. Demo dashboard hiển thị segment intelligence và các đầu ra trực quan phục vụ giám sát.',
        description:
          'Giao diện này minh họa cách các output của mô hình có thể được trực quan hóa thành risk indicators, segment summaries và các monitoring panels để hỗ trợ insight vận hành thực tiễn.',
      },
      caseView: {
        caption: 'Hình 6. Kết quả ở mức case với các đầu ra giám sát định hướng rủi ro.',
        description:
          'Bảng đầu ra này cho thấy cách các record hoặc case riêng lẻ có thể được hiển thị cùng các chỉ số rủi ro đo lường được, giúp hệ thống dễ sử dụng hơn cho việc review, lọc và follow-up.',
      },
    },
  },
}

function ImageLightbox({ preview, onClose, closeText }) {
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
          {closeText}
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

function ClickableImage({
  image,
  alt,
  onPreview,
  imageClassName = '',
  clickToEnlargeText,
  className = '',
}) {
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
            {clickToEnlargeText}
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
  clickToEnlargeText,
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
            clickToEnlargeText={clickToEnlargeText}
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
  const [language, setLanguage] = useState(getSavedLanguage())
  const t = content[language]

  useEffect(() => {
  saveLanguage(language)
}, [language])

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">Project not found.</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <ImageLightbox preview={preview} onClose={() => setPreview(null)} closeText={t.close} />

      <div className="border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link to="/" className="text-sm font-medium text-sky-400 hover:text-sky-300">
            {t.back}
          </Link>

          <div className="flex overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`px-3 py-2 text-sm font-semibold transition ${
                language === 'en'
                  ? 'bg-sky-500 text-white'
                  : 'text-slate-300 hover:text-sky-300'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage('vi')}
              className={`px-3 py-2 text-sm font-semibold transition ${
                language === 'vi'
                  ? 'bg-sky-500 text-white'
                  : 'text-slate-300 hover:text-sky-300'
              }`}
            >
              VI
            </button>
          </div>
        </div>
      </div>

      <main className="px-6 py-16">
        <div className="mx-auto max-w-6xl space-y-10">
          <section className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
                {t.category}
              </p>

              <h1 className="mb-5 text-4xl font-bold leading-tight text-white md:text-6xl">
                {t.heroTitle}
              </h1>

              <p className="text-lg leading-8 text-slate-300">{t.heroDescription}</p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {t.quickFacts.map((item) => (
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
                clickToEnlargeText={t.clickToEnlarge}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 p-4 shadow-2xl shadow-sky-950/40"
                imageClassName="h-[260px] md:h-[300px]"
              />
            </div>
          </section>

          <SectionBlock title={t.sections.overview}>
            {t.overviewParagraphs.map((paragraph) => (
              <p key={paragraph} className="leading-8">
                {paragraph}
              </p>
            ))}
          </SectionBlock>

          <SectionBlock title={t.sections.context}>
            {t.contextParagraphs.map((paragraph) => (
              <p key={paragraph} className="leading-8">
                {paragraph}
              </p>
            ))}
          </SectionBlock>

          <SectionBlock title={t.sections.problem}>
            <ul className="space-y-3">
              {t.operationalProblemPoints.map((item) => (
                <li key={item} className="leading-8">
                  • {item}
                </li>
              ))}
            </ul>
          </SectionBlock>

          <SectionBlock title={t.sections.role}>
            {t.roleParagraphs.map((paragraph) => (
              <p key={paragraph} className="leading-8">
                {paragraph}
              </p>
            ))}
          </SectionBlock>

          <SectionBlock title={t.sections.data}>
            {t.dataParagraphs.map((paragraph) => (
              <p key={paragraph} className="leading-8">
                {paragraph}
              </p>
            ))}

            <ul className="space-y-3">
              {t.dataPoints.map((item) => (
                <li key={item} className="leading-8">
                  • {item}
                </li>
              ))}
            </ul>
          </SectionBlock>

          <SectionBlock title={t.sections.features}>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-semibold text-white">{t.featureTitle1}</h3>
                <ul className="space-y-3">
                  {t.featurePoints.map((item) => (
                    <li key={item} className="leading-8">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-semibold text-white">{t.featureTitle2}</h3>
                <ul className="space-y-3">
                  {t.preprocessingPoints.map((item) => (
                    <li key={item} className="leading-8">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionBlock>

          <SectionBlock title={t.sections.methodology}>
            {t.methodologyParagraphs.map((paragraph) => (
              <p key={paragraph} className="leading-8">
                {paragraph}
              </p>
            ))}
          </SectionBlock>

          <SectionBlock title={t.sections.workflow}>
            <p className="leading-8">{t.workflowIntro}</p>

            <FigureBlock
              image={logisticsFlowImage}
              alt="Detailed operational workflow of the Logistics AI model"
              caption={t.figures.workflow.caption}
              description={t.figures.workflow.description}
              onPreview={setPreview}
              clickToEnlargeText={t.clickToEnlarge}
            />
          </SectionBlock>

          <SectionBlock title={t.sections.formula}>
            {t.formulaParagraphs.map((paragraph) => (
              <p key={paragraph} className="leading-8">
                {paragraph}
              </p>
            ))}

            <FigureBlock
              image={logisticsFormulaImage}
              alt="Formula for generating the output results of the Logistics AI system"
              caption={t.figures.formula.caption}
              description={t.figures.formula.description}
              reverse
              onPreview={setPreview}
              clickToEnlargeText={t.clickToEnlarge}
            />
          </SectionBlock>

          <SectionBlock title={t.sections.processOverview}>
            <p className="leading-8">{t.processOverviewIntro}</p>

            <FigureBlock
              image={logisticsProcessOverviewImage}
              alt="Monthly average risk by process"
              caption={t.figures.processOverview.caption}
              description={t.figures.processOverview.description}
              onPreview={setPreview}
              clickToEnlargeText={t.clickToEnlarge}
            />
          </SectionBlock>

          <SectionBlock title={t.sections.entityOverview}>
            <p className="leading-8">{t.entityOverviewIntro}</p>

            <FigureBlock
              image={logisticsEntityOverviewImage}
              alt="Entity-level intelligence overview"
              caption={t.figures.entityOverview.caption}
              description={t.figures.entityOverview.description}
              reverse
              onPreview={setPreview}
              clickToEnlargeText={t.clickToEnlarge}
            />
          </SectionBlock>

          <SectionBlock title={t.sections.dashboard}>
            <p className="leading-8">{t.dashboardIntro}</p>

            <FigureBlock
              image={logisticsDemoDashboardImage}
              alt="Logistics AI dashboard demo"
              caption={t.figures.dashboard.caption}
              description={t.figures.dashboard.description}
              onPreview={setPreview}
              clickToEnlargeText={t.clickToEnlarge}
            />
          </SectionBlock>

          <SectionBlock title={t.sections.caseView}>
            <p className="leading-8">{t.caseViewIntro}</p>

            <FigureBlock
              image={logisticsDemoTableImage}
              alt="Case-level result table"
              caption={t.figures.caseView.caption}
              description={t.figures.caseView.description}
              reverse
              onPreview={setPreview}
              clickToEnlargeText={t.clickToEnlarge}
            />
          </SectionBlock>

          <SectionBlock title={t.sections.outputs}>
            {t.outputParagraphs.map((paragraph) => (
              <p key={paragraph} className="leading-8">
                {paragraph}
              </p>
            ))}

            {t.resultsParagraphs.map((paragraph) => (
              <p key={paragraph} className="leading-8">
                {paragraph}
              </p>
            ))}
          </SectionBlock>

          <SectionBlock title={t.sections.challenge}>
            {t.challengeParagraphs.map((paragraph) => (
              <p key={paragraph} className="leading-8">
                {paragraph}
              </p>
            ))}

            <ul className="space-y-3 pt-2">
              {t.limitationPoints.map((item) => (
                <li key={item} className="leading-8">
                  • {item}
                </li>
              ))}
            </ul>
          </SectionBlock>

          <SectionBlock title={t.sections.deployment}>
            {t.deploymentParagraphs.map((paragraph) => (
              <p key={paragraph} className="leading-8">
                {paragraph}
              </p>
            ))}

            <div className="grid gap-4 pt-2 md:grid-cols-2">
              {t.deploymentLinks.map((link) => (
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

          <SectionBlock title={t.sections.takeaway}>
            {t.takeawayParagraphs.map((paragraph) => (
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